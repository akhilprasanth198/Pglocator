export interface Room {
    Rid: number;
    Price: number;
    Deposit: number;
    RoomType: string;
    Facility: string;
    TotalRoom: number;
    Availability: boolean;
    Services: string[]; // Assuming services is an array of strings
    Pgid: number; // Add Pgid if not already present
}