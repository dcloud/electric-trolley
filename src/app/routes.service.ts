import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {JSONServiceInterface} from './jsonservice.interface';
import {Route} from './route';

@Injectable()
export class RoutesService implements JSONServiceInterface<Route> {
    items: Route[];

    constructor(private http: Http) { }

    fetchItems() {
        return new Promise((resolve) => {
            this.http.get("/data/json/routes.json")
                .map(res => res.json())
                .subscribe(json => {
                    this.items = [];
                    for (let obj of json) {
                        this.items.push(
                            new Route(obj.route_id || null, obj.route_short_name, obj.route_desc, obj.route_type,
                            obj.route_long_name, obj.route_color, obj.route_text_color, obj.route_url)
                        );
                    }
                    resolve(this.items);
                });
        });
    }
}
