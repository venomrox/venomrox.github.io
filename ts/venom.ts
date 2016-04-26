namespace Venom {

    export class ScreenSaver {

        private static timeout: number = 10000;

        private static handle: number;

        public static reset() {

            ScreenSaver.handle = window.setTimeout(ScreenSaver.onTimer, ScreenSaver.timeout);
        }
        

        private static onTimer() {


        }

        private static start() {

        }

        private static render() {


        }

        private static clear() {


        }
    }

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

            this.cursor = <HTMLElement>document.createElement("b");
            this.cursor.innerHTML = "_";
            this.element.appendChild(this.cursor.cloneNode(true));

            this.run();
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

    export class NavBar {

        private element: HTMLElement;

        private buttons: Array<HTMLElement>;

        constructor(element: HTMLElement) {

            this.element = element;
            this.buttons = Array.prototype.slice.call(element.querySelectorAll('button'));

            for (var i = 0, ii = this.buttons.length; i != ii; ++i) {
                this.buttons[i].onclick = this.onClick.bind(this, this.buttons[i]);
            }
        }
        
        private onClick(button: HTMLElement) {

            for (var i = 0, ii = this.buttons.length; i != ii; ++i) {
                this.buttons[i].classList.remove('selected');
            }

            button.classList.add('selected');
            this.route(button.getAttribute('nav'));
        }

        public show() { this.element.classList.remove('hidden'); }
        public hide() { this.element.classList.add('hidden'); }
        
        public route(path: string) {
        
            for (var i = 0, ii = this.buttons.length; i != ii; ++i) {
                     
                var div = <HTMLElement>this.buttons[i];
                var fn = (div.getAttribute('nav') === path)
                    ? 'add'
                    : 'remove';
                    
                this.buttons[i].classList[fn]('selected');
            
            }

            var divs = document.querySelectorAll('.content');
            for (var i = 0, ii = divs.length; i != ii; ++i) {

                var div = <HTMLElement>divs[i];
                div.classList.add('hidden');
                
            }

            var content = document.querySelector('.content[route=' + path + ']');
            content.classList.remove('hidden');
        }
    }

    export class MainPage {

        public static headerWriter: TerminalWriter;

        public static navbar: NavBar;

        public static level: number = 0;

        public static Init(): void {

            document.querySelector("header").classList.add('fade-in');
            MainPage.headerWriter = TerminalWriter.Create(<HTMLElement>document.querySelector('header h3'));

            document.onclick = MainPage.anyKey;
            document.onkeyup = MainPage.anyKey;

            MainPage.navbar = new NavBar(<HTMLElement>document.querySelector('nav'));
        }

        private static anyKey(): void {

            switch (MainPage.level) {

                case 0:
                    document.querySelector('header').classList.add('fall');
                    window.setTimeout(MainPage.levelOne, 1000);
                    break;
            }
        }

        private static levelOne(): void {

            document.querySelector('header').classList.add('hidden');

            MainPage.navbar.route('home');
            MainPage.navbar.show();
            MainPage.level = 1;
        }
    }
}

// Venom.MainPage.Init();