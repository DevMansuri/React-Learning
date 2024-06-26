import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height : 60px;
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    align-items: center;
    justify-content :space-between;

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin: 25px;
    padding: 5px;

`
const Input = styled.input`
border: none;
    
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
flex: 1;`

const MenuItem = styled.div`
    font-size: 14px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input></Input>
                    <Search></Search>  
                </SearchContainer>

             </Left>
            <Center><Logo>Laddo</Logo></Center>
            <Right> 
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )

}
export default Navbar