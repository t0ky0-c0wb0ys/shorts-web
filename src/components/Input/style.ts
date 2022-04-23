import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.input`
  margin-top: 10px;
  width: 100%;
  color: ${theme.colors.txt};

  border-radius: 10px;
  border: 2px solid ${theme.colors.gray[700]};
  background: ${theme.colors.gray[700]};
  padding: 18px;

  &:focus {
    border: 2px solid ${theme.colors.purple[800]};
  }
`;
