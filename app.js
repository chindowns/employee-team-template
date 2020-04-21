const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const htmlRender = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,

// and to create objects for each team member (using the correct classes as blueprints!)
function addEmployee() {
    inquirer.prompt(questions)
        .then(answers => {
            let main = [];
            console.log(answers);

            switch (answers.role) {
                case 'Manager':
                    let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    main.push(manager);
                    console.log(manager);
                    break;

                case 'Engineer':
                    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    main.push(engineer);
                    console.log(engineer);
                    break;

                case 'Intern':
                    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    main.push(intern);
                    console.log(intern);
                    break;

            }
            
            if (answers.add) { addEmployee(); }
            else{let outputfile = htmlRender(main);
            fs.writeFileSync('./output/team.html', outputfile, function(err, result){
                if(err) throw err;
                console.log("Look at your ./output/team.html file");
            });
            }

        })
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

var questions = [
    {
        type: "input",
        name: "name",
        message: "Enter the employee's name: "
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee's ID: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address: "
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
    {
        when: (answers) => answers.role === "Manager",
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number: "
    },
    {
        when: (answers) => answers.role === "Engineer",
        type: "input",
        name: "github",
        message: "Enter the engineer's github user name: "
    },
    {
        when: (answers) => answers.role === "Intern",
        type: "input",
        name: "school",
        message: "Enter the Intern's school: "
    },
    {
        type: 'confirm',
        name: 'add',
        message: 'Add another employee? (no)',
        default: false
    }
];

addEmployee();