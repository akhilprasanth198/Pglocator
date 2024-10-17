import { Component, inject, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-review-pgowner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './review-pgowner.component.html',
  styleUrl: './review-pgowner.component.css'
})
export class ReviewPgownerComponent implements OnInit {
  pgId: number|null=null; // Set this based on the PG context
  mediaList: any[] = [];

mediaService=inject(MediaService)
  ngOnInit(): void {
    this.loadMedia();
  }

  loadMedia(): void {
    if (this.pgId !== null) {
      this.mediaService.getMediaByPgId(this.pgId).subscribe(media => {
        this.mediaList = media;
      });
    } else {
      console.error('pgId is null, cannot load media');
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file && this.pgId !== null) {
      this.mediaService.uploadMedia(this.pgId, file).subscribe(() => {
        this.loadMedia(); // Reload media after upload
      });
    } else {
      console.error('pgId is null or file is not selected, cannot upload media');
    }
  }

  deleteMedia(mediaId: number): void {
    this.mediaService.deleteMedia(mediaId).subscribe(() => {
      this.loadMedia(); // Reload media after deletion
    });
  }
}