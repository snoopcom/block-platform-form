import React from 'react';
// import { useDispatch } from 'react-redax';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../api/Index';
import logInAction from '../../store/actions';
// import * as actions from '../../store/actions';

// import './SubmitForm.scss';

import validationSchema from './ValidationSchema';

/* поля, которые отправляются на сервер */
const initialValues = {
  password: '',
  email: '',
};

const Login = (/* props */) => {
  // const { history, user } = props;

  const onSubmit = async (values) => {
    const { email, password } = values;
    try {
      await login(values);
      await logInAction(email, password);
      // values.login = true; // ???
      //  history.push('/main');
    } catch (err) {
      alert('Неправильный логин или пароль');
    }
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

const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps, logInAction)(Login);
