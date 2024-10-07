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
  pgId!:number; // Replace with actual PG ID

mediaservice=inject(MediaService)
ngOnInit() {
  this.getPgId();
  this.getMediaList();
}
getPgId() {
  // Fetch the PG ID from your PG service after the user registers or selects a PG
  this.mediaservice.getPgId().subscribe(
    (id: number) => {
      this.pgId = id;
      console.log('PG ID:', this.pgId);
      this.getMediaList();  // Fetch media after PG ID is obtained
    },
    error => {
      console.error('Error fetching PG ID:', error);
    }
  );
}

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

onUploadMedia() {
  if (this.selectedFile && this.pgId) {
    this.mediaservice.uploadMedia(this.selectedFile, this.pgId).subscribe(
      response => {
        console.log('Media uploaded successfully', response);
        this.getMediaList();  // Refresh media list after upload
      },
      error => {
        console.error('Error uploading media', error);
      }
    );
  }
}

getMediaList() {
  if (this.pgId) {
    this.mediaservice.getMediaByPg(this.pgId).subscribe(
      response => {
        this.mediaList = response;
      },
      error => {
        console.error('Error fetching media', error);
      }
    );
  }
}

onDeleteMedia(mediaId: number) {
  this.mediaservice.deleteMedia(mediaId).subscribe(
    response => {
      console.log('Media deleted successfully');
      this.getMediaList();  // Refresh media list after deletion
    },
    error => {
      console.error('Error deleting media', error);
    }
  );
}

onEditMedia(media: any) {
  // Logic for editing media goes here
}
}