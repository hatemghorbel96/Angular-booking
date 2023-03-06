import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandleHotel } from '../model/file-handle-hotel';
import { Hotel } from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class ImageProsService {

  constructor(private sanitizer: DomSanitizer) { }
  public createImage(hotel:Hotel){
    const hotelImages:any[] = hotel.hotelImages;
    const productImagesToFileHandle: FileHandleHotel[]= [];

    for(let i=0;i < hotelImages.length; i++){
      const imageFileData = hotelImages[i];
    const imageBlob = this.dataURItoBlog(imageFileData.picByte,imageFileData.type);

     const imageFile= new File([imageBlob],imageFileData.name, {type: imageFileData.type});

      const finalFileHandle:FileHandleHotel = {
            file: imageFile,
            url: this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(imageFile))
      };

      productImagesToFileHandle.push(finalFileHandle);

    }

    hotel.hotelImages = productImagesToFileHandle;
    return hotel;

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

