'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import makeService from '@/src/services/make.service';
import { Make } from '@/src/types/dto/make.type';
import getYearRange from '@/src/utils/get-year-range.util';

export default function HomePage() {
  const [makes, setMakes] = useState<Make[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  
  // Fetch vehicle makes on component mount
  useEffect(() => {
    async function getMakes(){
      const makes = await makeService.getMakesForVehicleType('car');
      setMakes(makes);
    };
    getMakes();
    
    // Generate years from 2015 to the current year
    const currentYear = new Date().getFullYear();
    setYears(getYearRange(2015, currentYear));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-0 sm:p-4 bg-gray-100 max-w-full">
      <h1 className="text-2xl font-bold mb-6">Vehicle Filter</h1>
      
      {/* Make Selector */}
      <div className="mb-4">
        <label htmlFor="make" className="block mb-2 text-sm font-medium text-gray-700">Select Vehicle Make:</label>
        <select
          id="make"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="p-2 border rounded w-[280px] sm:w-[400px] max-w-[280px] sm:max-w-[500px]"
        >
          <option value="">Choose a make</option>
          {makes.map((make) => (
            <option key={make.MakeId} value={make.MakeId}>
              {make.MakeName}
            </option>
          ))}
        </select>
      </div>

      {/* Year Selector */}
      <div className="mb-4">
        <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-700">Select Model Year:</label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 border rounded w-[280px] sm:w-[400px] max-w-[280px] sm:max-w-[500px]"
        >
          <option value="">Choose a year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Next Button */}
      <Link href={`/result/${selectedMake}/${selectedYear}`}>
        <button
          className={`px-4 py-2 text-white rounded w-[280px] sm:w-[400px] ${
            selectedMake && selectedYear ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!(selectedMake && selectedYear)}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
