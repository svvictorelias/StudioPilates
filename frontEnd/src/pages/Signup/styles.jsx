import styled from 'styled-components'

export const StyleSignup = styled.div`
  color: var(--text-purple);
  background-color: var(--background);
  width: 100%;
  display: grid;
  height: 94vh;
  grid-template-columns: 350px 400px;
  align-items: center;
  justify-content: center;
`

export const StyleImg = styled.div`
  text-align: center;
  height: 370px;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
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
