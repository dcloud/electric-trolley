import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {JSONServiceInterface} from './jsonservice.interface';
import {Stop} from './stop';
import {Point} from './point';

@Injectable()
export class StopsService implements JSONServiceInterface<Stop> {
    items: Stop[];

    constructor(private http: Http) { }

    fetchItems() {
        return new Promise((resolve) => {
            this.http.get("/data/json/stops.json")
                .map(res => res.json())
                .subscribe(json => {
                    this.items = [];
                    for (let obj of json) {
                        let newStop = new Stop(obj.stop_id || 0, obj.stop_name, obj.stop_desc, new Point(obj.stop_lat, obj.stop_lon));
                        this.items.push(newStop);
                    }
                    resolve(this.items);
                });
        });
    }
}
