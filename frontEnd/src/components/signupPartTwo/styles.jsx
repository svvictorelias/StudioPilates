import styled from "styled-components";

export const StyleContainerSignup = styled.div`
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 15px;
`
export const Actions = styled.div`
  padding-top: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    color: var(--background);
    background-color: white;
    border: 2px solid var(--background);
    border: none;
    font-weight: 700;
    width: 40%;
    height: 39px;
    :hover{
      background-color: var(--background);
      color: white;
    }
  }
`
export const StreetInput = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  gap: 10px;
  input {
    width: 100%;
  }
`
export const CityInput = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.3fr 0.2fr;
  gap: 10px;
  input {
    width: 100%;
  }
`