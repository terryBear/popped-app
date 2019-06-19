import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from '../class/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private api: ApiService
  ) { }

  list() {
    return this.api.GET('movies');
  }

  get(params: Movie) {
    return this.api.GET(`movies/${params.id}`);
  }

  search(params: string) {
    return this.api.POST(`movies/${params}`, null);
  }

  create(params: Movie) {
    return this.api.POST(`movies`, params);
  }

  update(params: Movie) {
    return this.api.PUT(`movies/${params.id}`, params);
  }

  delete(params: Movie) {
    return this.api.DELETE(`movies/${params.id}`);
  }

}
