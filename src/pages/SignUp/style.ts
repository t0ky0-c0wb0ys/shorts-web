import { shade } from 'polished';
import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  padding: 30px 30px;
  width: 580px;
  background: ${theme.colors.gray[900]};
  border-radius: 10px;

  @media (max-width: 575px) {
    height: 100%;
    padding: 110px 10px;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const selectAvatarColor = theme.colors.cyan[900];

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  label {
    color: ${selectAvatarColor};
    margin-bottom: 12px;
    transition: color 0.3s;
  }

  label:hover {
    cursor: pointer;
    color: ${shade(0.2, selectAvatarColor)};
  }

  input {
    display: none;
  }

  @media (max-width: 575px) {
    img {
      display: none;
    }
  }
`;

export const Form = styled.form`
  margin-top: 10px;

  input {
    margin-bottom: 15px;
  }

  button {
    margin-top: 30px;
  }

  .password-container {
    display: flex;
    justify-content: space-between;

    .password-input {
      width: 49%;
    }
  }

  @media (max-width: 575px) {
    .password-container {
      flex-direction: column;

      .password-input {
        width: 100%;
      }
    }
  }
`;
