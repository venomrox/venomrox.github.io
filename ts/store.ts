
export class SiteConfig {

	public static mailToURL: string = "mailto:orders@venomrox.com";
}

export enum ItemSize {
	S,
	M,
	L,
	XL,
	XXL
}

export enum ItemCategory {
	Shirts,
	Hats,
	Accessories
}

export enum ItemColor {
	Black,
	Grey,
	White,
	LightPink,
	DarkPink,
	TT_BlackPink,
	TT_BlackBlack,
	TT_BlackGrey,
	Teal,
	Purple
}

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
}

interface IStoreItem {
	itemCode: string;
	itemName: string;
	description: string;
	category: ItemCategory;
	sizes?: Array<ItemSize>;
	colors?: Array<ItemColor>;
	price: number;
	paypalID: string;
}

interface ItemOrder {
	itemCode: string;
	itemName: string;
	category: ItemCategory;
	size?: ItemSize;
	color?: ItemColor;
	qty: number;
	total: number;
}

export namespace Items {

	export class TShirt implements IStoreItem {

		public itemCode: string = "SHIRT001";
		public itemName: string = "T-Shirt";
		public description: string = "Standard T-Shirt with Venom logo on front";
		public category: ItemCategory = ItemCategory.Shirts;
		public sizes: Array<ItemSize> = [ItemSize.S, ItemSize.M, ItemSize.L, ItemSize.XL, ItemSize.XXL];
		public colors: Array<ItemColor> = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
		public price: number = 15;
		public paypalID: string = "7QWD3DENXDT66";
	}

	export class VNeck implements IStoreItem {

		public itemCode: string = "SHIRT002";
		public itemName: string = "V-Neck Shirt";
		public description: string = "V-Neck shirt with Venom logo on front";
		public category: ItemCategory = ItemCategory.Shirts;
		public sizes: Array<ItemSize> = [ItemSize.S, ItemSize.M, ItemSize.L, ItemSize.XL, ItemSize.XXL];
		public colors: Array<ItemColor> = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
		public price: number = 15;
		public paypalID: string = "7UDQZSCYUEXBC";
	}

	export class TankTop implements IStoreItem {

		public itemCode: string = "SHIRT003";
		public itemName: string = "Tank Top";
		public description: string = "Tank top with Venom logo on front";
		public category: ItemCategory = ItemCategory.Shirts;
		public sizes: Array<ItemSize> = [ItemSize.S, ItemSize.M, ItemSize.L, ItemSize.XL, ItemSize.XXL];
		public colors: Array<ItemColor> = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
		public price: number = 15;
		public paypalID: string = "DPU86FEHPUYRN";
	}

	export class BaseballCap {

		public itemCode: string = "HAT001";
		public itemName: string = "Hat";
		public description: string = "Baseball-cap style hat with Venom logo on front of hat";
		public category: ItemCategory = ItemCategory.Hats;
		public colors: Array<ItemColor> = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
		public price: number = 15;
		public paypalID: string = "WMUVHPUTA6ARQ";
	}

	export class TruckerHat {

		public itemCode: string = "HAT002";
		public itemName: string = "Trucker Hat";
		public description: string = "Trucker-style hat Venom logo on front";
		public category: ItemCategory = ItemCategory.Hats;
		public colors: Array<ItemColor> = [ItemColor.TT_BlackBlack, ItemColor.TT_BlackGrey, ItemColor.TT_BlackPink];
		public price: number = 15;
		public paypalID: string = "PP7DPJ7U3LP84";
	}

	export class Visor {

		public itemCode: string = "HAT003";
		public itemName: string = "Visor";
		public description: string = "Visor with Venom logo on front";
		public category: ItemCategory = ItemCategory.Hats;
		public colors: Array<ItemColor> = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
		public price: number = 15;
		public paypalID: string = "PAVT2JCYGQ7CG";
	}

	export class Bandana {

		public itemCode: string = "HAT004";
		public itemName: string = "Bandana";
		public description: string = "Old-school bandana Venom logo on front";
		public category: ItemCategory = ItemCategory.Hats;
		public colors: Array<ItemColor> = [ItemColor.Black, ItemColor.Grey, ItemColor.White, ItemColor.DarkPink, ItemColor.LightPink];
		public price: number = 15;
		public paypalID: string = "SC6YKMRCSA7VG";
	}

