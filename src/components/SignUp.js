import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { validator } from './Validator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './Toast';
import style from '../css/signup.module.css';
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
    setErrors(validator(data, 'signup'));
  }, [data, touched]);

  const handleFocus = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify('you singed up', 'success');
    } else {
      notify('invalid data types,Please check', 'failed');
    }
  };

  return (
    <div className={style.container}>
      <h1>Sign Up</h1>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        {/* name input start */}
        <div className={style.formField}>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            name='name'
            value={data.name}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {touched.name ? errors.name && <span>{errors.name}</span> : null}
        </div>
        {/* name input end */}

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
          {touched.email ? errors.email && <span>{errors.email}</span> : null}
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

        {/* confirmPassword input start */}
        <div className={style.formField}>
          <label htmlFor='confirmPassword'>confirm password</label>
          <input
            type='password'
            name='confirmPassword'
            value={data.confirmPassword}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {touched.confirmPassword
            ? errors.confirmPassword && <span>{errors.confirmPassword}</span>
            : null}
        </div>
        {/* confirmPassword input end */}

        {/* isAccepted input start */}
        <div className={style.formField}>
          <div className={style.checkbox}>
          <label htmlFor='isAccepted'>Our terms and privacy policy</label>
          <input
            type='checkbox'
            
            name='isAccepted'
            value={data.isAccepted}
            onChange={handleChange}
            onFocus={handleFocus}
            />
          {touched.isAccepted
            ? errors.isAccepted && <span>{errors.isAccepted}</span>
            : null}
            </div>
        </div>
        {/* isAccepted input end */}

        <div className={style.btn}>
          <Link to='/login'>login</Link>
          <button>Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
