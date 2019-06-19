import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/class/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  movies: Movie[] = [];
  temp: Movie[] = [];

  constructor(
    private movie: MoviesService,
    private modalCtrl: ModalController,
    private alert: AlertController
  ) { }

  ngOnInit() {
    this.listMovies();
  }

  listMovies() {
    this.movie.list().then(d => {
      this.movies = Object.assign([], d);
      this.temp = Object.assign([], d);
    }).catch( err => {
      console.log(err);
    });
  }

  async onSearchChange(e) {
    const v = e.target.value;
    if (v.length > 2) {
      this.movies = this.movies.filter( (s: Movie) => {
        const str = `${s.description} ${s.image} ${s.language} ${s.restriction} ${s.title}`;
        return str.toLowerCase().indexOf(v.toLowerCase()) !== -1;
      });
      if (this.movies.length === 0) {
        this.movies = await Object.assign([], this.temp);
        const alert = await this.alert.create({
          header: 'No Movies Found',
          message: 'We found no movies matching your search.',
          buttons: ['Okay']
        });

        await alert.present();
      }
    }
  }

  async showDetail(m?: Movie) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailComponent,
      componentProps: {
        movie: m ? m : new Movie()
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.listMovies();
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  delete(m: Movie) {
    this.movie.delete(m).then( d => {
      console.log(d);
      this.listMovies();
    }).catch( err => {
      console.log(err);
    });
  }

  async presentConfirm(m: Movie) {
    const that = this;
    const alert = await this.alert.create({
      header: 'Delete Movie',
      message: 'Are you sure you want to delete this movie? This cannot be undone.',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
              that.delete(m);
          }
        },
        {
          text: 'Cancel',
          role: 'destructive'
        }
      ]
    });

    await alert.present();
  }

}
