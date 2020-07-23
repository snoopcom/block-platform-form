import React from 'react';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

import getData from '../../api/Index';
import './SubmitForm.scss';

import validationSchema from './ValidationSchema';

const initState = {
  errorMailExists: null,
  successMessageServer: null,
  errorMessageServer: null,
};

/* поля, которые отправляются на сервер */
const initialValues = {
  name: '',
  password: '',
  email: '',
};

class SubmitForm extends React.Component {
  state = initState;

  dataUser = initialValues;

  onSubmit = async (values) => {
    const skillsFilter = values.skills.filter((skill) => skill !== ''); // можно просто Boolean :)

    const body = {
      ...values,
      skills: skillsFilter,
    };

    try {
      /* объект с данными */
      const response = await getData(body);
      const { data } = response;
      this.setState({
        errorMailExists: null, // если почта такой нет, то ошибку не выдаем
        errorMessageServer: null, // убираем соощение об ошибке сервера
        successMessageServer: data, // выдаем сообщение об успехе
      });
    } catch (error) {
      if (error.isAxiosError) {
        this.setState({
          errorMessageServer: 'Сервер не отвечает',
          successMessageServer: null, // убираем сообщение об успешной регистрации
        });
      }
      this.setState({
        // выдаем пользователю, что такая почта уже есть
        errorMailExists: error.response.data,
        successMessageServer: null, // убираем сообщение о успешной регистрации
        errorMessageServer: null, // и сообщение, что сервер не отвечает
      });
    }
  };

  render() {
    const { errorMailExists, successMessageServer, errorMessageServer } = this.state;
    return (
      <Formik
        onSubmit={this.onSubmit}
        initialValues={this.dataUser}
        validationSchema={validationSchema}
      >
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
            <span className="errorEmail">{errorMailExists}</span>
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
          <span className="success">{successMessageServer}</span>
          <span className="error">{errorMessageServer}</span>
        </Form>
      </Formik>
    );
  }
}

export default SubmitForm;
