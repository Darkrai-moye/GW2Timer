/*
 * This file is used by http://gw2timer.com and http://gw2timer.com/gem
 * GW2 gem store promoted and discounted items.
 */
GW2T_SALE_DATA = {
	note: "", // Important note about the sale, optional
	Start: new Date("2017-06-20T16:00:00Z"),
	Finish: new Date("2017-06-27T16:00:00Z"),
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
	{i: 64743, n: "Sport Sunglasses", p: {gem: 150}},
	{i: 49323, n: "Tormented weapon skins#Gallery", p: {blticket: 5}},
	{i: "81545", n: "Jormag Dye Kit", p: {gem: 150}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 81567, n: "God-Slayer Longbow", p: {gem: 350}},
	{i: 81560, n: "God-Slayer Short Bow", p: {gem: 350}},
	{i: 81293, n: "Foefire Wraps", p: {gem: 500}},
	{i: 81412, n: "Foefire Mantle", p: {gem: 500}},
	{i: "http://i.imgur.com/AuYSBAV.png", n: "Crystal Arbiter Appearance Pack", p: {gem: 2000}},
	{i: 63941, n: "Permanent Minstrel Finisher", p: {gem: 800}},
	{i: 49165, n: "Permanent Mystical Dragon Finisher", p: {gem: 800}},
	{i: 43018, n: "Zodiac Light Armor Skin", p: {gem: 800}},
	{i: 43017, n: "Zodiac Medium Armor Skin", p: {gem: 800}},
	{i: 43016, n: "Zodiac Heavy Armor Skin", p: {gem: 800}},
	{i: 70071, n: "Harbinger of Mordremoth Outfit", p: {gem: 700}},
	{i: 63891, n: "Glowing Crimson Mask", p: {gem: 500}},
	{i: 44607, n: "Mask of the Jubilee", p: {gem: 400}},
	{i: 68574, n: "Shadow of the Dragon Helmet Skin", p: {gem: 300}},
	{i: 68575, n: "Shadow of the Dragon Shoulder Skin", p: {gem: 300}},
	{i: 68576, n: "Shadow of the Dragon Gloves Skin", p: {gem: 300}},
	{i: 64755, n: "Fuzzy Bear Hat", p: {gem: 200}},
	{i: "https://render.guildwars2.com/file/98457F504BA2FAC8457F532C4B30EDC23929ACF9/619316.png", n: "Coin", p: {coin: 1000000}, url: "http://gw2timer.com/?page=Trading", side: 1},
	{i: 67395, n: "Reap-r-Tron", p: {gem: 700}, discount: 1000, Finish: new Date("2017-06-27T16:00:00Z")},
	{i: 67394, n: "Log-r-Tron", p: {gem: 700}, discount: 1000, Finish: new Date("2017-06-27T16:00:00Z")},
	{i: 67396, n: "Mine-r-Tron", p: {gem: 700}, discount: 1000, Finish: new Date("2017-06-27T16:00:00Z")},
	{i: 43159, n: "Phoenix Light Armor Skin", p: {gem: 800}, Finish: new Date("2017-06-26T16:00:00Z")},
	{i: 43158, n: "Magitech Medium Armor Skin", p: {gem: 800}, Finish: new Date("2017-06-26T16:00:00Z")},
	{i: 43157, n: "Braham's Heavy Armor Skin", p: {gem: 800}, Finish: new Date("2017-06-26T16:00:00Z")},
	{i: 80985, n: "Vine-Touched Destroyer Glider", p: {gem: 700}, Finish: new Date("2017-06-27T16:00:00Z")},
	{i: 80984, n: "Vine-Touched Destroyer Wings", p: {gem: 700}, Finish: new Date("2017-06-27T16:00:00Z")},
	{i: 44888, n: "Mist Herald Back Item Skin", p: {gem: 500}, Finish: new Date("2017-06-27T16:00:00Z")},
	{i: 67405, n: "Replica Job-o-Tron Backpack", p: {gem: 350}, discount: 500, Finish: new Date("2017-06-27T16:00:00Z")},
	{i: 68687, n: "Lord Faren's Rapier Skin", p: {gem: 500}, Finish: new Date("2017-06-25T16:00:00Z")}
	]
};