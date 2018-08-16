/*
 * This file is used by gw2timer.com and gw2timer.com/gem
 * GW2 gem store promoted and discounted items.
 */
GW2T_SALE_DATA = {
	note: "", // Important note about the sale, optional
	Start: new Date("2018-07-31T16:00:00Z"),
	Finish: new Date("2018-08-21T16:00:00Z"),
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
	{i: 86899, n: "Grand Lion Griffon Skin", p: {gem: 1600}, discount: 2000, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 85538, n: "Reforged Warhound", p: {gem: 1600}, discount: 2000, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 85491, n: "Resplendent Avialan", p: {gem: 1600}, discount: 2000, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 86766, n: "Summit Chevon Springer Skin", p: {gem: 1600}, discount: 2000, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 86690, n: "Umbral Demon Skimmer Skin", p: {gem: 1600}, discount: 2000, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 87530, n: "Choya Logging Tool", p: {gem: 1000}, Finish: new Date("2018-08-21T16:00:00Z")},
	{i: 87554, n: "Choya Harvesting Tool", p: {gem: 1000}, Finish: new Date("2018-08-21T16:00:00Z")},
	{i: 88355, n: "Choya Mining Tool", p: {gem: 1000}, Finish: new Date("2018-08-21T16:00:00Z")},
	{i: 88321, n: "Timekeeper Outfit", p: {gem: 700}, Finish: new Date("2018-08-21T16:00:00Z")},
	{i: 88258, n: "Mordremoth Dye Kit", p: {gem: 125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: "https://render.guildwars2.com/file/98457F504BA2FAC8457F532C4B30EDC23929ACF9/619316.png", n: "Coin", p: {coin: 1000000}, url: "https://gw2timer.com/?page=Trading", side: 1},
	{i: 88077, n: "Desert King weapon skins#Gallery", p: {blticket: 1}},
	{i: 86786, n: "Black Lion Garden Plot Deed", p: {gem: 1000}, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 81594, n: "Black Lion Hunters Contract", p: {gem: 1200}, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 78771, n: "Electromagnetic Ascender", p: {gem: 250}, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 77811, n: "Electromagnetic-Descender Glider", p: {gem: 400}, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 80854, n: "Bloodstone Ascender", p: {gem: 250}, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 80795, n: "Shattered Bloodstone Glider", p: {gem: 400}, Finish: new Date("2018-08-17T16:00:00Z")},
	{i: 88190, n: "Lightning Aspect Eye", p: {gem: 166}, Finish: new Date("2018-08-21T16:00:00Z")},
	{i: 88161, n: "Sun Aspect Eye", p: {gem: 166}, Finish: new Date("2018-08-21T16:00:00Z")},
	{i: 88170, n: "Wind Aspect Eye", p: {gem: 166}, Finish: new Date("2018-08-21T16:00:00Z")}
	]
};
