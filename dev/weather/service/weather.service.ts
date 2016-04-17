/**
 * Created by Hamed on 4/17/2016.
 */

import {Injectable} from "angular2/core";
import {WeatherItem} from "../weather-item";

@Injectable()
export class WeatherService{

    private list : WeatherItem[];

    public getData(){
        this.list = [];
        for(var i = 1; i < 5; i++){
            this.list.push(new WeatherItem('City' + i, 'CLOUDS', i * 2));
        }
        return Promise.resolve(this.list);
    }

    public addElement(item : WeatherItem){
        this.list.push(item);
        return Promise.resolve(this.list);
    }


}
