document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById('inputVideo')
    const form = document.querySelector("#form-login")

    let referenceImageDescriptor;

    async function loadModels() {
        const MODEL_URL = './models';
        await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);

    }

    async function startVideo() {
        const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        video.srcObject = stream;
    }

    async function loadReferenceImage() {

        const referenceImage = await faceapi.fetchImage('./img/face.jpg'); // Acá conectaremos la base de datos

        const singleResult = await faceapi.detectSingleFace(referenceImage).withFaceLandmarks().withFaceDescriptor();
        console.log(singleResult)
        if (singleResult) {
            referenceImageDescriptor = singleResult.descriptor;
        } else {
            console.error('No se pudo obtener los descriptores de la imagen de referencia');
        }
    }

    async function onPlay() {
        if (video.paused || video.ended || !referenceImageDescriptor) return setTimeout(() => onPlay());
        const minConfidence = 0.5
        const maxDescriptorDistance = 0.6;
        const thresholdForAcceptableMatch = 0.5;
        const options = new faceapi.SsdMobilenetv1Options({ minConfidence });
        const results = await faceapi.detectAllFaces(video, options)
            .withFaceLandmarks()
            .withFaceDescriptors();

        if (results.length > 0) {
            const faceMatcher = new faceapi.FaceMatcher(referenceImageDescriptor, maxDescriptorDistance);
            const bestMatch = faceMatcher.findBestMatch(results[0].descriptor);

            if (bestMatch.distance < thresholdForAcceptableMatch) {
                document.getElementById('status').innerText = '¡Coincidencia encontrada!';
            } else {
                document.getElementById('status').innerText = 'Sin coincidencias';
            }
        }

        setTimeout(() => onPlay());
    }



    loadModels().then(async () => {
        console.log("Todos los modelos están cargados y listos para usar.");
        loadReferenceImage();
        await startVideo();
        await onPlay();
    });
})
