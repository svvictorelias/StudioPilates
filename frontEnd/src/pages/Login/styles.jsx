import styled from 'styled-components'

export const StyleLogin = styled.div`
  color: var(--text-purple);
  background-color: var(--background);
  width: 100%;
  display: grid;
  height: 94vh;
  grid-template-columns: 400px 350px;
  align-items: center;
  justify-content: center;
`
export const StyleContainerLogin = styled.div`
  gap: 20px;
  padding: 15px;
  height: 450px;
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
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
  }
  img {
    width: 80%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 15px;
`
