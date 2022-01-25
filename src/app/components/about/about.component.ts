import { Component, OnInit } from '@angular/core';
import { latestBlogsList, skillsSet, workExperienceList } from 'src/app/shared/resources/about-content-list';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skillsSetList :any = skillsSet;
  latestBlogsDetailList : any = latestBlogsList;
  experienceList: any = workExperienceList;

  constructor() { }

  ngOnInit(): void {
  }

}
