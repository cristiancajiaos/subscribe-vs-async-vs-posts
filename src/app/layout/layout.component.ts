import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private posts: PostsService
  ) { }

  ngOnInit(): void {
    this.posts.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }

}
