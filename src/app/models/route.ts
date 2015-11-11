/// <reference path="../lib/geojson.d.ts" />
import {Point, LineString} from "./geo";


export enum RouteType { LightRail, Subway, Rail, Bus, Ferry, CableCar, Gondola, Funicular };

export class Route {
    id: number;
    longName: string;
    shortName: string;
    description: string;
    type: RouteType;
    color: string;
    textColor: string;
    url: string;
    private _lineString: LineString = new LineString();

    constructor(id: number, shortName?: string, description?: string, type?: RouteType,
                longName?: string, color?: string, textColor?: string, url?: string, pointsArr?: Array<number>) {
        this.id = id;
        this.shortName = shortName;
        this.description = description;
        this.type = type;
        this.longName = longName;
        this.color = color;
        this.textColor = textColor;
        this.url = url;
        if (pointsArr)
            this.pathFromArray(pointsArr);
    }

    get routeType(): string {
        return RouteType[this.type];
    }

    get path(): GeoJSON.Position[] {
        return this._lineString.coordinates;
    }

    set path(newPath: GeoJSON.Position[]) {
        if (this._lineString === undefined) {
            this._lineString = new LineString();
        }
        this._lineString.coordinates = newPath;
    }

    get lineString(): LineString {
        return this._lineString;
    }

    /**
    * Creates a GeoJSON.Position array from a flat array of lat/lon values.
    */
    pathFromArray(pointArray: number[]) {
        if (pointArray && pointArray.length % 2 === 0) {
            this._lineString = new LineString();
            for (let i = 0; i < pointArray.length - 1; i += 2) {
                this._lineString.coordinates.push([pointArray[i+1], pointArray[i]]);
            }

        }
    }

}
