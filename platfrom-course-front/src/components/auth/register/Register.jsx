import { useContext } from "react";     
import { Formik, Form, Field, ErrorMessage } from "formik";      
import * as Yup from 'yup';
import axios from 'axios';
import { SHA512 } from 'crypto-js';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Імя є обовязковим полем')
        .min(2, 'Імя повинно містити принаймі 2 символи')
        .max(15, 'Імя повиино бути не більше 15 букв'),
    surname: Yup.string()
        .required('Імя є обовязковим полем')
        .min(2, 'Імя повинно містити принаймі 2 символи')
        .max(15, 'Прізвище повиино бути не більше 15 букв'),
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

export const Register = () =>{

    const RegisterFunction = async (values) => {
        const hashedPassword = SHA512(values.password).toString();

        const body = {
          name: values.name,
          surname: values.surname,
          role: 'student',
          email: values.email,
          group_id: null,
          password: hashedPassword,
        };
      
        try {
          const response = await axios.post("http://localhost:8080/api/user/register", body);
          console.log(response.data);
          localStorage.setItem('userToken', response.data.token)
        } catch (error) {
          console.error('Помилка при реєстрації:', error.response.data); // Змінено
        }
    };

    return(
        <div>
            <h1>Реєстрація</h1>
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values =>{
                    RegisterFunction(values)
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="name" className="label">Імя:</label>
                        <Field type="text" id="name" name="name" className="input"/>
                        <ErrorMessage name="name" component="div" className="error"/>
                    </div>
                    <div>
                        <label htmlFor="surname" className="label">Прізвище:</label>
                        <Field type="text" id="surname" name="surname" className="input"/>
                        <ErrorMessage name="surname" component="div" className="error"/>
                    </div>
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
                    <button type="submit">Зареєструватись</button>
                </Form>
            </Formik>
        </div>    
    )
}