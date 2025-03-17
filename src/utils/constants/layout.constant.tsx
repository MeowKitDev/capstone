import AccountIcon from '@/components/icons/AccountIcon';
import CardIdIcon from '@/components/icons/CardIdIcon';
import CarIcon from '@/components/icons/CarIcon';
import ChartPieIcon from '@/components/icons/ChartPieIcon';
import CommentIcon from '@/components/icons/CommentIcon';
import CubeIcon from '@/components/icons/CubeIcon';
import ListCheckIcon from '@/components/icons/ListCheckIcon';
import MemberIcon from '@/components/icons/MemberIcon';
import MoneyCheckIcon from '@/components/icons/MoneyCheckIcon';
import WalletIcon from '@/components/icons/WalletIcon';
import { SideBarGroupTemplate } from '@/layouts/types/SideBarGroupTemplate.type';

export const LAYOUT_SIDEBAR_GROUP_TEMPLATES: SideBarGroupTemplate[] = [
  { title: 'dashboard', icon: <ChartPieIcon /> },
  {
    title: 'user',
    icon: <MemberIcon />,
    items: [
      { title: 'view-user-account', icon: <AccountIcon /> },
      { title: 'censor-driver-request', icon: <CardIdIcon /> },
    ],
  },
  { title: 'trip', icon: <CarIcon /> },
  {
    title: 'feedback',
    icon: <CommentIcon />,
  },
  {
    title: 'package',
    icon: <CubeIcon />,
  },
  {
    title: 'wallet',
    icon: <WalletIcon />,
  },
  {
    title: 'report',
    icon: <ListCheckIcon />,
  },
  {
    title: 'transaction-history',
    icon: <MoneyCheckIcon />,
  },
];
