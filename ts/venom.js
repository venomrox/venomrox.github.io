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
            var x = this.text.slice(0, i + 1);
            this.element.innerHTML = x;
            this.element.appendChild(this.cursor.cloneNode(true));
        };
        TerminalWriter.InitAll = function () {
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
            this.route(button.getAttribute('nav'));
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
    (function (Size) {
        Size[Size["S"] = 0] = "S";
        Size[Size["M"] = 1] = "M";
        Size[Size["L"] = 2] = "L";
        Size[Size["XL"] = 3] = "XL";
        Size[Size["XXL"] = 4] = "XXL";
    })(Venom.Size || (Venom.Size = {}));
    var Size = Venom.Size;
    (function (Category) {
        Category[Category["Shirts"] = 0] = "Shirts";
        Category[Category["Hats"] = 1] = "Hats";
        Category[Category["Visors"] = 2] = "Visors";
        Category[Category["Accessories"] = 3] = "Accessories";
    })(Venom.Category || (Venom.Category = {}));
    var Category = Venom.Category;
    (function (Color) {
        Color[Color["Black"] = 0] = "Black";
        Color[Color["Grey"] = 1] = "Grey";
        Color[Color["White"] = 2] = "White";
        Color[Color["LightPink"] = 3] = "LightPink";
        Color[Color["DarkPink"] = 4] = "DarkPink";
        Color[Color["TT_PinkBlack"] = 5] = "TT_PinkBlack";
    })(Venom.Color || (Venom.Color = {}));
    var Color = Venom.Color;
    var Items;
    (function (Items) {
        var TShirt = (function () {
            function TShirt() {
                this.itemCode = "SHIRT001";
                this.itemName = "T-Shirt";
                this.description = "Standard T-Shirt with Venom logo on front";
                this.category = Category.Shirts;
                this.sizes = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
            }
            return TShirt;
        }());
        Items.TShirt = TShirt;
        var VNeck = (function () {
            function VNeck() {
                this.itemCode = "SHIRT002";
                this.itemName = "V-Neck Shirt";
                this.description = "V-Neck shirt with Venom logo on front";
                this.category = Category.Shirts;
                this.sizes = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
            }
            return VNeck;
        }());
        Items.VNeck = VNeck;
        var TankTop = (function () {
            function TankTop() {
                this.itemCode = "SHIRT003";
                this.itemName = "Tank Top";
                this.description = "Tank top with Venom logo on front";
                this.category = Category.Shirts;
                this.sizes = [Size.S, Size.M, Size.L, Size.XL, Size.XXL];
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
            }
            return TankTop;
        }());
        Items.TankTop = TankTop;
        var BaseballCap = (function () {
            function BaseballCap() {
                this.itemCode = "HAT001";
                this.itemName = "Hat";
                this.description = "Baseball-cap style hat with Venom logo on front of hat";
                this.category = Category.Hats;
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
            }
            return BaseballCap;
        }());
        Items.BaseballCap = BaseballCap;
        var TruckerHat = (function () {
            function TruckerHat() {
                this.itemCode = "HAT002";
                this.itemName = "Trucker Hat";
                this.description = "Trucker-style hat Venom logo on front";
                this.category = Category.Hats;
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
            }
            return TruckerHat;
        }());
        Items.TruckerHat = TruckerHat;
        var Visor = (function () {
            function Visor() {
                this.itemCode = "HAT003";
                this.itemName = "Visor";
                this.description = "Visor with Venom logo on front";
                this.category = Category.Hats;
                this.colors = [Color.Black, Color.Grey, Color.White, Color.DarkPink, Color.LightPink];
                this.price = 15;
            }
            return Visor;
        }());
        Items.Visor = Visor;
        var YetiCup = (function () {
            function YetiCup() {
                this.itemCode = "YETI001";
                this.itemName = "Yeti Cup";
                this.description = "Yeti cup with awesome Venom graphics wrapped around cup";
                this.category = Category.Accessories;
                this.price = 90;
            }
            return YetiCup;
        }());
        Items.YetiCup = YetiCup;
    })(Items = Venom.Items || (Venom.Items = {}));
    var OrderSheet = (function () {
        function OrderSheet(element) {
            this.itemsByCategory = {};
            this.controls = [];
            this.element = element;
            this.itemTemplate = document.querySelector('#itemTemplateUL > li');
            for (var i in Items) {
                var item = new Items[i];
                var category = Venom.Category[item.category];
                if (!this.itemsByCategory.hasOwnProperty(category)) {
                    this.itemsByCategory[category] = [];
                }
                this.itemsByCategory[category].push(item);
            }
            for (var c in this.itemsByCategory) {
                var ul = document.createElement('ul');
                ul.classList.add('gear');
                ul.setAttribute('category', Venom.Category[c]);
                var itemList = this.itemsByCategory[c];
                for (var x in itemList) {
                    var item = itemList[x];
                    var template = this.itemTemplate.cloneNode(true);
                    template.querySelector('.name > span').innerHTML = item.itemName;
                    template.querySelector('.description > span').innerHTML = item.description;
                    template.querySelector('.price > span').innerHTML = "$" + item.price.toString();
                    var totalReadout = template.querySelector('.total > span');
                    totalReadout.innerHTML = "$0";
                    if (item.hasOwnProperty('sizes')) {
                        template.querySelector('.size').classList.remove('hidden');
                        // debugger;
                        for (var s = 0, ss = item.sizes.length; s != ss; ++s) {
                            var selector = '.size > button[value=' + Size[item.sizes[s]] + ']';
                            var button = template.querySelector(selector);
                            button.classList.remove('hidden');
                            button.onclick = this.onClickSize.bind(this, button);
                        }
                    }
                    var qtyplus = template.querySelector('.qty > button[value=plus]');
                    var qtyminus = template.querySelector('.qty > button[value=minus]');
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
        OrderSheet.prototype.onClickQty = function (button, item, total) {
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
        };
        OrderSheet.prototype.onClickSize = function (button) {
            var buttons = button.parentElement.querySelectorAll('button');
            for (var i = 0, ii = buttons.length; i != ii; ++i) {
                buttons[i].classList.remove('selected');
            }
            button.classList.add('selected');
        };
        return OrderSheet;
    }());
    Venom.OrderSheet = OrderSheet;
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
            switch (MainPage.level) {
                case 0:
                    document.querySelector('header').classList.add('fall');
                    window.setTimeout(MainPage.levelOne, 1200);
                    break;
            }
        };
        MainPage.levelOne = function () {
            document.querySelector('header').classList.add('hidden');
            MainPage.navbar.route('home');
            MainPage.navbar.show();
            MainPage.level = 1;
            MainPage.orderSheet = new OrderSheet(document.querySelector('.orderSheet'));
        };
        MainPage.level = 0;
        return MainPage;
    }());
    Venom.MainPage = MainPage;
})(Venom || (Venom = {}));
// Venom.MainPage.Init(); 
//# sourceMappingURL=venom.js.map