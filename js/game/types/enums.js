export var GameKey;
(function (GameKey) {
    GameKey[GameKey["UP"] = 38] = "UP";
    GameKey[GameKey["DOWN"] = 40] = "DOWN";
    GameKey[GameKey["LEFT"] = 37] = "LEFT";
    GameKey[GameKey["RIGHT"] = 39] = "RIGHT";
    GameKey[GameKey["JUMP"] = 32] = "JUMP";
})(GameKey || (GameKey = {}));
export var ScreenEdge;
(function (ScreenEdge) {
    ScreenEdge[ScreenEdge["NORTH"] = 0] = "NORTH";
    ScreenEdge[ScreenEdge["SOUTH"] = 1] = "SOUTH";
    ScreenEdge[ScreenEdge["EAST"] = 2] = "EAST";
    ScreenEdge[ScreenEdge["WEST"] = 3] = "WEST";
})(ScreenEdge || (ScreenEdge = {}));
export var Direction;
(function (Direction) {
    Direction[Direction["NONE"] = 0] = "NONE";
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {}));
export var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 0] = "SLOW";
    Speed[Speed["NORMAL"] = 1] = "NORMAL";
    Speed[Speed["FAST"] = 2] = "FAST";
})(Speed || (Speed = {}));
//# sourceMappingURL=enums.js.map