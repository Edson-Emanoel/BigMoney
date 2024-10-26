import { FormEvent, useState } from 'react';
import './style.css'
import axios from 'axios';
import { useNumberFormat } from '@react-input/number-format';

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

    const inputRef = useNumberFormat({
        locales: 'pt',
        format:"currency",
        currency:"BRL",
        maximumFractionDigits: 2,
    });

    const validar = (e: FormEvent) => {
        e.preventDefault();

        if(!titleValue){
            alert("Preecha o campo do título");
        } else if (!price) {
            alert("Preecha o campo do preço");
        } else if (!date) {
            alert("Preecha o campo de data");
        } else if (!category) {
            alert("Preecha o campo da categoria");
        } else if (!status) {
            alert("Preecha o campo de status")
        } else {
            axios.post("http://localhost:3000/transactions", {
                title: titleValue,
                value: price,
                category: category,
                status: status,
                data: date
            })
    
            alert("Cadastro foi feito com Sucesso!")

            setTitleValue("")
            setPrice("")
            setDate("")
            setCategory("")
            setStatus("")
        }

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
                        <input type="text" value={titleValue}  onChange={(e) => setTitleValue(e.target.value)} placeholder="Descricao " id="title" />
                        <input ref={inputRef} type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Preço" id="preco" />
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Data" id="preco" />
                        <select id="categoria" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Selecione uma Categoria</option>
                            <option value="Pago">Pago</option>
                            <option value="Á vencer">Á vencer</option>
                            <option value="Comida">Vencido(a)</option>
                        </select>

                        <div className="btn-group">
                            <button type='button' id="entrada" value="Entrada" onClick={(e) => setCategory(e.target.value)}>
                                <i className="fa-regular fa-circle-up"></i>
                                Entrada
                            </button>

                            <button type='button' id="saida" value="Saída" onClick={(e) => setCategory(e.target.value)}>
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