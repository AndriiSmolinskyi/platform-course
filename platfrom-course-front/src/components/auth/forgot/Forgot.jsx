import { Formik, Form, Field, ErrorMessage } from "formik";      
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import "../Auth.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { ForgotContext } from "../../../Context/ForgotContext";
import axios from 'axios';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Неправильний формат Email')
        .required('Пошта є обовязковим полем'),
})

export const Forgot = () =>{
    const { forgot, setForgot } = useContext(ForgotContext)
    const navigation = useNavigate()

    const GoBack = () => {
        navigation('/login')
    }

    const updatePass = async (values) => {

        try {
            const email = values.email;
            const response = await axios.post("http://localhost:8080/api/user/forgotPassword", {email});
            console.log("лист відправлено")
            setForgot(values.email)
            navigation('/newPass')
        } catch (error) {
          alert('Помилка при відправлення листа на пошту, провірте правильність пошти або помилка', error.response.data); 
        }
    };


    return(
        <div className="auth">
            
            <Formik
                initialValues={{
                    email: ''
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    updatePass(values)
                }}
                className="formik"
            >
                <Form className="form">
                    <div className="form__head">
                        <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={GoBack}/>
                        <h1 className="auth__title">Відновлення пароля</h1>
                    </div>
                    <div className="input-block">
                        <label htmlFor="email" className="label">Пошта для відновлення пароля:</label>
                        <Field type="email" id="email" name="email" className="input"/>
                        <ErrorMessage name="email" component="div" className="error"/>
                    </div>
                    <button type="submit" className="form__btn">Надіслати код</button>
                </Form>
            </Formik>
        </div>    
    )
}

