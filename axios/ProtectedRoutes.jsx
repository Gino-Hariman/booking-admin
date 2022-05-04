import { useAuth } from '@/context/AuthenticationContext';
import { useRouter } from 'next/router';

const { LoadingModal } = require('@/components/Loading');

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  if (isLoading || (!isAuthenticated && router.pathname !== '/auth/login')) {
    return <LoadingModal title="Loading..." />;
  }
  return children;
};

export default ProtectedRoutes;
