import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.services';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css']
})
export class HeroesSearchComponent implements OnInit {
  heroes: Heroe[] = [];
  searchText: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.searchText = params.textSearch;
      this.heroes = this.heroeService.searchHeroes(params.textSearch);
    });
  }
}
