import { useQuery } from 'react-query';
import { censorDriverRequestApi } from './censorDriverRequest.api';

const useCensorDriverRequestData = () => {
  // const [pagination, setPagination] = useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });
  // const [sortState, setSortState] = useState<SortingState>([]);
  // const [keyword, setKeyword] = useState<string>();
  // const [totalRows, setTotalRows] = useState<number>(0);
  // const [filter, setFilter] = useState({});
  const fetchCensorDriverRequestDataFunction = async () => {
    try {
      const response = await censorDriverRequestApi.getAll();
      // console.log(response?.content);
      return response?.content;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  // TODO: use debounce technique to prevent many calls at a short time
  const queryKey = ['censorDriverRequests'];

  const {
    data: CensorDriverRequestData,
    refetch: refreshCensorDriverRequestData,
    ...rest
  } = useQuery(queryKey, fetchCensorDriverRequestDataFunction, {
    onError: (err) => console.log('error at hook', err),
  });

  return {
    CensorDriverRequestData,
    refreshCensorDriverRequestData,
    // setSortState,
    // setKeyword,
    // setPagination,
    // setFilter,
    // keyword,
    // totalRows,
    ...rest,
  };
};

export default useCensorDriverRequestData;
