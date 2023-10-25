import { Fragment, useEffect, useState } from "react";
import './recipes.css'
import axios from "axios";

function Recipes() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
            .then(function (response) {
                setData(response.data.meals);
            });
    }, [])

    return (
        <Fragment>

            <div className="container recipes mb-3">
                <div className="text-uppercase header-recipes text-center">recipes</div>

                <div className="products row">

                    {data.map((index) => {
                        return <div className="col-md-4 Card mb-3" key={index.idMeal} >
                            <img width={"100%"} alt="Bread omelette" src={index.strMealThumb} />
                            <div className="details">
                                <p className="title"> {index.strMeal} </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled
                                </p>
                            </div>
                        </div>
                    })}

                </div>
                <div className="text-center mb-5 mt-3">
                    <button type="button" class="btn-recipes btn btn-warning text-uppercase text-center text-white fs-5">contact us</button>

                </div>
            </div>

        </Fragment>
    )
}

export default Recipes