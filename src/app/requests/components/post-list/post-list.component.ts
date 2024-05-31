import { Component, OnInit } from "@angular/core";
import { Post, PostServices } from "../../services/post.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts$?: Observable<Post[]>

  constructor(private postService: PostServices) {}

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts()
  }
}