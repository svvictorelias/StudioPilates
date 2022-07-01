import styled from 'styled-components'

export const Container = styled.footer`
  a {
    color: white;
    :hover {
      color: black;
    }
  }
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: var(--background);
  width: 100%;
  height: 6vh;
`
export const Icons = styled.div`
  font-size: 1.7rem;
  display: flex;
  gap: 30px;
`
