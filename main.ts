#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
    chalk.yellow.bold.italic(
        "-----------------------Welcome to My Adventure Game!--------------------"
    )
);

class Player {
    name: string;
    health: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    healthIncrease() {
        this.health = +100;
    }
}

//opponent instructions
class opponent {
    name: string;
    health: number = 100;
    static select: string;
    constructor(name: string) {
        this.name = name;
    }
    healthDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}

let players = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter your name",
    },
]);
console.log(players.name);

let opponents = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your oppponents",
        choices: ["Zombie", "Skeleton", "Assassin"],
    },
]);

let player1 = new Player(players.name);
let opponent1 = new opponent(opponents.select);

do {
    if (opponents.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "options",
                message: "Select your options",
                choices: ["Attack", "Drink Potion", "Run For Your Life...!"],
            },
        ]);
        if (ask.options === "Attack") {
            let num: number = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.healthDecrease();
                console.log(
                    chalk.red.bold(`${player1.name} health is ${player1.health}`)
                );
                console.log(
                    chalk.green.bold(`${opponent1.name} health is ${opponent1.health}`)
                );
                if (player1.health <= 0) {
                    console.log(chalk.bold.red.italic("You lose better luck next time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.healthDecrease();
                console.log(
                    chalk.green.bold(`${player1.name} health is ${player1.health}`)
                );
                console.log(
                    chalk.red.bold(`${opponent1.name} health is ${opponent1.health}`)
                );
                if (opponent1.health <= 0) {
                    console.log(chalk.green.bold.italic("You Win..!"));
                    process.exit();
                }
            }
        }
        if (ask.options === "Drink Potion") {
            player1.healthIncrease();
            console.log(
                chalk.bold.italic.yellow(
                    `Your drink health potion your fuel ${player1.health} `
                )
            );
        }
        if (ask.options === "Run For The Life...!") {
            console.log(chalk.bold.red.italic("You lose better luck next time"));
            process.exit();
        }
    }

    //Skeleton
    if (opponents.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "options",
                message: "Select your options",
                choices: ["Attack", "Drink Potion", "Run For Your Life...!"],
            },
        ]);
        if (ask.options === "Attack") {
            let num: number = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.healthDecrease();
                console.log(
                    chalk.red.bold(`${player1.name} health is ${player1.health}`)
                );
                console.log(
                    chalk.green.bold(`${opponent1.name} health is ${opponent1.health}`)
                );
                if (player1.health <= 0) {
                    console.log(chalk.bold.red.italic("You lose better luck next time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.healthDecrease();
                console.log(
                    chalk.green.bold(`${player1.name} health is ${player1.health}`)
                );
                console.log(
                    chalk.red.bold(`${opponent1.name} health is ${opponent1.health}`)
                );
                if (opponent1.health <= 0) {
                    console.log(chalk.green.bold.italic("You Win..!"));
                    process.exit();
                }
            }
        }
        if (ask.options === "Drink Potion") {
            player1.healthIncrease();
            console.log(
                chalk.bold.italic.yellow(
                    `Your drink health potion your fuel ${player1.health} `
                )
            );
        }
        if (ask.options === "Run For The Life...!") {
            console.log(chalk.bold.red.italic("You lose better luck next time"));
            process.exit();
        }
    }

    //Assassin
    if (opponents.select === "Assassin") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "options",
                message: "Select your options",
                choices: ["Attack", "Drink Potion", "Run For Your Life...!"],
            },
        ]);
        if (ask.options === "Attack") {
            let num: number = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.healthDecrease();
                console.log(
                    chalk.red.bold(`${player1.name} health is ${player1.health}`)
                );
                console.log(
                    chalk.green.bold(`${opponent1.name} health is ${opponent1.health}`)
                );
                if (player1.health <= 0) {
                    console.log(chalk.bold.red.italic("You lose better luck next time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.healthDecrease();
                console.log(
                    chalk.green.bold(`${player1.name} health is ${player1.health}`)
                );
                console.log(
                    chalk.red.bold(`${opponent1.name} health is ${opponent1.health}`)
                );
                if (opponent1.health <= 0) {
                    console.log(chalk.green.bold.italic("You Win..!"));
                    process.exit();
                }
            }
        }
        if (ask.options === "Drink Potion") {
            player1.healthIncrease();
            console.log(
                chalk.bold.italic.yellow(
                    `Your drink health potion your fuel ${player1.health} `
                )
            );
        }
        if (ask.options === "Run For The Life...!") {
            console.log(chalk.bold.red.italic("You lose better luck next time"));
            process.exit();
        }
    }
}
while (true);
