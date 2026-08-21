import Aluno from "./components/Aluno";
import Dados from './components/Dados';
import Contador from "./components/Contador";

const App = () => {
  return (
    <>
      <Aluno nome="Fiap" idade="18" />
      <Dados usuario="Dev" email="dev@gmail.com" />
      <Contador/>
    </>
  )
}

export default App
