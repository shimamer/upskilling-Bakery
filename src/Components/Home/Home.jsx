import { Component, Fragment } from "react";
import "./Home.css";
import img1 from "../../img/Rectangle 271.png";
import img2 from "../../img/Rectangle 270.png";
import img3 from "../../img/Rectangle 269.png";
import img4 from "../../img/Rectangle 268.png";
import Header from "../Header/Header";
import img5 from "../../img/brandico_facebook-rect.svg";
import img6 from "../../img/bx_bxl-instagram-alt.svg";
import img7 from "../../img/ant-design_twitter-outlined.svg";
import img8 from "../../img/bx_bxl-vk.svg";
import img9 from "../../img/Place Your Image Here (Double Click to Edit)_.png";
import star from "../../img/Star 1.svg";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <Header />
          <div className="row align-items-center">
            <div className="tasty col-8 col-md-8 col-lg-8 bg-main">
              <div className="container">
                <div className="container tasty-pastries py-5">
                  <h2 className="text-uppercase">tasty pastries</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam, rerum deleniti facere reiciendis eligendi
                    repudiandae. Eligendi facilis laudantium dolore inventore!
                  </p>
                  <button className="btn btn-warning btn-round">
                    contact us
                  </button>
                </div>
              </div>
            </div>
            <div className="logo col-4 col-md-4 col-lg-4">
              {/* <p className="paragraph">lorem</p> */}
              <div className="bread">
                <img src={img9} className="w-75 " />
                <img src={star} className="w-15 star" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="icons offset-md-1 col-md-1 offset-lg-1 col-lg-1">
              <div className="w-15">
                <img src={img8} alt="bxl-vk" />
              </div>
              <div className="w-15">
                <img src={img5} alt="facebook" />
              </div>
              <div className="w-15">
                <img src={img6} alt="instagram" />
              </div>
              <div className="w-15">
                <img src={img7} alt="twitter" />
              </div>
            </div>
            <div className=" bg-main col-md-6 col-lg-6 social">
              <p>telephone : 01013152597</p>
            </div>
          </div>

          <div className="row ">
            <div className="home m-0 p-0">
              <div className="container-fluid">
                <div className="header-section1 row justify-content-between">
                  <div className="col-5 col-md-4 col-lg-4">
                    <p className="description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the
                    </p>
                  </div>
                  <div className=" col-6 col-md-6 col-lg-8 bg-main pt-5">
                    <h2 className="how-we-work text-uppercase">
                      how we
                      <br />
                      work
                    </h2>

                    <div className="food-product w-100 text-center mt-3 row justify-content-between">
                      <div className="col-md-6 col-lg-3">
                        <img alt="Rectangle" src={img4} className="w-60" />
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <img alt="Rectangle" src={img3} className="w-60" />
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <img alt="Rectangle" src={img2} className="w-60" />
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <img alt="Rectangle" src={img1} className="w-60" />
                      </div>

                      <div className="py-3">
                        <button className="btn btn-warning contact-us text-uppercase">
                          contact us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
