import referenceData from './reference_data.json';

// Type for our reference data structure
export interface ReferenceDataStructure {
  [dcw: string]: {
    [sheet: string]: {
      [column: string]: string[];
    };
  };
}

// Cast the imported data to our type
export const MOCK_REFERENCE_DATA: ReferenceDataStructure = referenceData;