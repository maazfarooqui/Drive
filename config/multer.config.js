const multer = require('multer');
const firebasestorage = require('multer-firebase-storage')
const Firebase = require('firebase-admin');
const serviceAccount = require('../drive-5d5b5-firebase-adminsdk-fbsvc-11e867829c.json')


const storage = firebasestorage({
    credentials: Firebase.credential.cert(serviceAccount),
    bucketName: 'drive-5d5b5.firebasestorage.app',
    unique: true
})

const upload = multer({
    storage: storage
})

module.exports = upload;