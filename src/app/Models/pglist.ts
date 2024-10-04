// pg.model.ts
export interface PG {
    id: number; // Assuming each PG has a unique ID
    name: string;
    description: string;
    address: string;
    district: string;
    city: string;
    latitude: number;
    longitude: number;
    pin: string;
    genderPreference: string;
    amenities: string[];
    foodAvailable: boolean;
    meals: string[];
    rules: string;
}
