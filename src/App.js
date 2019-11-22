//Library Imports
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//Component Imports
import Header from './components/header/Header'
import Home from './pages/Home'
// import Models from './pages/Models'
import ModelGridFemaleAll from './components/models/ModelGridFemaleAll'
import ModelGridFemaleMainboard from './components/models/ModelGridFemaleMainboard'
import ModelGridFemaleNewFaces from './components/models/ModelGridFemaleNewFaces'
import ModelGridFemaleCurvy from './components/models/ModelGridFemaleCurvy'
import ModelGridFemaleTimeless from './components/models/ModelGridFemaleTimeless'
import ModelGridMaleAll from './components/models/ModelGridMaleAll'
import ModelGridMaleMainboard from './components/models/ModelGridMaleMainboard'
import ModelGridMaleNewFaces from './components/models/ModelGridMaleNewFaces'
import ModelGridMaleCurvy from './components/models/ModelGridMaleCurvy'
import ModelGridMaleTimeless from './components/models/ModelGridMaleTimeless'
import InnerModel from './pages/InnerModel'
import BecomeAModel from './pages/BecomeAModel'
import AboutUs from './pages/AboutUs'
import Footer from './components/footer/Footer';
import FourOFour from './pages/FourOFour'

//Main Component
function App(){

    return (
      <Router>
        <div className="App">

          <Header />

          <Switch>
            {/* Home */}
            <Route path="/" exact component={Home} /> 
            {/* Models */}
            <Route path="/models/female/all" component={ModelGridFemaleAll} />
            <Route path="/models/female/mainboard" component={ModelGridFemaleMainboard} />
            <Route path="/models/female/new-faces" component={ModelGridFemaleNewFaces} />
            <Route path="/models/female/curvy" component={ModelGridFemaleCurvy} />
            <Route path="/models/female/women" component={ModelGridFemaleTimeless} />
            <Route path="/models/male/all" component={ModelGridMaleAll} />
            <Route path="/models/male/mainboard" component={ModelGridMaleMainboard} />
            <Route path="/models/male/new-faces" component={ModelGridMaleNewFaces} />
            <Route path="/models/male/curvy" component={ModelGridMaleCurvy} />
            <Route path="/models/male/men" component={ModelGridMaleTimeless} />
            {/* Inner Models */}
            <Route path="/models/:modelUrlId" component={InnerModel} />
            {/* Become A Model */}
            <Route path="/become-a-model/" component={BecomeAModel} />
            {/* 
              <Route path="/noticias/" component={Noticias} />
              <Route path="/noticias/:id" component={Articulo} />
              <Route path="/contacto/" component={Contacto#contacto} />
              <Route path="/terminos-y-condiciones/" component={TerminosYCondiciones} />
            */}
            <Route path="/sobre-nosotros/" component={AboutUs} />
            <Route component={FourOFour} />
          </Switch>

          <Footer />

        </div>
      </Router>
    )
}


//Export 
export default App;
