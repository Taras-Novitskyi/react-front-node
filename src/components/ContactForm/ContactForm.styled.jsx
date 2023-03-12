import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px;
  margin: 0 auto;
  font-size: 16px;
  border: 1px solid rgb(222, 222, 222);
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
  margin-top: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 120px;
  height: 28px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: rgb(230, 230, 230);

  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0px 2px 3px 0px rgba(62, 118, 120, 1);
  transition: transform 100ms ease-in-out;

  :hover {
    box-shadow: 1px 3px 3px 0px rgba(150, 150, 150, 1);
    transform: translate(-1px, -1px);
  }
`;
