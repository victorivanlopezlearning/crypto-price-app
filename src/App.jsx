
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import CryptoInfo from './components/CryptoInfo';
import { hasData } from './helpers';
import ImageCrypto from './assets/img/image-crypto.png'

const Container = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFFFFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const App = () => {

  const [ currencies, setCurrencies ] = useState({});
  const [ cryptoData, setCryptoData ] = useState({});

  useEffect(() => {
    if(hasData(currencies)) {
      
      const getCurrentCryptoData = async () => {
        const { currency, crypto } = currencies;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
        
        const response = await fetch(url);
        const data = await response.json();

        setCryptoData(data.DISPLAY[crypto][currency]);
      }
      getCurrentCryptoData();
    }
  }, [currencies])
  

  return (
    <Container>
      <Image 
        src={ ImageCrypto }
        alt='Image Cryptos'
      />
      <div>
        <Heading>Cotiza tus Criptomonedas</Heading>
        <Form 
          setCurrencies={ setCurrencies }
        />

        {(Object.keys(currencies).length > 0) && <CryptoInfo /> }
      </div>
    </Container>
  )
}

export default App;
