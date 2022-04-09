import Badge from '@/components/Badge';

const SidebarHeader = () => {
  return (
    <div className="hidden md:flex flex-col items-center py-8 space-y-3">
      <h4 className="text-md-4 font-semibold text-primary-600">
        Super Admin Panel
      </h4>
      <Badge title="General Affair" />
    </div>
  );
};

export default SidebarHeader;
