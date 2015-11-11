import {Component, EventEmitter, Output, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'geolocator-button',
    template: `
    <button (click)="onClick()">Locate me</button>
    `
})
export class GeolocatorButtonComponent {
    @Output() geolocated: EventEmitter = new EventEmitter();

    onClick() {
        let self = this;
        navigator.geolocation.getCurrentPosition(function(position) {
            self.geolocated.next({ value: position});
        });
    }
}
