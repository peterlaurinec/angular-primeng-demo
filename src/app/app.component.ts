import { Component } from '@angular/core';
import { ProductService } from './services/productservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'csob-leasing';
}
