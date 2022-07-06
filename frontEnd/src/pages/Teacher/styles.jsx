import styled from 'styled-components'

export const StyleContainer = styled.div`
  padding: 15px;
  height: 88vh;
  background-color: var(--text-purple);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LabelActions = styled.div`
  background-color: var(--color-primary);
  border-radius: 10px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px solid var(--text-purple);
  h1{
    color: var(--text-purple);
    padding-bottom: 10px;
  }
  .buttons{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`