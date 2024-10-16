import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: string[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getCategories().subscribe(
      (data: string[]) => {
        this.categories = data;
        console.log('Catégories récupérées:', this.categories);
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories', error);
      }
    );
  }
}
