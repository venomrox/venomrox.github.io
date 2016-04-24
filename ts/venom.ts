namespace Venom {

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

            this.element.innerHTML = this.text.slice(0, i + 1);
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
        }
    }
}

Venom.MainPage.Init();