import React from 'react';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { signUp /* signUpAction */ } from '../../api/Index';
// import { signUp, signUpAction } from '../../api/index';

// import { connect } from 'react-redux';

import './SignUp.scss';

import validationSchema from './ValidationSchema';

/* поля, которые отправляются на сервер */
const initialValues = {
  username: '',
  password: '',
  email: '',
};

const SignUp = () => {
  const onSubmit = async (values /* actions */) => {
    await signUp(values);
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form className="form">
        <h2 className="header">Форма регистрации</h2>
        <div>
          <label htmlFor="username">
            Имя
            <span className="required-star"> *</span>
          </label>
          <Form.Item name="username">
            <Input
              id="username"
              name="username"
              placeholder="Алексей"
              size="large"
              suffix={<UserOutlined />}
            />
          </Form.Item>
        </div>
        <div>
          <label htmlFor="email">
            Почта
            <span className="required-star"> *</span>
          </label>
          {/* <span className="errorEmail">{errorMailExists}</span> */}
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
          <SubmitButton
            loading={false}
            disabled={false}
            size="large"
            shape="round"
            className="button"
          >
            Зарегистрироваться
          </SubmitButton>
        </div>
        <Link to="/login">Login</Link>
      </Form>
    </Formik>
  );
};

export default SignUp;
