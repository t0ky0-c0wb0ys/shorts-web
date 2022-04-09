import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  Container,
  Content,
  Form,
  Title,
  Divider,
  LoginSocialContainer,
  LoginSocialButton,
  ForgotPasswordLink,
  SignUpLink,
  DontHaveAccountContainer,
} from './style';

export default function SignIn() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title>LOGIN</Title>

          <Form>
            <div>
              <span>Username/E-mail</span>
              <Input />
            </div>

            <div>
              <span>Password</span>
              <Input type="password" />
            </div>

            <ForgotPasswordLink href="/forgot-password">Forgot password</ForgotPasswordLink>

            <Button type="submit">Sign in</Button>

            <Divider />
          </Form>

          <LoginSocialContainer>
            <span>Or continue with</span>

            <div className="login-social-icon">
              <LoginSocialButton>
                <FaGoogle />
              </LoginSocialButton>
              <LoginSocialButton>
                <FaFacebook />
              </LoginSocialButton>
            </div>
          </LoginSocialContainer>

          <DontHaveAccountContainer>
            <span>Don&apos;t have an account?</span>
            <SignUpLink href="/sign-up">Sign up</SignUpLink>
          </DontHaveAccountContainer>
        </Content>
      </Container>
    </>
  );
}
