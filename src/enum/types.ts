export interface Employee {
    firstName: string | null;
    lastName: string | null;
    birthDate: string | null | undefined;
    startDate: string | null | undefined;
    street: string | null;
    city: string | null;
    state: string | null;
    zipCode: string | null;
    department: string | null;
  }
  
  export interface States {
    name: string,
    abbreviation: string,
    id: number
  }
  
  export interface Department {
    name: string,
    id:number
  }