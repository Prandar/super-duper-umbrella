import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Channel } from '../channels';
import { User } from '../users';
import { Message } from '../messages';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: "root",
})

export class ChatServiceService {

  constructor(private http: HttpClient) { }

    findChannels(): Observable<Channel[]> {
        return this.http.get<Channel[]>(`${environment.backUrl}/channels`);
    }

    findTodos(): Observable<Message[]> {
        return this.http.get<Message[]>(`${environment.backUrl}/messages`);
    }

    addTodo(message: Message): Observable<Message> {
        return this.http.post<Message>(`${environment.backUrl}/messages`, message);
    }

    updateTodo(message: Message): Observable<void> {
        return this.http.put<void>(`${environment.backUrl}/messages/${message.id}`, message);
    }
}
