import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
count : any
  ngOnInit(): void {
    this.countMajeur();
  }
  title = 'Tp4_Ex3';
  personages= [

    {nom:'Laugh',image:"../../assets/laugh.png",nb:44,majeur:true},
    {nom:'Lovely',image:"../../assets/lovely.jfif",nb:16,majeur:true},
    {nom:'Blink',image:"../../assets/blink.jfif",nb:12,majeur:false},

  ]

  countMajeur(){

     this.count  =0;
    for (let i = 0; i < this.personages.length; i++) {
      if(this.personages[i].majeur){
        this.count +=1;
      }
    }
  }




}
