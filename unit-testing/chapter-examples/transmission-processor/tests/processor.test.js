const processor = require('../processor.js');

describe("transmission processor", () => {

//  TODO: put tests here
  test('takes a string and returns an object', () => {
    let result = processor('9701::<489584872710>');
    expect(typeof result).toBe('object');
  });

  test('should return "-1" if string does not include "::"', () => {
    let result = processor('9701<489584872710>');
    expect(result).toBe(-1);
  });

  test("should return id in object", () => {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test('converts id to number', () => {
    let result = processor('9701::<489584872710>');
    expect(result.id).toBe(9701);
  });

  test("should return rawData in object", () => {
    let result = processor("9701::<489584872710>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 for rawData if missing < at position 0", function() {
    let result = processor("9701::487297403495720912>");
    expect(result.rawData).toBe(-1);
 });

 //add final test cases from examples and then write the code
});


