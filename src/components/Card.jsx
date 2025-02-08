import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlantasContext } from "../context/PlantasProv";


const Card = () => {

  const { plantas, addToCart } = useContext(PlantasContext);

  const navigate = useNavigate();

  return (
    <>

    {plantas.map((planta) => (
        <div key={planta.id} className="col">
          <div >
            <img className="card-img-top"
              src={planta.img}/>

            <div className="card-body">
              <h4>Planta {planta.name}</h4>
           
              <p className="card-text">
                <h6>Planta {planta.desc}</h6>
              </p>
                           
            </div>

            <h2>
              {"$"}{planta.price}</h2>

            <div >
              <button
                to={`planta/${planta.id}`} className="btn btn-info text-white" onClick={() => navigate(`/plantas/${planta.id}`)}>
                Ver Más
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                className="btn btn-danger"
                onClick={() => addToCart(planta)}
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
