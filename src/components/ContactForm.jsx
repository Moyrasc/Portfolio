import React from 'react'

const ContactForm = () => {
  return (
    <>
        <form>
            <div>
                <label htmlFor='nombre'>Nombre</label>
                    <input id='nombre' name='nombre' type='
                    text' required/>
                <label htmlFor='email'>E-mail</label>
                    <input id='email' name='email' type='email' required/>
                <label htmlFor='mensaje'>Deja aquí tu mensaje</label>
                    <textarea id='mensaje' required/>
            </div>
            <button>Enviar</button>
        </form>
    </>
  )
}

export default ContactForm