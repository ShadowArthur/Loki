import React from "react";
import styled from "styled-components";
import Title from "./components/Home/Title";
import Movie from "./components/Home/Movie";
import fundoImage from "./assets/fundo.png";

function App() {
  return (
    <Container>
      <Title/>
      <Movie/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${fundoImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export default App;
