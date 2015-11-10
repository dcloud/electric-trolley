import {Point} from './point';

describe('Point', () => {
    it('has name given in the constructor', () => {
        let point = new Point(3, 2);
        expect(point.coordinates).toEqual([2, 3]);
    });
    // it('has id given in the constructor', () => {
    //     let hero = new Hero(1, 'Super Cat');
    //     expect(hero.id).toEqual(1);
    // });
});
