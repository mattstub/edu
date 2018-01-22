import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Banana Bread', 'Best banana bread', 'https://23991-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2015/12/banana-bread-recipe-fp.jpg'),
    // tslint:disable-next-line:max-line-length
    new Recipe('Banana Bread', 'Best banana bread', 'https://23991-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2015/12/banana-bread-recipe-fp.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
