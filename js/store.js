export class SiteConfig {
}
SiteConfig.mailToURL = "mailto:orders@venomrox.com";
export var ItemSize;
(function (ItemSize) {
    ItemSize[ItemSize["S"] = 0] = "S";
    ItemSize[ItemSize["M"] = 1] = "M";
    ItemSize[ItemSize["L"] = 2] = "L";
    ItemSize[ItemSize["XL"] = 3] = "XL";
    ItemSize[ItemSize["XXL"] = 4] = "XXL";
})(ItemSize || (ItemSize = {}));
export var ItemCategory;
(function (ItemCategory) {
    ItemCategory[ItemCategory["Shirts"] = 0] = "Shirts";
    ItemCategory[ItemCategory["Hats"] = 1] = "Hats";
    ItemCategory[ItemCategory["Accessories"] = 2] = "Accessories";
})(ItemCategory || (ItemCategory = {}));
export var ItemColor;
(function (ItemColor) {
    ItemColor[ItemColor["Black"] = 0] = "Black";
    ItemColor[ItemColor["Grey"] = 1] = "Grey";
    ItemColor[ItemColor["White"] = 2] = "White";
    ItemColor[ItemColor["LightPink"] = 3] = "LightPink";
    ItemColor[ItemColor["DarkPink"] = 4] = "DarkPink";
    ItemColor[ItemColor["TT_BlackPink"] = 5] = "TT_BlackPink";
    ItemColor[ItemColor["TT_BlackBlack"] = 6] = "TT_BlackBlack";
    ItemColor[ItemColor["TT_BlackGrey"] = 7] = "TT_BlackGrey";
    ItemColor[ItemColor["Teal"] = 8] = "Teal";
    ItemColor[ItemColor["Purple"] = 9] = "Purple";
})(ItemColor || (ItemColor = {}));
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
export var Items;
(function (Items) {
    class TShirt {
        constructor() {
            this.itemCode = "SHIRT001";
            this.itemName = "T-Shirt";
            this.description = "Standard T-Shirt with Venom logo on front";
            this.category = ItemCategory.Shirts;
            this.sizes = [ItemSize.S, ItemSize.M, ItemSize.L, ItemSize.XL, ItemSize.XXL];
            this.colors = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
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
            this.category = ItemCategory.Shirts;
            this.sizes = [ItemSize.S, ItemSize.M, ItemSize.L, ItemSize.XL, ItemSize.XXL];
            this.colors = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
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
            this.category = ItemCategory.Shirts;
            this.sizes = [ItemSize.S, ItemSize.M, ItemSize.L, ItemSize.XL, ItemSize.XXL];
            this.colors = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
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
            this.category = ItemCategory.Hats;
            this.colors = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
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
            this.category = ItemCategory.Hats;
            this.colors = [ItemColor.TT_BlackBlack, ItemColor.TT_BlackGrey, ItemColor.TT_BlackPink];
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
            this.category = ItemCategory.Hats;
            this.colors = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
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
            this.category = ItemCategory.Hats;
            this.colors = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
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
            this.category = ItemCategory.Accessories;
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
            this.category = ItemCategory.Accessories;
            this.price = 80;
            this.paypalID = "MLKTFJ3SPGHYL";
        }
    }
    Items.YetiCup = YetiCup;
    class Hugger {
        constructor() {
            this.itemCode = "HUGGER001";
            this.itemName = "Hugger";
            this.description = "Keep your drinks cold at the next Venom show with this cool hugger";
            this.category = ItemCategory.Accessories;
            this.price = 5;
            this.paypalID = "EBXTKT5DLZ43Y";
        }
    }
    Items.Hugger = Hugger;
})(Items || (Items = {}));
export class OrderSheet {
    constructor(element) {
        this.itemsByCategory = {};
        this.controls = [];
        this.element = element;
        this.itemTemplate = document.querySelector('#itemTemplateUL > li');
        // (<HTMLElement>document.querySelector('button.order')).onclick = this.submitOrder.bind(this);
        for (var idx in Items) {
            var item = new Items[idx];
            var category = ItemCategory[item.category];
            if (!this.itemsByCategory.hasOwnProperty(category)) {
                this.itemsByCategory[category] = [];
            }
            this.itemsByCategory[category].push(item);
        }
        for (var c in this.itemsByCategory) {
            var ul = document.createElement('ul');
            ul.classList.add('gear');
            ul.setAttribute('category', ItemCategory[c]);
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
                var paypalform = document.querySelector("#paypalform > form[target='paypal']").cloneNode(true);
                var inputID = paypalform.querySelector("input[name='hosted_button_id']");
                inputID.value = item.paypalID;
                template.appendChild(paypalform);
                if (item.hasOwnProperty('sizes')) {
                    template.querySelector('.size').classList.remove('hidden');
                    for (var s = 0, ss = item.sizes.length; s != ss; ++s) {
                        var selector = '.size > button[value=' + ItemSize[item.sizes[s]] + ']';
                        var button = template.querySelector(selector);
                        if (item.sizes[s] == ItemSize.L) {
                            button.classList.add('selected');
                        }
                        button.classList.remove('hidden');
                        button.onclick = this.onClickSizeButton.bind(this, button, paypalform);
                    }
                }
                else {
                    paypalform.querySelector("input[name='on0']").remove();
                    paypalform.querySelector("select[name='os0']").remove();
                }
                if (item.hasOwnProperty('colors')) {
                    var colorEl = template.querySelector('.color');
                    colorEl.classList.remove('hidden');
                    for (var i = 0, ii = item.colors.length; i != ii; ++i) {
                        var button = document.createElement('button');
                        var colorCode = item.colors[i];
                        button.value = ItemColor[colorCode];
                        button.textContent = ColorName[ItemColor[colorCode]];
                        button.onclick = this.onClickColorButton.bind(this, button, paypalform);
                        if (i == 0) {
                            button.classList.add('selected');
                        }
                        colorEl.appendChild(button);
                    }
                }
                else {
                    paypalform.querySelector("input[name='on1']").remove();
                    paypalform.querySelector("select[name='os1']").remove();
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
            var category = ItemCategory[li.parentElement.getAttribute('category')];
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
//# sourceMappingURL=store.js.map