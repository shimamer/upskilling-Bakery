import './App.css';
import { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Recipes from './Components/Recipes/Recipes.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
class App extends Component {

  render() {
    return <Fragment>

      <div className="peachy-pup-bakery">
        <div className="div">
          
          <Recipes />
          <Testimonials />
          <Contact />
          <Footer />

        </div>
      </div>

    </Fragment>
  }
}



export default App;
