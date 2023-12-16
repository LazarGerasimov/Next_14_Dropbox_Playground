import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAkG0-Fe_gPN4-asXKvRfDhF1njTFG243Y",
    authDomain: "dropbox-clone-df98b.firebaseapp.com",
    projectId: "dropbox-clone-df98b",
    storageBucket: "dropbox-clone-df98b.appspot.com",
    messagingSenderId: "521949216516",
    appId: "1:521949216516:web:4dde1e625a302d7211da51"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };