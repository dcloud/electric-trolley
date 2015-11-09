import {Position} from './position.interface';

export class Point {
    lat: number;
    lon: number;

    constructor(lat: number, lon: number) {
        this.lat = lat;
        this.lon = lon;
    }

    toString() {
        return `{ lat: ${this.lat}, lon: ${this.lon}}`;
    }

    get coordinates(): Position {
        return [this.lon, this.lat];
    }
}
