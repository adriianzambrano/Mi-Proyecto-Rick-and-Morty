

const regexUsername = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;



export default function validate(userData){

    const errors = {}

    if(!userData.username){
        console.log(regexUsername);
        errors.username = "El usuario no debe estar vacio"

    }else if(!regexUsername.test(userData.username)){
        errors.username = "El usuario debe ser un correo" 

    }else if(userData.username.length > 35){
        errors.username = "El usuario no puede tener mas de 35 caracteres" 

    }else if(!userData.password){
        errors.password = "El password no debe estar vacio" 

    }else if(!regexPassword.test(userData.password)){
        errors.password = "El password tiene que tener mínimo 8 caracteres, al menos una letra y un número " 

    }
    return errors
}   