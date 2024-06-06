import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { YouTubeResponse } from '../interfaces/youtube-canal.interface';

@Injectable({
  providedIn: 'root'
})
export class CanalYoutubeService {
  private apiKey = 'AIzaSyAj9Kt_O1_VaVCFfpmD1GooDcYY-Y6eccg';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(
    private http: HttpClient
  ) { }

  getPlaylistItems(playlistId: string, pageToken: string): Observable<YouTubeResponse>{
    let url = `${this.apiUrl}/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${this.apiKey}`;
    if (pageToken) {
      url += `&pageToken=${pageToken}`;
    }
    return this.http.get<YouTubeResponse>(url);
  }
}