import React from 'react';
import { Formik } from 'formik';
import { Form, SubmitButton } from 'formik-antd';

import './Main.scss';

/* поля, которые отправляются на сервер */
const initialValues = {
  name: '',
  password: '',
  email: '',
};

const Main = () => {
  const onSubmit = async () => {};
  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className="form">
          <h2 className="header">Привет !</h2>
          <div>
            <label htmlFor="name">Имя пользователя</label>
          </div>

          <div className="formButtonsContainer">
            <SubmitButton disabled={false} size="large" className="button">
              Выход
            </SubmitButton>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Main;
