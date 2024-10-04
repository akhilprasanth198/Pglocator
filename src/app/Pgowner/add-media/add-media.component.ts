import { Component, OnInit,inject } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from '../../services/media.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-media',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './add-media.component.html',
  styleUrl: './add-media.component.css'
})
export class AddMediaComponent implements OnInit {
  selectedFile: File|null = null;
  mediaList: any[] = [];
  pgId = 1; // Replace with actual PG ID

mediaservice=inject(MediaService)
  ngOnInit(): void {
    this.loadMedia();
  }

  // Load media for the PG
  loadMedia() {
    this.mediaservice.GetMedia(this.pgId).subscribe((data:any) => {
      this.mediaList = data;
    });
  }

  // File selection
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Upload media
  onUploadMedia() {
    if (this.selectedFile) {
      this.mediaservice.uploadMedia(this.pgId, this.selectedFile).subscribe(() => {
        this.loadMedia(); // Reload media after upload
        this.selectedFile = null;
      });
    }
  }

  // Edit media (Here you can open a modal for editing details)
  onEditMedia(media: any) {
    const updatedMedia = {
      type: media.type,
      url: media.url // This can be updated via an input form in the modal
    };
    this.mediaservice.editMedia(media.mid, updatedMedia).subscribe(() => {
      this.loadMedia(); // Reload media after editing
    });
  }

  // Delete media
  onDeleteMedia(mediaId: number) {
    if (confirm('Are you sure you want to delete this media?')) {
      this.mediaservice.deleteMedia(mediaId).subscribe(() => {
        this.loadMedia(); // Reload media after deletion
      });
    }
  }
}