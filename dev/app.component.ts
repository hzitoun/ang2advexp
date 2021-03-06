import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherHttpComponent} from "./weather/service/weather-http.component"

@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>Advanced angular 2 exmaple using http://openweathermap.org/api</h1>
        </header>
        <weather-search></weather-search>
        <br/>
        <weather-list></weather-list>
    `,
    directives : [WeatherListComponent, WeatherHttpComponent]
})
export class AppComponent {
}
