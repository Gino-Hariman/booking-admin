import Container from '@/components/Container';
import LoginForm from '@/components/Form/LoginForm';
import LoginLayout from '@/layout/LoginLayout';

const Login = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default Login;

Login.layout = LoginLayout;
