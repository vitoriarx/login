import { useState } from 'react'
import './App.css'

function App() {
  const [ inputValue, setInputValue] = useState('');
  const [submittedvalue, setSubmittedValue] = useState('');

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <>
    <div className='container'>
        <h1>Página de Login</h1>

        <input type="text" name="usuário" id="usuario" placeholder='Usuário' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <br></br>
        
        <input required type="password" name="senha" id="senha" placeholder='Senha'  /><br></br>

        <button onClick={handleSubmit}>Cadastrar usuário</button>

        <p>Usuário {submittedvalue} cadastrado</p>
      </div> 
    </>
  )
}

export default App
