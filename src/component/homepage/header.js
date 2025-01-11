import React from "react";
import "./header.css"

const Headr =()=>{
    return(
        <header>
            <div className="container">
                <div className="row">
            <div class="col-md-5 col-sm-6">
                        <h3>Good build choices are good investments.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo. </p>
                        <div class="space30"></div>
                    <button>Order now</button>
                    <button>Learn more</button>
                </div>
                <div className="col-md-6">

                </div>
                </div>
            </div>
        </header>
    );

}

export default Headr;