import {Stop} from './stop';
import {Point} from "./point";

describe('Stop', () => {
    it('has name given in the constructor', () => {
        let stop = new Stop(1, "Stop 1");
        expect(stop.name).toEqual("Stop 1");
    });
    it('has id given in the constructor', () => {
        let stop = new Stop(12, "Stop 12");
        expect(stop.id).toEqual(12);
    });
    it('has description given in the constructor', () => {
        let stop = new Stop(12, "Stop 12", "A stop!");
        expect(stop.description).toEqual("A stop!");
    });
    it('has point given in the constructor', () => {
        let stop = new Stop(12, "Stop 12", "A stop!", new Point(39.164, -86.532365));
        expect(stop.point).toBeDefined();
        expect(stop.point.lat).toEqual(39.164);
    });
});
