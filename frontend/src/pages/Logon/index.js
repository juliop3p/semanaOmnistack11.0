import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png'

import api from '../../services/api'



export default function Logon() {
    const [id, setId] = useState('')

    const history = useHistory()

    const handleLogin = async event => {
        event.preventDefault()

        try {
            const response = await api.post('/sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        } catch(err) {
            alert('Falha no Login, tente novamente!')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo Be The Hero"/>

                <form className="form" onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heroes" />
        </div>
    )
}
