import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Character, RickAndMortyService} from "../rick-and-morty.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  characters: Character[] = []
  props: (keyof Character)[] = []

  constructor(
    private router: Router,
    private rickAndMortyService: RickAndMortyService
  ) {
  }

  goToSecond(data: Character) {
    this.router.navigate(["second"], {
      state: data
    })
  }

  ngOnInit(): void {
    console.log({props: this.props})
    this.rickAndMortyService.getCharacters().subscribe(({results}) => {
      this.characters = results.map(({id, name, created, gender, type, species, status}) => (
        {
          id, name, created, gender, type, species, status
        }
      ))
      this.props = Object.keys(this.characters[0]) as (keyof Character)[]
    })
  }
}
