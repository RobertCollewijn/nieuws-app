import { Component, OnInit } from '@angular/core';
import {NieuwsItem} from "../../models/nieuws-item";
import {NieuwsItemsService} from "../../services/nieuws-items.service";

@Component({
  selector: 'app-nieuws-items',
  templateUrl: './nieuws-items.component.html',
  styleUrls: ['./nieuws-items.component.css']
})
export class NieuwsItemsComponent implements OnInit {


  nieuwsItems: NieuwsItem[];

  constructor(private nieuwsItemService: NieuwsItemsService) {
    setTimeout(()=> {
      this.nieuwsItemService.loadNieuwsItems()
        .subscribe(
          data => {
            this.nieuwsItems = data
          },
          error => console.error(error)
        );
    },4);
  }

  ngOnInit() {
  }
}
