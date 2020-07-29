import React from 'react';
// import { useDispatch } from 'react-redax';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { login } from '../../api/Index';
// import './SubmitForm.scss';

import validationSchema from './ValidationSchema';

/* поля, которые отправляются на сервер */
const initialValues = {
  password: '',
  email: '',
};

const Login = () => {
  const onSubmit = async (values) => {
    await login(values);
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form className="form">
        <h2 className="header">Login</h2>
        <div>
          <label htmlFor="email">
            Почта
            <span className="required-star"> *</span>
          </label>
          <Form.Item name="email">
            <Input
              id="email"
              name="email"
              placeholder="my@mail.ru"
              size="large"
              suffix={<MailOutlined />}
            />
          </Form.Item>
        </div>
        <div>
          <label htmlFor="password">
            Пароль
            <span className="required-star"> *</span>
          </label>
          <Form.Item name="password">
            <Input.Password
              id="password"
              name="password"
              placeholder="My-password-123"
              size="large"
            />
          </Form.Item>
        </div>
        <div className="formButtonsContainer">
          <SubmitButton disabled={false} size="large" className="button">
            Войти
          </SubmitButton>
        </div>
        <Link to="/signUp">Регистрация</Link>
      </Form>
    </Formik>
  );
};

export default Login;
