import * as VenomStore from './store.js';
var Venom;
(function (Venom) {
    class TerminalWriter {
        constructor(element) { this.element = element; }
        write(text) {
            this.text = text;
            this.run();
        }
        init() {
            this.text = this.element.innerHTML;
            this.element.innerHTML = "";
            this.element.classList.remove('hidden');
            this.cursor = document.createElement("b");
            this.cursor.innerHTML = "_";
            this.element.appendChild(this.cursor.cloneNode(true));
            this.run();
        }
        run() {
            for (var i = 0, ii = this.text.length; i != ii; ++i) {
                var timeout = (i + 1) * TerminalWriter.refreshRate;
                window.setTimeout(this.render.bind(this, i, ii), timeout);
            }
        }
        render(i, ii) {
            var x = this.text.slice(0, i + 1);
            this.element.innerHTML = x;
            this.element.appendChild(this.cursor.cloneNode(true));
        }
        static InitAll() {
            var elements = document.querySelectorAll(TerminalWriter.selector);
            for (var i = 0, ii = elements.length; i != ii; ++i) {
                TerminalWriter.Create(elements[i]);
            }
        }
        static Create(element) {
            var writer = new TerminalWriter(element);
            TerminalWriter.instances.push(writer);
            writer.init();
            return writer;
        }
    }
    TerminalWriter.refreshRate = 40;
    TerminalWriter.selector = ".terminal-writer";
    TerminalWriter.instances = [];
    Venom.TerminalWriter = TerminalWriter;
    class MainPage {
        static init() {
            MainPage.pages.home = document.querySelector('main.home');
            MainPage.pages.game = document.querySelector('main.game');
            MainPage.pages.merch = document.querySelector('main.merch');
            MainPage.pages.events = document.querySelector('main.events');
            MainPage.nav = document.querySelector('nav');
            MainPage.headerWriter = TerminalWriter.Create(document.querySelector('header h3'));
            var vbutton = document.querySelector('nav > button.menu-v');
            document.onclick = MainPage.anyKey;
            document.onkeyup = MainPage.anyKey;
            vbutton.onclick = (event) => MainPage.onclickMenu(event);
            document.querySelector("header").classList.add('fade-in');
            var menubuttons = document.querySelectorAll('nav > button:not(.menu-v)');
            menubuttons.forEach((button) => {
                button.onclick = MainPage.onClickMenuOption.bind(MainPage, button);
            });
        }
        static onclickMenu(event) {
            if (MainPage.nav.classList.contains('open')) {
                MainPage.nav.classList.remove('open');
                MainPage.onClickMenuOption(event.currentTarget);
            }
            else {
                MainPage.nav.classList.add('open');
            }
            event.cancelBubble = true;
        }
        static anyKey() {
            if (MainPage.level > 0)
                return;
            document.querySelector('header').classList.add('fall');
            window.setTimeout(MainPage.continue, 1000);
            document.onkeyup = document.onclick = () => { };
            // MainPage.nav.classList.remove('open')
        }
        static continue() {
            document.querySelector('header').classList.add('hidden');
            document.querySelector('main.home').classList.remove('hidden');
            MainPage.nav.classList.remove('hidden');
            ++MainPage.level;
            MainPage.orderSheet = new VenomStore.OrderSheet(document.querySelector('.orderSheet'));
            // (<HTMLElement>document.querySelector('nav > h2')).onclick = MainPage.playMusic;
        }
        static playMusic() {
            if (MainPage.isMusicPlaying)
                return;
            MainPage.isMusicPlaying = true;
            var audio = new Audio('./sounds/crytough.wav');
            audio.play();
        }
        static onClickMenuOption(button) {
            for (var page in MainPage.pages) {
                var fn = (MainPage.pages[page].classList.contains(button.name)) ? 'remove' : 'add';
                MainPage.pages[page].classList[fn]('hidden');
                MainPage.nav.classList.remove('open');
            }
        }
    }
    MainPage.level = 0;
    MainPage.pages = {
        home: null,
        game: null,
        merch: null,
        events: null
    };
    MainPage.isMusicPlaying = false;
    Venom.MainPage = MainPage;
})(Venom || (Venom = {}));
Venom.MainPage.init();
//# sourceMappingURL=venom.js.map