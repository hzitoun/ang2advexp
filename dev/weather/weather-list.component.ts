import {Component} from 'angular2/core';
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {OnInit} from 'angular2/core';
import {WeatherService} from "./service/weather.service";

@Component({
    selector: 'weather-list',
    template: `
      <section class="weather-list">
            <div *ngFor="#item of list">
                 <weather-item [data]="item"></weather-item>
            </div>
      </section>
    `,
    directives : [WeatherItemComponent],
    providers : [WeatherService]
})
export class WeatherListComponent implements OnInit{
    list: WeatherItem[];

    constructor(private _weatherService : WeatherService){

    }

  ngOnInit() : any{
      this.list = [];
      this._weatherService.getData().then((data :WeatherItem[]) => {
          this.list = data;
      });
  }
}