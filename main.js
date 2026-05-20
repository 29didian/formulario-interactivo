import './style.css'

const usuarios = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan.perez@gmail.com",
    role: "admin",
    password: "juan123"
  },
  {
    id: 2,
    nombre: "María Gómez",
    email: "maria.gomez@gmail.com",
    role: "user",
    password: "maria123"
  },
  {
    id: 3,
    nombre: "Carlos López",
    email: "carlos.lopez@gmail.com",
    role: "editor",
    password: "carlos123"
  },
  {
    id: 4,
    nombre: "Ana Torres",
    email: "ana.torres@gmail.com",
    role: "user",
    password: "ana123"
  },
  {
    id: 5,
    nombre: "Luis Martínez",
    email: "luis.martinez@gmail.com",
    role: "admin",
    password: "luis123"
  },
  {
    id: 6,
    nombre: "Sofía Ramírez",
    email: "sofia.ramirez@gmail.com",
    role: "user",
    password: "sofia123"
  },
  {
    id: 7,
    nombre: "Diego Fernández",
    email: "diego.fernandez@gmail.com",
    role: "editor",
    password: "diego123"
  },
  {
    id: 8,
    nombre: "Valentina Castro",
    email: "valentina.castro@gmail.com",
    role: "user",
    password: "vale123"
  },
  {
    id: 9,
    nombre: "Andrés Morales",
    email: "andres.morales@gmail.com",
    role: "admin",
    password: "andres123"
  },
  {
    id: 10,
    nombre: "Camila Herrera",
    email: "camila.herrera@gmail.com",
    role: "user",
    password: "camila123"
  }
];

const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");

const btnLogin = document.getElementById("btn-login");

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
      const {email, password} = Object.fromEntries(new FormData(formulario))
      console.log(email, password);
      
      const usuarioEncontrado = usuarios.find((usuario) => {
        return email === usuario.email && password === usuario.password
      })
      if(usuarioEncontrado){
        formulario.innerHTML =`<p>bienvenido, ${usuarioEncontrado.nombre}</p>`
      }else if(email === "" && password === ""){
        alert("Vacio! Por favor, ingrese credenciales.")
      }else{
        alert("Credenciales Erroneas. ")
      }
       
    })
 
    

    

