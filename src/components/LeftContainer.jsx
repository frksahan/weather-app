import React from 'react'
import Logo from "../assets/logo.png"
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
border-right: 3px solid black;
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
  }
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
  }
  padding-left: 15px;
`;

const P = styled.p`
  font-size: 1.5em;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const A = styled.a`
  margin-top: 20em;
  text-decoration: none;
`;

const Title = styled.p`
font-size: 40px;
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

