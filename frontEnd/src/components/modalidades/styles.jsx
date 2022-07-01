import styled from 'styled-components'

export const ContainerCard = styled.section`
margin-top: 5%;
`
export const Cards = styled.div`
margin-top: 30px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;

`
export const ImgCard = styled.img`
border-radius: 50%;
background-color: #fff;
width: 130px;
height: 130px;
display: flex;
align-items: center;
border: 3px solid var(--background);
justify-content: center;

`