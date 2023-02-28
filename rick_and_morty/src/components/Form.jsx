import React from 'react'
import estilosLogin from "./estilos/Form.module.css"
import validate from './validate'

export default function Form (props) {

  const [userData, setUserData] = React.useState({ username: '', password: '' });
  const [errors, setErrors] = React.useState({ username: '', password: '' });

  function handleInputChange (e){
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
    setErrors(
      validate({...userData,
        [e.target.value]: e.target.value
      })
    )

  }
  function handleSubmit(e){
    e.preventDefault()
    props.login(userData)
  }

  return (
    <div className={estilosLogin.login}>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        
          <div className={estilosLogin.divUsers}>
            <label> Usermane 🙎‍♂️ : </label>
            <input 
              className= {errors.username && estilosLogin.error}
              type="text" 
              name='username' 
              placeholder='  Escribe tu usuario'
              onChange={(e)=> handleInputChange(e)}
              />
              <p className={estilosLogin.parrafosErr}>{errors.username}</p>
          </div>

          <div className={estilosLogin.divClave}>
            <label> Password 🔑 : </label>
            <input 
              className={errors.password && estilosLogin.error}
              type="text" 
              name='password' 
              placeholder='  Escribe tu password' 
              onChange={(e)=> handleInputChange(e)} 
              />
              <p className={estilosLogin.parrafosErr}>{errors.password}</p>
          </div>
          <div>
            {/* <Link to="/home"> */}
              <button type='submit' className={estilosLogin.boton}>Login</button>
            {/* </Link> */}
          </div>
      </form>
    </div>
  )
}
