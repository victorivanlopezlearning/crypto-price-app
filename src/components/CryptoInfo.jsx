import styled from "@emotion/styled";

const Container = styled.div`
  color: #FFFFFF;
  font-family: 'Lato', sans-serif;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 15px;
    text-align: start;
  }
  span {
    font-weight: 700;
  }
`

const Price = styled.p`
  font-size: 33px;
  margin: 20px 0;
  @media (min-width: 1200px) {
    font-size: 30px;
  }
`

const Info = styled.p`
  font-size: 17px;
  @media (min-width: 768px) {
    margin: 10px 0;
  }
  
`

const ImageCrypto = styled.img`
  display: block;
  width: 120px;
`


const CryptoInfo = ({ cryptoData }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cryptoData;

  return (
    <Container>
      <ImageCrypto src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Criptomoneda" />

      <div>
        <Price>El precio actual es: <span>{ PRICE }</span></Price>
        <Info>Precio más alto del día: <span>{ HIGHDAY }</span></Info>
        <Info>Precio más bajo del día: <span>{ LOWDAY }</span></Info>
        <Info>Variación últimas 24 horas: <span>{ CHANGEPCT24HOUR }</span></Info>
        <Info>Última actualización: <span>{ (LASTUPDATE === 'Just now') ? 'Justo ahora' : LASTUPDATE }</span></Info>
      </div>
    </Container>
  )
}

export default CryptoInfo;