var VenomDev;
(function (VenomDev) {
    class SiteConfig {
    }
    SiteConfig.mailToURL = "mailto:orders@venomrox.com";
    VenomDev.SiteConfig = SiteConfig;
    class ScreenSaver {
        static reset() {
            ScreenSaver.handle = window.setTimeout(ScreenSaver.onTimer, ScreenSaver.timeout);
        }
        static onTimer() {
        }
        static start() {
        }
        static render() {
        }
        static clear() {
        }
    }
    ScreenSaver.timeout = 10000;
    VenomDev.ScreenSaver = ScreenSaver;
    class TerminalWriter {
        constructor(element) { this.element = element; }
        write(text) {
            this.text = text;
            this.run();
        }
        init() {
            this.text = this.element.innerHTML;
            this.element.innerHTML = "";
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
    VenomDev.TerminalWriter = TerminalWriter;
    class NavBar {
        constructor(element) {
            this.element = element;
            this.buttons = Array.prototype.slice.call(element.querySelectorAll('button'));
            for (var i = 0, ii = this.buttons.length; i != ii; ++i) {
                this.buttons[i].onclick = this.onClick.bind(this, this.buttons[i]);
            }
        }
        onClick(button) {
            for (var i = 0, ii = this.buttons.length; i != ii; ++i) {
                this.buttons[i].classList.remove('selected');
            }
            button.classList.add('selected');
            this.route(button.getAttribute('nav'));
        }
        show() { this.element.classList.remove('hidden'); }
        hide() { this.element.classList.add('hidden'); }
        route(path) {
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
        }
    }
    VenomDev.NavBar = NavBar;
    let Size;
    (function (Size) {
        Size[Size["S"] = 0] = "S";
        Size[Size["M"] = 1] = "M";
        Size[Size["L"] = 2] = "L";
        Size[Size["XL"] = 3] = "XL";
        Size[Size["XXL"] = 4] = "XXL";
    })(Size = VenomDev.Size || (VenomDev.Size = {}));
    let Category;
    (function (Category) {
        Category[Category["Shirts"] = 0] = "Shirts";
        Category[Category["Hats"] = 1] = "Hats";
        Category[Category["Accessories"] = 2] = "Accessories";
    })(Category = VenomDev.Category || (VenomDev.Category = {}));
    let Color;
    (function (Color) {
        Color[Color["Black"] = 0] = "Black";
        Color[Color["Grey"] = 1] = "Grey";
        Color[Color["White"] = 2] = "White";
        Color[Color["LightPink"] = 3] = "LightPink";
        Color[Color["DarkPink"] = 4] = "DarkPink";
        Color[Color["TT_BlackPink"] = 5] = "TT_BlackPink";
        Color[Color["TT_BlackBlack"] = 6] = "TT_BlackBlack";
        Color[Color["TT_BlackGrey"] = 7] = "TT_BlackGrey";
        Color[Color["Teal"] = 8] = "Teal";
        Color[Color["Purple"] = 9] = "Purple";
    })(Color = VenomDev.Color || (VenomDev.Color = {}));
    var ColorName = {
        Black: "Black",
        Grey: "Grey",
        White: "White",
        LightPink: "Light Pink",
        DarkPink: "Dark Pink",
        TT_BlackPink: "Black/Pink",
        TT_BlackBlack: "Black/Black",
        TT_BlackGrey: "Black/Grey",
        Teal: "Teal",
        Purple: "Purple"
    };
    let Items;
    (function (Items) {
        class TShirt {
            constructor() {
                this.itemCode = "SHIRT001";
                this.itemName = "T-Shirt";
                this.description = "Standard T-Shirt with Venom logo on front";
                this.category = Category.Shirts;
                this.sizes = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
                this.paypalID = "7QWD3DENXDT66";
            }
        }
        Items.TShirt = TShirt;
        class VNeck {
            constructor() {
                this.itemCode = "SHIRT002";
                this.itemName = "V-Neck Shirt";
                this.description = "V-Neck shirt with Venom logo on front";
                this.category = Category.Shirts;
                this.sizes = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
                this.paypalID = "7UDQZSCYUEXBC";
            }
        }
        Items.VNeck = VNeck;
        class TankTop {
            constructor() {
                this.itemCode = "SHIRT003";
                this.itemName = "Tank Top";
                this.description = "Tank top with Venom logo on front";
                this.category = Category.Shirts;
                this.sizes = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
                this.paypalID = "DPU86FEHPUYRN";
            }
        }
        Items.TankTop = TankTop;
        class BaseballCap {
            constructor() {
                this.itemCode = "HAT001";
                this.itemName = "Hat";
                this.description = "Baseball-cap style hat with Venom logo on front of hat";
                this.category = Category.Hats;
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
                this.paypalID = "WMUVHPUTA6ARQ";
            }
        }
        Items.BaseballCap = BaseballCap;
        class TruckerHat {
            constructor() {
                this.itemCode = "HAT002";
                this.itemName = "Trucker Hat";
                this.description = "Trucker-style hat Venom logo on front";
                this.category = Category.Hats;
                this.colors = [Color.TT_BlackBlack, Color.TT_BlackGrey, Color.TT_BlackPink];
                this.price = 15;
                this.paypalID = "PP7DPJ7U3LP84";
            }
        }
        Items.TruckerHat = TruckerHat;
        class Visor {
            constructor() {
                this.itemCode = "HAT003";
                this.itemName = "Visor";
                this.description = "Visor with Venom logo on front";
                this.category = Category.Hats;
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
                this.paypalID = "PAVT2JCYGQ7CG";
            }
        }
        Items.Visor = Visor;
        class Bandana {
            constructor() {
                this.itemCode = "HAT004";
                this.itemName = "Bandana";
                this.description = "Old-school bandana Venom logo on front";
                this.category = Category.Hats;
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
                this.paypalID = "SC6YKMRCSA7VG";
            }
        }
        Items.Bandana = Bandana;
        class DrumSticks {
            constructor() {
                this.itemCode = "STICKS001";
                this.itemName = "Drum Sticks";
                this.description = "Black drum sticks with Venom logo";
                this.category = Category.Accessories;
                this.price = 15;
                this.paypalID = "VF64AM4X6QD88";
            }
        }
        Items.DrumSticks = DrumSticks;
        class YetiCup {
            constructor() {
                this.itemCode = "YETI001";
                this.itemName = "Yeti Rambler";
                this.description = "Yeti rambler with awesome Venom graphics wrapped around cup";
                this.category = Category.Accessories;
                this.price = 80;
                this.paypalID = "MLKTFJ3SPGHYL";
            }
        }
        Items.YetiCup = YetiCup;
    })(Items = VenomDev.Items || (VenomDev.Items = {}));
    class OrderSheet {
        constructor(element) {
            this.itemsByCategory = {};
            this.controls = [];
            this.element = element;
            this.itemTemplate = document.querySelector('#itemTemplateUL > li');
            document.querySelector('button.order').onclick = this.submitOrder.bind(this);
            for (var idx in Items) {
                var item = new Items[idx];
                var category = Category[item.category];
                if (!this.itemsByCategory.hasOwnProperty(category)) {
                    this.itemsByCategory[category] = [];
                }
                this.itemsByCategory[category].push(item);
            }
            for (var c in this.itemsByCategory) {
                var ul = document.createElement('ul');
                ul.classList.add('gear');
                ul.setAttribute('category', Category[c]);
                var itemList = this.itemsByCategory[c];
                for (var x in itemList) {
                    var item = itemList[x];
                    var template = this.itemTemplate.cloneNode(true);
                    template.querySelector('input.itemCode').value = item.itemCode;
                    template.querySelector('.name > span').innerHTML = item.itemName;
                    template.querySelector('.description > span').innerHTML = item.description;
                    template.querySelector('.price > span').innerHTML = "$" + item.price.toString();
                    //var totalReadout = <HTMLElement>template.querySelector('.total > span');
                    //totalReadout.innerHTML = "$0";
                    var paypalform = document.querySelector("form[target='paypal']").cloneNode(true);
                    var inputID = paypalform.querySelector("input[name='hosted_button_id']");
                    inputID.value = item.paypalID;
                    template.appendChild(paypalform);
                    if (item.hasOwnProperty('sizes')) {
                        template.querySelector('.size').classList.remove('hidden');
                        for (var s = 0, ss = item.sizes.length; s != ss; ++s) {
                            var selector = '.size > button[value=' + Size[item.sizes[s]] + ']';
                            var button = template.querySelector(selector);
                            if (item.sizes[s] == Size.L) {
                                button.classList.add('selected');
                            }
                            button.classList.remove('hidden');
                            button.onclick = this.onClickSizeButton.bind(this, button, paypalform);
                        }
                    }
                    if (item.hasOwnProperty('colors')) {
                        var colorEl = template.querySelector('.color');
                        colorEl.classList.remove('hidden');
                        for (var i = 0, ii = item.colors.length; i != ii; ++i) {
                            var button = document.createElement('button');
                            var colorCode = item.colors[i];
                            button.value = Color[colorCode];
                            button.textContent = ColorName[Color[colorCode]];
                            button.onclick = this.onClickColorButton.bind(this, button, paypalform);
                            if (i == 0) {
                                button.classList.add('selected');
                            }
                            colorEl.appendChild(button);
                        }
                    }
                    //var qtyplus = <HTMLButtonElement>template.querySelector('.qty > button[value=plus]');
                    //var qtyminus = <HTMLButtonElement>template.querySelector('.qty > button[value=minus]');
                    //qtyplus.onclick = this.onClickQty.bind(this, qtyplus, item, totalReadout, template, paypalform);
                    //qtyminus.onclick = this.onClickQty.bind(this, qtyminus, item, totalReadout, template, paypalform);
                    ul.appendChild(template);
                }
                var h3 = document.createElement("h3");
                h3.innerHTML = c;
                var img = document.querySelector('#templates > img.merch[category=' + c + ']');
                this.element.appendChild(h3);
                this.element.appendChild(img);
                this.element.appendChild(ul);
            }
        }
        onClickQty(button, item, total, template, form) {
            var qtyElement = button.parentElement.querySelector('span');
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
        onClickSizeButton(button, form) {
            var options = form.querySelectorAll("select[name='os0'] > option");
            this.updateOption(button, options);
            this.onClickButton(button);
        }
        onClickColorButton(button, form) {
            var options = form.querySelectorAll("select[name='os1'] > option");
            this.updateOption(button, options);
            this.onClickButton(button);
        }
        updateOption(button, options) {
            for (var i = 0, ii = options.length; i != ii; ++i) {
                var option = options[i];
                option.selected = (button.value === option.value);
            }
        }
        onClickButton(button) {
            var buttons = button.parentElement.querySelectorAll('button');
            for (var i = 0, ii = buttons.length; i != ii; ++i) {
                buttons[i].classList.remove('selected');
            }
            button.classList.add('selected');
        }
        submitOrder() {
            var orders = [];
            var items = this.element.querySelectorAll('li');
            for (var i = 0, ii = items.length; i != ii; ++i) {
                var li = items[i];
                var qty = parseInt(li.querySelector('span.qty').getAttribute('value'));
                if (qty === 0) {
                    continue;
                }
                var itemCode = li.querySelector('input.itemCode').value;
                var itemName = li.querySelector('.name > span').innerHTML;
                var category = Category[li.parentElement.getAttribute('category')];
                var price = parseInt(li.querySelector('.price > span').innerHTML.replace("$", ""));
                var colorEl = li.querySelector('.color > button.selected');
                var sizeEl = li.querySelector('.size > button.selected');
                var itemOrder = {
                    itemCode: itemCode,
                    itemName: itemName,
                    category: category,
                    qty: qty,
                    total: (qty * price)
                };
                orders.push(itemOrder);
            }
            var total = 0;
            var qty = 0;
            var nl = "%0D%0A";
            var body = "VENOM - ORDER DETAILS" + nl;
            body += nl + "Please include your name, shipping address, and payment info with this email (all major credit cards and PayPal are accepted).";
            body += nl + "Orders are generally processed and shipped within 1- 2 business days.";
            body += nl + "If you have any questions about an item or your order in general, include your questions and comments below and we will contact you prior to fulfilling your order. " + nl + nl;
            for (var i = 0, ii = orders.length; i != ii; ++i) {
                var order = orders[i];
                body += " ITEM #: " + order.itemCode + nl;
                body += " ITEM: " + order.itemName + nl;
                if (order.hasOwnProperty('size')) {
                    body += " SIZE: " + order.size;
                }
                if (order.hasOwnProperty('color')) {
                    body += " COLOR: " + order.color;
                }
                body += " QTY: " + order.qty.toString() + nl;
                body += " TOTAL: " + "$" + order.total.toString() + nl + nl;
                qty += order.qty;
                total += order.total;
            }
            body += nl + " TOTAL ITEMS: " + qty;
            body += nl + " TOTAL PRICE: " + "$" + total;
            body += nl + nl;
            body += nl + "Your name:" + nl + nl;
            body += nl + "Shipping address: " + nl + nl;
            body += nl + "Credit card info or PayPal email address" + nl + nl;
            body += nl + "Credit Card Info";
            body += nl + "  Card Type: ";
            body += nl + "  Card Number: ";
            body += nl + "  Exp Date: ";
            body += nl + "  Security Code: ";
            body += nl + "  Billing Zip: ";
            body += nl + nl + "(OR) PayPal Info";
            body += nl + "  PayPal email address: ";
            body += nl + nl + "Questions or comments: ";
            body += nl + nl;
            var mailto = SiteConfig.mailToURL + "?subject=" + encodeURIComponent("VENOM ORDER") + "&body=" + body;
            window.location.href = mailto;
        }
    }
    VenomDev.OrderSheet = OrderSheet;
    class MainPage {
        static Init() {
            document.querySelector("header").classList.add('fade-in');
            MainPage.headerWriter = TerminalWriter.Create(document.querySelector('header h3'));
            document.onclick = MainPage.anyKey;
            document.onkeyup = MainPage.anyKey;
            MainPage.navbar = new NavBar(document.querySelector('nav'));
        }
        static anyKey() {
            switch (MainPage.level) {
                case 0:
                    document.querySelector('header').classList.add('fall');
                    window.setTimeout(MainPage.levelOne, 1200);
                    break;
            }
        }
        static levelOne() {
            document.querySelector('header').classList.add('hidden');
            MainPage.navbar.route('home');
            MainPage.navbar.show();
            MainPage.level = 1;
            MainPage.orderSheet = new OrderSheet(document.querySelector('.orderSheet'));
            document.querySelector('nav > h2').onclick = MainPage.playMusic;
        }
        static playMusic() {
            if (MainPage.isMusicPlaying) {
                return;
            }
            MainPage.isMusicPlaying = true;
            var audio = new Audio('./sounds/crytough.wav');
            audio.play();
        }
    }
    MainPage.level = 0;
    MainPage.isMusicPlaying = false;
    VenomDev.MainPage = MainPage;
})(VenomDev || (VenomDev = {}));
// Venom.MainPage.Init();
//# sourceMappingURL=venom.dev.js.map