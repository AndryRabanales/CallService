'use client'; // <-- Es muy importante añadir esto al principio

import { useEffect } from 'react';
import { db } from '../lib/firebase'; // <-- Asegúrate de que la ruta sea correcta

export default function Home() {
  useEffect(() => {
    // Este código se ejecutará cuando el componente se cargue en el navegador
    console.log("Verificando la conexión con Firestore...");
    try {
      console.log("✅ Conexión exitosa. Objeto de Firestore:", db);
    } catch (error) {
      console.error("❌ Error al conectar con Firestore:", error);
    }
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Verificando Conexión con Firebase</h1>
      <p>Abre la consola del navegador para ver el resultado.</p>
      {/* LÍNEA CORREGIDA ABAJO */}
      <p>(Presiona F12 o haz clic derecho {'->'} Inspeccionar {'->'} Consola)</p>
    </main>
  );
}