import {Point} from "./geo";

const btownLon = 39.162222;
const btownLat = -86.529167;

describe('Point', () => {
    it('has a type value of point', () => {
        let point = new Point(btownLat, btownLon);
        expect(point.type).toEqual("point");
    });
    it('has lat, lon given in the constructor', () => {
        let point = new Point(btownLat, btownLon);
        expect(point.coordinates).toEqual([btownLon, btownLat]);
    });
    it('has lat, lon when created via fromPosition', () => {
        let pos: GeoJSON.Position = [btownLon, btownLat];
        let point = Point.fromPosition(pos);
        expect(point.lat).toEqual(btownLat);
        expect(point.lon).toEqual(btownLon);
    });
    it('has lat and lon properties', () => {
        let point = new Point(3, 2);
        expect(point.lat).toEqual(3);
        expect(point.lon).toEqual(2);
    });
    it('has 2 coordinates', () => {
        let point = new Point(3, 2);
        expect(point.coordinates).toBeDefined();
        expect(point.coordinates[0]).toEqual(2);
        expect(point.coordinates[1]).toEqual(3);
    });
    it('has a nice toString representation', () => {
        let point = new Point(3, 2);
        expect(point.toString()).toEqual('{ lat: 3, lon: 2}');
    });
});
