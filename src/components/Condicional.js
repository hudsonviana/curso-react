import { useState } from 'react';

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    const enviarEmail = (e) => {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail);
    }

    const limparEmail = (e) => {
        e.preventDefault();
        setUserEmail('');
    }
    
    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type="email" name="email" id="email" placeholder='Digite o seu email' 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit' onClick={enviarEmail}>Enviar email</button>
                <br />
                { userEmail && (
                    <div>
                        <p>O email do usuário é: { userEmail }</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                ) }
            </form>
        </div>
    );
}

export default Condicional;
