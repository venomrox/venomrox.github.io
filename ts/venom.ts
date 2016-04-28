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

    export enum Size {

        S,
        M,
        L,
        XL,
        XXL
    }

    export enum Category {

        Shirts,
        Hats,
        Visors,
        Accessories
    }

    export enum Color {
        Black,
        Grey,
        White,
        LightPink,
        DarkPink,
        TT_PinkBlack
    }

    interface IStoreItem {
        itemCode: string;
        itemName: string;
        description: string;
        category: Category;
        sizes?: Array<Size>;
        colors?: Array<Color>;
        price: number;
    }
    
    export namespace Items {
        
        export class TShirt implements IStoreItem {

            public itemCode: string = "SHIRT001";
            public itemName: string = "T-Shirt";
            public description: string = "Standard T-Shirt with Venom logo on front";
            public category: Category = Category.Shirts;
            public sizes: Array<Size> = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 22;

            constructor() { }
        }

        export class VNeck implements IStoreItem{

            public itemCode: string = "SHIRT002";
            public itemName: string = "V-Neck Shirt";
            public description: string = "V-Neck shirt with Venom logo on front";
            public category: Category = Category.Shirts;
            public sizes: Array<Size> = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 22;

            constructor() { }
        }

        export class TankTop implements IStoreItem {

            public itemCode: string = "SHIRT003";
            public itemName: string = "Tank Top";
            public description: string = "Tank top with Venom logo on front";
            public category: Category = Category.Shirts;
            public sizes: Array<Size> = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 22;

            constructor() { }
        }

        export class BaseballCap {

            public itemCode: string = "HAT001";
            public itemName: string = "Hat";
            public description: string = "Baseball-cap style hat with Venom logo on front of hat";
            public category: Category = Category.Hats;
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 25;
        }

        export class TruckerHat {

            public itemCode: string = "HAT002";
            public itemName: string = "Trucker Hat";
            public description: string = "Trucker-style hat Venom logo on front";
            public category: Category = Category.Hats;
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 25;
        }

        export class Visor {

            public itemCode: string = "HAT003";
            public itemName: string = "Visor";
            public description: string = "Visor with Venom logo on front";
            public category: Category = Category.Hats;
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 25;
        }

        export class YetiCup {

            public itemCode: string = "YETI001";
            public itemName: string = "Yeti Cup";
            public description: string = "Yeti cup with awesome Venom graphics wrapped around cup";
            public category: Category = Category.Accessories;
            public price: number = 90;
        }

    }

    export class OrderSheet {

        private element: HTMLElement;

        private itemsByCategory: { category: Array<IStoreItem> } = <{ category: Array<IStoreItem> }>{};

        private itemTemplate: HTMLElement;

        private controls = [];

        constructor(element: HTMLElement) {

            this.element = element;
            this.itemTemplate = <HTMLElement>document.querySelector('#itemTemplateUL > li');

            for (var i in Items) {

                var item: IStoreItem = new Items[i];
                var category = Venom.Category[item.category];
                if (!this.itemsByCategory.hasOwnProperty(category)) {
                    this.itemsByCategory[category] = [];
                }

                this.itemsByCategory[category].push(item);
            }

            for (var c in this.itemsByCategory) {

                var ul: HTMLUListElement = document.createElement('ul');
                ul.classList.add('gear');
                ul.setAttribute('category', Venom.Category[c]);


                var itemList = this.itemsByCategory[c];
                for (var x in itemList) {
                    
                    var item: IStoreItem = itemList[x];
                    var template = <HTMLElement>this.itemTemplate.cloneNode(true);

                    template.querySelector('.name > span').innerHTML = item.itemName;
                    template.querySelector('.description > span').innerHTML = item.description;
                    template.querySelector('.price > span').innerHTML = "$" + item.price.toString();
                    var totalReadout = <HTMLElement>template.querySelector('.total > span');
                    totalReadout.innerHTML = "$0";

                    if (item.hasOwnProperty('sizes')) {
                        template.querySelector('.size').classList.remove('hidden');
                       // debugger;
                        for (var s = 0, ss = item.sizes.length; s != ss; ++s) {
                            var selector = '.size > button[value=' + Size[item.sizes[s]] + ']';
                            var button = <HTMLButtonElement>template.querySelector(selector);
                            button.classList.remove('hidden');
                            button.onclick = this.onClickSize.bind(this, button);
                        }
                    }

                    var qtyplus = <HTMLButtonElement>template.querySelector('.qty > button[value=plus]');
                    var qtyminus = <HTMLButtonElement>template.querySelector('.qty > button[value=minus]');
                    qtyplus.onclick = this.onClickQty.bind(this, qtyplus, item, totalReadout);
                    qtyminus.onclick = this.onClickQty.bind(this, qtyminus, item, totalReadout);

                    ul.appendChild(template);
                }

                var h3 = document.createElement("h3");
                h3.innerHTML = c;
                this.element.appendChild(h3);
                this.element.appendChild(ul);
            }
        }

        private onClickQty(button: HTMLButtonElement, item: IStoreItem, total: HTMLElement) {

            var qtyElement = <HTMLElement>button.parentElement.querySelector('span');
            var qty = parseInt(qtyElement.getAttribute('value'));

            switch (button.value) {

                case "plus":
                    qty += 1;
                    break;

                case "minus":
                    qty -= (qty > 0) ? 1 : 0;
            }

            var qtyReadout = qty.toString();
            qtyElement.setAttribute('value', qtyReadout);
            qtyElement.innerHTML = qtyReadout;

            total.innerHTML = "$" + (qty * item.price).toString();
        }

        private onClickSize(button: HTMLButtonElement) {

            var buttons = button.parentElement.querySelectorAll('button');
            for (var i = 0, ii = buttons.length; i != ii; ++i) {
                buttons[i].classList.remove('selected');
            }

            button.classList.add('selected');
        }
    }

    export class MainPage {

        public static headerWriter: TerminalWriter;

        public static navbar: NavBar;

        public static level: number = 0;

        public static orderSheet: OrderSheet;

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

            MainPage.orderSheet = new OrderSheet(<HTMLElement>document.querySelector('.orderSheet'));
        }
    }
}

// Venom.MainPage.Init();