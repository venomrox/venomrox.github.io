import { Direction, GameKey } from '../types/index.js'
import { Game } from '../game.js'

export enum Input { NONE, UP, DOWN, LEFT, RIGHT }

export class Controls {

    static parsed_direction: Input = Input.NONE
    static jump: boolean = false

    static last_event: TouchEvent = null

    static on_touch_start = (ev: TouchEvent) => { Controls.last_event = ev }

    static on_touch_end = (ev: TouchEvent) => {

        if (!ev.changedTouches.length || !Controls.last_event.changedTouches.length) return

        var a = Controls.last_event.changedTouches[0]
        var b = ev.changedTouches[0]

        var dx = b.clientX - a.clientX
        var dy = b.clientY - a.clientY

        Controls.parsed_direction = (Math.abs(dx) > Math.abs(dy))
            ? ((dx > 0) ? Input.RIGHT : Input.LEFT)
            : ((dy > 0) ? Input.DOWN : Input.UP)
    }

    static on_tap = (ev: Event) => { 

        Controls.jump = true 
        ev.cancelBubble = true
    }

    static on_key_up = (ev: KeyboardEvent) => {

        switch(ev.keyCode) {

            case GameKey.UP:
                return (Controls.parsed_direction = Input.UP)

            case GameKey.DOWN:
                return (Controls.parsed_direction = Input.DOWN)

            case GameKey.LEFT:
                return (Controls.parsed_direction = Input.LEFT)

            case GameKey.RIGHT:
                return (Controls.parsed_direction = Input.RIGHT)
            
            case GameKey.JUMP:
                return (Controls.jump = true)
        }
    }

    static process_input() {

        if (Controls.jump) { 
            Controls.jump = null
            return Game.player_one.jump()
        }

        if (Controls.parsed_direction == Input.NONE) { return }
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

        Controls.parsed_direction = Input.NONE
    }
}
