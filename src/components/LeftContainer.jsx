import React from 'react'
import Logo from "../assets/logo.png"
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vh;
height: 100vh;
border-right: 3px solid black;
padding-top: 3.5em;
`;

const Img = styled.img`
width: 100px;
height: 100px;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  font-size: 1.5em;
  padding: 0.25em;
  border: 2px solid black;
  border-radius: 12px;
  width: 50%;
  cursor: pointer;
`;

const Input = styled.input`
  color: white;
  background-color: white;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em;
  border: 2px solid black;
  border-radius: 12px;
  width: 50%;
`;

const P = styled.p`
  font-size: 1.5em;
  padding-top: 1em;
`;

const A = styled.a`
  margin-top: 20em;
  text-decoration: none;
`;


function LeftContainer() {
    return (
        <Wrapper>
            <Img src={Logo} />
            <h1>Weather<b>App</b></h1>
            <P>Choose a City</P>
            <Input type="text" placeholder='Enter City Name' />
            <Button>SEE WEATHER!</Button>
            <A href="https://www.linkedin.com/in/sahanomerfaruk/">Contact Me</A>
        </Wrapper>
    )
}

export default LeftContainer

