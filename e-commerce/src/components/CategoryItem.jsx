import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute ;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Tittle = styled.h1`
    color: white ;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    background-color: white;
    color: gray;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src = {item.img}></Image>
        <Info>
            <Tittle>{item.title}</Tittle>
            <Button>SHOP NOW</Button>
        </Info>

    </Container>
  )
}

export default CategoryItem