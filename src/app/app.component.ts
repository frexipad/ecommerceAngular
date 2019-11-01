import {Component, OnInit} from '@angular/core';
import {CatalogueService} from './catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommerce';
  private categories;

  // noinspection JSAnnotator
  constructor(private catalogueService:CatalogueService)

   ngOnInit(): void {
     this.getCategory();
  }

  private getCategory() {
    this.catalogueService.getResource("/categories")
      .subscribe(data=>{
        this.categories=data;
      },
        err=>{
        console.log("Error unknown ynss")
        })

  }
}
