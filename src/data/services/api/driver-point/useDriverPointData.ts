import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { PAGE_SIZE } from '@/utils/constants/shared.constant';
import { DriverPointApi } from './driver-point.api';

const useDriverPointData = (driveruuId: string) => {
  const location = useLocation();
  const params = queryString.parse(location.search, { parseNumbers: true });
  const page = +(params.page ?? 1);

  const fetchUserDataFunction = async () => {
    try {
      const response = await DriverPointApi.getListPoint({
        driveruuId: driveruuId,
        page: page - 1,
        size: PAGE_SIZE,
      });
      return response;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const queryKey = ['driverpoints', driveruuId, params];

  const {
    data: DriverPointData,
    refetch: refreshDriverPointData,
    ...rest
  } = useQuery(queryKey, fetchUserDataFunction, {
    enabled: !!driveruuId, 
    onError: (err) => console.log('error at hook', err),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  return {
    DriverPointData,  
    refreshDriverPointData,
    ...rest,
  };
};

export default useDriverPointData;
