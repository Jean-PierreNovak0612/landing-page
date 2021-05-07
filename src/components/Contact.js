import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import '../css/Contact.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confirm, setConfirm] = useState('not-sent')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ri4oqmc', 'template_nbdbmo8', e.target, 'user_1UmZ4XzjHF4eiz5gzMPbv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setMessage('');
        setName('');
        setEmail('');

        setConfirm('sent')

        setTimeout(() => {
            setConfirm('not-sent');
        }, 2500)
    }

    return (
        <div className="contact">
            <form onSubmit={sendEmail}>
                <div className="inputs">
                    <label htmlFor="name" className="form-label">Puno ime:</label>
                    <input value={name} onChange={e => setName(e.target.value)} id="name" className="form-control" autoComplete="off" type="text" placeholder="John Doe" required="required" name="name" />
                    <label htmlFor="name" className="form-label">Puno ime:</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} id="email" className="form-control" autoComplete="off" type="email" placeholder="johndoe@gmail.com" required="required" name="email" />
                </div>
                <div className="inputs">
                    <label className="form-label">Poruka:</label>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control textarea" placeholder="Unesite svoju poruku" required="required" name="message" />
                </div>
                <div className={confirm}>Poslano!</div>
                <button type="submit" className="btn btn-primary submit">Pošalji</button>
            </form>
        </div>
    )
}

export default Contact;