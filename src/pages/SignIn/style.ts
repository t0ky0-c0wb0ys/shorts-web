import { shade } from 'polished';
import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  padding: 30px;
  height: 80%;
  background: ${theme.colors.gray[900]};
  border-radius: 10px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  margin-top: 25px;

  div + div {
    margin-top: 10px;
  }

  input {
    margin-top: 8px;
  }
`;

export const Divider = styled.div`
  margin-top: 25px;
  width: 100%;
  border: 1px solid ${theme.colors.gray[800]};
`;

const forgotPasswordColor = theme.colors.red[800];

export const ForgotPasswordLink = styled.a`
  margin: 15px 0px;
  display: flex;
  justify-content: end;
  color: ${forgotPasswordColor};
  transition: color 0.3s;
  font-size: 0.7rem;

  &:hover {
    color: ${shade(0.2, forgotPasswordColor)};
  }
`;

export const LoginSocialContainer = styled.div`
  margin: 20px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login-social-icon {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const backgroundColor = theme.colors.gray[700];
const textColor = theme.colors.txt;

export const LoginSocialButton = styled.button`
  width: 45%;
  display: flex;
  justify-content: center;

  color: ${textColor};
  font-size: 30px;
  border-radius: 10px;
  border: none;
  background: ${backgroundColor};
  padding: 10px;
  transition: background 0.3s;
  transition: color 0.3s;


  &:hover {
    background: ${shade(0.2, backgroundColor)};
    color: ${shade(0.2, textColor)};
  }
`;

export const DontHaveAccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 70px 0px 70px;

  span {
    font-size: 0.7rem;
  }
`;

const signButtonColor = theme.colors.green[900];

export const SignUpLink = styled.a`
  color: ${signButtonColor};
  transition: color 0.3s;
  justify-content: space-between;
  font-size: 0.7rem;

  &:hover {
    color: ${shade(0.2, signButtonColor)};
  }
`;
