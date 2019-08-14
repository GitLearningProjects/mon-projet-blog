import { Component, Input, OnInit } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  // Fonction qui met à jour les loveIts
  loveItsFunction(update: number){
    
    this.loveIts = this.loveIts + (update);
    console.log(this.loveIts);
  }

  // À défaut d'utiliser [ngClass]
  getClass(){
    if(this.loveIts > 0)
      return "list-group-item list-group-item-success";
    else if(this.loveIts < 0)
      return "list-group-item list-group-item-danger";
    else
      return "list-group-item";
  }

  constructor() {

  }

  ngOnInit() {
  }
}
