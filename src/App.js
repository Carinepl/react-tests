import './App.css'
import HelloWord from './componet/HelloWord'

function App() {
const name = 'Carine'
const newName = name.toUpperCase()

function sum(a, b) {
  return a + b
}

  const url = "https://via.placeholder.com/150"


  return (
    <div className="App">
      <h2>Alternado JSX</h2>
      <p>Olá {name} </p>
      <p>Olá {newName}</p>
      <p>Minha idade: {sum(15, 15)}</p>
      <img src={url} alt="minha imagem"/>
      <HelloWord/>
    </div>
  )
}

export {App}
