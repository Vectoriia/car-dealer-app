import makeService from '@/src/services/make.service';
import modelService from '@/src/services/model.service';
import getYearRange from '@/src/utils/get-year-range.util';

import { Suspense } from 'react';

// Generates paths to be statically pre-rendered
export async function generateStaticParams() {
  const makes = await makeService.getMakesForVehicleType('car');
  const years = getYearRange(2015, new Date().getFullYear());

  const paths = [];
  for (const make of makes) {
    for (const year of years) {
      paths.push({ makeId: make.MakeId.toString(), year: year.toString() });
    }
  }
  return paths;
}

export default async function ResultPage({ params }: { params:Promise<{ makeId: string; year: string }>  }) {
  const { makeId, year } = await params;

  const models = await modelService.getModelsForMakeIdYear(makeId, year);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Vehicle Models</h1>
      <p className="mb-4 text-lg">Make ID: {makeId}</p>
      <p className="mb-6 text-lg">Year: {year}</p>

      <Suspense fallback={<div>Loading models...</div>}>
        {models.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model) => (
              <div key={model.Model_ID} className="p-4 bg-white rounded shadow">
                <h2 className="text-lg font-semibold">{model.Model_Name}</h2>
              </div>
            ))}
          </div>
        ) : (
          <p>No models found for this make and year.</p>
        )}
      </Suspense>
    </div>
  );
}
