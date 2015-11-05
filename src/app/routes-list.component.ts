import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Route, RouteType} from './route';
import {RoutesService} from './routes.service';

@Component({
    selector: 'routes-list-component',
    providers: [RoutesService],
    template: `
<ul>
    <li *ng-for="#r of routes">
        <h3 class="short-name" [style.color]="'#'+r.color">Route {{ r.shortName }}: #{{r.id }}</h3>
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

    constructor(service: RoutesService) {
        service.fetchItems().then(() => {
            this.routes = service.items.sort((a, b) => {
                if (a.shortName < b.shortName)
                    return -1;
                if (a.shortName > b.shortName)
                    return 1;
                return 0;
            });
        });
    }
}
