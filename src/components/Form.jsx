import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ErrorMessage from "./ErrorMessage";
import useSelectCurrency from '../hooks/useSelectCurrency';
import { currencies } from "../data/currencies";

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFFFFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color .3s ease;
  margin: 10px 0 25px 0;

  &:hover {
    background-color: #7A7DFE;
  } 
`

const Form = ({ setCurrencies }) => {

  const [ cryptos, setCryptos ] = useState([]);
  const [ error, setError ] = useState(false);

  const [ currency, SelectCurrency ] = useSelectCurrency('Elige tu Moneda', currencies); // [ currency, SelectCurrency ] se pueden nombrar com osea ya que se retorna por indice del custom hook y no por nombre
  const [ crypto, SelectCryptos ] = useSelectCurrency('Elige tu Criptomoneda', cryptos);

  useEffect( () => {
    const getCryptos = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const response = await fetch(url);
      const data = await response.json();
      
      createCryptosFromData( data.Data );
    }
    getCryptos();
  }, [])

  const createCryptosFromData = ( data ) => {
    const cryptos = data.map( crypto => {
      const { Name: id, FullName: name } = crypto.CoinInfo;
      
      const objCryptos = { id, name }
      return objCryptos;
    })

    setCryptos(cryptos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if([currency, crypto].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    setCurrencies({
      currency,
      crypto,
    })
  }

  return (
    <>
      { error && <ErrorMessage message='Ambos campos son obligatorios' />}
      <form
        onSubmit={ handleSubmit }
      >

        <SelectCurrency />
        <SelectCryptos />


        <InputSubmit 
          type="submit" 
          value="Cotizar" 
        />
      </form>
    </>
  )
}

export default Form;