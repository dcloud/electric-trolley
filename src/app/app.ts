import {Component, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {GeolocatorButtonComponent} from './components/geolocator-button.component';
import {RoutesListComponent} from './components/routes-list.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'application',
    template: `
    <h1>{{title}}</h1>
    <geolocator-button (geolocated)="onGeolocated($event)"></geolocator-button>
    <p *ng-if="currentLocation">{{currentLocation.coords.latitude}}, {{currentLocation.coords.longitude}}</p>
`,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RoutesListComponent, GeolocatorButtonComponent]
})
class AppComponent {
    public title = 'Electric Trolley';
    public currentLocation: Position;

    onGeolocated(event) {
        this.currentLocation = event.value;
        console.log(this.currentLocation);
    }
}

bootstrap(AppComponent, [HTTP_PROVIDERS]).catch(err => console.error(err));
