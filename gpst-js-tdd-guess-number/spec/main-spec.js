const main = require('../main/main');

describe('gust-is-tdd', function() {
    it('first',function () {
        var system=[1,2,3,4];
        var user=[1,2,3,4];
        var result=main(system,user);
        expect(result).toEqual('4A0B');
    });
    it('second',function () {
        var system=[1,2,3,4];
        var user=[4,3,2,1];
        var result=main(system,user);
        expect(result).toEqual('0A4B');
    });


});