import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from '../../services/media.service'; // Adjust path as necessary
import { Media } from '../../Models/media';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-media',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './add-media.component.html',
  styleUrl: './add-media.component.css'
})
export class PgMediaComponent implements OnInit {
  pgId: number | null = null;
  mediaList: Media[] = [];
  selectedFile: File | null = null;

  // Dependency Injection using inject
  mediaService = inject(MediaService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    // Get the PG ID from the route parameters
    this.pgId = +this.route.snapshot.paramMap.get('pgId')!;
    this.loadMedia();
  }

  // Load media list by PG ID
  loadMedia(): void {
    if (this.pgId !== null) {
      this.mediaService.getMediaByPgId(this.pgId).subscribe(
        (media) => {
          this.mediaList = media;
        },
        (error) => {
          console.error('Error fetching media', error);
        }
      );
    }
  }

  // Handle file selection
  onFileSelect(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // Upload selected media
  uploadMedia(): void {
    if (!this.selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    if (this.pgId !== null) {
      this.mediaService.uploadMedia(this.pgId, this.selectedFile).subscribe(
        (response: Media) => {
          console.log('Media uploaded successfully', response);
          this.mediaList.push(response); // Add the uploaded media to the list
          this.selectedFile = null; // Clear the file input
        },
        (error) => {
          console.error('Error uploading media', error);
          alert('Failed to upload media.');
        }
      );
    }
  }

  // Delete media by ID
  deleteMedia(mid: number): void {
    this.mediaService.deleteMedia(mid).subscribe(
      () => {
        // Remove deleted media from the list
        this.mediaList = this.mediaList.filter(media => media.Mid !== mid);
        alert('Media deleted successfully.');
      },
      (error) => {
        console.error('Error deleting media', error);
        alert('Failed to delete media.');
      }
    );
  }
}
