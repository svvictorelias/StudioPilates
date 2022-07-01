import styled from 'styled-components'
import studioImage from '../../Assets/Images/studio.png'

export const MainPage = styled.section`
  background-image: url('${studioImage}');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 88vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const LeftMainPage = styled.div`
  gap: 10px;
  padding-left: 10%;
  padding-top: 7%;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: white;
  background-color: #00000047;
  font-size: 140%;
  h1{
    margin-bottom: 5px;
  }
  button {
    margin-top: 5%;
    width: 20%;
    font-size: 1rem;
    border: none;
    :hover {
      a {
        color: white;
      }
    }
  }
`

export const RightCarrosel = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: #00000047;
  display: flex;
  align-items: center;
  justify-content: center;
`
