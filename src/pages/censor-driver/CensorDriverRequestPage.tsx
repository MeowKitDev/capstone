import DefaultContainer from '@/layouts/DefaultContainer';
import CensorDriverRequestList from './components/CensorDriverRequestList';

export default function CensorDriverRequestPage() {
  return (
    <DefaultContainer title='Censor Driver Request'>
      <CensorDriverRequestList />
    </DefaultContainer>
  );
}
