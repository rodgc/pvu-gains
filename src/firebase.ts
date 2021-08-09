import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBBBA0o3dQJRKXPF3P968xv_cXrlJi-q5c',
  authDomain: 'plants-vs-undead-tools.firebaseapp.com',
  projectId: 'plants-vs-undead-tools',
  storageBucket: 'plants-vs-undead-tools.appspot.com',
  messagingSenderId: '1086390885681',
  appId: '1:1086390885681:web:47f93f82b9b49f9aff2410',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db
