import { Make } from "../types/dto/make.type";

const BASE_URL = process.env.NEXT_PUBLIC_VEHICLE_API; // Load the base URL from the environment variable

const getMakesForVehicleType = async (vehicleType: string): Promise<Make[]> => {
  const res = await fetch(`${BASE_URL}vehicles/GetMakesForVehicleType/${vehicleType}?format=json`);
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