import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personnage-formates',
  templateUrl: './personnage-formates.component.html',
  styleUrls: ['./personnage-formates.component.css']
})
export class PersonnageFormatesComponent {
@Input() personages:any
  abonne(personnage:any){
    personnage.abonne ++;
  }
}
