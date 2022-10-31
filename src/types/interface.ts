export interface JobDetail {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: Location;
  pictures: string[];
  createdAt: string;
  updatedAt: Date;
  description: string;
  employment_type: string[];
}

export interface JobLocation {
  lat: number;
  long: number;
}

