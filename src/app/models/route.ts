/// <reference path="../lib/geojson.d.ts" />
import {Point} from './point';

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
    private _path: GeoJSON.Position[] = [];

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
        return this._path;
    }

    set path(newPath: GeoJSON.Position[]) {
        this._path = newPath;
    }

    /**
    * Creates a GeoJSON.Position array from a flat array of lat/lon values.
    */
    pathFromArray(pointArray: number[]) {
        if (pointArray && pointArray.length % 2 == 0) {
            this._path = [];
            for (let i = 0; i < pointArray.length - 1; i += 2) {
                let p: GeoJSON.Position = [pointArray[i+1], pointArray[i]];
                this._path.push(p);
            }

        }
    }

}
