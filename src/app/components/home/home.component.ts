import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[PostService]
})
export class HomeComponent {
  public posts:Array<Post>;
  private checkPost;

  constructor(
    private _postService:PostService
  ){
    this.posts=[];
    this.loadPost();
    this.checkPost=setInterval(()=>{
      this.loadPost();
    },10000);
  }
  loadPost(){
    this._postService.getPosts().subscribe({
      next:(response:any)=>{
        
        if(response.status==200){
          this.posts=response.data;
          console.log(this.posts);
        }
      },
      error:(err:Error)=>{

      }
    });
  }
}
