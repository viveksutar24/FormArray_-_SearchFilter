import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  search: any;


  heroes = [
    { id: 1, name: "Pradip", city: "Solapur" },
    { id: 2, name: "Vivek", city: "Kolhapur" },
    { id: 3, name: "Raj", city: "Haldi" },
    { id: 4, name: "Aditya", city: "Bavada" },
    { id: 5, name: "Sagar", city: "Pune" },
    { id: 6, name: "Divakar", city: "Mumbai" },
    { id: 7, name: "jaydip", city: "Haidrabad" },
    { id: 8, name: "Omkar", city: "Pune" },
  ]



  ngOnInit(): void {

  }



}
