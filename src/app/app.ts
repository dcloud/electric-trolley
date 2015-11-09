import {Component, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
// import {StopsListComponent} from './components/stops-list.component';
import {RoutesListComponent} from './components/routes-list.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'application',
    template: `
    <h1>{{title}}</h1>
    <routes-list-component></routes-list-component>
`,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, RoutesListComponent]
})
class AppComponent {
    public title = 'Electric Trolley says Hello';
}

bootstrap(AppComponent, [HTTP_PROVIDERS]).catch(err => console.error(err));
