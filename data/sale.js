/*
 * This file is used by http://gw2timer.com and http://gw2timer.com/gem
 * GW2 gem store promoted and discounted items.
 */
GW2T_SALE_DATA = {
	note: "", // Important note about the sale, optional
	Start: new Date("2017-09-26T16:00:00Z"),
	Finish: new Date("2017-10-10T16:00:00Z"),
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
	{i: "https://i.imgur.com/SBbovrY.png", n: "Outlaw Appearance Pack", p: {gem: 2000}, Finish: new Date("2017-10-03T16:00:00Z")},
	{i: "https://i.imgur.com/e5G1iUR.png", n: "Elonian Introductory Package", p: {gem: 1800}},
	{i: "https://i.imgur.com/nUcEfzX.png", n: "Dynamics Exo-Suit Appearance Pack", p: {gem: 1500}},
	{i: 49149, n: "Royal Terrace Pass", p: {gem: 1000}, Finish: new Date("2017-10-06T16:00:00Z")},
	{i: 50104, n: "Captain's Airship Pass", p: {gem: 1000}, Finish: new Date("2017-10-06T16:00:00Z")},
	{i: 81664, n: "Mistlock Sanctuary Passkey", p: {gem: 1000}, Finish: new Date("2017-10-06T16:00:00Z")},
	{i: 43018, n: "Zodiac Light Armor Skin", p: {gem: 800}, Finish: new Date("2017-10-06T16:00:00Z")},
	{i: 43017, n: "Zodiac Medium Armor Skin", p: {gem: 800}, Finish: new Date("2017-10-06T16:00:00Z")},
	{i: 43016, n: "Zodiac Heavy Armor Skin", p: {gem: 800}, Finish: new Date("2017-10-06T16:00:00Z")},
	{i: 43102, n: "Trickster's Light-Armor Skin", p: {gem: 800}, Finish: new Date("2017-10-07T16:00:00Z")},
	{i: 43101, n: "Viper's Medium-Armor Skin", p: {gem: 800}, Finish: new Date("2017-10-07T16:00:00Z")},
	{i: 43100, n: "Phalanx Heavy-Armor Skin", p: {gem: 800}, Finish: new Date("2017-10-07T16:00:00Z")},
	{i: 85192, n: "Trained Choya Hammer Skin", p: {gem: 600}},
	{i: 84998, n: "Mini Maraca Choya Pinata", p: {gem: 400}},
	{i: 85034, n: "Forged Outfit", p: {gem: 700}},
	{i: 82391, n: "Grenth's Regalia Outfit", p: {gem: 700}},
	{i: 82671, n: "Largos Fin Glider", p: {gem: 700}},
	{i: 84241, n: "Largos Fin Backpack", p: {gem: 700}},
	{i: 64754, n: "Pirate Captain's Outfit", p: {gem: 700}},
	{i: 50103, n: "Magnus's Eye Patch", p: {gem: 400}},
	{i: "https://render.guildwars2.com/file/98457F504BA2FAC8457F532C4B30EDC23929ACF9/619316.png", n: "Coin", p: {coin: 1000000}, url: "http://gw2timer.com/?page=Trading", side: 1},
	{i: 84963, n: "War God's weapon skins#Gallery", p: {blticket: 1}},
	{i: 69799, n: "Scientific weapon skins#Gallery", p: {blticket: 5}},
	{i: 81594, n: "Black Lion Hunters Contract", p: {gem: 1200}, Finish: new Date("2017-10-03T16:00:00Z")},
	{i: 67032, n: "Fused Molten Sickle", p: {gem: 1000}},
	{i: 67030, n: "Fused Molten Logging Axe", p: {gem: 1000}},
	{i: 48933, n: "Molten Alliance Mining Pick", p: {gem: 1000}},
	{i: 49952, n: "Permanent Llama Finisher", p: {gem: 800}},
	{i: 69616, n: "Permanent Unicorn Finisher", p: {gem: 700}},
	{i: 78006, n: "Ironclad Glider", p: {gem: 500}},
	{i: 77811, n: "Electromagnetic-Descender Glider", p: {gem: 400}},
	{i: 78771, n: "Electromagnetic Ascender", p: {gem: 250}},
	{i: 77678, n: "Hawk Wings Glider", p: {gem: 700}},
	{i: 77677, n: "Hawk Wings Backpack Skin", p: {gem: 700}},
	{i: 77269, n: "Golden Feather Wings Glider", p: {gem: 700}},
	{i: 77270, n: "Golden Feather Wings Backpack", p: {gem: 700}},
	{i: 80484, n: "Necrotic Glider", p: {gem: 500}},
	{i: 79016, n: "White Mantle Glider", p: {gem: 400}},
	{i: 42951, n: "Mini Mordrem Leyleecher", p: {gem: 500}},
	{i: 77339, n: "Mini Sabetha", p: {gem: 350}},
	{i: 67838, n: "Mini Sand Giant", p: {gem: 350}},
	{i: 69690, n: "Mini Beetle", p: {gem: 500}},
	{i: 77675, n: "Mini Zintl Cavalier", p: {gem: 350}},
	{i: 70300, n: "Mini Bonebreaker", p: {gem: 350}}
	]
};