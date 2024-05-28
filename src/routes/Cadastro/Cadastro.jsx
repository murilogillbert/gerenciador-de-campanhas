import React from 'react';
import styles from './Cadastro.module.css';

const Cadastro = () => {
  return (
    <div className={styles.cadastro}>
      <h1>Cadastro</h1>
      <form>
        <label>Nome</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Repetir Email</label>
        <input type="email" />
        <div>
          <label>Senha</label>
          <input type="password" />
          <label>Repita a Senha</label>
          <input type="password" />
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
