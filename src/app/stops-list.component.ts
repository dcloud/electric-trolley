import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Stop} from './stop';
import {StopsService} from './stops.service';

@Component({
    selector: 'stops-list-component',
    providers: [StopsService],
    template: `
<ul>
    <li *ng-for="#stop of stops">
        {{ stop.name }}
    </li>
</ul>
`,
    directives: [CORE_DIRECTIVES]
})
export class StopsListComponent {
    public stops: Stop[];

    constructor(stopsService: StopsService) {
        stopsService.fetchStops().then(() => {
            this.stops = stopsService.stops;
        });
    }
}
