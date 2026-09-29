import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hook useEffect cargando el catálogo local con tus imágenes
  useEffect(() => {
    const timer = setTimeout(() => {
      const listaCarrosLocal = [
        { id: 1, nombre: "Chevrolet Joy Sedan", categoria: "Sedán", precio: "$ 68.990.000", imagen: "/images/carro1.jpg" },
        { id: 2, nombre: "Renault Duster Iconic", categoria: "SUV", precio: "$ 94.500.000", imagen: "/images/carro2.jpg" },
        { id: 3, nombre: "Mazda CX-30 Grand Touring", categoria: "SUV Lujo", precio: "$ 112.000.000", imagen: "/images/carro3.jpg" },
        { id: 4, nombre: "Kia K3 Cross", categoria: "Crossover", precio: "$ 82.900.000", imagen: "/images/carro4.jpg" },
        { id: 5, nombre: "Toyota Corolla Hybrid", categoria: "Híbrido", precio: "$ 105.500.000", imagen: "/images/carro5.jpg" },
        { id: 6, nombre: "Chevrolet Tracker Turbo", categoria: "SUV", precio: "$ 89.990.000", imagen: "/images/carro6.jpg" },
        { id: 7, nombre: "Volkswagen Nivus Highline", categoria: "Coupé", precio: "$ 96.400.000", imagen: "/images/carro7.jpg" },
        { id: 8, nombre: "Ford Escape Sport AWD", categoria: "SUV Híbrida", precio: "$ 134.900.000", imagen: "/images/carro8.jpg" },
        { id: 9, nombre: "Nissan Kicks Advance", categoria: "SUV", precio: "$ 84.500.000", imagen: "/images/carro9.jpg" }
      ];

      setCarros(listaCarrosLocal);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container text-center mt-5 py-5">
        <div className="spinner-border" style={{ color: '#1b4332' }} role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <h5 className="mt-3 text-secondary">Cargando catálogo técnico...</h5>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Cabecera limpia */}
      <div className="tech-header text-center mb-5">
        <h2 className="fw-bold mb-1">Catálogo de Vehículos — Cristhian Corredor</h2>
        <p className="mb-0 small">Vehiculos Nuevos y Usados</p>
      </div>

      {/* Cuadrícula de 9 vehículos */}
      <div className="row g-4">
        {carros.map((carro) => (
          <div className="col-lg-4 col-md-6" key={carro.id}>
            <div className="card card-tech h-100 shadow-sm">
              <div className="card-img-wrapper position-relative">
                <img 
                  src={carro.imagen} 
                  alt={carro.nombre} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                <span className="position-absolute top-0 end-0 m-2 badge badge-categoria">
                  {carro.categoria}
                </span>
              </div>
              <div className="card-body d-flex flex-column p-3 text-center">
                <h6 className="fw-bold text-dark mb-1">{carro.nombre}</h6>
                <div className="precio-carro mb-3">{carro.precio}</div>
                <button className="btn btn-tech w-100 mt-auto">
                  Seleccionar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;