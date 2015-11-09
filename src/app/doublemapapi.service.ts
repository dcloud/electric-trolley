import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {DoubleMapApiInterface} from './doublemapapi.interface';
import {Bus} from './bus';
import {Route} from './route';
import {Stop} from './stop';
import {Point} from './point';

interface JSONTransformer {
  (json: any): any[];
}

@Injectable()
export class DoubleMapApiService implements DoubleMapApiInterface {
    private baseURL = "/api/doublemap";

    constructor(private http: Http) { }

    private makeEndpointPromise(endpointURL: string, transform: JSONTransformer) {
        return new Promise((resolve) => {
            this.http.get(endpointURL)
                .map(res => res.json())
                .subscribe(json => {
                    resolve(transform(json));
                })
        });
    }

    buses() {
        return this.makeEndpointPromise(`${this.baseURL}/buses`, (json) => {
            let items: Array<Bus> = [];
            for(let obj of json) {
                let item = new Bus(obj.id, obj.route, obj.name, obj.lat, obj.lon, obj.lastUpdate);
                items.push(item);
            }
            return items;
        })
    }

    routes() {
        return this.makeEndpointPromise(`${this.baseURL}/routes`, (json) => {
            let items: Array<Route> = [];
            for(let obj of json) {
                let item = new Route(obj.id || null, obj.short_name, obj.description);
                item.pathFromArray(obj.path);
                item.longName = obj.name || null;
                items.push(item);
            }
            return items;
        })
    }

    stops() {
        return this.makeEndpointPromise(`${this.baseURL}/stops`, (json) => {
            let items: Array<Stop> = [];
            for(let obj of json) {
                let item = new Stop(obj.id || null, obj.name, obj.description);
                item.point = {lat: obj.lat, lon: obj.lon};
                items.push(item);
            }
            return items;
        })
    }
}
