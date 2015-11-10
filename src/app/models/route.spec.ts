import {Route, RouteType} from './route';

describe('Route', () => {
    it('has a numeric id', () => {
        let route = new Route(2, "The 9");
        expect(route.id).toEqual(2);
    })
    it('can provide the RouteType as a string', () => {
        let route = new Route(2, "The 9");
        route.type = RouteType.Bus;
        expect(route.routeType).toEqual("Bus");
    })
    describe('handles creation of paths of GeoJSON positions from a flat numeric array of lat/lon', () => {
        let route = new Route(2, "");
        let routeArray = [ 39.164, -86.532365,
                                39.164004, -86.533653,
                                39.164154, -86.533653,
                                39.164141, -86.532365,
                                39.164139, -86.53236,
                                39.164001, -86.53236,
                                39.16395, -86.53236];
        it('pathFromArray creates a position array equal to 1/2 the length of the numeric array', () => {
            route.pathFromArray(routeArray);
            expect(route.path).not.toBe(null);
            expect(route.path.length).toEqual(routeArray.length/2);
        });
        it('pathFromArray correctly orders position values as [lon, lat]', () => {
            route.pathFromArray(routeArray);
            expect(route.path[0][0]).toEqual(-86.532365);
        });
        it('pathFromArray rejects numeric arrays of uneven length', () => {
            let route = new Route(2, "");
            route.pathFromArray([39.164, -86.532365, 39.164004]);
            expect(route.path.length).toBe(0);
        });
    });
});
