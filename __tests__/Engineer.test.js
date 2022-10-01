const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "bslockhart";
    const employeeInstance = new Engineer("Brian", 2, "bslockhart@uncg.edu", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "bslockhart";
    const employeeInstance = new Engineer("Brian", 2, "bslockhart@uncg.edu", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Brian", 2, "bslockhart@uncg.edu", "bslockhart");
    expect(employeeInstance.getRole()).toBe(returnValue);
});