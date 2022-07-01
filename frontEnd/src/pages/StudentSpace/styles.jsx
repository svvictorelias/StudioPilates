import styled from 'styled-components'
import studioImage2 from '../../Assets/Images/studio2.png'

export const Container = styled.div`
  background-image: url('${studioImage2}');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 88vh;
  color: white;
  display: grid;
  grid-template-areas:
    'Done ToDo'
    'MarkClass MarkClass';
  grid-template-rows: 80% 20%;
  grid-template-columns: 50% 50%;
`
export const ClassDone = styled.section`
  padding-top: 20px;
  gap: 2rem;
  text-align: center;
  width: 100%;
  background-color: #00000047;
  grid-area: Done;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ClassToDo = styled.section`
  padding-top: 20px;
  gap: 2rem;
  text-align: center;
  width: 100%;
  background-color: #00000047;
  grid-area: ToDo;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MarkClass = styled.section`
  padding: 0 2rem;
  grid-area: MarkClass;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #00000047;
  :hover {
    color: white;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  a {
    color: var(--background);
  }
`
