import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlantasContext } from "../context/PlantasProv";
import Menubar from "../components/Menubar";

const Detalle = () => {
  const [plantaDetail, setPlantaDetail] = useState({});
  const { plantas, addToCart } = useContext(PlantasContext);
  const { id } = useParams();

  const obtenerDatos = () => {
    const datosPlanta = plantas.find((planta) => planta.id === id);

    setPlantaDetail(datosPlanta || {});
  };

  useEffect(() => {
    obtenerDatos();
  }, [plantas]);

  return (
    <>
      <Menubar />
      <div>
        <div>
          <div>
            
            <div className="col-md-6">
              <img src={plantaDetail.img}/>
            </div>

            <div className="col-md-6">
              <div>
                <h5 className="card-title text-capitalize">
                  {plantaDetail.name}
                </h5>
                <p className="card-text">{plantaDetail.desc}</p>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${plantaDetail.price}</h4>
                  <button
                    className="btn btn-danger"
                    onClick={() => addToCart(plantaDetail)}
                  >Añadir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
