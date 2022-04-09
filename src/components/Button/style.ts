import { shade } from 'polished';
import styled from 'styled-components';
import { theme } from '../../theme';

const buttonColor = `${theme.colors.purple[800]}`;

export const Container = styled.button`
  background: ${buttonColor};
  border-radius: 10px;
  border: 0;
  width: 100%;
  height: 56px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  transition: background 0.3s;

  &:hover {
    background: ${shade(0.2, buttonColor)};
  }
`;
