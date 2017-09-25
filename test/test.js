import AritGeo from '../';
import Chai from 'chai'

describe('Arithmetic/Geometric progression function',()=>{
    it("should return 0 for an empty array",()=>{
        Chai.expect(AritGeo.aritGeo([])).to.equal(0);
    });

    it("should return 'Arithmetic' for an array of [1,2,3,4]",()=>{
        Chai.expect(AritGeo.aritGeo([1,2,3,4])).to.equal('Arithmetic');
    });

    it("should return 'Geometric' for an array of [1,2,4,8,16]",()=>{
        Chai.expect(AritGeo.aritGeo([1,2,4,8,16])).to.equal('Geometric');
    });

    it("should return -1 for an array of [1,2,4,8,10]",()=>{
        Chai.expect(AritGeo.aritGeo([1,2,4,8,10])).to.equal(-1);
    });

    it("should return 'Argument is not an array' if the argument is not an array",()=>{
        Chai.expect(AritGeo.aritGeo('Wole')).to.equal('Argument is not an array');
    });

    it("should return 'No argument provided' if there is no argument",()=>{
        Chai.expect(AritGeo.aritGeo()).to.equal('No argument provided');
    });

    it("should return 'Minimum of three arguments required' for [1]",()=>{
        Chai.expect(AritGeo.aritGeo([1])).to.equal('Minimum of three arguments required');
    });

    it("should return 'Minimum of three arguments required' for [1,2]",()=>{
        Chai.expect(AritGeo.aritGeo([1,2])).to.equal('Minimum of three arguments required');
    });

    it("should return 'Array argument should not contain a string!' for ['Wole',2,4,8,10]",()=>{
        Chai.expect(AritGeo.aritGeo(['Wole',2,4,8,10])).to.equal('Array argument should not contain a string!');
    });

    it("should return 'Array argument should not contain a string!' for [1,2,'Wole',8,10]",()=>{
        Chai.expect(AritGeo.aritGeo([1,2,'Wole',8,10])).to.equal('Array argument should not contain a string!');
    });
})
