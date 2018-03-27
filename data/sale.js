/*
 * This file is used by gw2timer.com and gw2timer.com/gem
 * GW2 gem store promoted and discounted items.
 */
GW2T_SALE_DATA = {
	note: "", // Important note about the sale, optional
	Start: new Date("2018-03-13T16:00:00Z"),
	Finish: new Date("2018-03-27T16:00:00Z"),
	Values: {}, // ID-to-Price mapping of the promoted items, to be initialized
	numPaddingItems: 2,
	/*
	 * These objects were copied from https://gw2timer.com/data/sales.js and may
	 * be augmented with these variables:
	 *	i: "", // Item ID to retrieve icon and tooltip details, or a URL to a hosted image
	 *	n: "", // Item name referencing an English wiki page
	 *	p: {gem: 400}, // Current payment for one item
	 *	url: "", // If not provided, will use name as a wiki link, optional
	 *	discount: [[1, 160, 200], [5, 640, 800], [25, 3200, 4000]] OR 200, // [[quantity, gempricecurrent, gempriceoldOptional], ...] OR gempriceoldOptional
	 *	Finish: new Date("2018-01-01T16:00:00Z"), // Time the item or discount expires, optional
	 *	side: 0 or 1 // If has this property, these padding "items" will be ignored other than for creating column headers
	*/
	Items: [
	{i: "https://render.guildwars2.com/file/220061640ECA41C0577758030357221B4ECCE62C/502065.png", n: "Gem", p: {gem: 100}, url: "https://gw2timer.com/?page=Gem", side: 0},
	{i: 78771, n: "Electromagnetic Ascender", p: {gem: 162}, discount: 250, Finish: new Date("2018-03-27T16:00:00Z")},
	{i: 77811, n: "Electromagnetic-Descender Glider", p: {gem: 260}, discount: 400, Finish: new Date("2018-03-27T16:00:00Z")},
	{i: 80854, n: "Bloodstone Ascender", p: {gem: 162}, discount: 250, Finish: new Date("2018-03-27T16:00:00Z")},
	{i: 80795, n: "Shattered Bloodstone Glider", p: {gem: 260}, discount: 400, Finish: new Date("2018-03-27T16:00:00Z")},
	{i: 87021, n: "Forged Wing Backpack", p: {gem: 700}},
	{i: 87070, n: "Forged Glider", p: {gem: 700}},
	{i: 87182, n: "Inquest Exo-Suit Outfit", p: {gem: 700}},
	{i: "https://render.guildwars2.com/file/98457F504BA2FAC8457F532C4B30EDC23929ACF9/619316.png", n: "Coin", p: {coin: 1000000}, url: "https://gw2timer.com/?page=Trading", side: 1},
	{i: 86920, n: "Alchemist weapons#Gallery", p: {blticket: 1}},
	{i: 69623, n: "Exemplar Attire Outfit", p: {gem: 700}},
	{i: 67990, n: "Jungle Explorer Outfit", p: {gem: 700}},
	{i: 80906, n: "Spring Promenade Outfit", p: {gem: 700}},
	{i: 70095, n: "Butterfly Wings Backpack", p: {gem: 500}},
	{i: 70277, n: "Glittering Wings Backpack", p: {gem: 500}},
	{i: 39131, n: "Plush Quaggan Backpack Cover", p: {gem: 300}},
	{i: 67405, n: "Replica Job-o-Tron Backpack", p: {gem: 500}},
	{i: 64759, n: "Fuzzy Hylek Hat", p: {gem: 200}},
	{i: 64739, n: "Fuzzy Quaggan Hat", p: {gem: 200}},
	{i: 66309, n: "Wreath of Cooperation", p: {gem: 400}}
	]
};
