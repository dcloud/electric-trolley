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

    constructor(id: number, shortName?: string, description?: string, routeType?: RouteType,
                longName?: string, color?: string, textColor?: string, url?: string) {
        this.id = id;
        this.shortName = shortName;
        this.description = description;
        this.routeType = routeType;
        this.color = color;
        this.textColor = textColor;
        this.url = url;
    }

    get routeTypeString() {
        return RouteType[this.routeType];
    }

}
