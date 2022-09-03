import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { validator } from './Validator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from '../css/signup.module.css';
import { notify } from './Toast';
const SignUp = () => {
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  });

  const handleChange = (e) => {
    if (e.target.name === 'isAccepted') {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    setErrors(validator(data));
  }, [data, touched]);

  const handleFocus = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify('you loged in', 'success');
    } else {
      notify('invalid data types,Please check', 'failed');
      setErrors(validator(data));
    }
  };
  return (
    <div className={style.container}>
      <h1>Login </h1>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        {/* email input start */}
        <div className={style.formField}>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            name='email'
            value={data.email}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}
        </div>
        {/* email input end */}

        {/* password input start */}
        <div className={style.formField}>
          <label htmlFor='password'>password</label>
          <input
            type='password'
            name='password'
            value={data.password}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {touched.password
            ? errors.password && <span>{errors.password}</span>
            : null}
        </div>
        {/* password input end */}

        <div className={style.btn}>
          <Link to='/signup'>Sign Up</Link>
          <button>Log In</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
