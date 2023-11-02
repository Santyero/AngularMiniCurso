import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GenericService<T> {
    baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    findById(id: number): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${id}`);
    }

    update(resource: T): Observable<T> {
        return this.http.put<T>(this.baseUrl, resource);
    }

    deleteById(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    findAll(): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl);
    }
}
