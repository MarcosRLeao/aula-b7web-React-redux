import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <div style={{background: "tomato", color: "#FFF", margin: "20px 0", padding: '0 20px 20px'}}>
      <h1>COMPONENTE PRINCIPAL (APP) 
        <br/> [x] aula de redux
        <br/> [x] Persist-redux
        </h1>
      <Home/>
      <Sobre/>
      <Footer/>
    </div>
  );
}

export default App;
