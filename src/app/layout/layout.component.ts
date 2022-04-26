import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  posts: Post[] = [];
  postsAsync: Observable<Post[]>;

  constructor(
    private post: PostsService
  ) { }

  ngOnInit(): void {
    this.postsAsync = this.post.getPosts();
    this.getPosts();
  }

  getPosts() {
    this.post.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
