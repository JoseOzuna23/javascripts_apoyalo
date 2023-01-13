import './App.css';
import PersonCard from './componente/PersonCard';

function App() {
  return (
    <div className="App">

      <PersonCard Nombre="Juan" Apellido="Garcete" año=" Año: 25" colorPelo="Color de Pelo: Negro"/>
      <PersonCard Nombre="Catalina" Apellido="Mora Lopez" año=" Año: 40" colorPelo="Color de Pelo: Rojo"/>
      <PersonCard Nombre="Maria" Apellido="Muñoz" año=" Año: 30" colorPelo="Color de Pelo: Amarillo"/>
      <PersonCard Nombre="Ester" Apellido="Alvarez" año=" Año: 35" colorPelo="Color de Pelo: Azul"/>
      <PersonCard Nombre="Carlos" Apellido="Cazal" año=" Año: 25" colorPelo="Color de Pelo: Verde"/>
      
    </div>
  );
}

export default App;
