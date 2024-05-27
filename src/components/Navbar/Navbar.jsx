import React from 'react';

import styles from './styles.module.css';

export default function Navbar({ imgPath }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={imgPath} alt="Logo" />
      </div>
      <div className={styles.menu}>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#plan">Planos</a></li>
          <li><a href="#feeds">Opiniões</a></li>
        </ul>
      </div>
      <div className={styles.account}>
        <button>Login</button>
        <button>Cadastro</button>
      </div>
    </div>
  );
}


/*
import { Link } from 'react-router-dom';
      <div className={styles.account}>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cadastro"><button>Cadastro</button></Link>
      </div>
*/