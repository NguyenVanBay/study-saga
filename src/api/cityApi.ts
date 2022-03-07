import { City } from './../model/city';
import { ListResponse, ListParams } from './../model/common';
import axiosClient from "./axiosClient";

const cityApi = {
  getAll(params: ListParams): Promise<ListResponse<City>> {
    const url = '/cities';
    return axiosClient.get(url, { params });
  }
}

export default cityApi;
