import { Component, Fragment } from "react";
import img1 from '../../img/Place Your Logo Here (Double Click to Edit) 1.png';
import './Header.css'

class Header extends Component {

    render() {
        return <Fragment>

           
                <div className="row">


                    <div className="header col-12 col-md-8 col-lg-8">
                        <div className="container w-80">
                            <div className="container tasty-pastries-section pt-4 d-flex">
                                <div>
                                    <img
                                        className="place-your-logo-here"
                                        alt="Place your logo here"
                                        src={img1}
                                    />
                                </div>

                                <div className="text ms-3">
                                    <p className="text-uppercase m-0"> peachy pup</p>
                                    <p className="text-uppercase"> bakery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </Fragment>
    }


}

export default Header