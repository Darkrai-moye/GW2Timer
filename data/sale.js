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
	{i: "https://i.imgur.com/SKDviam.png", n: "Central Tyria Waypoint Unlock Package", p: {gem: 1500}, discount: 2000, Finish: new Date("2018-03-20T16:00:00Z")},
	{i: 87182, n: "Inquest Exo-Suit Outfit", p: {gem: 700}},
	{i: 79704, n: "Crystalline Dragon Wings Glider", p: {gem: 700}, Finish: new Date("2018-03-20T16:00:00Z")},
	{i: 79707, n: "Crystalline Dragon Wings Backpack", p: {gem: 700}, Finish: new Date("2018-03-20T16:00:00Z")},
	{i: 87202, n: "Mini Branded Mounts Pack", p: {gem: 1600}, Finish: new Date("2018-03-20T16:00:00Z")},
	{i: "https://render.guildwars2.com/file/98457F504BA2FAC8457F532C4B30EDC23929ACF9/619316.png", n: "Coin", p: {coin: 1000000}, url: "https://gw2timer.com/?page=Trading", side: 1},
	{i: 86920, n: "Alchemist weapons#Gallery", p: {blticket: 1}},
	{i: 74684, n: "Bat Wings Glider", p: {gem: 700}, Finish: new Date("2018-03-24T16:00:00Z")},
	{i: 73939, n: "Bat Wings Backpack", p: {gem: 700}, Finish: new Date("2018-03-24T16:00:00Z")},
	{i: 81548, n: "Dynamics Exo-Suit Outfit", p: {gem: 700}, Finish: new Date("2018-03-24T16:00:00Z")},
	{i: 81547, n: "Dynamics Glider Module", p: {gem: 700}, Finish: new Date("2018-03-24T16:00:00Z")},
	{i: 79663, n: "Bloodstone Glider", p: {gem: 500}, Finish: new Date("2018-03-24T16:00:00Z")},
	{i: 83341, n: "Sheet Music Glider", p: {gem: 400}, Finish: new Date("2018-03-24T16:00:00Z")},
	{i: 68684, n: "Crystal Nomad Outfit", p: {gem: 700}, Finish: new Date("2018-03-21T16:00:00Z")},
	{i: 67398, n: "Noble Count Outfit", p: {gem: 700}, Finish: new Date("2018-03-21T16:00:00Z")},
	{i: 66658, n: "Shadow Assassin Outfit", p: {gem: 700}, Finish: new Date("2018-03-21T16:00:00Z")},
	{i: 80066, n: "Celestial Rooster Glider", p: {gem: 500}, Finish: new Date("2018-03-22T16:00:00Z")},
	{i: 77291, n: "Soul River Glider", p: {gem: 500}, Finish: new Date("2018-03-22T16:00:00Z")},
	{i: 70095, n: "Butterfly Wings Backpack", p: {gem: 500}},
	{i: 70277, n: "Glittering Wings Backpack", p: {gem: 500}},
	{i: 39131, n: "Plush Quaggan Backpack Cover", p: {gem: 300}},
	{i: 67405, n: "Replica Job-o-Tron Backpack", p: {gem: 500}},
	{i: 68577, n: "Arcane Outfit", p: {gem: 700}, Finish: new Date("2018-03-23T16:00:00Z")},
	{i: 65198, n: "Fancy Winter Outfit", p: {gem: 700}, Finish: new Date("2018-03-23T16:00:00Z")},
	{i: 85034, n: "Forged Outfit", p: {gem: 700}, Finish: new Date("2018-03-23T16:00:00Z")},
	{i: 68654, n: "Imperial Outfit", p: {gem: 700}, Finish: new Date("2018-03-23T16:00:00Z")},
	{i: 79531, n: "Mursaat Robes", p: {gem: 700}, Finish: new Date("2018-03-23T16:00:00Z")},
	{i: 64759, n: "Fuzzy Hylek Hat", p: {gem: 200}},
	{i: 64739, n: "Fuzzy Quaggan Hat", p: {gem: 200}},
	{i: 66309, n: "Wreath of Cooperation", p: {gem: 400}},
	{i: 85332, n: "Branded Wing Backpack", p: {gem: 700}, Finish: new Date("2018-03-20T16:00:00Z")},
	{i: 85220, n: "Branded Wing Glider", p: {gem: 700}, Finish: new Date("2018-03-20T16:00:00Z")}
	]
};
