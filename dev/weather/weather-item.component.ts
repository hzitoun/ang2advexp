import {Component, Input} from 'angular2/core';
import {WeatherItem} from "./weather-item";
import {WeatherItem} from "./weather-item";


@Component({
    selector: 'weather-item',
    template: `
        <article class="weather-element">
            <div class="col-1">
                <h3>{{item.cityName}}</h3>
                <p class="info">{{item.desc}}</p>
            </div>
            <div class="col-2">
                <span class="temperature">{{item.temp}}°</span>
            </div>
        </article>
    `,
    styleUrls : ['src/css/weather-item.css'],
   // inputs :  ['item : data']
})
export class WeatherItemComponent {
   @Input('data') item : WeatherItem;
    constructor(){
   // this.item = new WeatherItem('Bordeaux','Clouds', 12);
    }
}