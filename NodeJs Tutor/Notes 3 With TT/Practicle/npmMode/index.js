// const chalk = require('chalk');     Error
import chalk from 'chalk';
import validator from 'validator';

//Chalk work
    // console.log(chalk.blue('Hello world!'));
    // console.log(chalk.blue.italic('Hello world!'));
    // console.log(chalk.blue.italic.underline.inverse('Hello world!'));
    // console.log(chalk.green.italic.underline.inverse('Success!'));

// validator Woork
    let result =  validator.isEmail('faizan@bar.com');
    console.log(result ? chalk.green.inverse(result): chalk.red.inverse(result));
