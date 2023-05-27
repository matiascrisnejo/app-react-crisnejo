
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import {useState} from 'react'



function App() {

  //creamos nuestro primer hook
  // const [servicios,agregarServicio] = useState(
  //   [
  //       {id: 1, nombre:"consulta", precio:2500},
  //       {id: 2, nombre:"royal canin 1kg", precio:2000},
  //       {id: 3, nombre:"vacunacion", precio:3000}
  //   ]
  // );


  return (
    <div>
      <Header/>
      <h1 className='titulo'> Peliculas</h1>
      
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
