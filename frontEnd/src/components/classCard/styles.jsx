import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 10px 10px 15px rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 15px 0px;
  width: 90%;
  background-color: #ffffff3e;
`

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`
export const Item = styled.div`
  background-color: var(--text-purple);
  margin: 10px;
  padding: 10px;
  width: 30%;
  border-radius: 16px;
  flex: none;
`
export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Info = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  span {
    display: block;
    text-align: center;
    padding: 5px;
    border-radius: 10px;
  }
  button{
    :disabled{
      cursor: not-allowed;
    }
  }
  .name {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
  }
  .statusTextCheck {
    font-weight: bold;
    font-size: 1rem;
    color: #e81a5d;
  }
  .statusText{
    font-weight: bold;
    font-size: 1rem;
    color: var(--color-green-light);
  }
  .status {
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: #ff7e3b;
  }

`
export const Buttons = styled.div`
  svg {
    cursor: pointer;
  }
  width: 100%;
  font-size: 2.3rem;
  gap: 35px;
  display: flex;
  justify-content: center;
`
