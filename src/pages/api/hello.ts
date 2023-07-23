import { IGetPricelistResponse } from "@/interfaces/api/pricelist";
import { get } from "@/services/http-client";

const API_PATH = "/v1/pricelist";
export const getPricelist = async (): Promise<IGetPricelistResponse> => {
  try {
    const response = await get<IGetPricelistResponse>(`${API_PATH}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export default getPricelist;
