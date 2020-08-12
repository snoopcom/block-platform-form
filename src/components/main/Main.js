import React from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, SubmitButton } from 'formik-antd';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

/* поля, которые отправляются на сервер */
const initialValues = {
  name: '',
  password: '',
  email: '',
};

const Main = (/* props */) => {
  const history = useHistory();
  // const { /*logOutAction */} = props;

  let user = JSON.parse(localStorage.getItem('user'));
  if (user === null) {
    user = '';
  }
  const onSubmit = () => {
    // logOutAction();
    history.push('/login');
  };

  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className="form">
          <h2 className="header">Привет !</h2>
          <h3 className="header">{user.email}</h3>
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

// Main.propTypes = {
//   history: PropTypes.objectOf(
//     PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string, PropTypes.object]),
//   ).isRequired,
//   user: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])).isRequired,
//   logOutAction: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps, actions)(Main);
