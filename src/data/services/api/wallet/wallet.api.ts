import axiosClient from '../../axiosClient';
import { PagedResponse } from '@/@types/dto/pagedResponse';
import { WalletDTO } from '@/@types/dto/walletDTO';

export const walletApi = {
  getAll: async (): Promise<PagedResponse<WalletDTO>> => {
    const response: PagedResponse<WalletDTO> = await axiosClient.get("manager/wallet-transactions");
    return response;
  },
};

