import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YouTubeVideo } from 'src/app/interfaces/youtube-canal.interface';
import { CanalYoutubeService } from 'src/app/services/canal-youtube.service';

@Component({
  selector: 'app-canal-youtube',
  templateUrl: './canal-youtube.component.html',
  styleUrls: ['./canal-youtube.component.scss']
})
export class CanalYoutubeComponent {
  playlistId: string = 'PLSbDMtNBmYTugyaxsQFwtDIxL5jUbsmSc';
  playlistId2: string = 'PLSbDMtNBmYTvZRV-KlNjiVvwIMAZ9VSBa';
  videos: YouTubeVideo[] = [];
  videos2: YouTubeVideo[] = [];
  nextPageToken: string = '';

  constructor(
    private youtubeService: CanalYoutubeService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.loadVideos();
    this.loadVideos2();
  }

  loadVideos(): void {
    this.youtubeService.getPlaylistItems(this.playlistId, this.nextPageToken).subscribe(data => {
      const newVideos = data.items.slice(0, 4 - this.videos.length);
      this.videos.push(...newVideos);
      this.nextPageToken = data.nextPageToken || '';
    });
  }

  loadVideos2(): void {
    this.youtubeService.getPlaylistItems(this.playlistId2, this.nextPageToken).subscribe(data => {
      const newVideos = data.items.slice(0, 4 - this.videos2.length);
      this.videos2.push(...newVideos);
      this.nextPageToken = data.nextPageToken || '';
    });
  }

  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

}
