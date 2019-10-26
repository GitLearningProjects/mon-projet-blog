import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  // Les variables
  posts: any[];
  postSubscription: Subscription;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    // Initialisation des posts
    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject()
  }

  ngOnDestroy() {
    // Unsubscribe de la subscription
    this.postSubscription.unsubscribe();
  }

  
}
