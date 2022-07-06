import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
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
  export const AvailableTeachers = styled.div`
  max-width: 100%;
  height: 300px;
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  overflow-x: auto;
  
  `