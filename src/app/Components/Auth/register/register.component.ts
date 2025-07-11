import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  // If you are using standalone components in Angular 17+
  // standalone: true, 
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // Property to hold the URL for the image preview.
  // Initialize it with the placeholder image.
  imagePreviewUrl: string | ArrayBuffer | null = 'https://placehold.co/128x128/e2e8f0/cbd5e0?text=Upload';

  /**
   * This method is called when the user selects a file from the input.
   * @param event The file input change event.
   */
  onFileSelected(event: Event): void {
    // Safely cast the event target to an HTMLInputElement.
    const input = event.target as HTMLInputElement;

    // Check if any files were selected.
    if (input.files && input.files[0]) {
      const file = input.files[0];

      // Create a FileReader to read the file content.
      const reader = new FileReader();

      // Set the callback for when the reader finishes loading the file.
      reader.onload = (e) => {
        // Update the imagePreviewUrl with the file's data URL.
        // Angular's change detection will automatically update the <img> src.
        this.imagePreviewUrl = reader.result;
      };

      // Read the file as a Data URL (base64 encoded string).
      reader.readAsDataURL(file);
    }
  }
}
