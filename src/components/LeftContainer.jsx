import React from 'react'
import Logo from "../assets/logo.png"
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
border-right: 3px solid black;
&:hover {
  width: 120%;
  transition: all 1.5s;
}
`;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
padding-top: 4em;
`;

const Img = styled.img`
width: 100px;
height: 100px;
`;

const Title = styled.p`
font-size: 40px;
`;

const P = styled.p`
  font-size: 1.5em;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const Input = styled.input`
  display: flex;
  color: white;
  background-color: white;
  border: 2px solid black;
  font-size: 16px;
  margin: 10px;
  height: 40px;
  border-radius: 20px;
  width: 50%;
  font-weight: 600;
  text-transform: capitalize;
  &:hover {
    border: 2px solid  red;
    transition: all 0.25s;
  }
  padding-left: 15px;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  border: 2px black solid;
  font-size: 16px;
  margin: 10px;
  height: 40px;
  border-radius: 20px;
  width: 50%;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid red;
    transition: all 0.25s;
  }
`;

const A = styled.a`
  margin-top: 20em;
  text-decoration: none;
  color: red;
  font-size: 16px;
`;

function LeftContainer() {
  return (
    <Wrapper>
      <Container>
        <Img src={Logo} />
        <Title>Weather<b>App</b></Title>
        <P>Choose a City</P>
        <Input type="text" placeholder='Enter City Name' />
        <Button>SEE WEATHER!</Button>
        <A href="https://www.linkedin.com/in/sahanomerfaruk/" target="_blank">Contact Me</A>
      </Container>
    </Wrapper>
  )
}

export default LeftContainer

