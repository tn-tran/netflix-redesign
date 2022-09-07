// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA20Jo5eykLfnjd2B_itjHM-tojp-PHO98',
	authDomain: 'netflix-clone-8896f.firebaseapp.com',
	databaseURL: '',
	projectId: 'netflix-clone-8896f',
	storageBucket: 'netflix-clone-8896f.appspot.com',
	messagingSenderId: '685590183839',
	appId: '1:685590183839:web:18834b9afef761493c07aa',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
