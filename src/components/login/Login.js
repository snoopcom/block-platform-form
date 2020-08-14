import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { authorization, logAction } from '../../store/actions';
import validationSchema from './ValidationSchema';

/* поля, которые отправляются на сервер */
const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (values) => {
    dispatch(logAction(values));
    const response = await dispatch(authorization(values));
    const { token } = response.data.user;
    localStorage.setItem('token', `${token}`);
    // сделал, чтобы при удалении стореджа и перезагрузке страницы не вылетало со страницы main
    localStorage.setItem('user', JSON.stringify(response.data.user));
    history.push('/');
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

export default Login;
