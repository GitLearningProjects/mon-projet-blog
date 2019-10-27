import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  userForm: FormGroup;

  constructor(private postService: PostService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  // Initialisation du formulaire
  
  initForm(){
    this.userForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        content: ['', Validators.required]
      }
    )
  }

  // Enregistrement des paramètres

  onSubmit(){
    const formValue = this.userForm.value;
    this.postService.addPost(formValue['title'], formValue['content']);
    this.router.navigate(['/posts']);
  }
}
