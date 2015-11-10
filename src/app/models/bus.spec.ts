import {Bus} from "./bus";
import {Point} from './point';

const btownLon = 39.162222;
const btownLat = -86.529167;

describe('Bus', () => {
    let busPos: Point, now: number, bus: Bus;

    beforeAll(function() {
        busPos = new Point(btownLat, btownLon);
        now = Date.now();
        bus = new Bus(1, 12, "Bus 12", busPos, now);
    });
    it('has id given in the constructor', () => {
        expect(bus.id).toEqual(1);
    });
    it('has routeId given in the constructor', () => {
        expect(bus.routeId).toEqual(12);
    });
    it('has name given in the constructor', () => {
        expect(bus.name).toEqual("Bus 12");
    });
    it('has position given in the constructor', () => {
        expect(bus.position).toBeDefined();
        expect(bus.position.lat).toEqual(btownLat);
        expect(bus.position.lon).toEqual(btownLon);
    });
    it('has lastUpdate interpreted from number given in the constructor', () => {
        expect(bus.lastUpdate).toBeDefined();
        expect(bus.lastUpdate.valueOf()).toEqual(now);
    });
    it('has undefined lastUpdate is not provided in constructor', () => {
        let updateLessBus = new Bus(1, 12, "bus 12", busPos);
        expect(updateLessBus.lastUpdate).toBeUndefined();
    });
});
