import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function App() {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [checked, setChecked] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleCheckbox = () => {
        setButtonDisabled(!buttonDisabled);
        setChecked(!checked);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (email === '') {
            alert('Proszę wskazać adres email!');
            return;
        }

        try {
            await emailjs.sendForm(
                process.env.REACT_APP_YOUR_SERVICE_ID,
                process.env.REACT_APP_YOUR_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_YOUR_PUBLIC_KEY
            );
            alert('Dziękujemy 😊, wiadomość została wysłana!');
            setName('');
            setEmail('');
            setMessage('');
            setChecked(!checked);
        } catch (error) {
            alert('Nie udało się, spróbuj jeszcze raz!');
        }
    };

    return (
        <div className="container">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <h2>FORMULARZ KONTAKTOWY</h2>
                <input
                    type="text"
                    className="input"
                    placeholder="Imię..."
                    name="user_name"
                    value={name}
                    onChange={handleNameChange}
                />
                <input
                    type="email"
                    className="input"
                    placeholder="E-mail..."
                    name="user_email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <textarea
                    className="textarea"
                    placeholder="Treść wiadomości..."
                    name="message"
                    value={message}
                    onChange={handleMessage}
                ></textarea>
                <div className="agreement">
                    <label className="form-control">
                        <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            checked={checked}
                            onClick={handleCheckbox}
                        />
                        <p>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych
                            osobowych w związku z realizacją zgłoszenia, polityka prywatności.
                        </p>
                    </label>
                </div>
                <button className="btn" type="submit" disabled={buttonDisabled}>
                    wyślij
                </button>
                <p>
                    Napisz do nas: <a href="mailto:email@example.com">email@example.com</a>
                </p>
            </form>
            <div className="background-light"></div>
            <div className="background-dark"></div>
        </div>
    );
}

export default App;
