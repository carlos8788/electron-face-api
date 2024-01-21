// En preload.js
const { contextBridge } = require('electron');
console.log('first')
contextBridge.exposeInMainWorld('api', {

});
