/// <reference path="../lib/geojson.d.ts" />

export class Point implements GeoJSON.Point {
    type: string = "point";
    _coordinates: GeoJSON.Position = [];

    constructor(lat: number, lon: number) {
        this._coordinates = [lon, lat];
    }

    get lat(): number {
        return this._coordinates[1];
    }

    get lon(): number {
        return this._coordinates[0];
    }

    toString() {
        return `{ lat: ${this.lat}, lon: ${this.lon}}`;
    }

    get coordinates(): GeoJSON.Position {
        return this._coordinates;
    }
}
