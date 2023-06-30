import styled from "@emotion/styled";

const Text = styled.p`
  background-color: #B7322C;
  color: #FFFFFF;
  padding: 15px;
  font-size: 18px;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;

`

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <Text>{ message }</Text>
    </div>
  )
}

export default ErrorMessage;