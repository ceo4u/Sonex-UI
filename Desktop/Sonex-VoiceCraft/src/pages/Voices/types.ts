
export interface Voice {
  id: string;
  name: string;
  gender: "Male" | "Female";
  language: string;
  country: string;
  value: string; // For API integration
  selected?: boolean;
}
