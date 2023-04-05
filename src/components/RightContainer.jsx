import React from 'react'
import Sun from "../assets/sun.png"
import Storm from "../assets/storm.png"
import Hail from "../assets/hail.png"
import Cloud from "../assets/cloud.png"
import Snowflake from "../assets/snowflake.png"
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`;
const Container = styled.div`
background-color:red;`

function RightContainer() {
    return (
        <Wrapper>
            <div>
                <h1>Gölbaşı, Ankara</h1>
                <img src={Sun} alt="" />
                <p>6°</p>
                <p>Mostly Cloudy</p>
            </div>
            <div>
                <Container>
                    <p>Mon</p>
                    <img src={Storm} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Tue</p>
                    <img src={Hail} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Wed</p>
                    <img src={Sun} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Thur</p>
                    <img src={Cloud} alt="" />
                    <p>22/16</p>
                </Container>
                <Container>
                    <p>Fri</p>
                    <img src={Snowflake} alt="" />
                    <p>22/16</p>
                </Container>
            </div>
        </Wrapper>
    )
}

export default RightContainer