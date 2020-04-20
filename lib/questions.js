var questions = [
    {
    type: "input",
    name: "name",
    message: "Enter the employee's name."
    },
    {type: "input",
    name: "id",
    message: "Enter the employee's ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the employee's email address."
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: [
            "Employee",
            "Manager",
           "Engineer",
            "Intern"
        ]
    },
    {
        when: (answers)=>answers.role === "Manager",
        type: "input",
        name: "officeNumber",
        message: "Enter the manager's office number."        
    },
    {
        when: (answers) => answers.role === "Engineer",
        type: "input",
        name: "github",
        message: "Enter the engineer's github user name."
    },
    {
        when: (answers) => answers.role === "Intern",
        type: "input",
        name: "school",
        message: "Enter the Intern's school."
    }
]

exports = questions;