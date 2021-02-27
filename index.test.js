const assert = require('assert');
const Calc = require('./calc.js');

//assert.equal(typeof Calc.Taylor, 'fuction');
//var t = Calc.Taylor(1);


describe('Taylor series',function(){
    t = Calc.Taylor(1);
    it('shoud have a Taylor function defined', function (){
        assert.equal(typeof Calc.Taylor, "function");  
    });
    it ('has to be equal 10', function(){
        assert.equal(Calc.Taylor(), 10);
       });
})