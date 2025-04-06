import { ReportDTO } from '@/data/report/dto/report.dto';

export const ReportData: ReportDTO[] = [
  {
    id: 1,
    name: 'John Doe',
    driverName: 'Jane Smith',
    reportDate: '2023-10-01T08:00:00Z',
    reportContent: 'Great service!',
    tripId: 101,
    status: 'accepted',
  },
  {
    id: 2,
    name: 'Alice Johnson',
    driverName: 'Bob Brown',
    reportDate: '2023-10-02T08:00:00Z',
    reportContent: 'Driver was late.',
    tripId: 102,
    status: 'decline',
  },
  {
    id: 3,
    name: 'Michael Lee',
    driverName: 'Chris Green',
    reportDate: '2023-10-03T08:00:00Z',
    reportContent: 'Vehicle was clean and comfortable.',
    tripId: 103,
    status: 'waiting',
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    driverName: 'David White',
    reportDate: '2023-10-04T08:00:00Z',
    reportContent: 'Driver was rude.',
    tripId: 104,
    status: 'waiting',
  },
  {
    id: 5,
    name: 'Emily Davis',
    driverName: 'Laura Black',
    reportDate: '2023-10-05T08:00:00Z',
    reportContent: 'Overall good experience.',
    tripId: 104,
    status: 'accepted',
  },
  {
    id: 6,
    name: 'James Taylor',
    driverName: 'Kevin Blue',
    reportDate: '2023-10-06T08:00:00Z',
    reportContent: 'Trip was too long.',
    tripId: 106,
    status: 'waiting',
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    driverName: 'Sophia Gray',
    reportDate: '2023-10-07T08:00:00Z',
    reportContent: 'Driver was very friendly.',
    tripId: 107,
    status: 'accepted',
  },
  {
    id: 8,
    name: 'Liam Anderson',
    driverName: 'Mason Red',
    reportDate: '2023-10-08T08:00:00Z',
    reportContent: 'Vehicle was not clean.',
    tripId: 108,
    status: 'waiting',
  },
  {
    id: 9,
    name: 'Ava Thomas',
    driverName: 'Ella Pink',
    reportDate: '2023-10-09T08:00:00Z',
    reportContent: 'Great driver!',
    tripId: 109,
    status: 'accepted',
  },
  {
    id: 10,
    name: 'Noah Jackson',
    driverName: 'Lucas Yellow',
    reportDate: '2023-10-10T08:00:00Z',
    reportContent: 'Trip was too expensive.',
    tripId: 110,
    status: 'waiting',
  },

  {
    id: 11,
    name: 'Sophia White',
    driverName: 'Mia Black',
    reportDate: '2023-10-11T08:00:00Z',
    reportContent: 'Driver was very helpful.',
    tripId: 111,
    status: 'accepted',
  },
  {
    id: 12,
    name: 'Ethan Harris',
    driverName: 'Aiden Gray',
    reportDate: '2023-10-12T08:00:00Z',
    reportContent: 'Vehicle was not comfortable.',
    tripId: 112,
    status: 'waiting',
  },
];
