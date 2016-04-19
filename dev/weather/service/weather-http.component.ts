/**
 * Created by Hamed on 3/5/2016.
 */
import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";
import {ControlMessages} from "../../validation/control-messages.component";
import {WeatherHttpService} from "./weather-http.service";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";
import {WeatherService} from "./weather.service";
import {WeatherItem} from "../weather-item";
import {WeatherItem} from "../weather-item";

@Component({
    selector : 'weather-search',
    template : `
    <section class="weather-search">
         <form [ngFormModel]="weatherForm" (ngSubmit) = "onSubmit(weatherForm.value)">
           <validation-message field="cityName"></validation-message>
            <input #cityName ngControl="cityName" type="text" placeholder="search by city..." required/>
            <button type="submit" [disabled]="!weatherForm.valid">Add city</button>
        </form>
         <div>
               <span class="info">City found:</span>{{city}}
         </div>
     </section>
    `,
    providers : [WeatherHttpService, WeatherService],
    directives : [ControlMessages]

})

export class WeatherHttpComponent implements OnInit{

    public weatherForm : ControlGroup;

    constructor(private _weatherService : WeatherService,
                private _service : WeatherHttpService,
                private _formBuilder : FormBuilder){

    }

    public onSubmit(formValue){
            this._service.getWeatherByCityName(formValue.cityName)
                .subscribe(
                    data =>  this.addEltToList(data),
                    err => console.log(err),
                    ()  => console.log('finished'));
    }

    private addEltToList(elt : any){
      this._weatherService.addElement(new WeatherItem(elt[0].cityName, elt[0].desc, elt[0].temp));
    }

    ngOnInit():any {
            this.weatherForm = this._formBuilder.group({
                'cityName' : ['', Validators.required]
            });
    }

    get city(){
     return this.weatherForm.value.cityName;
    }


}
