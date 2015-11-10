/// <reference path="../lib/geojson.d.ts" />

export class Point implements GeoJSON.Point {
    type: string = "point";

    constructor(lat: number, lon: number) {
        this.coordinates = [lon, lat];
    }

    get lat(): number {
        return this.coordinates[1];
    }

    get lon(): number {
        return this.coordinates[0];
    }

    toString() {
        return `{ lat: ${this.lat}, lon: ${this.lon}}`;
    }

    get coordinates(): GeoJSON.Position {
        return [this.lon, this.lat];
    }
}
