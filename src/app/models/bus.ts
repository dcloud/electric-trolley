import {Point} from './geo';

export class Bus {
    id: number;
    routeId: number;
    name: string;
    position: Point;
    lastUpdate: Date;

    constructor(id: number, routeId: number, name?: string, position?: Point, lastUpdate?: number) {
        this.id = id;
        this.routeId = routeId;
        this.name = name;
        this.position = position;
        if (lastUpdate)
            this.lastUpdate = new Date(lastUpdate);
    }
}
