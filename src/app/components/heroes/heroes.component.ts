import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService, private router: Router) {
    // console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(index: number) {
    // console.log(index);
    this.router.navigate(['/heroe', index]);
  }
}
