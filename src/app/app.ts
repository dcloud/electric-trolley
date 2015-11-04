import {Component, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {StopsListComponent} from './stops-list.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'application',
    template: `
    <h1>{{title}}</h1>
    <stops-list-component></stops-list-component>
`,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, StopsListComponent]
})
class AppComponent {
    public title = 'Electric Trolley Hi';
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);
