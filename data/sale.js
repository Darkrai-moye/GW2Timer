/*
 * This file is used by http://gw2timer.com and http://gw2timer.com/gem
 * GW2 gem store promoted and discounted items.
 */
GW2T_SALE_DATA = {
	note: "", // Important note about the sale, optional
	Start: new Date("2017-05-16T16:00:00Z"),
	Finish: new Date("2017-06-06T16:00:00Z"),
	Values: {}, // ID-to-Price mapping of the promoted items, to be initialized
	numPaddingItems: 2,
	/*
	 * These objects were copied from http://gw2timer.com/data/sales.js and may
	 * be augmented with these variables:
	 *	n: "", // Item name referencing an English wiki page
	 *	i: "", // Item ID to retrieve icon and tooltip details, or a URL to a hosted image
	 *	p: {gem: 400}, // Current payment for one item
	 *	url: "", // If not provided, will use name as a wiki link, optional
	 *	discount: [[1, 160, 200], [5, 640, 800], [25, 3200, 4000]] OR 200, // [[quantity, gempricecurrent, gempriceoldOptional], ...] OR gempriceoldOptional
	 *	Finish: new Date("2017-01-01T16:00:00Z"), // Time the item or discount expires, optional
	 *	side: 0 or 1 // If has this property, these padding "items" will be ignored other than for creating column headers
	*/
	Items: [
	{i: "https://render.guildwars2.com/file/220061640ECA41C0577758030357221B4ECCE62C/502065.png", n: "Gem", p: {gem: 100}, url: "http://gw2timer.com/?page=Gem", side: 0},
	{i: 64740, n: "Aviator Sunglasses", p: {gem: 150}},
	{i: 79140, n: "Noble's Folly Pass", p: {gem: 1000}, Finish: new Date("2017-06-09T16:00:00Z")},
	{i: 79500, n: "Lava Lounge Pass", p: {gem: 1000}, Finish: new Date("2017-06-09T16:00:00Z")},
	{i: 79706, n: "Swashbuckler's Package", p: {gem: 900}, Finish: new Date("2017-06-09T16:00:00Z")},
	{i: "http://i.imgur.com/o9lTCUW.png", n: "Outlaw Appearance Pack", p: {gem: 2000}},
	{i: 81223, n: "Outlaw Outfit", p: {gem: 700}},
	{i: 79089, n: "Lord Caudecus's Sword Skin", p: {gem: 600}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 79179, n: "Lord Caudecus's Pistol Skin", p: {gem: 600}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 81242, n: "Mini Outlaw Puppy", p: {gem: 400}},
	{i: "http://i.imgur.com/zhq7M4g.png", n: "Makeover Kit and Transmutation Charges", p: {gem: 350}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: "https://render.guildwars2.com/file/98457F504BA2FAC8457F532C4B30EDC23929ACF9/619316.png", n: "Coin", p: {coin: 1000000}, url: "http://gw2timer.com/?page=Trading", side: 1},
	{i: 80795, n: "Shattered Bloodstone Glider", p: {gem: 308}, discount: 400, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 80854, n: "Bloodstone Ascender", p: {gem: 192}, discount: 250, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 80987, n: "Unbound Magic Harvesting Blast", p: {gem: 900}},
	{i: 80979, n: "Unbound Magic Logging Pulse", p: {gem: 900}},
	{i: 80977, n: "Unbound Magic Mining Beam", p: {gem: 900}},
	{i: 81240, n: "Menzies's Agony", p: {gem: 600}},
	{i: 78025, n: "Phoenix Glider", p: {gem: 500}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 48967, n: "Dreamthistle weapon skins#Gallery", p: {blticket: 3}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 67046, n: "Tempest weapon skins#Gallery", p: {blticket: 5}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 70027, n: "Gallant weapon skins#Gallery", p: {blticket: 3}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 77790, n: "Soaring weapon skins#Gallery", p: {blticket: 3}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 77898, n: "Dominator weapon skins#Gallery", p: {blticket: 3}, Finish: new Date("2017-06-06T16:00:00Z")},
	{i: 70197, n: "Dwayna's weapon skins#Gallery", p: {blticket: 3}, Finish: new Date("2017-06-06T16:00:00Z")}
	]
};