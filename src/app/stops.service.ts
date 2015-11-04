import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Stop} from './stop';
import {Point} from './point';

@Injectable()
export class StopsService {
    stops: Stop[];

    constructor(private http: Http) { }

    fetchStops() {
        return new Promise((resolve) => {
            this.http.get("/data/json/stops.json")
                .map(res => res.json())
                .subscribe(stopsJSON => {
                    this.stops = [];
                    for (let s of stopsJSON) {
                        let newStop = new Stop(s.stop_id || 0, s.stop_name, s.stop_desc, new Point(s.stop_lat, s.stop_lon));
                        this.stops.push(newStop);
                    }
                    resolve(this.stops);
                });
        });
    }
}
