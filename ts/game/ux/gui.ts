import { Game } from '../game.js'

export abstract class GUI {

    static header: HTMLElement            
    static playerOneLives: HTMLElement 
    static playerTwoLives: HTMLElement 
    static playerOneScore: HTMLElement
    static playerTwoScore: HTMLElement
    static build: HTMLElement

    static initialized: boolean = false

    static init() {

        // GUI.header = <HTMLElement>document.querySelector("header")
        GUI.playerOneScore = <HTMLElement>document.querySelector("#score")
        // GUI.playerOneLives = <HTMLElement>document.querySelector("#player-one-lives")
        // GUI.playerTwoScore = <HTMLElement>document.querySelector("#player-two-score")
        // GUI.playerTwoLives = <HTMLElement>document.querySelector("#player-two-lives")
        // GUI.build = <HTMLElement>document.querySelector("#build")

        GUI.initialized = true
    }

    static draw() {

        if (!GUI.initialized) return

        GUI.playerOneScore.innerText = "score: " + 
            (Game.is_running ? Game.player_one.points.toString() : '0')

        // GUI.playerOneLives.innerText = Game.is_running
        //     ? "Player One Lives: " + Game.player_one.lives
        //     : "Press Start"

        // GUI.playerOneScore.innerText = Game.is_running
        //     ? "Player One Score: " + Game.player_one.points
        //     : "Hi Score: " + Game.hi_score            

        // GUI.playerTwoLives.innerText = Game.is_running
        //     ? "Player Two Lives: " + Game.player_two.lives
        //     : ""

        // GUI.playerTwoScore.innerText = Game.is_running
        //     ? "Player Two Score: " + Game.player_two.points
        //     : ""            
    }
}