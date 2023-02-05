#!/usr/bin/env node
import inquirer from "inquirer";
let students = [];
const addStudent = async () => {
    const student = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter student name:",
        },
        {
            type: "input",
            name: "age",
            message: "Enter student age:",
        },
        {
            type: "input",
            name: "grade",
            message: "Enter student grade:",
        },
    ]);
    students.push(student);
    menu();
};
const viewStudents = () => {
    console.log("Student List:");
    for (let student of students) {
        console.log(`- ${student.name} (Age: ${student.age}, Grade: ${student.grade})`);
    }
    menu();
};
const deleteStudent = async () => {
    const { name } = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the name of the student you wish to delete:",
        },
    ]);
    const index = students.findIndex((std) => std.name === name);
    if (index === -1) {
        console.log(`Student ${name} not found.`);
    }
    else {
        students.splice(index, 1);
        console.log(`Student ${name} deleted successfully!.`);
    }
    menu();
};
const menu = async () => {
    const { choice } = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Select an option:",
            choices: ["Add student", "View student", "Delete student", "Exit"],
        },
    ]);
    switch (choice) {
        case "Add student":
            addStudent();
            break;
        case "Add student":
            addStudent();
            break;
        case "View student":
            viewStudents();
            break;
        case "Delete student":
            deleteStudent();
            break;
    }
};
console.log("Welcome to the student management system!");
menu();
