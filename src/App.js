import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'; 

firebase.initializeApp({
  apiKey: "AIzaSyBlyizxiyCaf4WMZqgCCUmyx6dPRzGV-CI",
  authDomain: "anytimeapp-622be.firebaseapp.com",
  databaseURL: "https://anytimeapp-622be-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "anytimeapp-622be",
  storageBucket: "anytimeapp-622be.appspot.com",
  messagingSenderId: "904189972882",
  appId: "1:904189972882:web:6648486cf585818ef7714b",
  measurementId: "G-54EDQGX11H"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
