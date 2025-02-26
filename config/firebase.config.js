const Firebase = require('firebase-admin');

const serviceAccount = require('../drive-5d5b5-firebase-adminsdk-fbsvc-11e867829c.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'drive-5d5b5.firebasestorage.app'
})


module.exports = firebase;