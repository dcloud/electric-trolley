import {AsyncResultList} from './async.interface';
import {Bus} from './bus';
import {Route} from './route';
import {Stop} from './stop';

export interface DoubleMapApiInterface {
    buses: AsyncResultList<Bus>;
    routes: AsyncResultList<Route>;
    stops: AsyncResultList<Stop>;
}
