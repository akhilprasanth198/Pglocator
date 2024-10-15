export interface User {
    status:string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string; // Use a suitable date format as a string
    password: string; // Storing plain password
    role: 'User' | 'PGOwner'; // Define roles explicitly
    phone?: string; // Optional for PGOwner
    gender?: string; // Optional for PGOwner
    whatsapp?: string; // Optional for PGOwner
    chatlink?: string; // Optional for PGOwner
    address?: string; // Optional for PGOwner
  }
  