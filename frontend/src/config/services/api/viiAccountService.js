import ENDPOINTS from "./endpoints";
import API from "./baseAPI";

export const getViiAccounts = async () => {
  console.log("Fetching from:", ENDPOINTS.viiAccounts.base);
  
  const response = await API.get(ENDPOINTS.viiAccounts.base);
  console.log("API Response Data:", response.data);
  
  return response;
};
export const createViiAccount = (data) => API.post(ENDPOINTS.viiAccounts.base,data);
export const updateViiAccount = (id, data) => API.put(`${ENDPOINTS.viiAccounts.base}/${id}`,data);
export const deleteViiAccount = (id) => API.delete(`${ENDPOINTS.viiAccounts.base}${id}`);