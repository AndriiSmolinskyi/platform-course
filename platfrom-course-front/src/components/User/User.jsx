import { Header } from "../Header/Header";
import { UserContext } from "../../Context/UserContext";
import { useContext, useEffect } from "react";
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";      
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import "./User.scss";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Ім\'я повинно містити принаймні 2 символи')
        .max(15, 'Ім\'я повинно бути не більше 15 букв'),
    surname: Yup.string()
        .min(2, 'Прізвище повинно містити принаймні 2 символи')
        .max(15, 'Прізвище повинно бути не більше 15 букв'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Телефон повинен містити рівно 10 цифр')
});

export const UserPage = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleChangeUser = async (field, values) => {
        const body = {
            id: user.id,
            [field]: values[field]
        };

        try {
            const response = await axios.put(`http://localhost:8080/api/admin/updateUserAdmin`, body);
            console.log(response.data);
            const newUser = response.data
            setUser(newUser)
            
        } catch (error) {
            console.error('Помилка при зміні юзера:', error.response); 
        }
    };

    
    const handleLogout = ( ) => {
        localStorage.removeItem('userToken')
        setUser('')
    }

    

    useEffect(() => {        
        if (!user) {
            navigate('/');
        }
    }, [user, navigate]);

   

    return (
        <div>
            <Header></Header>  
            <div className="user_container">
                <div className="user">
                    {user && 
                        <div className="user__left user__item">     
                            <p className="user__left__text">{user.name} {user.surname}</p>
                            <p className="user__left__text">{user.email}</p>
                            <p className="user__left__text">{user.phone && user.phone}</p>
                            <button className="user__logot" onClick={handleLogout}>Logout</button>
                        </div>
                    }     
                    <div className="user__right user__item">
                    <Formik
                        initialValues={{
                            name: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleChangeUser('name', values)}
                        className="user__formik"
                    >
                        <Form className="user__form">
                            <div className="user__input-block">
                                <label htmlFor="name" className="user__label">Змінити ім'я:</label>
                                <Field type="text" id="name" name="name" className="user__input"/>
                                <ErrorMessage name="name" component="div" className="user__error"/>
                            </div>
                            <button type="submit" className="form__btn">Змінити</button>
                        </Form>
                    </Formik>

                    <Formik
                        initialValues={{
                            surname: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleChangeUser('surname', values)}
                        className="user__formik"
                    >
                        <Form className="user__form">
                            <div className="input-block">
                                <label htmlFor="surname" className="user__label">Змінити прізвище:</label>
                                <Field type="text" id="surname" name="surname" className="user__input"/>
                                <ErrorMessage name="surname" component="div" className="user__error"/>
                            </div>
                            <button type="submit" className="form__btn">Змінити</button>
                        </Form>
                    </Formik>
                    
                    <Formik
                        initialValues={{
                            phone: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleChangeUser('phone', values)}
                        className="user__formik"
                    >
                        <Form className="user__form">
                            <div className="user__input-block">
                                <label htmlFor="phone" className="user__label">Змінити телефон:</label>
                                <Field type="number" id="phone" name="phone" className="user__input" maxLength="10" inputMode="numeric"/>
                                <ErrorMessage name="phone" component="div" className="user__error"/>
                            </div>
                            <button type="submit" className="form__btn">Змінити</button>
                        </Form>
                    </Formik>

                </div>
            </div>
            </div>
            
        </div>    
    );
};