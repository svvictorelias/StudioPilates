import styled from 'styled-components'


export const StyleContainer = styled.div`
  padding: 15px;
  height: 88vh;
  background-color: var(--text-purple);
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 400px 300px;
  justify-content: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  background-color: var(--color-primary);
  padding: 30px 30px;
  border-radius: 10px;
  color: var(--text-purple);
  a {
    color: var(--text-purple);
    text-decoration: underline;
  }
  button {
    width: 30%;
  }


`
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button{
    width: 45%;
    :first-child{
      color: var(--color-red);
      border-color: var(--color-red);
      
    }
  }

`
export const StyleImg = styled.div`
  text-align: center;
  height: 370px;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    margin-top: 1.5rem;
    color: var(--text-purple);
  }
  img {
    width: 80%;
  }
`
