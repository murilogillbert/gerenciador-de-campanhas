import React, {useState} from 'react';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error, setError] = useState('');

function checkUser(e) {
  e.preventDefault();

  let users = JSON.parse(localStorage.getItem("user")) || {user:[]}
  
  const user = users.user.find(u=>u[0] === email && u[1]===password)

  if(user){
   if(user[2]==true){
    alert('Login está ok');
    window.location.href = ("/Gerenciador")
   }else{
    setError("Usuário não verificado")
   }
  }else{
    setError("Email ou senha incorretos.")
  }
}

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={checkUser}>
        {error && <label className={styles.error}>{error}</label>}
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
