import { expect } from 'chai';
import { insertion, bubble, mergeSort, quickSort } from '../lib/index.js'
// import { bubble } from '../lib/index.js' 

  describe('Insertion sort', () => {
    it('should probably maybe be a function', () => {
        expect(insertion).to.exist;
    });

    it('should sort an array of numbers', () => {    
      expect(insertion([1, 5, 2, 8])).to.deep.equal([1, 2, 5, 8]);
    })
  });

  describe('Bubble sort', () => {
    it('should be a function', () => {
      expect(bubble).to.exist;
    })

    it('should sort an array of numbers', () => {    
      expect(bubble([2, 7, 3, 8])).to.deep.equal([2, 3, 7, 8]);
    })
  });

  describe('Merge Sort', () => {
    it('should be a function', () => {
      expect(mergeSort).to.exist;
    })

    it('should sort an array of numbers', () => {    
      expect(mergeSort([2, 7, 3, 8])).to.deep.equal([2, 3, 7, 8]);
    })
  });

  describe('Quick Sort', () => {
    it('should be a function', () => {
      expect(quickSort).to.exist;
    })

    it('should sort an array of numbers', () => {    
      expect(quickSort([2, 7, 3, 8])).to.deep.equal([2, 3, 7, 8]);
    })
  });