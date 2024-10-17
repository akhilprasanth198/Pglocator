import { Component, inject } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-pgowner',
  standalone: true,
  imports: [NgFor],
  templateUrl: './media-pgowner.component.html',
  styleUrl: './media-pgowner.component.css'
})
export class MediaPgownerComponent {
  pgId: number|null=null; // Set this based on the PG context
  mediaList: any[] = [];

mediaService=inject(MediaService) 
 route = inject(ActivatedRoute);

ngOnInit(): void {
  // Get pgId from route
  this.route.paramMap.subscribe(params => {
    const pgid = params.get('pgid');
    console.log('Navigating to PG details for ID:', pgid);
    if (pgid) {
      this.pgId = parseInt(pgid, 10);
      this.loadMedia();
    } else {
      console.error('pgId not found in the route');
    }
  });
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

triggerFileInput(): void {
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  if (fileInput) {
    fileInput.click(); // Trigger file input click
  }
}
}