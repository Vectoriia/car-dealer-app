import { Make } from "../types/dto/make.type";

const getMakesForVehicleType = async (vehicleType: string): Promise<Make[]> => {
  const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/${vehicleType}?format=json`);
  if (!res.ok) {
    throw new Error('Failed to fetch vehicle makes');
  }
  const data = await res.json();
  return data.Results || [];
};

const makeService = {
  getMakesForVehicleType,
}
export default makeService;