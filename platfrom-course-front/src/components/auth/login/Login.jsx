import { useContext } from "react";     
import { Formik, Form, Field, ErrorMessage } from "formik";      
import * as Yup from 'yup';
import axios from 'axios';
import { SHA512 } from 'crypto-js';
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
    

    email: Yup.string()
        .email('Неправильний формат Email')
        .required('Пошта є обовязковим полем'),
    password: Yup.string()
        .min(7, 'Мінімум 7 символів')
        .max(22, 'Не більше 22 символів')
        .matches(/[0-9]/, 'Повинен містити цифру')
        .matches(/[a-zA-Z]/, 'Повинен містити букву')
        .required('Введіть пароль'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Паролі повинні збігатися')
        .required('Підтвердіть пароль'),
})

export const Login = () =>{
    const navigation = useNavigate()

    const LoginFunction = async (values) => {
        const hashedPassword = SHA512(values.password).toString();

        const body = {
          email: values.email,
          password: hashedPassword,
        };
      
        try {
          const response = await axios.post("http://localhost:8080/api/user/login", body);
          console.log(response.data);
          const token = response.data.user.token
          localStorage.setItem('userToken', token)
          navigation('/')
        } catch (error) {
          console.error('Помилка при авторизації:', error.response.data); // Змінено
        }
    };

    return(
        <div>
            <h1>Авторизація</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values =>{
                    LoginFunction(values)
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="email" className="label">Пошта:</label>
                        <Field type="email" id="email" name="email" className="input"/>
                        <ErrorMessage name="email" component="div"className="error"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="label">Пароль:</label>
                        <Field type="password" id="password" name="password" className="input"/>
                        <ErrorMessage name="password" component="div" className="error"/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="label">Повторити пароль:</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" className="input"/>
                        <ErrorMessage name="confirmPassword" component="div" className="error"/>
                    </div>
                    <button type="submit">Увійти</button>
                </Form>
            </Formik>
        </div>    
    )
}