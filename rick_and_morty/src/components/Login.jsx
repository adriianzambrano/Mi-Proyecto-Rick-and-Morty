import React from 'react'
import { Link } from 'react-router-dom'
import estilosLogin from "./estilos/Login.module.css"

export default function Login() {
  return (
    <div className={estilosLogin.login}>
        <Link to="/home">
            <button><h1>Entrar</h1></button>
        </Link>
    </div>
  )
}
