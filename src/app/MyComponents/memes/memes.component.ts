import { Component } from '@angular/core';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {
  meme: string = 'Memes Rock!';
  memeimage: string = ''; // Initialize memeimage as an empty string

  generateRandomMeme() {
    const randomIndex = Math.floor(Math.random() * 10) + 1; // Assuming you have 10 images named image1.jpg, image2.jpg, ..., image10.jpg
    const extensions = ['jpg', 'jpeg', 'png', 'JPG']; // Supported image extensions

    // Randomly select an extension
    const selectedExtension = extensions[Math.floor(Math.random() * extensions.length)];

    this.memeimage = `assets/images/images/image_${randomIndex}.${selectedExtension}`;
  }
}
