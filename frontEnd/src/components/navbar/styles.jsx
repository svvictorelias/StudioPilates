import styled from 'styled-components';

export const NavBar = styled.div`
  background-color: var(--background);
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  color: white;
  a {
    color: white;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    a {
      margin-left: 15px;
      :last-child {
        margin-right: 20px;
      }
    }
  }
`;
