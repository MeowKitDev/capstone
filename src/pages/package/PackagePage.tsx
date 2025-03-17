import DefaultContainer from '@/layouts/DefaultContainer';
import PackageCardList from './components/PackageCardList';

export default function PackagePage() {
  return (
    <DefaultContainer title='Package'>
      <PackageCardList />
    </DefaultContainer>
  );
}
