    import { Injectable } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { Room } from '../Models/room';
    import { PG } from '../Models/pglist';

    @Injectable({
    providedIn: 'root'
    })
    export class RoomService {
    private apiUrl = 'https://localhost:7152/api/Rooms'; // Adjust this URL as per your configuration

    constructor(private http: HttpClient) {}

    // Get rooms by PG ID
    getRoomsByPgId(pgid: number): Observable<Room[]> {
        return this.http.get<Room[]>(`${this.apiUrl}?pgid=${pgid}`);
    }

     // Load PG details by ID
    loadPgDetails(pgid: number): Observable<PG> {
        return this.http.get<PG>(`https://localhost:7152/api/Pg/${pgid}`); // Adjust the URL as needed
    }

    // Load room details by ID
    loadRoomDetails(rid: number): Observable<Room> {
        return this.http.get<Room>(`${this.apiUrl}/${rid}`);
    }

    }
