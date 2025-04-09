import { useQuery } from 'react-query';
import { walletApi } from './wallet.api';

const useWalletData = () => {
  // const [pagination, setPagination] = useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });
  // const [sortState, setSortState] = useState<SortingState>([]);
  // const [keyword, setKeyword] = useState<string>();
  // const [totalRows, setTotalRows] = useState<number>(0);
  // const [filter, setFilter] = useState({});
  const fetchWalletDataFunction = async () => {
    try {
      const response = await walletApi.getAll();
      return response?.content;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  // TODO: use debounce technique to prevent many calls at a short time
  const queryKey = ['censorDriverRequests'];

  const {
    data: WalletData,
    refetch: refreshWalletData,
    ...rest
  } = useQuery(queryKey, fetchWalletDataFunction, {
    onError: (err) => console.log('error at hook', err),
  });

  return {
    WalletData,
    refreshWalletData,
    // setSortState,
    // setKeyword,
    // setPagination,
    // setFilter,
    // keyword,
    // totalRows,
    ...rest,
  };
};

export default useWalletData;
