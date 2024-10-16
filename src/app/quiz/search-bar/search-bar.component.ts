import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  showButton1: boolean = false;
  showButton2: boolean = false;

  onInput(value: string): void {
    // Logique pour afficher ou masquer les boutons
    this.showButton1 = value.includes('categorie1'); // Remplacez 'categorie1' par votre critère
    this.showButton2 = value.includes('categorie2'); // Remplacez 'categorie2' par votre critère
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement; // Assertion de type
    this.onInput(target.value); // Passez la valeur à la fonction onInput
  }
}
