import { shade } from 'polished';
import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  padding: 65px 30px 65px 30px;
  height: 80%;
  width: 580px;
  background: ${theme.colors.gray[900]};
  border-radius: 10px;
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  label {
    color: ${theme.colors.cyan[900]};
    margin-bottom: 12px;
  }

  input {
    display: none;

  }
`

export const Form = styled.form`
  margin-top: 10px;

  .input-container {
    display: flex;
    flex-direction: column;

    & + div {
      margin-top: 20px;
    }

    input {
      margin-top: 8px;
      background: transparent;
      border-radius: 10px;
      border: 0;
      background: ${theme.colors.gray[700]};
      padding: 18px;
    }
  }

  .password-container {
    display: flex;
    justify-content: space-between;


    input {
      max-width: 250px;
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      background: transparent;
      border-radius: 10px;
      border: 0;
      padding: 18px;
      background: ${theme.colors.gray[700]};
    }
  }
`

const buttonColor = `${theme.colors.purple[800]}`

export const Button = styled.button`
  margin-top: 60px;
  background: ${buttonColor};
  border-radius: 10px;
  border: 0;
  width: 100%;
  height: 56px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #FFF;
  transition: background 0.3s;

  &:hover {
    background: ${shade(0.2, buttonColor)};
  }
`

