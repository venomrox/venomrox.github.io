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

        protected init() {

            //debugger;
            
            this.text = this.element.innerHTML;
            this.element.innerHTML = "";

            this.cursor = <HTMLElement>document.createElement("b");
            this.cursor.innerHTML = "_";
            this.element.appendChild(this.cursor.cloneNode(true));

            for (var i = 0, ii = this.text.length; i != ii; ++i) {

                var timeout = (i + 1) * TerminalWriter.refreshRate;
                window.setTimeout(this.render.bind(this, i, ii), timeout);
            }
        }

        protected render(i, ii) {

            //debugger;
            var x = this.text.slice(0, i + 1);
            this.element.innerHTML = x;
            this.element.appendChild(this.cursor.cloneNode(true));
        }

        public static InitAll() {

            //debugger; 

            var elements = document.querySelectorAll(TerminalWriter.selector);
            for (var i = 0, ii = elements.length; i != ii; ++i) {

                var writer = new TerminalWriter(<HTMLElement>elements[i]);
                TerminalWriter.instances.push(writer);

                writer.init();
            }
        }
    }

    export class MainPage {

        public static Init(): void {

            document.querySelector("header").classList.add("fade-in");
            TerminalWriter.InitAll();

            document.onclick = MainPage.anyKey;
            document.onkeyup = MainPage.anyKey;
            
        }

        private static anyKey(): void {
            
            document.querySelector('header').classList.add('fall');
            document.querySelector('header h3').classList.add('hidden');
            document.querySelector('content').classList.remove('hidden');
        }
    }
}

// Venom.MainPage.Init();