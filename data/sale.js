/*
 * This file is used by http://gw2timer.com and http://gw2timer.com/gem
 * GW2 gem store promoted and discounted items.
 */
GW2T_SALE_DATA = {
	note: "", // Important note about the sale, optional
	Start: new Date("2017-12-26T16:00:00Z"),
	Finish: new Date("2018-01-09T16:00:00Z"),
	Values: {}, // ID-to-Price mapping of the promoted items, to be initialized
	numPaddingItems: 2,
	/*
	 * These objects were copied from http://gw2timer.com/data/sales.js and may
	 * be augmented with these variables:
	 *	i: "", // Item ID to retrieve icon and tooltip details, or a URL to a hosted image
	 *	n: "", // Item name referencing an English wiki page
	 *	p: {gem: 400}, // Current payment for one item
	 *	url: "", // If not provided, will use name as a wiki link, optional
	 *	discount: [[1, 160, 200], [5, 640, 800], [25, 3200, 4000]] OR 200, // [[quantity, gempricecurrent, gempriceoldOptional], ...] OR gempriceoldOptional
	 *	Finish: new Date("2017-01-01T16:00:00Z"), // Time the item or discount expires, optional
	 *	side: 0 or 1 // If has this property, these padding "items" will be ignored other than for creating column headers
	*/
	Items: [
	{i: "https://render.guildwars2.com/file/220061640ECA41C0577758030357221B4ECCE62C/502065.png", n: "Gem", p: {gem: 100}, url: "http://gw2timer.com/?page=Gem", side: 0},
	{i: 19995, n: "Bank Tab Expansion", p: {gem: 480}, discount: 600, Finish: new Date("2018-01-05T16:00:00Z")},
	{i: "https://i.imgur.com/lbGRGqq.png", n: "Wintersday Appearance Package", p: {gem: 2000}, Finish: new Date("2018-01-02T16:00:00Z")},
	{i: "https://i.imgur.com/QG8L0UM.png", n: "Umbral Demon Skimmer Skin", p: {gem: 1600}, Finish: new Date("2018-01-02T16:00:00Z")},
	{i: "https://i.imgur.com/8UI3lQs.png", n: "Freezie Crown", p: {gem: 350}, Finish: new Date("2018-01-02T16:00:00Z")},
	{i: 42978, n: "Wintersday Minis 3-Pack", p: {gem: 500}, Finish: new Date("2018-01-02T16:00:00Z")},
	{i: 86637, n: "Winter Monarch Outfit", p: {gem: 700}},
	{i: 67868, n: "Arctic Explorer Outfit", p: {gem: 700}},
	{i: 86715, n: "Glacial Glider", p: {gem: 500}},
	{i: "https://render.guildwars2.com/file/98457F504BA2FAC8457F532C4B30EDC23929ACF9/619316.png", n: "Coin", p: {coin: 1000000}, url: "http://gw2timer.com/?page=Trading", side: 1},
	{i: 86675, n: "Glacial weapons#Gallery", p: {blticket: 1}},
	{i: 80044, n: "Mini Festive Aurene", p: {gem: 400}, Finish: new Date("2018-01-02T16:00:00Z")},
	{i: 85757, n: "Permanent Choya Finisher", p: {gem: 700}, Finish: new Date("2018-01-02T16:00:00Z")},
	{i: 65202, n: "Festive Hat", p: {gem: 150}, Finish: new Date("2018-01-02T16:00:00Z")}
	]
};
