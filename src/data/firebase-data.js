import {
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";

const collectionName = "students";

export async function getAllStudents() {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
}

export async function addStudent(student) {
  await addDoc(collection(db, collectionName), student);
}

export async function updateStudent(id, field, value) {
  await updateDoc(doc(db, collectionName, id), { [field]: value });
}

export async function deleteStudent(id) {
  await deleteDoc(doc(db, collectionName, id));
}
