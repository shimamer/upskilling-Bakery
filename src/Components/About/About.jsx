import { Component, Fragment } from "react";
import chef from '../../img/Rectangle 275.png'
import './About.css'

class About extends Component {

    render() {
        return <Fragment>
            <div className="about-us p-5" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">


                            <h2 className="about-us-header  text-uppercase">
                                about
                                <br />
                                us
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                            <button className="btn btn-warning contact-us text-uppercase">contact us</button>



                        </div>
                        <div className="chef-section col-md-7">
                            <img alt="Rectangle" src={chef} className="chef" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }


}

export default About