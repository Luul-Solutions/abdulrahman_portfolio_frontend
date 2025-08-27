// src/types.d.ts or inside ProfileSection.tsx
export interface Profile {
  name: string;
  bio: string;
  location: string;
  nationality: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  skills: string[]; // ✅ now an array
  languages: string[]; // ✅ now an array
  referees: string[]; // ✅ now an array
  expectedSalary: number;
  ownACar: boolean;
  haveDrivingLicense: boolean;
  noticePeriod: string;
  willingToRelocate: boolean;
  profilePicture?: string; // ✅ add optional field for image URL
}
