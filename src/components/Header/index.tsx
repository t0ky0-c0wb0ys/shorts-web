import { Container, Divider, LoggedAreaContainer, Logo, LogoContainer } from "./style"
import { FaArrowCircleRight } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <Container>
        <LogoContainer>
          <Logo />
          <span>
            Shorts app
            <strong>.</strong>
          </span>
        </LogoContainer>

        <LoggedAreaContainer>
          <span>Go to videos</span>
          <FaArrowCircleRight size={20}/>
        </LoggedAreaContainer>
      </Container>

      <Divider />
    </>
  )
}
