import baseAxios from "../axios/baseAxios";
import config from "../config";

export const getAllCoins = async () => {
  const { data } = await baseAxios({
      url:`${config.apiUrl}/coins/list`,
  });
  return data;
};
