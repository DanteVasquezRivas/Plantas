import Card from "./Card";
import Menubar from "./Menubar"
import PlantasList from "./Plantaslist";
import Banner from "../views/Banner";

const Home = () => {
  return (
    <>
      <Menubar />
      <Banner />
      <PlantasList>
        <Card />
      </PlantasList>
    </>
  );
};

export default Home;
