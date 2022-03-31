import { writable } from 'svelte/store';
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';

const app = writable<FirebaseApp>();
const db = writable<Firestore>();
const storage = writable<FirebaseStorage>();

export { app, db, storage };
