import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    const handleNewIncident = async event => {
        event.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch(err) {
            alert('Erro ao cadastrar caso, tente novamente!')
        }

    }

    return (
        <div>
            <div className="new-incident-container">
                <div className="content">
                    <section>
                        <img src={logoImg} alt="Logo Be The Hero"/>
                        <h1>Cadastrar novo caso</h1>
                        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                        <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color="#E02041" />
                            Voltar para home
                        </Link>
                    </section>

                    <form onSubmit={handleNewIncident}>
                        <input 
                            type="text" 
                            placeholder="Título do caso" 
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                        />
                        <textarea
                            type="email" 
                            placeholder="Descrição" 
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        />
                        <input 
                            type="number" 
                            placeholder="Valor em reais" 
                            value={value}
                            onChange={event => setValue(event.target.value)}
                        />

                        <button className="button">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
