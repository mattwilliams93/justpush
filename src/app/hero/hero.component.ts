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

  constructor(private _elRef: ElementRef) { }

  ngOnInit(){

  }

}
