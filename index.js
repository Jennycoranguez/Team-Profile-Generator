//const inquirer = require("inquirer");
import inquirer from 'inquirer'
import fs from 'fs'
//var fs = require('fs')
import Engineer from './lib/Engineer';
import Intern from './lib/Intern';
import Manager from './lib/Manager';
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");
import generateHTML from './generateHTML';
//const generateHTML = require("./generateHTML");
teammember =[];


// we need a manager
function createManager() {
    inquirer
        .prompt([
        {
            type:'input',
            message: 'what is the team managers name?',
            name: 'username',
        },
        {
            type: 'number',
            message: 'what is the team managrs id?',
            name: 'idnumber',
        },
        {
            type: 'input',
            message: 'what is the team managers email?',
            name: 'email',
        },
        {
            type:'number',
            message:'what is the team managers office number?',
            name:'officenumber',
        }
    ]).then(response => {
        const {username,idnumber,email,officenumber}= response;
        console.log( response);
        
        const manager = new Manager(username,idnumber,email,officenumber);
        teammember.push(manager);
        // ask manager to add more team members
        createTeamMember()
    })
}
// build a teammember - will have same fields
function createTeamMember() {
    // ask user to add more teammembers
    inquirer.prompt([
        { 
            type:'checkbox',
            message:'which type of team member would you like to add?',
            name:'teammember',
            choices: ['Engineer','Intern', 'None'],
        }
    ]).then(response => {
        // create teammembers based on choice
        if (response.teammember === 'Engineer') {
            createEngineer()
        }
        if (response.teammember === 'Intern') {
            createIntern()
        }
        if (response.teammember === 'None') {
            writeToFile()
        }
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type:'input',
            message:'what is your engineers name?',
            name:'username',
            
        },
        {
            type:'number',
            message:'what is the team engineers id?',
            name:'idnumber'
        },
        {
            type:'input',
            message:'what is the team engineers email?',
            name:'email',
        },
        {
            type:'input',
            message:'what is your engineers Github username?',
            name:'GithubUsername',
        },
    ]).then(response => {
        const {username,idnumber,email,GithubUser}= response;
        console.log( response);
        const engineer = new Engineer(username,idnumber,email,GithubUser);
       
        teammember.push(engineer);
        createTeamMember();
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type:'input',
            message:'what is your intern name?',
            name:'username',
            
        },
        {
            type:'number',
            message:'what is the team intern id?',
            name:'idnumber'
        },
        {
            type:'input',
            message:'what is the team intern email?',
            name:'email',
        },
        {
            type:'input',
            message:'what is your intern school?',
            name:'school',
        },
    ]).then(response => {
        const {username,idnumber,email,school}= response;
        console.log( response);
        const intern = new Intern(username,idnumber,email,school);
        
        teammember.push(intern);
        createTeamMember()
    })
}

// this function will write to file - create a html
function writeToFile() {
    // generating a html
    var data = generateHTML(teammember);

    // write to file using fs
    fs.writeFile('index.html', data);
}

createManager();

// inquirer
//     .prompt([
//     {
//         type:'input',
//         message: 'what is the team managers name?',
//         name: 'username',
//     },
//     {
//         type: 'number',
//         message: 'what is the team managrs id?',
//         name: 'idnumber',
//     },
//     {
//         type: 'input',
//         message: 'what is the team managers email?',
//         name: 'email',
//     },
//     {
//         type:'number',
//         message:'what is the team managers office number?',
//         name:'officenumber',
//     },
//     { 
//         type:'checkbox',
//         message:'which type of team member would you like to add?',
//         name:'teammember',
//         choices: ['Engineer,Intern,Employee,Manager'],
//     },
//     {
//         type:'input',
//         message:'what is your engineers name?',
//         name:'username',
        
//     },
//     {
//         type:'number',
//         message:'what is the team engineers id?',
//         name:'idnumber'
//     },
//     {
//         type:'input',
//         message:'what is the team engineers email?',
//         name:'email',
//     },
//     {
//         type:'input',
//         message:'what is your engineers Github username?',
//         name:'GithubUsername',
//     },
//     { 
//         type:'checkbox',
//         message:'which type of team member would you like to add?',
//         name:'teammember',
//         choices: ['Engineer,Intern,Employee,Manager'],
//     },
//     {
//         type:'input',
//         message:'what is your interns name?',
//         name:'username',
        
//     },
//     {
//         type:'number',
//         message:'what is the team interns id?',
//         name:'idnumber'
//     },
//     {
//         type:'input',
//         message:'what is the team interns email?',
//         name:'email',
//     },
//     {
//         type:'input',
//         message:'what is your interns school?',
//         name:'school',
//     },
//     { 
//         type:'checkbox',
//         message:'which type of team member would you like to add?',
//         name:'teammember',
//         choices: ['Engineer,Intern,Employee,Manager'],
//     },
// ]).then((response) =>{
//     const {username,idnumber,email,officenumber}= response;
//     console.log( response);
    
//     const manager = new Manager(username,idnumber,email,officenumber);
//     const addManger ={
//         role: manager.getRole(),
//         name: manager.getName(),
//         id: manager.getId(),
//         email:manager.getemail(),
//         extrafiled:manager.getofficeNumber(),
//     }
//     teammember.push(addManger);

//     // check what user role is
//     switch(response.teammember) {
//         case 'Engineer': {
//         }
//         case 'Intern': {}
//     }

// ]).then((response) =>{
//     const {username,idnumber,email,GithubUser}= response;
//     console.log( response);
//     const Engineer = new Engineer(username,idnumber,email,GithubUser);
//     const addEngineer ={
//         role:Engineer.getRole(),
//         name:Engineer.getName(),
//         id:Engineer.getId(),
//         email:Engineer.getemail(),
//         extrafiled:Engineer.getGithubUser(),
// }
// teammember.push(addEngineer);
// ]).then((response) =>{
//     const {username,idnumber,email,school}= response;
//     console.log( response);
//     const Intern = new Intern(username,idnumber,email,school);
//     const addIntern ={
//         role:Intern.getRole(),
//         name:Intern.getName(),
//         id: Intern.getId(),
//         email:Intern.getemail(),
//         extrafiled:Intern.getSchool(),
// }
// teammember.push(addIntern);