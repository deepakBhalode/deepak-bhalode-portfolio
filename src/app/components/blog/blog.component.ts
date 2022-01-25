import { Component, OnInit } from '@angular/core';
import { blogsList } from 'src/app/shared/resources/blogs-list';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  latestBlogsDetailList : any = blogsList;

  constructor() { }

  ngOnInit(): void {
  }

}
