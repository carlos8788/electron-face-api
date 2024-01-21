const video = document.getElementById('inputVideo');
const canvas = document.getElementById('overlay');

(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    video.srcObject = stream;
})();

async function onPlay() {
    const MODEL_URL = './models';

    await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
    await faceapi.loadFaceLandmarkModel(MODEL_URL)
    await faceapi.loadFaceRecognitionModel(MODEL_URL)
    await faceapi.loadFaceExpressionModel(MODEL_URL)
    // if (video.paused || video.ended) return setTimeout(() => onPlay());
    let fullFaceDescriptions = await faceapi.detectAllFaces(video)
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withFaceExpressions();
    // if (fullFaceDescriptions.length > 0) {
    //     // Asumiendo que solo hay una cara y se toma la primera detección
    //     const expressions = fullFaceDescriptions[0].expressions;
    //     const maxValue = Math.max(...Object.values(expressions));
    //     const emotion = Object.keys(expressions).filter(
    //         item => expressions[item] === maxValue
    //     )[0];

    //     // Si la expresión con mayor valor es una sonrisa, escribe "OK" en algún lugar
    //     if (emotion === 'happy' && maxValue > 0.5) { // Umbral de 0.5, ajustar según sea necesario
    //         document.getElementById('status').innerText = 'Feliz';
    //     } else {
    //         document.getElementById('status').innerText = 'No feliz';
    //     }
    // }
    const dims = faceapi.matchDimensions(canvas, video, true);
    const resizedResults = faceapi.resizeResults(fullFaceDescriptions, dims);

    faceapi.draw.drawDetections(canvas, resizedResults);
    faceapi.draw.drawFaceLandmarks(canvas, resizedResults);
    faceapi.draw.drawFaceExpressions(canvas, resizedResults, 0.05);
    
    requestAnimationFrame(onPlay)
}

