import React from 'react';
import { Formik } from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import { connect } from 'react-redux';
import './Main.scss';
import * as index from '../../api/Index';

/* поля, которые отправляются на сервер */
const initialValues = {
  name: '',
  password: '',
  email: '',
};

const Main = (/* props */) => {
  //  const { user } = props;

  const onSubmit = async () => {
    //  console.log(user);
  };
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

const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps, index)(Main);
