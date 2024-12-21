
## Getting Started

This project is a Next.js application designed to filter and display vehicle information. It allows users to select a vehicle make and model year on a filtering page, then view detailed vehicle models on a result page. The app is built using modern web technologies such as Next.js (App Router), Tailwind CSS, and utilizes React Suspense for efficient data fetching.

## Setup and Installation
Clone the Repository:

```bash
git clone git@github.com:Vectoriia/car-dealer-app.git
cd car-dealer-app
```

Install Dependencies:

```bash
npm install
# or
yarn install
```

Build project:

```bash
npm run build && npm start
# or
yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── page.tsx         # Filtering page component
│   ├── layout.tsx       # Layout component
│   ├── error.tsx        # Error page component
│   ├── result/
│   │   ├── [makeId]/[year]/page.tsx

# Note: As the project scales, consider moving reusable components into a dedicated `components` folder for better organization and maintainability.  
├── services/
│   ├── make.service.ts  # Service for fetching vehicle makes
│   ├── model.service.ts # Service for fetching vehicle models
├── utils/
│   ├── get-year-range.util.ts # Utility for generating year ranges
├── types/              # Types provided for API services
│   ├── dto/
```

## Notes

Ensure the NHTSA API is accessible during runtime to fetch data correctly. Because during the development process, the API became inaccessible.

## Contact

For any queries or support, feel free to reach out.