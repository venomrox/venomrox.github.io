var Venom;
(function (Venom) {
    var TerminalWriter = (function () {
        function TerminalWriter(element) {
            this.element = element;
        }
        TerminalWriter.prototype.init = function () {
            //debugger;
            this.text = this.element.innerHTML;
            this.element.innerHTML = "";
            this.cursor = document.createElement("b");
            this.cursor.innerHTML = "_";
            this.element.appendChild(this.cursor.cloneNode(true));
            for (var i = 0, ii = this.text.length; i != ii; ++i) {
                var timeout = (i + 1) * TerminalWriter.refreshRate;
                window.setTimeout(this.render.bind(this, i, ii), timeout);
            }
        };
        TerminalWriter.prototype.render = function (i, ii) {
            //debugger;
            this.element.innerHTML = this.text.slice(0, i + 1);
            this.element.appendChild(this.cursor.cloneNode(true));
        };
        TerminalWriter.InitAll = function () {
            //debugger; 
            var elements = document.querySelectorAll(TerminalWriter.selector);
            for (var i = 0, ii = elements.length; i != ii; ++i) {
                var writer = new TerminalWriter(elements[i]);
                TerminalWriter.instances.push(writer);
                writer.init();
            }
        };
        TerminalWriter.refreshRate = 40;
        TerminalWriter.selector = ".terminal-writer";
        TerminalWriter.instances = [];
        return TerminalWriter;
    }());
    Venom.TerminalWriter = TerminalWriter;
    var MainPage = (function () {
        function MainPage() {
        }
        MainPage.Init = function () {
            document.querySelector("header").classList.add("fade-in");
            TerminalWriter.InitAll();
        };
        return MainPage;
    }());
    Venom.MainPage = MainPage;
})(Venom || (Venom = {}));
Venom.MainPage.Init();
//# sourceMappingURL=venom.js.map