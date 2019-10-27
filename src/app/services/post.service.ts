import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // Déclaration des variables

  date = new Date();
  postSubject = new Subject<any[]>();

  private posts: any[] = [
    {
      id: 1,
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      loveIts: 0,
      created_at: this.date
    },
    {
      id: 2,
      title: "Mon deuxieme post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      loveIts: 0,
      created_at: this.date
    },
    {
      id: 3,
      title: "Encore un post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      loveIts: 0,
      created_at: this.date
    }
  ]

  constructor() { }

  // Faire emettre le subject

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }

  // Ajouter un post

  addPost(title: string, content: string){
    const postObject = {
      id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date(),
    };
    postObject.title = title;
    postObject.content = content;
    
    if(this.posts.length == 0)
      postObject.id = 0;
    else
      postObject.id = this.posts[(this.posts.length -1)].id +1;
    
    this.posts.push(postObject);
    this.emitPostSubject();
  }

  // Supprimer un post
  deletePost(id: number){
    const toDelete = this.getPostById(id);
    const toDeleteIndex: number = this.posts.indexOf(toDelete);
    this.posts.splice(toDeleteIndex,1);
    this.emitPostSubject();
  }

  // Récupérer l'id du post

  getPostById(id: number){
    const post = this.posts.find(
      (s) => {
        return s.id == id;
      }
    );
    return post;
  }

  // Mettre à jour les love it
  updateLovesIt(id: number, loveIts: number){
    const toUpdate = this.getPostById(id);
    const toUpdateIndex = this.posts.indexOf(toUpdate);
    this.posts[toUpdateIndex].loveIts = loveIts;
    this.emitPostSubject();
  }

}
