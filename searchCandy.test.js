const searchCandy = require('./searchCandy')

describe('searchCandy', () => {
    it("returns [ 'Mars', 'Maltesers' ] with Ma and 10", () => {
        expect(searchCandy('Ma', 10)).toStrictEqual(['Mars', 'Maltesers'])
    })
})

describe('searchCandy', () => {
    it("returns [ 'Skitties', 'Skittles', 'Starburst' ] with S and 10", () => {
        expect(searchCandy('S', 10)).toStrictEqual(['Skitties', 'Skittles', 'Starburst'])
    })
})

describe('searchCandy', () => {
    it("returns [ 'Skitties', 'Skittles' ] with S and 4", () => {
        expect(searchCandy('S', 4)).toStrictEqual(['Skitties', 'Skittles'])
    })
})

describe('searchCandy', () => {
    it("returns [ 'Skitties', 'Skittles' ] with s and 4", () => {
        expect(searchCandy('S', 4)).toStrictEqual(['Skitties', 'Skittles'])
    })
})