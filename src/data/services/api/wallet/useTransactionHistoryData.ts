import { useQuery } from 'react-query';
import { walletApi } from './wallet.api';
import queryString from 'query-string';

const useTransactionHistoryData = () => {
  // const [pagination, setPagination] = useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });
  // const [sortState, setSortState] = useState<SortingState>([]);
  // const [keyword, setKeyword] = useState<string>();
  // const [totalRows, setTotalRows] = useState<number>(0);
  // const [filter, setFilter] = useState({});
  const params = queryString.parse(location.search);
  const fetchTransactionHistoryDataFunction = async () => {
    try {
      const response = await walletApi.getTransactionhistory({
        walletType: params.walletType as string,
      });
      return response?.content;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  // TODO: use debounce technique to prevent many calls at a short time
  const queryKey = ['TransactionHistory', params.walletType as string];

  const {
    data: TransactionHistoryData,
    refetch: refreshTransactionHistoryData,
    ...rest
  } = useQuery(queryKey, fetchTransactionHistoryDataFunction, {
    onError: (err) => console.log('error at hook', err),
  });

  return {
    TransactionHistoryData,
    refreshTransactionHistoryData,
    // setSortState,
    // setKeyword,
    // setPagination,
    // setFilter,
    // keyword,
    // totalRows,
    ...rest,
  };
};

export default useTransactionHistoryData;
