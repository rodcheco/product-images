import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  images: { id: number, imagePath: string }[] = [
    { "id": 0, "imagePath": "assets/product-images/carro.jpg" },
    { "id": 1, "imagePath": "assets/product-images/carro.jpg" },
    { "id": 2, "imagePath": "assets/product-images/carro.jpg" },
    { "id": 3, "imagePath": "assets/product-images/carro.jpg" },
    { "id": 4, "imagePath": "assets/product-images/carro.jpg" }

  ];

  ngAfterViewInit() {
    this.images.forEach((item, index) => {
      $(document).ready(function () {
        $('#zoom-' + index.toString()).zoom({ magnify: 2 });
      });
    });
  }
}
