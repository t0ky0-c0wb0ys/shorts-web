import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  padding: 0px 20px;
  width: 100%;

  border-bottom: 2px solid ${theme.colors.gray[800]};
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
  height: 40px;
  width: 40px;
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
