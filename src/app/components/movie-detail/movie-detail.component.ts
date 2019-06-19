import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/class/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private movies: MoviesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    if (!this.movie) {
      this.movie = new Movie();
    }
  }

  saveMovie(m: Movie) {
    this.movies.create(m).then( d => {
      console.log(d);
      this.dismiss(m);
    }).catch( err => {
      console.log(err);
    });
  }

  dismiss(params?: Movie) {
    params ? this.modalCtrl.dismiss( { data: params} ) : this.modalCtrl.dismiss();
  }

}
