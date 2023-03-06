import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandleTour } from '../model/file-handle-tour';
import { Tour } from '../model/tour';

@Injectable({
  providedIn: 'root'
})
export class ImageProsTourService {
  constructor(private sanitizer: DomSanitizer) { }
  public createImage(tour:Tour){
    const tourImages:any[] = tour.tourImages;
    const productImagesToFileHandleTour: FileHandleTour[]= [];

    for(let i=0;i < tourImages.length; i++){
      const imageFileData = tourImages[i];
    const imageBlob = this.dataURItoBlog(imageFileData.picByte,imageFileData.type);

     const imageFile= new File([imageBlob],imageFileData.name, {type: imageFileData.type});

      const finalFileHandle:FileHandleTour = {
            file: imageFile,
            url: this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(imageFile))
      };

      productImagesToFileHandleTour.push(finalFileHandle);

    }

    tour.tourImages = productImagesToFileHandleTour;
    return tour;

  }


  public dataURItoBlog(picByte,imageType){
    const byteString = window.atob(picByte);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for (let i =0;i <byteString.length; i++){
        int8Array[i] = byteString.charCodeAt(i);
    }

   const blob =  new Blob([int8Array], {type: imageType})

   return blob

  }
}


