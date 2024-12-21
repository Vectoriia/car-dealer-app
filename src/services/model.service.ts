
import { Model } from "../types/dto/model.type";

const getModelsForMakeIdYear = async (makeId: string, year: string): Promise<Model[]> => {

  const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
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