	export class DrumSticks {

		public itemCode: string = "STICKS001";
		public itemName: string = "Drum Sticks";
		public description: string = "Black drum sticks with Venom logo";
		public category: ItemCategory = ItemCategory.Accessories;
		public price: number = 15;
		public paypalID: string = "VF64AM4X6QD88";
	}

	export class YetiCup {

		public itemCode: string = "YETI001";
		public itemName: string = "Yeti Rambler";
		public description: string = "Yeti rambler with awesome Venom graphics wrapped around cup";
		public category: ItemCategory = ItemCategory.Accessories;
		public price: number = 80;
		public paypalID: string = "MLKTFJ3SPGHYL";
	}

	export class Hugger {

		public itemCode: string = "HUGGER001";
		public itemName: string = "Hugger";
		public description: string = "Keep your drinks cold at the next Venom show with this cool hugger";
		public category: ItemCategory = ItemCategory.Accessories;
		public price: number = 5;
		public paypalID: string = "EBXTKT5DLZ43Y";
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


		// (<HTMLElement>document.querySelector('button.order')).onclick = this.submitOrder.bind(this);

		for (var idx in Items) {

			var item: IStoreItem = new Items[idx];
			var category = ItemCategory[item.category];
			if (!this.itemsByCategory.hasOwnProperty(category)) {
				this.itemsByCategory[category] = [];
			}

			this.itemsByCategory[category].push(item);
		}

		for (var c in this.itemsByCategory) {

			var ul: HTMLUListElement = document.createElement('ul');
			ul.classList.add('gear');
			ul.setAttribute('category', ItemCategory[c]);

			var itemList = this.itemsByCategory[c];
			for (var x in itemList) {

				var item: IStoreItem = itemList[x];
				var template = <HTMLElement>this.itemTemplate.cloneNode(true);

				(<HTMLInputElement>template.querySelector('input.itemCode')).value = item.itemCode;
				template.querySelector('.name > span').innerHTML = item.itemName;
				template.querySelector('.description > span').innerHTML = item.description;
				template.querySelector('.price > span').innerHTML = "$" + item.price.toString();
				//var totalReadout = <HTMLElement>template.querySelector('.total > span');
				//totalReadout.innerHTML = "$0";

				var paypalform = <HTMLFormElement>document.querySelector("#paypalform > form[target='paypal']").cloneNode(true);
				var inputID = <HTMLInputElement>paypalform.querySelector("input[name='hosted_button_id']");
				inputID.value = item.paypalID;
				template.appendChild(paypalform);

				if (item.hasOwnProperty('sizes')) {
					template.querySelector('.size').classList.remove('hidden');

					for (var s = 0, ss = item.sizes.length; s != ss; ++s) {
						var selector = '.size > button[value=' + ItemSize[item.sizes[s]] + ']';
						var button = <HTMLButtonElement>template.querySelector(selector);
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

	private onClickQty(button: HTMLButtonElement, item: IStoreItem, total: HTMLElement, template: HTMLElement, form: HTMLFontElement) {

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

	private onClickSizeButton(button: HTMLButtonElement, form: HTMLFormElement) {

		var options = form.querySelectorAll("select[name='os0'] > option");
		this.updateOption(button, options);
		this.onClickButton(button);
	}

	private onClickColorButton(button: HTMLButtonElement, form: HTMLFormElement) {

		var options = form.querySelectorAll("select[name='os1'] > option");
		this.updateOption(button, options);
		this.onClickButton(button);
	}

	private updateOption(button: HTMLButtonElement, options: NodeList) {

		for (var i = 0, ii = options.length; i != ii; ++i) {
			var option = <HTMLOptionElement>options[i];
			option.selected = (button.value === option.value);
		}
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
			var category = ItemCategory[li.parentElement.getAttribute('category')];
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
		var body = "VENOM - ORDER DETAILS" + nl;

		body += nl + "Please include your name, shipping address, and payment info with this email (all major credit cards and PayPal are accepted).";
		body += nl + "Orders are generally processed and shipped within 1- 2 business days."
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
