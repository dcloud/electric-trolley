/// <reference path="../lib/geojson.d.ts" />

export class LineString implements GeoJSON.LineString {
    type: string = "LineString";
    coordinates: GeoJSON.Position[] = [];

    constructor() { }
}

export class Point implements GeoJSON.Point {
    type: string = "point";
    _coordinates: GeoJSON.Position;

    static fromPosition(p: GeoJSON.Position) {
        return new Point(p[1], p[0]);
    }

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
