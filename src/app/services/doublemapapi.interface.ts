import {AsyncResultList} from './async.interface';
import {Bus} from '../models/bus';
import {Route} from '../models/route';
import {Stop} from '../models/stop';

export interface DoubleMapApiInterface {
    buses: AsyncResultList<Bus>;
    routes: AsyncResultList<Route>;
    stops: AsyncResultList<Stop>;
}
