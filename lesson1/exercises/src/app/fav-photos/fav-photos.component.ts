import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'http://www.aywas.com/aywas/user/avatar/03/26/10/1d5382536b30fb4645a73723d57a88ed.png';
  image3 = 'https://i.imgur.com/4Lz0LdI.png';

  constructor() { }

  ngOnInit() {
  }

}