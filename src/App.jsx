import styled from 'styled-components';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

const Container = styled.div`
display: flex;
flex-direction: row;
box-sizing: border-box;
height: 100%;
width: 100%;

@media (max-width: 768px) {
display: flex;
flex-direction: column;
box-sizing: border-box;
height: 100%;
width: 100%;
}`
;

function App() {
  return (
    <Container>
      <LeftContainer />
      <RightContainer />
    </Container>
  );
}

export default App;
