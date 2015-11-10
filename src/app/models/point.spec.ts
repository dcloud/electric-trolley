import {Point} from './point';

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
    it('has lat and lon properties', () => {
        let point = new Point(3, 2);
        expect(point.lat).toEqual(3);
        expect(point.lon).toEqual(2);
    });
    it('has a nice toString representation', () => {
        let point = new Point(3, 2);
        expect(point.toString()).toEqual('{ lat: 3, lon: 2}');
    });
});
