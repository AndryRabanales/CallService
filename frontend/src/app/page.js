'use client';

import { useEffect } from 'react';
import { db } from '@/app/lib/firebase'; // <-- RUTA CORREGIDA

export default function Home() {
  useEffect(() => {
    // Este código se ejecutará cuando el componente se cargue en el navegador
    console.log("Verificando la conexión con Firestore...");
    try {
      if (db) {
        console.log("✅ Conexión exitosa. Objeto de Firestore:", db);
      } else {
        console.error("❌ El objeto 'db' de Firestore es indefinido.");
      }
    } catch (error) {
      console.error("❌ Error al intentar acceder a Firestore:", error);
    }
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Verificando Conexión con Firebase</h1>
      <p>Abre la consola del navegador para ver el resultado.</p>
      <p>(Presiona F12 o haz clic derecho {'->'} Inspeccionar {'->'} Consola)</p>
    </main>
  );
}