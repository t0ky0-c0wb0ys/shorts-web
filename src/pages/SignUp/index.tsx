import Header from "../../components/Header";
import { AvatarSection, Button, Container, Content, Form, Title } from "./style";
import AvatarImage from '../../assets/images/avatar.svg';

export default function SignUp() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>REGISTER</Title>

          <AvatarSection>
            <label htmlFor="avatar">Select your avatar</label>
            <input type="file" name="avatar" id="avatar" />
            <img src={AvatarImage} alt="" />
          </AvatarSection>

          <Form>
            <div className="input-container">
              <span>E-mail</span>
              <input type="text" />
            </div>

            <div className="input-container">
              <span>Username</span>
              <input type="text" />
            </div>

            <div className="password-container">
              <div>
                <span>Password</span>
                <input type="text" />
              </div>
              <div>
                <span>Confirm password</span>
                <input type="text" />
              </div>
            </div>

            <Button>Sign in</Button>
          </Form>
        </Content>
      </Container>
    </>
  )
}
