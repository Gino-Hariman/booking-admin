import Container from '@/components/Container';
import { Navbar } from '@/components/Header';

const LoginLayout = ({ children }) => {
  return (
    <div className="bg-shade-BG">
      <Navbar />
      <Container
        title="Login"
        styles="flex flex-col max-w-md mx-auto min-h-screen items-center justify-center"
      >
        <h1 className="text-xl-1 font-bold mb-5 text-primary-500">Login</h1>
        {children}
      </Container>
    </div>
  );
};

export default LoginLayout;
