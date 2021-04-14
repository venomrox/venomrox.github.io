import { Direction } from '../types/index.js';
import { Game } from '../game.js';
export var Input;
(function (Input) {
    Input[Input["NONE"] = 0] = "NONE";
    Input[Input["UP"] = 1] = "UP";
    Input[Input["DOWN"] = 2] = "DOWN";
    Input[Input["LEFT"] = 3] = "LEFT";
    Input[Input["RIGHT"] = 4] = "RIGHT";
})(Input || (Input = {}));
export class Controls {
    static process_input() {
        if (!Controls.parsed_direction) {
            return;
        }
        switch (Controls.parsed_direction) {
            case Input.DOWN:
                if (Game.player_one.direction != Direction.UP) {
                    Game.player_one.direction = Direction.DOWN;
                }
                break;
            case Input.LEFT:
                if (Game.player_one.direction != Direction.RIGHT) {
                    Game.player_one.direction = Direction.LEFT;
                }
                break;
            case Input.RIGHT:
                if (Game.player_one.direction != Direction.LEFT) {
                    Game.player_one.direction = Direction.RIGHT;
                }
                break;
            case Input.UP:
                if (Game.player_one.direction != Direction.DOWN) {
                    Game.player_one.direction = Direction.UP;
                }
                break;
        }
        if (Controls.jump) {
            Game.player_one.jump();
        }
        Controls.parsed_direction = null;
        Controls.jump = null;
    }
}
Controls.parsed_direction = Input.NONE;
Controls.jump = false;
Controls.on_drag_end = (ev) => {
    debugger;
    if (Math.abs(ev.offsetX) > Math.abs(ev.offsetY)) {
        Controls.parsed_direction = (ev.offsetX > 0)
            ? Input.RIGHT : Input.LEFT;
    }
    else if (Math.abs(ev.offsetX) > Math.abs(ev.offsetY)) {
        Controls.parsed_direction = (ev.offsetY > 0)
            ? Input.DOWN : Input.UP;
    }
};
Controls.on_tap = (ev) => { Controls.jump = true; };
//# sourceMappingURL=controls.js.map