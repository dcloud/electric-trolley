/// <reference path="geojson.d.ts" />

interface Turf {
    // Measurement
    along(line: GeoJSON.LineString, distance: number, units?: string): GeoJSON.Point;
    area(input: GeoJSON.Feature | GeoJSON.FeatureCollection): number;
    bboxPolygon(bbox: number[]): GeoJSON.Polygon;
    bearing(start: GeoJSON.Point, end: GeoJSON.Point): number;
    center(features: GeoJSON.FeatureCollection): GeoJSON.Point;
    centroid(features: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.Point;
    destination(start: GeoJSON.Point, distance: number, bearing: number, units: string): GeoJSON.Point;
    distance(from: GeoJSON.Point, to: GeoJSON.Point, units?: string): number;
    envelop(fc: GeoJSON.FeatureCollection): GeoJSON.Polygon;
    extent(input: GeoJSON.Feature | GeoJSON.FeatureCollection): number[];
    lineDistance(line: GeoJSON.LineString, units: string): number;
    midpoint(pt1: GeoJSON.Point, pt2: GeoJSON.Point): GeoJSON.Point;
    pointOnSurface(input: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.Feature;
    size(bbox: number[], factor: number): number[];
    square(bbox: number[]): number[];

    // Transformation
    bezier(line: GeoJSON.LineString, resolution?: number, sharpness?: number): GeoJSON.LineString;
    buffer(feature: GeoJSON.Feature | GeoJSON.FeatureCollection, distance: number, unit: string): any;
    concave(points: GeoJSON.FeatureCollection, maxEdge: number, units: string): GeoJSON.Polygon;
    convex(input: GeoJSON.FeatureCollection): GeoJSON.Polygon;
    difference(poly1: GeoJSON.Polygon, poly2: GeoJSON.Polygon): GeoJSON.Polygon;
    intersect(poly1: GeoJSON.Polygon, poly2: GeoJSON.Polygon): any;
    merge(fc: GeoJSON.FeatureCollection): GeoJSON.Feature;
    simplify(feature: GeoJSON.Feature | GeoJSON.FeatureCollection | GeoJSON.GeometryCollection,
             tolerance: number, highQuality: boolean): GeoJSON.Feature | GeoJSON.FeatureCollection | GeoJSON.GeometryCollection;
    union(poly1: GeoJSON.Polygon, poly2: GeoJSON.Polygon): GeoJSON.Polygon | GeoJSON.MultiPolygon;

    // Misc
    combine(fc: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection;
    explode(input: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.FeatureCollection;
    flip(input: GeoJSON.Feature | GeoJSON.FeatureCollection): GeoJSON.Feature | GeoJSON.FeatureCollection;
    kinks(polygon: GeoJSON.Polygon): GeoJSON.FeatureCollection;
    lineSlice(point1: GeoJSON.Point, point2: GeoJSON.Point, line: GeoJSON.LineString): GeoJSON.LineString;
    pointOnLine(line: GeoJSON.LineString, point: GeoJSON.Point): GeoJSON.Point;

    // Helper
    featurecollection(features: GeoJSON.Feature[]): GeoJSON.FeatureCollection;
    linestring(coordinates: GeoJSON.Position[], properties: Object): GeoJSON.LineString;
    point(coordinates: number[], properties: Object): GeoJSON.Point;
    polygon(rings: GeoJSON.LineString[], properties: Object): GeoJSON.Polygon;

    // Data
    filter(features: GeoJSON.FeatureCollection, key: string, value: string): GeoJSON.FeatureCollection;
    random(type?: string, count?: number, options?: Object): GeoJSON.FeatureCollection;
    remove(features: GeoJSON.FeatureCollection, property: string, value: string): GeoJSON.FeatureCollection;
    sample(features: GeoJSON.FeatureCollection, n: number);

    // Interpolation
    hexGrid(bbox: number[], cellWidth: number, units: string): GeoJSON.FeatureCollection;
    isolines(points: GeoJSON.FeatureCollection, z: string, resolution: number, breaks: number[]): GeoJSON.FeatureCollection;
    planepoint(interpolatedPoint: GeoJSON.Point, triangle: GeoJSON.Polygon): number;
    pointGrid(extent: number[], cellWidth: number, units: string): GeoJSON.FeatureCollection;
    squareGrid(extent: number[], cellWidth: number, units: string): GeoJSON.FeatureCollection;
    tin(points: GeoJSON.FeatureCollection, propertyName?: string): GeoJSON.FeatureCollection;
    triangleGrid(extent: number[], cellWidth: number, units: string): GeoJSON.FeatureCollection;

    //  Joins
    inside(point: GeoJSON.Point, polygon: GeoJSON.Polygon): boolean;
    tag(points: GeoJSON.FeatureCollection, polygons: GeoJSON.FeatureCollection,
        polyId: string, containingPolyId: string): GeoJSON.FeatureCollection;
    within(points: GeoJSON.FeatureCollection, polygons: GeoJSON.FeatureCollection): GeoJSON.FeatureCollection;

    // Classification
    jenks(input: GeoJSON.FeatureCollection, field: string, numberOfBreaks: number): number[];
    nearest(point: GeoJSON.Point, against: GeoJSON.FeatureCollection): GeoJSON.Point;
    quantile(input: GeoJSON.FeatureCollection, field: string, percentiles: number[]): number[];
    reclass(input: GeoJSON.FeatureCollection, inField: string, outField: string, translations: number[]): GeoJSON.FeatureCollection;
}

declare var turf: Turf;
