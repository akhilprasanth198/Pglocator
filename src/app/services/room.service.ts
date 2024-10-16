    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { Room } from '../Models/room'; // Import the Room interface

    @Injectable({
    providedIn: 'root'
    })
    export class RoomService {
    private baseUrl = 'https://localhost:7152/api/Rooms'; // Base API URL for room operations

    constructor(private http: HttpClient) {}

        //Method to get room details for a specific PG by PG ID
    getRoomDetails(pgId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}?pgid=${pgId}`);
    }
        // Method to get room details by ID
    getRoomDetailsById(roomId: number): Observable<Room> {
        return this.http.get<Room>(`${this.baseUrl}/${roomId}`);
    }

    // Method to update room details
    updateRoom(id: number, roomData: Room): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, roomData);
    }

    // Method to delete a room by ID
    deleteRoom(roomId: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${roomId}`);
    }

    // Method to fetch all rooms (optional)
    getAllRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(this.baseUrl);
    }

    // Method to create a new room
    createRoom(roomData: Room): Observable<Room> {
        return this.http.post<Room>(this.baseUrl, roomData);
    }

    // Method to fetch rooms for a specific PG by PG ID
    getRoomsByPgId(pgId: number): Observable<Room[]> {
        return this.http.get<Room[]>(`${this.baseUrl}?pgid=${pgId}`);
    }
    }
