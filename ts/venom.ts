import * as VenomStore from './store.js'
import { Game } from './game/game.js';

namespace Venom {

    export class TerminalWriter {

        private static refreshRate: number = 40;

        private static selector: string = ".terminal-writer";

        private static instances: Array<TerminalWriter> = [];

        private element: HTMLElement;

        private text: string;

        private cursor: HTMLElement;

        constructor(element: HTMLElement) { this.element = element; }

        public write(text: string) {

            this.text = text;
            this.run();
        }

        protected init() {

            this.text = this.element.innerHTML;
            this.element.innerHTML = "";
            this.element.classList.remove('hidden')

            this.cursor = <HTMLElement>document.createElement("b");
            this.cursor.innerHTML = "_";
            this.element.appendChild(this.cursor.cloneNode(true));

            this.run();
            Game.init()
        }

        protected run() {

            for (var i = 0, ii = this.text.length; i != ii; ++i) {

                var timeout = (i + 1) * TerminalWriter.refreshRate;
                window.setTimeout(this.render.bind(this, i, ii), timeout);
            }
        }

        protected render(i, ii) {

            var x = this.text.slice(0, i + 1);
            this.element.innerHTML = x;
            this.element.appendChild(this.cursor.cloneNode(true));
        }

        public static InitAll() {

            var elements = document.querySelectorAll(TerminalWriter.selector);
            for (var i = 0, ii = elements.length; i != ii; ++i) {

                TerminalWriter.Create(<HTMLElement>elements[i]);
            }
        }

        public static Create(element: HTMLElement): TerminalWriter {

            var writer = new TerminalWriter(element);
            TerminalWriter.instances.push(writer);

            writer.init();
            return writer;
        }
    }

    export class MainPage {

        public static headerWriter: TerminalWriter;
        public static nav: HTMLElement;
        public static level: number = 0;

        private static orderSheet: VenomStore.OrderSheet

        public static pages: { [name: string]: HTMLElement } = {
            home: null,
            game: null,
            merch: null,
            events: null
        };

        public static init(): void {

            MainPage.pages.home = document.querySelector('main.home')
            MainPage.pages.game = document.querySelector('main.game')
            MainPage.pages.merch = document.querySelector('main.merch')
            MainPage.pages.events = document.querySelector('main.events')

            MainPage.nav = document.querySelector('nav');
            MainPage.headerWriter = TerminalWriter.Create(<HTMLElement>document.querySelector('header h3'));

            var vbutton: HTMLButtonElement = document.querySelector('nav > button.menu-v')

            document.onclick = MainPage.anyKey
            document.onkeyup = MainPage.anyKey
            vbutton.onclick = (event) => MainPage.onclickMenu(event)

            document.querySelector("header").classList.add('fade-in')

            var menubuttons = document.querySelectorAll('nav > button:not(.menu-v)')
            menubuttons.forEach((button: HTMLButtonElement) => {
                button.onclick = MainPage.onClickMenuOption.bind(MainPage, button)
            });
        }

        private static onclickMenu(event): void {

            if (MainPage.nav.classList.contains('open')) {
                MainPage.nav.classList.remove('open')
                MainPage.onClickMenuOption(event.currentTarget)
            }
            else { MainPage.nav.classList.add('open') }
            event.cancelBubble = true
        }

        private static anyKey(): void {

            if (MainPage.level > 0) return

            document.querySelector('header').classList.add('fall')
            window.setTimeout(MainPage.continue, 1000)
            document.onkeyup = document.onclick = () => { }
            // MainPage.nav.classList.remove('open')
        }

        private static continue(): void {

            document.querySelector('header').classList.add('hidden')
            document.querySelector('main.home').classList.remove('hidden')
            MainPage.nav.classList.remove('hidden')
            ++MainPage.level

            MainPage.orderSheet = new VenomStore.OrderSheet(<HTMLElement>document.querySelector('.orderSheet'));
            // (<HTMLElement>document.querySelector('nav > h2')).onclick = MainPage.playMusic;
        }

        private static isMusicPlaying: boolean = false;
        private static playMusic(): void {

            if (MainPage.isMusicPlaying) return
            MainPage.isMusicPlaying = true
            var audio = new Audio('./sounds/crytough.wav')
            audio.play()
        }

        private static onClickMenuOption(button: HTMLButtonElement) {

            for (var page in MainPage.pages) {
                var fn = (MainPage.pages[page].classList.contains(button.name)) ? 'remove' : 'add'
                MainPage.pages[page].classList[fn]('hidden')
                MainPage.nav.classList.remove('open')
            }

            if (button.name == 'game') {
                Game.ready()
            }
            else {
                Game.power_off()
            }
        }
    }
}

Venom.MainPage.init();