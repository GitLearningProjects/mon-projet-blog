import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  // Les attributs personnalisés

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  // Fonction qui met à jour les loveIts
  loveItsFunction(update: number){
    
    this.loveIts = this.loveIts + (update);
    this.postService.updateLovesIt(this.id, this.loveIts);
    
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

  constructor(private postService: PostService) {
    
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  // Supprimer l'élément
  onDelete(){
    this.postService.deletePost(this.id);
  }
}
