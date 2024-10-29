import React from 'react'
import './FormularioDatos.css'
import { useForm } from 'react-hook-form';

export const FormulariosDatos = () => {
    const {register, handleSubmit} = useForm();
    const enviarInfo = (datos) =>{
        console.log(datos);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(enviarInfo)}>
        <div className='input'>
          <label htmlFor="">Nombres</label>
          <input type="text" {...register("Nombre")} />
        </div>
        <div className='input'>
          <label htmlFor="">Apellidos</label>
          <input type="text" {...register("Apellido")} />
        </div>
        <div className='input'>
          <label htmlFor="">Correo</label>
          <input type="email" {...register("Correo")} />
        </div>
        <div className='input'>
          <label htmlFor="">Contraseña</label>
          <input type="password" {...register("Contraseña")} />
        </div>
        <div className='input'>
          <button type="submit">Enviar información</button>
        </div>
      </form>
    </div>
  )
}
