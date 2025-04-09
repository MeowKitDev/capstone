import CustomTablePagination from '@/components/table/CustomTablePagination';
import { TableBuilder } from '@/components/table/TableBuilder';
import { TripDTO } from '@/data/trip/dto/trip.dto';
import { useGetTripListQuery } from '@/data/trip/trip.api';
import { tripListRequestParamsToFilter } from '@/data/trip/trip.service';
import { PARAM_FIELD } from '@/utils/enum/param-field.enum';
import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TripFilter from './TripFilter';
import { TripColumn } from './comlumn/TripColumn';

export default function TripList() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = queryString.parse(location.search);

  const { tripListFilter } = useMemo(() => {
    const tripListFilter = tripListRequestParamsToFilter(params);
    return { tripListFilter };
  }, [params]);

  const { data, isLoading, isFetching } = useGetTripListQuery(tripListFilter);
  console.log('data', data);

  return (
    <div className='flex flex-col gap-5'>
      <TripFilter />
      <TableBuilder<TripDTO>
        rowKey='stripID'
        columns={TripColumn()}
        data={data?.content ?? []}
        isLoading={isLoading || isFetching}
      />
      <CustomTablePagination
        totalItems={data?.totalElements || 1}
        queryKey={PARAM_FIELD.PAGE}
        isScrollAfterPageChange
      />
    </div>
  );
}
