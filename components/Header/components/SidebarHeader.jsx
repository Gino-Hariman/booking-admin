import Badge from '@/components/Badge';
import { useAuth } from '@/context/AuthenticationContext';

const SidebarHeader = () => {
  const { user } = useAuth();
  return (
    <div className="hidden md:flex flex-col items-center py-8 space-y-3">
      <h4 className="text-md-4 font-semibold text-primary-600">
        Super Admin Panel
      </h4>
      <Badge title={user} />
    </div>
  );
};

export default SidebarHeader;
