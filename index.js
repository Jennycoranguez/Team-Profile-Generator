const inquirer = require("inquirer");
var fs = require('fs')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const questions = [
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
    },
    { 
        type:'checkbox',
        message:'which type of team member would you like to add?',
        name:'teammember',
        choices: ['Engineer,Intern,Employee,Manager'],
    },
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
        name:'username',
    },
    { 
        type:'checkbox',
        message:'which type of team member would you like to add?',
        name:'teammember',
        choices: ['Engineer,Intern,Employee,Manager'],
    },
    {
        type:'input',
        message:'what is your interns name?',
        name:'username',
        
    },
    {
        type:'number',
        message:'what is the team interns id?',
        name:'idnumber'
    },
    {
        type:'input',
        message:'what is the team interns email?',
        name:'email',
    },
    {
        type:'input',
        message:'what is your interns school?',
        name:'username',
    },
    { 
        type:'checkbox',
        message:'which type of team member would you like to add?',
        name:'teammember',
        choices: ['Engineer,Intern,Employee,Manager'],
    },
]