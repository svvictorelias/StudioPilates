import styled from 'styled-components'

export const StyleContainer = styled.div`
  padding: 15px;
  height: 88vh;
  background-color: var(--text-purple);
  width: 100%;
  display: grid;
  align-items: center;
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
  .Professor,
  .Modalidades,
  .Dados {
    gap: 30px;
    display: flex;
    align-items: center;
  }

`
