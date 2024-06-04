import React, {useState} from 'react';
import styles from './Cadastro.module.css';

const Cadastro = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  function addUser(e) {
    e.preventDefault();

    const newUser = [email,password,true]
    let users = JSON.parse(localStorage.getItem("user")) || {user:[]}

    users.user.push(newUser)
    localStorage.setItem("user",JSON.stringify(users))
  
  }
  return (
    <div className={styles.cadastro}>
      <h1>Cadastro</h1>
      <form onSubmit={addUser}>
        <label>Nome</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Repetir Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <div>
          <label>Senha</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <label>Repita a Senha</label>
          <input type="password"/>
        </div>
        <div>
          <label>Celular</label>
          <input type="text" />
          <label>CPF</label>
          <input type="text" />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
