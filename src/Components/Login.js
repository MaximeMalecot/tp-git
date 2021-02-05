import React, { useState } from 'react';

export default function Login(){
    const [login, setLogin] = useState("");
    const [pswd, setPswd]   = useState("");
    const [isConnected, setConnected] = useState(false);

    const connect = () => {
        if(login === 'root' && pswd === 'root'){
            setConnected(true);
        }else{
            window.alert("Nom d'utilisateur ou mot de passe incorrect !");
        }
    }

    return(
        <div style={{ padding: 20, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            {isConnected ?
            <h1>Vous êtes connecté !</h1>
                :
            <div style={{width: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <label>Username</label>
                <input onChange={(e)=> setLogin(e.target.value)}/>
                <label>Password</label>
                <input type="password"onChange={(e) => setPswd(e.target.value)}/>
                <button onClick={() => connect()}>Se connecter</button>
            </div>
            }
        </div>
    )
}