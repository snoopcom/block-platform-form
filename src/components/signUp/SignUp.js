import React from 'react';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// import getData from '../../api/Index';
import './SignUp.scss';
// import * as actionCreators from '../../actionCreators';

import validationSchema from './ValidationSchema';

/* поля, которые отправляются на сервер */
const initialValues = {
  name: '',
  password: '',
  email: '',
};

const SignUp = () => {
  const onSubmit = async (/* values, actions */) => {
    /*  await SignUp(values);
    await SignUp(values);
    actions.setSubmitting(false); */
  };
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form className="form">
        <h2 className="header">Форма регистрации 2</h2>
        <div>
          <label htmlFor="name">
            Имя
            <span className="required-star"> *</span>
          </label>
          <Form.Item name="name">
            <Input
              id="name"
              name="name"
              placeholder="Алексей"
              size="large"
              suffix={<UserOutlined />}
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
        <div>
          <label htmlFor="email">
            Почта
            <span className="required-star"> *</span>
          </label>
          <span className="errorEmail">{/* errorMailExists */}</span>
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
        <div className="formButtonsContainer">
          <SubmitButton disabled={false} size="large" className="button">
            Зарегистрироваться
          </SubmitButton>
        </div>
        <Link to="/login">Login</Link>
      </Form>
    </Formik>
  );
};

export default SignUp;
