// WebinarContext.jsx
import React, { createContext, useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc
} from 'firebase/firestore';
import { db } from '../firebase';

export const WebinarContext = createContext();

export function WebinarProvider({ children }) {
  const [webinars, setWebinars] = useState([]);

  const webinarCollectionRef = collection(db, 'webinars');

  const loadWebinars = async () => {
    try {
      const data = await getDocs(webinarCollectionRef);
      const formatted = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setWebinars(formatted);
    } catch (err) {
      console.error('Failed to load webinars:', err);
    }
  };

  const addWebinar = async (webinar) => {
    try {
      const docRef = await addDoc(webinarCollectionRef, webinar);
      setWebinars(prev => [...prev, { ...webinar, id: docRef.id }]);
    } catch (err) {
      console.error('Failed to add webinar:', err);
    }
  };

  const deleteWebinar = async (id) => {
    try {
      await deleteDoc(doc(db, 'webinars', id));
      setWebinars(prev => prev.filter(w => w.id !== id));
    } catch (err) {
      console.error('Failed to delete webinar:', err);
    }
  };

  const updateWebinar = async (updated) => {
    try {
      await updateDoc(doc(db, 'webinars', updated.id), updated);
      setWebinars(prev => prev.map(w => (w.id === updated.id ? updated : w)));
    } catch (err) {
      console.error('Failed to update webinar:', err);
    }
  };

  useEffect(() => {
    loadWebinars();
  }, []);

  return (
    <WebinarContext.Provider value={{ webinars, addWebinar, deleteWebinar, updateWebinar }}>
      {children}
    </WebinarContext.Provider>
  );
}
;
