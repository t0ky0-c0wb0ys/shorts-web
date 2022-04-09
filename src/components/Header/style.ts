import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.header`
  height: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 43px 0px 43px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;

  span {
    margin-left: 13px;

    strong {
      color: ${theme.colors.purple[800]};
    }
  }
`;

export const Logo = styled.div`
  height: 57px;
  width: 57px;
  border-radius: 50%;
  background: ${theme.colors.purple[800]};
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${theme.colors.gray[800]};
`;

export const LoggedAreaContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 15px;
  }
`;
