import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RequestsRouting } from './request-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostServices } from './services/post.service';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [PostListComponent, PostItemComponent],
  imports: [CommonModule, RequestsRouting, HttpClientModule],
  providers: [PostServices],
})
export class RequestsModule {}
