import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      (categories: string[]) => {
        console.log('Categories retrieved:', categories); 
        this.categories = categories; 
      },
      (error) => {
        console.error('Error retrieving categories:', error); 
      }
    );
  }
}
