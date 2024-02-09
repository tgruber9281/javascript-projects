// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test('organization should be "nonprofit"', () => {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test('programs offered', () => {
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
    expect(launchcode.programsOffered.length).toBe(3);
  })

  it('launchOutput should return Launch for input of 4', () => {
    expect(launchcode.launchOutput(4)).toBe("Launch!");
  })

  it('input 3', () => {
    expect(launchcode.launchOutput(9)).toBe("Code!");
  })

  it('input 25', () => {
    expect(launchcode.launchOutput(25)).toBe("Rocks!")
  })

  it('input 6', () => {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!')
  })

  it('input 15', () => {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!')
  })
  it('input 10', () => {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!')
  })
  it('input 30', () => {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!')
  })
  it('input 31', () => {
    expect(launchcode.launchOutput(31)).toBe("Rutabagas! That doesn't work.")
  })
});