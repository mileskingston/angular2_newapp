import { Component } from '@angular/core';

export class Item {
	id: number;
	name: string;
	category: string;
}

const ITEMS: Item[] = [
  { id: 1, name: 'Floor Lamp', category: 'Lighting' },
  { id: 2, name: 'Table Lamp', category: 'Lighting' },
  { id: 3, name: 'Dining Table', category: 'Tables' },
  { id: 4, name: 'Bedside Table', category: 'Tables' },
  { id: 5, name: 'Sofa', category: 'Furniture' },
  { id: 6, name: 'Arm Chair', category: 'Furniture' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  items = ITEMS;
  title = "Hello"
}