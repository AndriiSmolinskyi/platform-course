import { Formik, Form, Field, ErrorMessage } from "formik";      
import * as Yup from 'yup';
import axios from 'axios';
import { SHA512 } from 'crypto-js';
import { useNavigate } from "react-router-dom";
import "../Auth.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ForgotContext } from "../../../Context/ForgotContext";
import { useContext } from "react";

const validationSchema = Yup.object().shape({
    codeEmail: Yup.string()
        .matches(/^\d{10}$/, 'Повинно містити 10 цифр'),
    password: Yup.string()
        .min(7, 'Мінімум 7 символів')
        .max(22, 'Не більше 22 символів')
        .matches(/[0-9]/, 'Повинен містити латинську цифру')
        .matches(/[a-zA-Z]/, 'Повинен містити букву')
        .required('Введіть пароль'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Паролі повинні збігатися')
        .required('Підтвердіть пароль'),
})

export const NewPass = () =>{
    const { forgot, setForgot } = useContext(ForgotContext)
    const navigation = useNavigate()

    const updatePass = async (values) => {
        const hashedPassword = SHA512(values.password).toString();

        const body = {
          email: forgot,
          code: values.codeEmail,
          newPass: hashedPassword,
        };

        console.log(body)
      
        try {
          const response = await axios.put("http://localhost:8080/api/user/newPass", body);
          console.log("good")
          navigation('/login')
        } catch (error) {
          alert('Помилка при зміні пароля: невірний код, або помилка', error.response.data); 
        }
    };

    const GoBack = () => {
        navigation('/forgot')
    }

    return(
        <div className="auth">
            
            <Formik
                initialValues={{
                    codeEmail: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values =>{
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
                        <div>Ваша пошта {forgot}</div>
                        <div>Важлива примітка. Якщо код не прийшов, можливо він знаходиться в спамі.</div>
                    </div>
                    <div className="input-block">
                        <label htmlFor="codeEmail" className="label">Код з пошти:</label>
                        <Field type="text" id="codeEmail" name="codeEmail" className="input"/>
                        <ErrorMessage name="codeEmail" component="div" className="error"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="password" className="label">Новий пароль:</label>
                        <Field type="password" id="password" name="password" className="input"/>
                        <ErrorMessage name="password" component="div" className="error"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="confirmPassword" className="label">Повторити пароль:</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" className="input"/>
                        <ErrorMessage name="confirmPassword" component="div" className="error"/>
                    </div>
                    <button type="submit" className="form__btn">Змінити пароль</button>
                </Form>
            </Formik>
        </div>    
    )
}