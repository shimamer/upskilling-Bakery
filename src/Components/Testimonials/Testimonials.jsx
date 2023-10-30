import { Component, Fragment } from "react";
import './testimonials.css'
import star from '../../img/ant-design_star-filled (1).svg'

class Testimonials extends Component {

    render() {
        return <Fragment>
            <div className="testymonials pb-4">
                <div className="container">
                    <div className="header-testymonials text-uppercase text-center mb-3 col-md-12">
                        testymonials
                    </div>
                    <div className="test-client row justify-content-evenly">

                        <div className=" col-md-12 col-lg-5 mb-5 client">
                            <h3>Kathryn Murphy</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                        </div>

                        <div className=" col-md-12 col-lg-5 mb-5 client">
                            <h3>Kathryn Murphy</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                        </div>

                        <div className=" col-md-12 col-lg-5 mb-5 client">
                            <h3>Kathryn Murphy</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                        </div>

                        <div className=" col-md-12 col-lg-5 mb-5 client">
                            <h3>Kathryn Murphy</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                            <img className="group-2" alt="Group" src={star} />
                        </div>


                    </div>
                    <div className="text-center  mb-3 mt-3">
                        <button type="button" class="btn-test btn btn-warning text-uppercase text-center text-white m-auto fs-5">contact us</button>

                    </div>
                </div>


            </div>
        </Fragment>
    }
}

export default Testimonials