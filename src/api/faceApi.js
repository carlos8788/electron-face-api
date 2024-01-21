// const faceapi = require('face-api.js');
// const canvas = require('canvas');

// // Asignar implementaciones de canvas a faceapi
// const { Canvas, Image, ImageData } = canvas;
// faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

// async function detectFaces(imagePath) {
//   // Cargar los modelos
//   await faceapi.nets.ssdMobilenetv1.loadFromDisk('./models');
//   await faceapi.nets.faceLandmark68Net.loadFromDisk('./models');
//   await faceapi.nets.faceRecognitionNet.loadFromDisk('./models');
//   await faceapi.nets.ssdMobilenetv1.loadFromUri('../models');

//   // Cargar la imagen
//   const img = await canvas.loadImage(imagePath);

//   // Detectar rostros y puntos de referencia
//   const detections = await faceapi.detectAllFaces(img).withFaceLandmarks().withFaceDescriptors();

//   console.log(detections);
// }

// // Llamar a la función con el camino de tu imagen
// detectFaces('path/to/your/image.jpg');
