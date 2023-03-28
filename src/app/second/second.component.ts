import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Character, RickAndMortyService} from "../rick-and-morty.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  character: Character
  props: (keyof Character)[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rickAndMortyService: RickAndMortyService
  ) {
    console.log(router.getCurrentNavigation()?.extras.state)// la informacion que se recibe
    this.character = router.getCurrentNavigation()?.extras.state as Character
    this.props = Object.keys(this.character) as (keyof Character)[]
  }

  goBack() {
    this.router.navigate(['first'], {replaceUrl: true})
  }

  update(event: SubmitEvent) {
    event.preventDefault()
    console.log(this.character)
    this.rickAndMortyService.update(this.character)// hacer la peticion http para actualizar la info
  }
}
