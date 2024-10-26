import { useState } from "react";
import Modal from "../Modal";

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
      <header className="header">
        <img id="logo" src="/images/logo-new2.png" alt="Logo" />
        <button  onClick={() => setOpen(!open)}>Nova Transação</button>
        <div className="">
          <Modal 
            isOpen={open}
            setOpen={setOpen}
            title="Nova transferência"
          />
        </div>
      </header>
  )
}