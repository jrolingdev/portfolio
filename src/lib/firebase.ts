import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
	apiKey: 'AIzaSyAsLK8XE_a-awc9D70JrQ9Tjpn4NBuACDA',
	authDomain: 'portfolio-57551.firebaseapp.com',
	projectId: 'portfolio-57551',
	storageBucket: 'portfolio-57551.appspot.com',
	messagingSenderId: '733718085252',
	appId: '1:733718085252:web:73babce7d1bab2edc3ccd1'
};

const app = initializeApp(config);

const Firestore = getFirestore(app);
const Storage = getStorage(app);

export { Firestore, Storage };
