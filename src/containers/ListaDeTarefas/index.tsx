import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

import { RootReducer } from '../../store'

// const tarefas = [
//   {
//     titulo: 'Estudar Typescript',
//     descricao: 'Ver a aula 3 da EBAC',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   },
//   {
//     titulo: 'Pagar a conta de internet',
//     descricao: 'Baixar fatura no gmail',
//     prioridade: enums.Prioridade.URGENTE,
//     status: enums.Status.CONCLUIDA
//   },
//   {
//     titulo: 'Ir para a academia',
//     descricao: 'Fazer treino B',
//     prioridade: enums.Prioridade.IMPORTANTE,
//     status: enums.Status.PENDENTE
//   }
// ]

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
