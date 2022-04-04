import Header from '../../components/Header';
import AvatarImage from '../../assets/images/avatar.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  AvatarSection, Container, Content, Form, Title,
} from './style';

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
            <span>E-mail</span>
            <Input />
            <span>Username</span>
            <Input />

            <div className="password-container">
              <div className="password-input">
                <span>Password</span>
                <Input />
              </div>
              <div className="password-input">
                <span>Confirm password</span>
                <Input />
              </div>
            </div>

            <Button type="submit">Sign in</Button>
          </Form>
        </Content>
      </Container>
    </>
  );
}
