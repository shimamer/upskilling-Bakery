import { Fragment } from "react";
import './contact.css'
import email from '../../img/Vector.svg'
import phone from '../../img/Vector (1).svg'
import axios from "axios";
import { useFormik } from 'formik';

function Contact() {

    const initialValues = {
        name: '',
        email: '',
        phone: ''
    }

    const validate = values => {
        let errors = {}

        if (!values.name) {
            errors.name = 'Name is  required'
        } else if (! /^[a-zA-Z]+ [a-zA-Z]+$/i.test(values.name)) {
            errors.name = 'Invaled name'
        }

        if (!values.email) {
            errors.email = 'Email is required'
        } else if (!/^[a-zA-Z0-9.%+_-]+@[a-z-]+\.[a-z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invaled email format'
        }

        if (!values.phone) {
            errors.phone = 'phone is required'
        } else if (! /^[0-9\-\+]{9,15}$/i.test(values.phone)) {
            errors.phone = 'Invaled phone'
        }

        return errors;
    }

    const onSubmit = values => {
        axios.post('http://upskilling-egypt.com:3000/contact', values)
            .then(res => {
                console.log(res);
                alert('data added successfully')
            })
            .catch(err => console.log(err))
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })



    return (<Fragment>
        <div className="contact">
            <div className="container">
                <div className="col-12">
                    <div className="header-content text-uppercase text-center mb-3">
                        contact us
                    </div>
                </div>
                <div className="data-section row m-auto">
                    <div className="col-md-12 col-lg-6 data text-center">
                        <form action="" onSubmit={formik.handleSubmit}>
                            <input type="text" placeholder="full name" className="text-capitalize form-control mb-3 border-radius p-3"
                                onChange={formik.handleChange}
                                name='name'
                                value={formik.values.name}
                                onBlur={formik.handleBlur} />
                            {formik.touched.name && formik.errors.name ? <div className="error"> {formik.errors.name} </div> : null}

                            <input type="email" placeholder="email" className="text-capitalize form-control mb-3 p-3"
                                onChange={formik.handleChange}
                                name='email'
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email ? <div className="error"> {formik.errors.email} </div> : null}

                            <input type="number" placeholder="phone number" className="text-capitalize form-control mb-3 p-3"
                                onChange={formik.handleChange}
                                name='phone'
                                value={formik.values.phone}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.phone && formik.errors.phone ? <div className="error"> {formik.errors.phone} </div> : null}

                            <button type='submit' class="btn btn-outline-warning btn-send text-uppercase text-center">send</button>

                        </form>
                    </div>
                    <div className="contact-section offset-1 col-lg-5 d-flex align-items-center">
                        <div className="mb-5">
                            <div className="mb-3">
                                <img alt="mail" src={email} className="me-4" />
                                <a href="#" target="_blank" className="text-black">
                                    upskilling.eg1@gmail.com
                                </a>
                            </div>

                            <div>
                                <img alt="call" src={phone} className="me-4" />
                                <span>+20 115 493 2137</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Fragment>
    )


}

export default Contact