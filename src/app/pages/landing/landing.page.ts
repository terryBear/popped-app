import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchComponent } from 'src/app/components/search/search.component';
import { Movie } from 'src/app/class/movie';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async showSearch() {
    const m = await this.modalCtrl.create({
      component: SearchComponent
    });
    await m.present();
  }

  async detail() {
    const m = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: {
        movie: new Movie()
      }
    });
    await m.present();
  }

}
