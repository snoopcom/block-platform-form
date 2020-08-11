import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import validationSchema from './ValidationSchema';

/* поля, которые отправляются на сервер */
const initialValues = {
  email: '',
  password: '',
};

// const Login = (props) => {
//   const { history, logInAction } = props;

//   const onSubmit = async (values) => {
//     const { email, password } = values;
//     const userLogin = values;
//     try {
//       await login(values);
//       await logInAction(email, password);
//       userLogin.login = true;
//       history.push('/');
//     } catch (err) {
//       alert('Неправильный логин или пароль');
//     }
//   };
const Login = (/* { authorization } */) => {
  const onSubmit = async (/* values */) => {
    // history.push('/');
    // const response = await authorization(values);
    // const { token } = response.data.user;
    // localStorage.setItem('token', `${token}`);
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form className="form">
        <h2>Вход</h2>
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
          <SubmitButton htmlType="submit" disabled={false} size="large" className="button">
            Войти
          </SubmitButton>
        </div>
        <div className="linkContainer">
          <Link to="/signUp">Регистрация</Link>
        </div>
      </Form>
    </Formik>
  );
};

// Login.propTypes = {
//   history: PropTypes.objectOf(
//     PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string, PropTypes.object]),
//   ).isRequired,
//   logInAction: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps, actions)(Login);
