import { Component, inject } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-pgowner',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './media-pgowner.component.html',
  styleUrl: './media-pgowner.component.css'
})
export class MediaPgownerComponent {
  pgId: number|null=null; // Set this based on the PG context
  mediaList: any[] = [];
  currentIndex = 0; // Track current slide index

mediaService=inject(MediaService) 
route = inject(ActivatedRoute);

ngOnInit(): void {
  // Get the PG ID from the route parameters
  this.pgId = +this.route.snapshot.paramMap.get('pgId')!;
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

triggerFileInput(): void {
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  if (fileInput) {
    fileInput.click(); // Trigger file input click
  }
}

previousImage(): void {
  this.currentIndex = (this.currentIndex === 0) ? this.mediaList.length - 1 : this.currentIndex - 1;
}

nextImage(): void {
  this.currentIndex = (this.currentIndex + 1) % this.mediaList.length;
}
}
