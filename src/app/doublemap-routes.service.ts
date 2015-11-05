import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {JSONServiceInterface} from './jsonservice.interface';
import {ApiServiceInterface} from './apiservice.interface';
import {Route} from './route';

@Injectable()
export class DoubleMapRoutesService implements ApiServiceInterface, JSONServiceInterface<Route> {
    baseURL: string = "http://bloomington.doublemap.com/map/v2/";
    endpoint: string = "routes";
    private endpointURL: string = `${this.baseURL}${this.endpoint}`;
    items: Route[];

    constructor(private http: Http) { }

    fetchItems() {
        return new Promise((resolve) => {
            this.http.get(this.endpointURL)
                .map(res => res.json())
                .subscribe(json => {
                    this.items = [];
                    for (let obj of json) {
                        let r = new Route(obj.id || null, obj.short_name, obj.description);
                        this.items.push(r);
                    }
                    resolve(this.items);
                });
        });
    }
}
