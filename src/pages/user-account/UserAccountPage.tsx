import DefaultContainer from '@/layouts/DefaultContainer';
import UserAccountList from './components/UserAccountList';

export default function UserAccountPage() {
  return (
    <DefaultContainer title='User Account'>
      <UserAccountList />
    </DefaultContainer>
  );
}
