import React from 'react'
import styled from 'styled-components'
import Sun from "../assets/sun.png"
import Storm from "../assets/storm.png"
import Hail from "../assets/hail.png"
import Cloud from "../assets/cloud.png"
import Snowflake from "../assets/snowflake.png"
import Background from "../assets/background.jpg"

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-image: linear-gradient(rgba(255, 255, 255, 0.6), rgba(125, 144, 252, 0.5)), url(${Background});
background-repeat: no-repeat;
width: 100%;
height: 100vh;
background-size: cover;

&:hover {
  width: 110%;
  transition: all 1.5s;
}
`;

const FirstContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 40px;
`;

const H1 = styled.h1`
margin: 20px 0px;
`;

const BigImg = styled.img`
width: 100px;
height: 100px;
&:hover 
{
transition: all 1s;
transform: rotate(360deg);
}
`;

const P = styled.p`
margin: 10px 0px;
`;

const FiveDays = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 73%;
cursor: pointer;
`;

const SmallImg = styled.img`
width: 90px;
padding: 10px;
&:hover {
transition: all 1s;
transform: rotate(360deg);
}
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 30px;
margin-bottom: 2.5em;
border-right: 3px solid black;
&:nth-child(4) {
    border: none;
}

&:last-child {
    border: none;
}

&:hover {
  background-color: rgba(255, 255, 255, 0.37);
  transition: all 0.25s;
  cursor: pointer;
}
`;

function RightContainer() {
    return (
        <Wrapper>
            <FirstContainer>
                <H1>Gölbaşı, Ankara</H1>
                <BigImg src={Sun} alt="" />
                <P>6°</P>
                <h2>Mostly Cloudy</h2>
            </FirstContainer>
            <FiveDays>
                <Container>
                    <P>Mon</P>
                    <SmallImg src={Storm} alt="" />
                    <P>22/16</P>
                </Container>
                <Container>
                    <P>Tue</P>
                    <SmallImg src={Hail} alt="" />
                    <P>22/16</P>
                </Container>
                <Container>
                    <P>Wed</P>
                    <SmallImg src={Sun} alt="" />
                    <P>22/16</P>
                </Container>
                <Container>
                    <P>Thur</P>
                    <SmallImg src={Cloud} alt="" />
                    <P>22/16</P>
                </Container>
                <Container>
                    <P>Fri</P>
                    <SmallImg src={Sun} alt="" />
                    <P>22/16</P>
                </Container>
                <Container>
                    <P>Sat</P>
                    <SmallImg src={Cloud} alt="" />
                    <P>22/16</P>
                </Container>
                <Container>
                    <P>Sun</P>
                    <SmallImg src={Snowflake} alt="" />
                    <P>22/16</P>
                </Container>
            </FiveDays>
        </Wrapper>
    )
}

export default RightContainer