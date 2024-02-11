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

  test('returns -1 for rawData if missing > at final position', () => {
    let result = processor("9701::<487297403495720912");
    expect(result.rawData).toBe(-1);
  });

  test("returns -1 for rawData if > is in wrong place", () => {
    let result = processor("9701::<487297403495<720912>");
    expect(result.rawData).toBe(-1);
  });

  test("should trim whitespace from transmission", () => {
    let result = processor("9701::<487297403495720912> ");
    expect(result.rawData).toBe('487297403495720912');
  });

  test("returns -1 if id is NaN", () => {
    let result = processor("970d1::<487297403495720912> ");
    expect(result.id).toBe(-1);
  });

  it('returns -1 if transmission includes multiple sets of ::', () => {
    let result = processor('9701::<48729::510524538>');
    expect(result).toBe(-1);
  })

  it('returns -1 if letters are present in the rawdata', () => {
    let result = processor('9707::<4895125d6542588>');
    expect(result.rawData).toBe(-1);
  })
 //add final test cases from examples and then write the code
});


