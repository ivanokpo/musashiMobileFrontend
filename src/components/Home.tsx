import { useState } from "react";
import styled from "styled-components";

const Home = ({ backendUrl }: { backendUrl: any }) => {

//state variable for quote string
  const [quoteString, setQuoteString] = useState<string | null>("");

  //function that retrieves quote from backend, through a get request
  const getQuote = async () => {
    const randomId = Math.floor(Math.random() * 233 + 1);
    const api = await fetch(`${backendUrl}/${randomId}`);
    const quoteData = await api.json();
    setQuoteString(quoteData.data.quote);
    console.log(quoteString);
  };

  return (
    <>
      <Page class="parent">
        <link
          href="https://fonts.cdnfonts.com/css/ruthen-back"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/haroopath"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/calligraphy-2"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/cleon-2" rel="stylesheet" />

        <Title className="child">
          <h1>Musashi Daily</h1>
        </Title>
        <QuoteDiv className="child">
          <p>{quoteString}</p>
        </QuoteDiv>
        <BackgroundDiv className="child">
          <h2>{quoteString}</h2>
        </BackgroundDiv>
        <ButtonDiv className="child">
          <Button onClick={() => getQuote()}>Get Quote</Button>
        </ButtonDiv>
      </Page>
    </>
  );
};

const ButtonDiv: any = styled.div`
  margin-top: 10%;

  display: flex;
  position: relative;
  justify-content: center;
`;

const Button: any = styled.button`
  border: none;
  transition-duration: 0.5s;
  margin-top: 5%;
  cursor: pointer;
  background-color: transparent;
  color: grey;
  opacity: 0.5;
  height: 50px;
  width: 200px;
  font-family: "Cleon", sans-serif;
  font-size: 1.5em;

  &:hover {
    border: 2px solid #ffdfba;
    border-radius: 5rem;
    color: #ffdfba;
    opacity: 1;
  }
`;
const QuoteDiv: any = styled.div`
  margin-top: 10%;
  position: absolute;
  width: calc(100% - 50px);
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 2rem;
  padding-top: 0.1rem;
  button:active {
    background: linear-gradient(60deg, #121212, #141414);
    color: white;
  }

  p {
    color: #ffdfba;
    font-size: 2rem;
    text-align: center;
    font-family: "Cleon", sans-serif;
  }
`;

const BackgroundDiv: any = styled.div`
  margin-top: 5%;

  position: fixed;
  width: calc(100% - 50px);
  display: static;

  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.1rem;

  h2 {
    color: #ffdfba;
    opacity: 0.02;
    font-size: 10rem;
    text-align: center;
    top: 70px;
    font-family: "Calligraphy wet", sans-serif;
  }
`;
const Title: any = styled.div`
  position: relative;
  text-align: center;
  margin-top: 3%;
  margin-bottom: 1%;
  transition-duration: 0.5s;
  h1 {
    color: #ffdfba;
    font-size: 5rem;
    opacity: 0.2;
    font-family: "Haroopath", sans-serif;
  }
  &:hover {
    opacity: 1;
  }
`;

const Page: any = styled.div``;

export default Home;
