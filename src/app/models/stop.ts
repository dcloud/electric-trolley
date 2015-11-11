import {Point} from './geo';


export class Stop {
    id: number;
    name: string;
    description: string;
    point: Point;

    constructor(id?: number, name?: string, description?: string, point?: Point) {
        this.name = name;
        this.description = description;
        this.point = point;
        this.id = id;
    }
}
