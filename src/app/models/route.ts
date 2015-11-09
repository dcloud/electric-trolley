import {Point} from './point';

export enum RouteType { LightRail, Subway, Rail, Bus, Ferry, CableCar, Gondola, Funicular };

export class Route {
    id: number;
    longName: string;
    shortName: string;
    description: string;
    routeType: RouteType;
    color: string;
    textColor: string;
    url: string;
    private _path: Point[] = [];

    constructor(id: number, shortName?: string, description?: string, routeType?: RouteType,
                longName?: string, color?: string, textColor?: string, url?: string, pointsArr?: Array<number>) {
        this.id = id;
        this.shortName = shortName;
        this.description = description;
        this.routeType = routeType;
        this.longName = longName;
        this.color = color;
        this.textColor = textColor;
        this.url = url;
        if (pointsArr)
            this.pathFromArray(pointsArr);
    }

    get routeTypeString() {
        return RouteType[this.routeType];
    }

    get path(): Point[] {
        return this._path;
    }

    set path(newPath: Point[]) {
        this._path = newPath;
    }

    pathFromArray(pointArray: number[]) {
        if (pointArray && pointArray.length % 2 == 0) {
            this._path = [];
            for (let i = 0; i < pointArray.length - 1; i += 2) {
                let p = new Point(pointArray[i], pointArray[i+1]);
                this._path.push(p);
            }

        }
    }

}
