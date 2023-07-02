
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Form from './components/Form';
import CryptoInfo from './components/CryptoInfo';
import Spinner from './components/Spinner';
import { hasData } from './helpers';
import ImageCrypto from './assets/img/image-crypto.png'

const Container = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1200px) {
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
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if(hasData(currencies)) {
      
      const getCurrentCryptoData = async () => {
        setLoading(true);
        setCryptoData({});
        
        const { currency, crypto } = currencies;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
        
        const response = await fetch(url);
        const data = await response.json();

        setCryptoData(data.DISPLAY[crypto][currency]);
        setLoading(false);
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

        { loading && <Spinner /> }
        { hasData(cryptoData) && <CryptoInfo cryptoData={ cryptoData } /> }
      </div>
    </Container>
  )
}

export default App;
