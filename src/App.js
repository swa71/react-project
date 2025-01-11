
import Home from"./component/homepage/home";
import Navs from"./component/Navs/navs";

import Fotter from "./component/Fotter/fotter";


import { Fragment } from "react";
function App() {

  return (
    <Fragment>
      
      <Navs/>
      
      <Home/>

      <Fotter/>
      
    </Fragment>
   

  );
}

export default App;
