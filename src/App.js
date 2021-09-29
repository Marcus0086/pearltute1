import Nav from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    text-size-adjust: 100%;
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    user-select: none;
    background-color:#e5f0f1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ::-webkit-scrollbar {
      width: .5em;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d6dee1;;
      border-radius: .5rem;
      border: 6px solid transparent;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #a8bbbf;
    }
  }

  a {
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

`;
const Home = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Nav />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.1fr 0.75fr 0.15fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav"
    "main"
    "footer";
  color: white;
`;

export default Home;
