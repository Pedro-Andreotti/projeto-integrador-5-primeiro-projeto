import './App.css'
import Aluno from './components/Aluno'
import Titulo from './components/Titulo'

function App() {
  function alertmsg(){
    alert("Alerta de botão clicado")
}
  return (
    <><><div>
      <h1>Minha Aplicação</h1>
      <Titulo />
    </div>
      <div>
        <h1>Aluno:</h1>
        <Aluno />
      </div></>
      <div>
        <button onClick={alertmsg}>Clique Aqui</button>
      </div>
      </>
  )
}

export default App
