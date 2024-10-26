import axios from "axios";
import { useEffect, useState } from "react"

interface ITransaction {
  id: number;
  title: string;
  value: string;
  status: 'Entrada' | 'Saída';
  data: string;
}

export default function History() {

  const [data, setData] = useState<ITransaction[]>([])

  useEffect(() => {
    axios.get("http://localhost:3000/transactions")
      .then(res => setData(res.data))
  }, [data, setData])

  return <>
    <ul className="historys">
      {data.map((transaction) => (
        <section className="history" key={transaction.id}>
          <div className="history-item credit">
            <div>{transaction.title}</div>
            <div className="history-item-money">R$ {transaction.value}</div>
            <div>{transaction.status}</div>
            <div>{transaction.data}</div>
          </div>
        </section>
      ))}
    </ul>
  </>
}
