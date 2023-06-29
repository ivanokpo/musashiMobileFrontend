import { useState } from "react";
import styled from "styled-components";
import { Button } from 'antd';



const Home = ({ backendUrl }: { backendUrl: any }) => {
    type DataObject = {
        id: string;
        quote: string;
        
      }[];
    
    const [quoteString, setQuoteString] = useState<any>([]);

   

    const getQuote = async () => {
        const randomId = Math.floor((Math.random() * 233) + 1)
        const api = await fetch(`${backendUrl}/${randomId}`);
        const quoteData = await api.json();
        //localStorage.setItem("quote", JSON.stringify(quoteData.data.quote));
        setQuoteString(quoteData);
        console.log(quoteString.data.quote)
      };


    return (
        <>
            <QuoteDiv>
                <h3>
                    {quoteString.data.quote}
                </h3>
            </QuoteDiv>
            <ButtonDiv>
            <Button type="primary" onClick={() => getQuote()}>Primary Button</Button>
            </ButtonDiv>
        </>
    )
}

const ButtonDiv: any = styled.div`
  margin-top: 20%;
  

  display: flex;

  justify-content: center;

  

  button:active {
    background: linear-gradient(60deg, #121212, #141414);
    color: white;
  }

  
`;
const QuoteDiv: any = styled.div`
  margin-top: 10%;
  

  display: flex;

  justify-content: center;

  

  button:active {
    background: linear-gradient(60deg, #121212, #141414);
    color: white;
  }

  
`;


export default Home;