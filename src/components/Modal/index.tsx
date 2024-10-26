import { FormEvent, useState } from 'react';
import './style.css'
import axios from 'axios';

interface IModal{
    isOpen: boolean;
    title: string;
    setOpen: (isOpen: boolean) => void;
}

export default function Modal( { isOpen, setOpen, title }: IModal ){
    const [titleValue, setTitleValue] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Entrada");

    const validar = (e: FormEvent) => {
        e.preventDefault();

        axios.post("http://localhost:3000/transactions", {
            title: titleValue,
            value: price,
            category: category,
            status: status,
            data: date
        })

        alert("Cadastro foi feito com Sucesso!")
    }

    if(isOpen){
        return(
            <div className='modal'>
                <header className='form-header'>
                    <h2>{title}</h2>
                    
                    <button id="fechar" onClick={() => setOpen(!isOpen)} > X </button>
                </header>
                <main>
                    <form className='form-modal'>
                        <input type="text" value={titleValue}  onChange={(e) => setTitleValue(e.target.value)} placeholder="Descricao " id="titlericao" />
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preco " id="preco" />
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Data" id="preco" />
                        <select id="categoria" value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Selecione uma Categoria</option>
                            <option value="Aluguel">Aluguel</option>
                            <option value="Comida">Comida</option>
                            <option value="Compras">Compras</option>
                        </select>

                        <div className="btn-group">
                            <button type='button' id="Entrada" value="Entrada" onClick={(e) => setStatus(e.target.value)}>
                                <i className="fa-regular fa-circle-up"></i>
                                Entrada
                            </button>

                            <button type='button' id="Saida" value="Saída" onClick={(e) => setStatus(e.target.value)}>
                                <i className="fa-regular fa-circle-down"></i>
                                Saída
                            </button>
                        </div>
                        <button id="cadastrar" onClick={validar}>Cadastrar</button>
                    </form>
                </main>
            </div>
        )
    }
}