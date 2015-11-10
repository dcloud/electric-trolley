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
    envelop(fc: GeoJSON.FeatureCollection): GeoJSON.Polygon;
    extent(input: string | GeoJSON.FeatureCollection): number[];
    lineDistance(line: GeoJSON.LineString, units: string): number;

    // Helpers
    featurecollection(features: GeoJSON.Feature[]): GeoJSON.FeatureCollection;
    linestring(coordinates: GeoJSON.Position[], properties: Object): GeoJSON.LineString;
    point(coordinates: number[], properties: Object): GeoJSON.Point;
    polygon(rings: GeoJSON.LineString[], properties: Object): GeoJSON.Polygon;
}

declare var turf: Turf;
