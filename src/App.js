import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2 class="text-center">Aprendamos Historia</h2>
      
      

      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Correo</th>
      <th scope="col">Celular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Esneider</th>
      <td>Gomez Gonzales</td>
      <th>egomezg@josegalan.edu.co</th>
      <td>3136846366</td>
    </tr>
    <tr>
      <th scope="row">Edgar</th>
      <td>Ruiz Castro</td>
      <th>edruiz@josegalan.edu.co</th>
      <td>No tiene</td>
    </tr>
    <tr>
      <th scope="row">Deiner</th>
      <td>Ballesta Madera</td>
      <th>deballesta@josegalan.edu.co</th>
      <td>3053605072</td>
    </tr>
    <tr>
      <th scope="row">Wilson Stiven</th>
      <td>Quintero Cardona</td>
      <th>wquintero@josegalan.edu.co</th>
      <td>3006929660</td>
    </tr>
    <tr>
      <th scope="row">Juan Manuel</th>
      <td>Calle Orozco</td>
      <th>jcalleo@josegalan.edu.co</th>
      <td>3052583254</td>
    </tr>
  </tbody>
</table>
<h3 class="text-center">Qué es y para qué sirve babel</h3>
<p class="text-center"><th>Babel es una herramienta que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a JS que cualquier navegador o versión de Node.js entienda</th></p>
<p class="text-center"><th>Babel funciona mediante plugins para que le indiquemos qué cosas queremos que transforme, por ejemplo con el plugin babel-plugin-transforme 2015-arrow-functions podemos decirle que transforme las arrow functions de ECMAScript 2015 a funciones normales, con babel-plugin-transform-react-jsx podemos hacer que entienda código de JSX y lo convierta a código JS normal.</th></p>
<h3 class="text-center">Webpack qué es y para qué sirve</h3>
<p class="text-center"><th>Webpack se define como un empaquetador de módulos (un bundler en la jerga habitual) pero que hace muchísimas cosas más como:Gestión de dependencias, Ejecución de tareas ,Conversión de formatos, Servidor de desarrollo ,Carga y uso de módulos de todo tipo (AMD, CommonJS o ES 2015).</th></p>
<p class="text-center"><th>Una de las muchas cosas interesantes de Webpack es que no solo el código JavaScript se considera un módulo. Las hojas de estilo, las páginas HTML e incluso las imágenes se pueden utilizar también como tales, lo cual da un extra de potencia muy interesante</th></p>
<h3 class="text-center">¿Que es  Reat?</h3>
<p class="text-center"><th>React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.</th></p>
<p class="text-center"><th>Las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.</th></p>

    </div>
  );
}

export default App;
