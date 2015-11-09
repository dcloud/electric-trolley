import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Route, RouteType} from './route';
import {DoubleMapApiService} from './doublemapapi.service';

@Component({
    selector: 'routes-list-component',
    providers: [DoubleMapApiService],
    template: `
<ul>
    <li *ng-for="#r of routes">
        <h3 class="short-name" [style.color]="'#'+r.color">Route {{ r.shortName }}: #{{r.id }}</h3>
        <p>{{ r.longName }}</p>
    </li>
</ul>
`,
    styles: [
        `ul {
            list-style: none;
        }
        .short-name {
            font-weight: bold;
        }
        `
    ],
    directives: [CORE_DIRECTIVES]
})
export class RoutesListComponent {
    public routes: Route[];

    constructor(service: DoubleMapApiService) {
        service.routes().then((results: Route[]) => {
            this.routes = results.sort((a, b) => {
                if (a.shortName < b.shortName)
                    return -1;
                if (a.shortName > b.shortName)
                    return 1;
                return 0;
            });
        });
    }
}
