import React from 'react';

function App() {
    return (
        <div className="container">
            <form className="contact-form">
                <h2>FORMULARZ KONTAKTOWY</h2>
                <input type="text" className="input" placeholder="Imię" />
                <input type="email" className="input" placeholder="e-mail" />
                <textarea className="textarea" placeholder="Wiadomość..."></textarea>
                <div className="agreement">
                    <label className="form-control">
                        <input type="checkbox" id="checkbox" name="checkbox" />
                        <p>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych
                            osobowych w związku z realizacją zgłoszenia, Polityka prywatności.
                        </p>
                    </label>
                </div>
                <button className="btn" type="submit">
                    wyślij
                </button>
            </form>
        </div>
    );
}

export default App;
