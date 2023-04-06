import React from 'react'
import styled from 'styled-components'
import Sun from "../assets/sun.png"
import Storm from "../assets/storm.png"
import Hail from "../assets/hail.png"
import Cloud from "../assets/cloud.png"
import Snowflake from "../assets/snowflake.png"
import Background from "../assets/background.jpg"


const BigImg = styled.img`
width: 100px;
height: 100px;
`;

const SmallImg = styled.img`
width: 55px;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${Background});
background-repeat: no-repeat;
width: 100%;
height: 100vh;
background-size: cover;
`;

const FirstContain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 3em;        
`;

const FiveDays = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 70%;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0.5em;
padding: 1em;
margin-bottom: 2.5em;
border-right: 3px solid black;
`;


function RightContainer() {
    return (
        <Wrapper>
            <FirstContain>
                <h1>Gölbaşı, Ankara</h1>
                <BigImg src={Sun} alt="" />
                <p>6°</p>
                <p>Mostly Cloudy</p>
            </FirstContain>
            <FiveDays>
                <Container>
                    <p>Mon</p>
                    <SmallImg src={Storm} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Tue</p>
                    <SmallImg src={Hail} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Wed</p>
                    <SmallImg src={Sun} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Thur</p>
                    <SmallImg src={Cloud} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Fri</p>
                    <SmallImg src={Sun} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Sat</p>
                    <SmallImg src={Cloud} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Sun</p>
                    <SmallImg src={Snowflake} alt="" />
                    <p>22/16</p>
                </Container>
            </FiveDays>
        </Wrapper>
    )
}

export default RightContainer