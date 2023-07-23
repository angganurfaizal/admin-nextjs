import { IGetPricelistResponse } from "@/interfaces/api/pricelist";
import { get } from "@services/http-client";

const API_PATH = "/v1/pricelist";
export const getPricelist = async (): Promise<IGetPricelistResponse> => {
  try {
    const res = await get<IGetPricelistResponse>(`${API_PATH}`);
    return res;
  } catch (err: unknown) {
    throw Error("Failed to get Project list", err as Error);
  }
};
