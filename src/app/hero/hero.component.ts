import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit{

  constructor() { }

  ngOnInit(){
    jQuery('.typewriter').typed({
      strings: ["User Interaction ^1000", "Sales ^1000", "Analytics ^1000", "Hello Willis, this if from Matt and i've refreshed! :D ^10000"],
      typeSpeed: 0,
      shuffle: true,
      backDelay: 500,
      startDelay: 3000
    })
  }

}
