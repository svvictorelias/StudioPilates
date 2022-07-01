import styled from 'styled-components'

const StyleContainerResetPass = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 15px;
`
export default{StyleContainerResetPass, Form}