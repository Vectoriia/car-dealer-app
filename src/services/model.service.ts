
import { Model } from "../types/dto/model.type";

const BASE_URL = process.env.NEXT_PUBLIC_VEHICLE_API; // Load the base URL from the environment variable

const getModelsForMakeIdYear = async (makeId: string, year: string): Promise<Model[]> => {

  const res = await fetch(`${BASE_URL}vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
  if (!res.ok) {
    throw new Error('Failed to fetch models');
  }
  const data = await res.json();
  return data.Results || [];
};

const modelService = {
  getModelsForMakeIdYear,
}
export default modelService;