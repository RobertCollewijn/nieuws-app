///<reference path="../../node_modules/rxjs/add/operator/debounceTime.d.ts"/>
///<reference path="../../node_modules/rxjs/add/operator/distinctUntilChanged.d.ts"/>
import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {NieuwsItem} from "./models/nieuws-item";
import {NieuwsItemsService} from "./services/nieuws-items.service";
import {Response} from "@angular/http";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nieuws App !';

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


}
