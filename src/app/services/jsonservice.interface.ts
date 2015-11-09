import {AsyncResultList} from './async.interface';

export interface JSONServiceInterface<T> {
    items: T[];

    fetchItems: AsyncResultList<T>;
}
