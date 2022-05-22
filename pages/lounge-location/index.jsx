import {
  TableBookingSchedule,
  TableLoungeLocation,
} from '@/components/Tables/LoungeLocation';

import AdminLayout from '@/layout/AdminLayout';

import React from 'react';
import { toast } from 'react-toastify';

toast.configure();
const LoungeLocation = () => {
  return (
    <div className="space-y-8">
      <TableLoungeLocation />
      <TableBookingSchedule />
    </div>
  );
};

LoungeLocation.layout = AdminLayout;

export default LoungeLocation;
