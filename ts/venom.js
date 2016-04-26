var Venom;
(function (Venom) {
    var ScreenSaver = (function () {
        function ScreenSaver() {
        }
        ScreenSaver.reset = function () {
            ScreenSaver.handle = window.setTimeout(ScreenSaver.onTimer, ScreenSaver.timeout);
        };
        ScreenSaver.onTimer = function () {
        };
        ScreenSaver.start = function () {
        };
        ScreenSaver.render = function () {
        };
        ScreenSaver.clear = function () {
        };
        ScreenSaver.timeout = 10000;
        return ScreenSaver;
    }());
    Venom.ScreenSaver = ScreenSaver;
    var TerminalWriter = (function () {
        function TerminalWriter(element) {
            this.element = element;
        }
        TerminalWriter.prototype.write = function (text) {
            this.text = text;
            this.run();
        };
        TerminalWriter.prototype.init = function () {
            //debugger;
            this.text = this.element.innerHTML;
            this.element.innerHTML = "";
            this.cursor = document.createElement("b");
            this.cursor.innerHTML = "_";
            this.element.appendChild(this.cursor.cloneNode(true));
            this.run();
        };
        TerminalWriter.prototype.run = function () {
            for (var i = 0, ii = this.text.length; i != ii; ++i) {
                var timeout = (i + 1) * TerminalWriter.refreshRate;
                window.setTimeout(this.render.bind(this, i, ii), timeout);
            }
        };
        TerminalWriter.prototype.render = function (i, ii) {
            //debugger;
            var x = this.text.slice(0, i + 1);
            this.element.innerHTML = x;
            this.element.appendChild(this.cursor.cloneNode(true));
        };
        TerminalWriter.InitAll = function () {
            //debugger; 
            var elements = document.querySelectorAll(TerminalWriter.selector);
            for (var i = 0, ii = elements.length; i != ii; ++i) {
                TerminalWriter.Create(elements[i]);
            }
        };
        TerminalWriter.Create = function (element) {
            var writer = new TerminalWriter(element);
            TerminalWriter.instances.push(writer);
            writer.init();
            return writer;
        };
        TerminalWriter.refreshRate = 40;
        TerminalWriter.selector = ".terminal-writer";
        TerminalWriter.instances = [];
        return TerminalWriter;
    }());
    Venom.TerminalWriter = TerminalWriter;
    var NavBar = (function () {
        function NavBar(element) {
            this.element = element;
            this.buttons = Array.prototype.slice.call(element.querySelectorAll('button'));
            for (var i = 0, ii = this.buttons.length; i != ii; ++i) {
                this.buttons[i].onclick = this.onClick.bind(this, this.buttons[i]);
            }
        }
        NavBar.prototype.onClick = function (button) {
            for (var i = 0, ii = this.buttons.length; i != ii; ++i) {
                this.buttons[i].classList.remove('selected');
            }
            button.classList.add('selected');
            this.route(button.dataset['nav']);
        };
        NavBar.prototype.show = function () { this.element.classList.remove('hidden'); };
        NavBar.prototype.hide = function () { this.element.classList.add('hidden'); };
        NavBar.prototype.route = function (path) {
            for (var i = 0, ii = this.buttons.length; i != ii; ++i) {
                var div = this.buttons[i];
                var fn = (div.getAttribute('nav') === path)
                    ? 'add'
                    : 'remove';
                this.buttons[i].classList[fn]('selected');
            }
            var divs = document.querySelectorAll('.content');
            for (var i = 0, ii = divs.length; i != ii; ++i) {
                var div = divs[i];
                div.classList.add('hidden');
            }
            var content = document.querySelector('.content[route=' + path + ']');
            content.classList.remove('hidden');
        };
        return NavBar;
    }());
    Venom.NavBar = NavBar;
    var MainPage = (function () {
        function MainPage() {
        }
        MainPage.Init = function () {
            document.querySelector("header").classList.add('fade-in');
            MainPage.headerWriter = TerminalWriter.Create(document.querySelector('header h3'));
            document.onclick = MainPage.anyKey;
            document.onkeyup = MainPage.anyKey;
            MainPage.navbar = new NavBar(document.querySelector('nav'));
        };
        MainPage.anyKey = function () {
            document.querySelector('header').classList.add('fall');
            // document.querySelector('header h3').classList.add('hidden');
            // document.querySelector('content').classList.remove('hidden');
            window.setTimeout(MainPage.levelOne, 1000);
        };
        MainPage.levelOne = function () {
            // Reset AnyKey
            MainPage.anyKey = function () { };
            document.querySelector('header').classList.add('hidden');
            MainPage.navbar.route('home');
            MainPage.navbar.show();
        };
        return MainPage;
    }());
    Venom.MainPage = MainPage;
})(Venom || (Venom = {}));
// Venom.MainPage.Init(); 
//# sourceMappingURL=venom.js.map