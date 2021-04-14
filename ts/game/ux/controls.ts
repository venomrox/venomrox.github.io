import { Direction, GameKey } from '../types/index.js'
import { Game } from '../game.js'

export enum Input { NONE, UP, DOWN, LEFT, RIGHT }

export class Controls {

    static parsed_direction: Input = Input.NONE
    static jump: boolean = false

    static on_drag_end = (ev: DragEvent) => {

        debugger
        if (Math.abs(ev.offsetX) > Math.abs(ev.offsetY)) {
            Controls.parsed_direction = (ev.offsetX > 0) 
                ? Input.RIGHT : Input.LEFT
        }
        else if (Math.abs(ev.offsetX) > Math.abs(ev.offsetY)) {
            Controls.parsed_direction = (ev.offsetY > 0)
                ? Input.DOWN : Input.UP
        }
    }

    static on_tap = (ev: Event) => { Controls.jump = true }

    static process_input() {

        if (!Controls.parsed_direction) { return }

        switch (Controls.parsed_direction) {

            case Input.DOWN:
                if (Game.player_one.direction != Direction.UP) {
                    Game.player_one.direction = Direction.DOWN
                }
                break

            case Input.LEFT:
                if (Game.player_one.direction != Direction.RIGHT) {
                    Game.player_one.direction = Direction.LEFT
                }
                break

            case Input.RIGHT:
                if (Game.player_one.direction != Direction.LEFT) {
                    Game.player_one.direction = Direction.RIGHT
                }
                break
            
            case Input.UP:
                if (Game.player_one.direction != Direction.DOWN) {
                    Game.player_one.direction = Direction.UP
                }
                break
        }

        if (Controls.jump) { Game.player_one.jump() }

        Controls.parsed_direction = null
        Controls.jump = null
    }
}
