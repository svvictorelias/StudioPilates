import styled from 'styled-components'

export const StyleContainer = styled.div`
  padding: 15px;
  height: 88vh;
  background-color: var(--text-purple);
  width: 100%;
  display: grid;
  grid-template-columns: 20% 30%;
  align-items: center;
  justify-content: center;
`
export const StyleImg = styled.div`
  text-align: center;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: var(--text-purple);
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    margin-top: 1.5rem;
  }
  img {
    width: 80%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
  background-color: var(--color-primary);
  padding: 30px 0px;
  border-radius: 10px;
  color: var(--text-purple);
  a {
    color: var(--text-purple);
    text-decoration: underline;
  }
  button {
    width: 20%;
  }
  .Date {
    width: 250px;
    gap: 30px;
    display: flex;
    align-items: center;
    button{
      width: 100%;
    }
  }
`
export const AvailableClasses = styled.div`
max-width: 100%;
height: 300px;
display: grid;
flex-direction: row;
grid-template-columns: 1fr 1fr;
gap: 10px;
overflow-x: auto;

`