namespace Venom {

    export class SiteConfig {

        public static mailToURL: string = "mailto:orders@venomrox.com";
    }

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
        Accessories
    }

    export enum Color {
        Black,
        Grey,
        White,
        LightPink,
        DarkPink,
        TT_BlackPink,
        TT_BlackBlack,
        TT_BlackGrey
    }

    var ColorName = {
        Black: "Black",
        Grey: "Grey",
        White: "White",
        LightPink: "Light Pink",
        DarkPink: "Dark Pink",
        TT_BlackPink: "Black/Pink",
        TT_BlackBlack: "Black/Black",
        TT_BlackGrey: "Black/Grey"
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

    interface ItemOrder {
        itemCode: string;
        itemName: string;
        category: Category;
        size?: Size;
        color?: Color;
        qty: number;
        total: number;
    }

    export namespace Items {
        
        export class TShirt implements IStoreItem {

            public itemCode: string = "SHIRT001";
            public itemName: string = "T-Shirt";
            public description: string = "Standard T-Shirt with Venom logo on front";
            public category: Category = Category.Shirts;
            public sizes: Array<Size> = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 15;

            constructor() { }
        }

        export class VNeck implements IStoreItem{

            public itemCode: string = "SHIRT002";
            public itemName: string = "V-Neck Shirt";
            public description: string = "V-Neck shirt with Venom logo on front";
            public category: Category = Category.Shirts;
            public sizes: Array<Size> = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 15;

            constructor() { }
        }

        export class TankTop implements IStoreItem {

            public itemCode: string = "SHIRT003";
            public itemName: string = "Tank Top";
            public description: string = "Tank top with Venom logo on front";
            public category: Category = Category.Shirts;
            public sizes: Array<Size> = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 15;

            constructor() { }
        }

        export class BaseballCap {

            public itemCode: string = "HAT001";
            public itemName: string = "Hat";
            public description: string = "Baseball-cap style hat with Venom logo on front of hat";
            public category: Category = Category.Hats;
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 15;
        }

        export class TruckerHat {

            public itemCode: string = "HAT002";
            public itemName: string = "Trucker Hat";
            public description: string = "Trucker-style hat Venom logo on front";
            public category: Category = Category.Hats;
            public colors: Array<Color> = [Color.TT_BlackBlack, Color.TT_BlackGrey, Color.TT_BlackPink];
            public price: number = 15;
        }

        export class Visor {

            public itemCode: string = "HAT003";
            public itemName: string = "Visor";
            public description: string = "Visor with Venom logo on front";
            public category: Category = Category.Hats;
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 15;
        }

        export class Bandana {

            public itemCode: string = "HAT004";
            public itemName: string = "Bandana";
            public description: string = "Old-school bandana Venom logo on front";
            public category: Category = Category.Hats;
            public colors: Array<Color> = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
            public price: number = 15;
        }

        export class DrumSticks {

            public itemCode: string = "STICKS001";
            public itemName: string = "Drum Sticks";
            public description: string = "Black drum sticks with Venom logo";
            public category: Category = Category.Accessories;
            public price: number = 15;
        }

        export class YetiCup {

            public itemCode: string = "YETI001";
            public itemName: string = "Yeti Cup";
            public description: string = "Yeti cup with awesome Venom graphics wrapped around cup";
            public category: Category = Category.Accessories;
            public price: number = 80;
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


            (<HTMLElement>document.querySelector('button.order')).onclick = this.submitOrder.bind(this);

            for (var idx in Items) {

                var item: IStoreItem = new Items[idx];
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

                    (<HTMLInputElement>template.querySelector('input.itemCode')).value = item.itemCode;
                    template.querySelector('.name > span').innerHTML = item.itemName;
                    template.querySelector('.description > span').innerHTML = item.description;
                    template.querySelector('.price > span').innerHTML = "$" + item.price.toString();
                    var totalReadout = <HTMLElement>template.querySelector('.total > span');
                    totalReadout.innerHTML = "$0";

                    if (item.hasOwnProperty('sizes')) {
                        template.querySelector('.size').classList.remove('hidden');
                       
                        for (var s = 0, ss = item.sizes.length; s != ss; ++s) {
                            var selector = '.size > button[value=' + Size[item.sizes[s]] + ']';
                            var button = <HTMLButtonElement>template.querySelector(selector);
                            if (item.sizes[s] == Size.L) {
                                button.classList.add('selected');
                            }

                            button.classList.remove('hidden');
                            button.onclick = this.onClickButton.bind(this, button);
                        }
                    }

                    if (item.hasOwnProperty('colors')) {
                        var colorEl = template.querySelector('.color');
                        colorEl.classList.remove('hidden');

                        for (var i = 0, ii = item.colors.length; i != ii; ++i) {

                            var button = document.createElement('button');
                            var colorCode = item.colors[i];
                            button.value = colorCode.toString();
                            button.textContent = ColorName[Color[colorCode]];
                            button.onclick = this.onClickButton.bind(this, button);

                            if (i == 0) {
                                button.classList.add('selected');
                            }

                            colorEl.appendChild(button);
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

                var img = document.querySelector('#templates > img.merch[category=' + c  + ']');
         

                this.element.appendChild(h3);
                this.element.appendChild(img);
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

        private onClickButton(button: HTMLButtonElement) {

            var buttons = button.parentElement.querySelectorAll('button');
            for (var i = 0, ii = buttons.length; i != ii; ++i) {
                buttons[i].classList.remove('selected');
            }

            button.classList.add('selected');
        }

        private submitOrder() {

            var orders: Array<ItemOrder> = [];

            var items = this.element.querySelectorAll('li');
            for (var i = 0, ii = items.length; i != ii; ++i) {

                var li = <HTMLElement>items[i];
                var qty = parseInt(li.querySelector('span.qty').getAttribute('value'));
                if (qty === 0) {
                    continue;
                }

                var itemCode = (<HTMLInputElement>li.querySelector('input.itemCode')).value;
                var itemName = (<HTMLInputElement>li.querySelector('.name > span')).innerHTML;
                var category = Category[li.parentElement.getAttribute('category')];
                var price = parseInt((<HTMLElement>li.querySelector('.price > span')).innerHTML.replace("$", ""));
                var colorEl = <HTMLButtonElement>li.querySelector('.color > button.selected');
                var sizeEl = <HTMLButtonElement>li.querySelector('.size > button.selected');

                var itemOrder: ItemOrder = {
                    itemCode: itemCode,
                    itemName: itemName,
                    category: category,
                    qty: qty,
                    total: (qty * price)
                }

                orders.push(itemOrder);
            }

            var total = 0;
            var qty = 0;
            var nl = "%0D%0A";
            var body = "VENOM - ORDER DETAILS" +nl +nl;

            for (var i = 0, ii = orders.length; i != ii; ++i) {

                var order = orders[i];
                body += "ITEM #: " + order.itemCode + nl;
                body += "ITEM: " + order.itemName + nl;

                if (order.hasOwnProperty('size')) {
                    body += "SIZE: " + order.size;
                }

                if (order.hasOwnProperty('color')) {
                    body += "COLOR: " + order.color;
                }
                
                body += "QTY: " + order.qty.toString() + nl;
                body += "TOTAL: " + "$" + order.total.toString() + nl + nl;

                qty += order.qty;
                total += order.total;
            }

            body += nl + "ITEMS: " + qty;
            body += nl + "TOTAL: " + "$" + total;

            body += nl + nl;

            body += "Please include your name, shipping address, and payment info with this email. Orders are generally processed and shipped within 1-2 business days." + nl;

            body += nl + "Your name:" + nl + nl;
            body += nl + "Shipping address: " + nl + nl;
            body += nl + "Credit card info or PayPal email: " + nl + nl;


            var mailto = SiteConfig.mailToURL + "?subject=" + encodeURIComponent("VENOM ORDER") + "&body=" + body;
            window.location.href = mailto;
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
                    window.setTimeout(MainPage.levelOne, 1200);
                    break;
            }
        }

        private static levelOne(): void {

            document.querySelector('header').classList.add('hidden');

            MainPage.navbar.route('home');
            MainPage.navbar.show();
            MainPage.level = 1;

             MainPage.orderSheet = new OrderSheet(<HTMLElement>document.querySelector('.orderSheet'));
            (<HTMLElement>document.querySelector('nav > h2')).onclick = MainPage.playMusic;
        }

        private static isMusicPlaying: boolean = false;
        private static playMusic(): void {

            if (MainPage.isMusicPlaying) {
                return;
            }

            MainPage.isMusicPlaying = true;

            var audio = new Audio('./sounds/crytough.wav');
            audio.play();
        }
    }
}

// Venom.MainPage.Init();