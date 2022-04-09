import Container from '@/components/Container';
import LoginForm from '@/components/Form/LoginForm';
import LoginLayout from '@/layout/LoginLayout';

const Login = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
    // <Container title="Login" styles="mx-auto bg-primary-500">
    // <h1>Login</h1>
    // </Container>
  );
};

export default Login;

Login.layout = LoginLayout;
