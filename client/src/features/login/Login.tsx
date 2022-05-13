import styles from './Login.module.css';
import Input from '../../components/ui/input/Input';
import { FiDollarSign } from 'react-icons/fi';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [status, setStatus] = useState<string>('Unauthorized');

  const usernameHandler = (value: string) => {
    setUsername(value);
  };

  const passwordHandler = (value: string) => {
    setPassword(value);
  };

  const submitHandler = () => {
    if (username && password) {
      setStatus('Authorized');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <FiDollarSign className={styles.icon} />
          mny
        </div>
        <div className={styles.authContainer}>
          Login
          <Input title="username" width="100%" handler={usernameHandler} />
          <Input title="password" width="100%" handler={passwordHandler} />
          <button className={styles.submit} onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
