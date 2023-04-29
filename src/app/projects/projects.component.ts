import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  mitikah: Array<object> = [
    {
      image: 'assets/images/projects/mitikah/1.png',
      thumbImage: 'assets/images/projects/mitikah/1.png',
      alt: 'mitikah',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    }, 
    {
      image: 'assets/images/projects/mitikah/2.png',
      thumbImage: 'assets/images/projects/mitikah/2.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/3.png',
      thumbImage: 'assets/images/projects/mitikah/3.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/4.png',
      thumbImage: 'assets/images/projects/mitikah/4.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/4.png',
      thumbImage: 'assets/images/projects/mitikah/1.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/1.png',
      thumbImage: 'assets/images/projects/mitikah/1.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/1.png',
      thumbImage: 'assets/images/projects/mitikah/1.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/1.png',
      thumbImage: 'assets/images/projects/mitikah/1.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/1.png',
      thumbImage: 'assets/images/projects/mitikah/1.png',
      alt: 'mitikah',
    }, 
  ];

}
