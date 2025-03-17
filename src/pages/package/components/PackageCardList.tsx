import CirclePlusIcon from '@/components/icons/CirclePlusIcon';
import { Button } from 'antd';
import { useState } from 'react';
import CreatePakageModal from './CreatePakageModal';
import PackageCard from './PackageCard';

const PACKAGE_DATA = [
  {
    id: '1',
    packageName: 'Bronze Package',
    packageTime: 1,
    packageBonusTime: 0,
    packagePrice: 2000000,
  },
  {
    id: '2',
    packageName: 'Silver Package',
    packageTime: 3,
    packageBonusTime: 1,
    packagePrice: 6000000,
  },
  {
    id: '3',
    packageName: 'Gold Package',
    packageTime: 6,
    packageBonusTime: 3,
    packagePrice: 12000000,
  },
];

export default function PackageCardList() {
  const [isModalCreatePackageOpen, setIsModalCreatePackageOpen] = useState(false);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-end'>
        <Button
          type='primary'
          icon={<CirclePlusIcon className='size-5 text-white' />}
          className='flex items-center gap-2'
          onClick={() => setIsModalCreatePackageOpen(true)}>
          Create Package
        </Button>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {PACKAGE_DATA.map((packageData) => (
          <PackageCard key={packageData.id} packageData={packageData} />
        ))}
      </div>
      {isModalCreatePackageOpen && (
        <CreatePakageModal open={isModalCreatePackageOpen} setOpen={setIsModalCreatePackageOpen} />
      )}
    </div>
  );
}
