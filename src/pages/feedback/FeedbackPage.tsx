import { TableUtilProvider } from '@/components/table/TableContextUtil';
import DefaultContainer from '@/layouts/DefaultContainer';
import FeedbackList from './components/FeedbackList';

export default function FeedbackPage() {
  return (
    <TableUtilProvider>
      <DefaultContainer title='Feedback'>
        <FeedbackList />
      </DefaultContainer>
    </TableUtilProvider>
  );
}
