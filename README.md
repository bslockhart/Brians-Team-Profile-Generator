# Team Profile Generator

## Description
A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Unit tests for each part of code ensure that it passes all tests.

## Table of Contents
* [Tools](#tools)
* [Links](#links)
* [Mock Up](#Mock-Up)
* [Walk Through](#Walkthrough-Video)
* [Instructions](#Instructions)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Tests](#Tests)
* [Deliverables](#Deliverables)
* [Walkthrough Video](#Walkthrough-Video)
* [Technical Acceptance Criteria](#Technical-Acceptance-Criteria)
* [Repository Quality](#Repository-Quality)
* [Submission](#Submission)

### Tools
- Bootstrap: https://getbootstrap.com/
- NodeJS: https://nodejs.org/en/
- Jest: https://www.npmjs.com/package/jest
- Inquirer: https://www.npmjs.com/package/inquirer

### Links
* Fullstack Blog Video Submission Guide: https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

### Mock Up
![Team Generator HTML Webpage Screenshot](./assets/images/MockUp.png)

## Walkthrough Video
![Team Generator Walkthrough Video]()

## Instructions
1. Clone the main project then open up the project folder in your text editor.
2. Make sure you are in the main project folder using the 'cd' command.
3. Run Tests: npm run test.
4. Initiate file: 'node index.js' or 'node index' to execute the application and load up the chain of prompts (questions).
5. Answer all the prompts and once completed, your personal Team Profile Generator will be created.

### User Story
* AS A manager
* I WANT to generate a webpage that displays my team's basic info
* SO THAT I have quick access to their emails and GitHub profiles

### Acceptance Criteria:
* GIVEN a command-line application that accepts user input
* WHEN I am prompted for my team members and their information
* THEN an HTML file is generated that displays a nicely formatted team roster based on user input
* WHEN I click on an email address in the HTML
* THEN my default email program opens and populates the TO field of the email with the address
* WHEN I click on the GitHub username
* THEN that GitHub profile opens in a new tab
* WHEN I start the application
* THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
* WHEN I enter the team manager’s name, employee ID, email address, and office number
* THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
* WHEN I select the engineer option
* THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
* WHEN I select the intern option
* THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
* WHEN I decide to finish building my team
* THEN I exit the application, and the HTML is generated

### Tests
* The command line to run a test on this application is: npm run tests

### Deliverables: 
* A sample HTML file generated using the application must be submitted.
* Your GitHub repository containing your application code.

### Walkthrough Video: 
* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
* The walkthrough video must show all four tests passing from the command line.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
* The walkthrough video must demonstrate a generated HTML file that matches the user input.

### Technical Acceptance Criteria
* Satisfies all of the preceding acceptance criteria plus the following:
- Uses the Inquirer package (Links to an external site.).
- Uses the Jest package (Links to an external site.) for a suite of unit tests.
* The application must have these classes: Employee, Manager, Engineer, and Intern.

### Repository Quality
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README with description and a link to walkthrough video.

### Submission
* Date Submitted: October 04, 2022
* A walkthrough video demonstrating the functionality of the application and passing tests:
* A sample HTML file generated using your application:
* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project: