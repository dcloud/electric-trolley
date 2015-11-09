import {Point} from './point';


export class Bus {
    id: number;
    routeId: number;
    name: string;
    position: Point;
    lastUpdate: Date;

    constructor(id: number, routeId: number, name?: string, lat?: number, lon?: number, lastUpdate?: number) {
        this.id = id;
        this.routeId = routeId;
        this.name = name;
        if (lat && lon) {
            this.position = new Point(lat, lon);
        }
        if (lastUpdate)
            this.lastUpdate = new Date(lastUpdate);
    }
}
