import React, { useRef} from 'react'
import { Btn, ContainerLabel, Form, FormContact, Input, Label, Textarea } from '../views/ContactoStyled'
import emailJS from '@emailjs/browser'

const ContactForm = () => {
    const refForm = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault()
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const userId = process.env.REACT_APP_PUBLIC_KEY;
        
        emailJS.sendForm(serviceId,templateId,refForm.current,userId)
        .then((res) => {
            console.log(res.text);
            refForm.current.reset()
        })
        .catch(error => console.error(error))
    }

  return (
    <>
        <Form ref={refForm} onSubmit={handleSubmit}>
            <FormContact>
            <ContainerLabel>
                <Label htmlFor='nombre'>Nombre</Label>
                    <Input id='nombre' name='nombre' type='text' required/>
                <Label htmlFor='email'>E-mail</Label>
                    <Input id='email' name='email' type='email' required/>
                <Label htmlFor='mensaje'>Mensaje</Label>
                    <Textarea id='mensaje' rows='5'  required/>
            </ContainerLabel>
            <div>
            <Btn >Enviar</Btn>
            </div>
            </FormContact>
        </Form>
    </>
  )
}

export default ContactForm