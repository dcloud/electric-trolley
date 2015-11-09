import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Stop} from '../models/stop';
import {StopsService} from '../services/stops.service';

@Component({
    selector: 'stops-list-component',
    providers: [StopsService],
    template: `
<ul>
    <li *ng-for="#stop of stops">
        <span>{{ stop.name }}</span>
    </li>
</ul>
`,
    directives: [CORE_DIRECTIVES]
})
export class StopsListComponent {
    public stops: Stop[];

    constructor(service: StopsService) {
        service.fetchItems().then(() => {
            this.stops = service.items;
        });
    }
}
