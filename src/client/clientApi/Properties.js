import api, { handleError } from "../../api/axiosConfig";

// Fetch Client Properties
export const getProperties = async () => {
  try {
    const response = await api.get("properties");
    return response.data.data;
  } catch (error) {
    handleError(error, "Failed to fetch Client Properties");
  }
};
