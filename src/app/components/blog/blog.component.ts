import { Component, OnInit } from '@angular/core';
import { latestBlogsList } from 'src/app/shared/resources/about-content-list';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  latestBlogsDetailList : any = latestBlogsList;

  constructor() { }

  ngOnInit(): void {
  }

}
