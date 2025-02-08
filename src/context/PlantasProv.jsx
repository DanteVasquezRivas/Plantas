import { createContext, useEffect, useState } from "react";

export const PlantasContext = createContext();
const PlantasProv = ({ children }) => {
  const [plantas, setPlantas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    getPlantas();
  }, []);

  const getPlantas = async () => {
    const res = await fetch("/plantas.json");
    const plantas = await res.json();
    setPlantas(plantas);
  };

  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };


 

  return (
    <PlantasContext.Provider
      value={{ plantas, carrito, setCarrito, addToCart}}
    >
      {children}
    </PlantasContext.Provider>
  );
};

export default PlantasProv;
