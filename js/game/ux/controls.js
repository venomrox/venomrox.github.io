import { Direction, GameKey } from '../types/index.js';
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
        if (Controls.jump) {
            Controls.jump = null;
            return Game.player_one.jump();
        }
        if (Controls.parsed_direction == Input.NONE) {
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
        Controls.parsed_direction = Input.NONE;
    }
}
Controls.parsed_direction = Input.NONE;
Controls.jump = false;
Controls.last_event = null;
Controls.on_touch_start = (ev) => { Controls.last_event = ev; };
Controls.on_touch_end = (ev) => {
    if (!ev.changedTouches.length || !Controls.last_event.changedTouches.length)
        return;
    var a = Controls.last_event.changedTouches[0];
    var b = ev.changedTouches[0];
    var dx = b.clientX - a.clientX;
    var dy = b.clientY - a.clientY;
    Controls.parsed_direction = (Math.abs(dx) > Math.abs(dy))
        ? ((dx > 0) ? Input.RIGHT : Input.LEFT)
        : ((dy > 0) ? Input.DOWN : Input.UP);
};
Controls.on_tap = (ev) => {
    Controls.jump = true;
    ev.cancelBubble = true;
};
Controls.on_key_up = (ev) => {
    switch (ev.keyCode) {
        case GameKey.UP:
            return (Controls.parsed_direction = Input.UP);
        case GameKey.DOWN:
            return (Controls.parsed_direction = Input.DOWN);
        case GameKey.LEFT:
            return (Controls.parsed_direction = Input.LEFT);
        case GameKey.RIGHT:
            return (Controls.parsed_direction = Input.RIGHT);
        case GameKey.JUMP:
            return (Controls.jump = true);
    }
};
//# sourceMappingURL=controls.js.map