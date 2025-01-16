import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Tarefa/styles'

const EstiloGlobal = createGlobalStyle`
  * {
      margin:0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      font-optical-sizing: auto;
      font-weight: <weight>;
      font-style: normal;
      font-variation-settings: "wdth" 100;
      list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  font-weight: bold;
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
`

export const Campo = styled.input`
  border-radius: 8px;
  border-color: #666666;
  padding: 8px;
  background-color: #fff;
  color: #666666;
  font-weight: bold;
  width: 100%;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
