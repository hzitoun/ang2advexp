/**
 * Created by Hamed on 3/5/2016.
 */
import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";


@Injectable()
export class WeatherHttpService{
    private method : string;

    constructor(private _http : Http){

    }

    //getTime(){
    //    return this._http.get('http://date.jsontest.com').map(res => res.json());
    //}




    getWeatherByCityName(cityName : string){
        let headers : Headers = new Headers();
        headers.append('Access-Control-Allow-Origin','*');
        return this._http
            .get('http://filltext.com/?rows=1&delay=2&desc=["clouds","sun","rain"]&temp={numberLength|2}&cityName='+ cityName
            , headers).map(res => res.json());

    }




    //postData(){
    //    let headers : Headers = new Headers();
    //    headers.append('Content-Type','application/x-www-form-urlencoded')
    //    return this._http.post(
    //        'http://validate.jsontest.com',
    //            'json='+JSON.stringify({a : 'f', b : 'o'}),
    //        {
    //            headers : headers
    //        })
    //        .map(res => res.json());
    //}




}