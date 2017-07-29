/*
 * This file is used by http://gw2timer.com/minis
 * Cache association of the mini to its proper item and category.
 */

/*
 * Category translations.
 */
var GW2T_MINIS_HEADERS = {
	Set1: {name_en: "Set I", name_de: "Satz I", name_es: "Conjunto I", name_fr: "Ensemble I", name_zh: "套件1"},
	Set2: {name_en: "Set II", name_de: "Satz II", name_es: "Conjunto II", name_fr: "Ensemble II", name_zh: "套件2"},
	Set3: {name_en: "Set III", name_de: "Satz III", name_es: "Conjunto III", name_fr: "Ensemble III", name_zh: "套件3"},
	Special: {name_en: "Special", name_de: "Spezial", name_es: "Especial", name_fr: "Spéciales", name_zh: "特殊"},
	Halloween: {name_en: "Halloween", name_de: "Halloween", name_es: "Halloween", name_fr: "Halloween", name_zh: "万圣"},
	Wintersday: {name_en: "Wintersday", name_de: "Wintertags", name_es: "Invernal", name_fr: "Hivernel", name_zh: "冬幕"},
	PvP: {name_en: "PvP", name_de: "PvP", name_es: "JcJ", name_fr: "JcJ", name_zh: "玩家對戰"},
	Raid: {name_en: "Raid", name_de: "Schlachtzug", name_es: "Incursion", name_fr: "Raid", name_zh: "大型地下城"},
	Zone: {name_en: "Zone", name_de: "Gebiet", name_es: "Zona", name_fr: "Zone", name_zh: "区"},
	Gem: {name_en: "Gem Store", name_de: "Edelsteinshop", name_es: "Tienda de gemas", name_fr: "Boutique aux gemmes)", name_zh: "宝石商店"}
};

/*
 * Minis to be excluded from the collate function.
 */
var GW2T_MINIS_BLACKLIST = {
	
};

/*
 * Associated item with that unlockable.
 * Chronologically sorted based on http://wiki.guildwars2.com/wiki/Miniature
 * u: Unlockable ID (unlock ID)
 * i: Item ID associated with that unlock
 * n: Name of mini
 * p: Payment type to acquire the item
 */
var GW2T_MINIS_DATA = {
Set1: [
	{u: 31, i: 20142, n: "Mini Brown Bear"},
	{u: 49, i: 20160, n: "Mini Colocal"},
	{u: 42, i: 20152, n: "Mini Devourer"},
	{u: 22, i: 20133, n: "Mini Dredge Excavator"},
	{u: 54, i: 20164, n: "Mini Ettin"},
	{u: 10, i: 20121, n: "Mini Forest Spider"},
	{u: 18, i: 20129, n: "Mini Frost Drake"},
	{u: 26, i: 20137, n: "Mini Green Moa"},
	{u: 50, i: 20161, n: "Mini Harpy Warrior"},
	{u: 28, i: 20139, n: "Mini Hylek Nahualli"},
	{u: 38, i: 20149, n: "Mini Jungle Stalker"},
	{u: 52, i: 20162, n: "Mini Krait Slaver"},
	{u: 32, i: 20143, n: "Mini Minotaur"},
	{u: 11, i: 20122, n: "Mini Modniir Berserker"},
	{u: 12, i: 20123, n: "Mini Seraph Heavy Guard"},
	{u: 13, i: 20124, n: "Mini Seraph Mage"},
	{u: 41, i: 20151, n: "Mini Skale Blighter"},
	{u: 39, i: 20150, n: "Mini Skritt Forager"},
	{u: 25, i: 20136, n: "Mini Storm Imp"},
	{u: 45, i: 20156, n: "Mini Wasp"},
	{u: 35, i: 20146, n: "Mini Air Elemental"},
	{u: 59, i: 20169, n: "Mini Ascalonian Mage"},
	{u: 6, i: 20117, n: "Mini Bandit Bruiser"},
	{u: 21, i: 20132, n: "Mini Dredge Mining Suit"},
	{u: 55, i: 20165, n: "Mini Fire Imp"},
	{u: 51, i: 20153, n: "Mini Forest Grub"},
	{u: 24, i: 20135, n: "Mini Frost Spider"},
	{u: 19, i: 20130, n: "Mini Ice Elemental"},
	{u: 29, i: 20140, n: "Mini Mark I Assault Golem"},
	{u: 30, i: 20141, n: "Mini PK 632Z"},
	{u: 33, i: 20144, n: "Mini Polar Bear"},
	{u: 57, i: 20167, n: "Mini Shade"},
	{u: 44, i: 20155, n: "Mini Snow Troll"},
	{u: 17, i: 20128, n: "Mini Svanir Berserker"},
	{u: 15, i: 20126, n: "Mini Svanir Icebreaker"},
	{u: 9, i: 20120, n: "Mini Wind Rider"},
	{u: 7, i: 20118, n: "Mini Big Nose Ted"},
	{u: 43, i: 20154, n: "Mini Chromatic Ooze"},
	{u: 23, i: 20134, n: "Mini Comrade Molechev"},
	{u: 16, i: 20127, n: "Mini Eir Stegalkin"},
	{u: 58, i: 20168, n: "Mini Flame Shaman"},
	{u: 53, i: 20163, n: "Mini Icebrood Quaggan"},
	{u: 14, i: 20125, n: "Mini Logan Thackeray"},
	{u: 34, i: 20145, n: "Mini Pink Moa"},
	{u: 8, i: 20119, n: "Mini River Drake Broodmother"},
	{u: 37, i: 20148, n: "Mini Snow Leopard"},
	{u: 46, i: 20157, n: "Mini Vampire Bat"},
	{u: 20, i: 20131, n: "Mini White Moa"},
	{u: 27, i: 20138, n: "Mini Yaotl The Fierce"},
	{u: 48, i: 20159, n: "Mini Jack-a-lop"},
	{u: 60, i: 20170, n: "Mini Krait Witch"},
	{u: 36, i: 20147, n: "Mini Oakheart"},
	{u: 56, i: 20166, n: "Mini Orrian Wraith"},
	{u: 47, i: 20158, n: "Mini Undead Chicken"}
],
Set2: [
	{u: 64, i: 20174, n: "Mini Bandit Cutpurse"},
	{u: 63, i: 20173, n: "Mini Bandit Saboteur"},
	{u: 62, i: 20172, n: "Mini Bandit Scout"},
	{u: 80, i: 20189, n: "Mini Dredge Resonator"},
	{u: 69, i: 20179, n: "Mini Harathi Sharpshooter"},
	{u: 85, i: 20195, n: "Mini Hylek Tlamatini"},
	{u: 89, i: 20199, n: "Mini Inquest Golemcaster"},
	{u: 91, i: 20201, n: "Mini Inquest Technician"},
	{u: 67, i: 20177, n: "Mini Modniir Ice Sage"},
	{u: 94, i: 20204, n: "Mini Peacemaker Sharpshot"},
	{u: 92, i: 20202, n: "Mini Peacemaker Shocktrooper"},
	{u: 95, i: 20205, n: "Mini Peacemaker Soldier"},
	{u: 65, i: 20175, n: "Mini River Drake"},
	{u: 71, i: 20181, n: "Mini Seraph Archer"},
	{u: 96, i: 20207, n: "Mini Seraph Juggernaut"},
	{u: 73, i: 20191, n: "Mini Shaman Of Jormag"},
	{u: 100, i: 20213, n: "Mini Skale Brackish"},
	{u: 74, i: 20183, n: "Mini Svanir Hunter"},
	{u: 83, i: 20193, n: "Mini Swamp Spider"},
	{u: 70, i: 20180, n: "Mini Tamini Warrior"},
	{u: 176, i: 44730, n: "Mini Twisted Mender"},
	{u: 174, i: 44726, n: "Mini Twisted Reaver"},
	{u: 78, i: 20187, n: "Mini Wolfborn"},
	{u: 75, i: 20184, n: "Mini Wolfborn Berserker"},
	{u: 106, i: 20218, n: "Mini Black Wind Rider"},
	{u: 81, i: 20190, n: "Mini Dredge Strazar"},
	{u: 84, i: 20194, n: "Mini Eelob Poisonfang"},
	{u: 79, i: 20188, n: "Mini Frost Fang"},
	{u: 87, i: 20197, n: "Mini Hylek Amini"},
	{u: 86, i: 20196, n: "Mini Hylek Cuicani"},
	{u: 175, i: 44729, n: "Mini Ice Imp"},
	{u: 90, i: 20200, n: "Mini Inquest Extinguisher"},
	{u: 99, i: 20215, n: "Mini Lynx"},
	{u: 97, i: 20208, n: "Mini Seraph Medic"},
	{u: 61, i: 20171, n: "Mini Seraph Recruit"},
	{u: 82, i: 20192, n: "Mini Swamp Drake"},
	{u: 172, i: 44725, n: "Mini Twisted Horror"},
	{u: 77, i: 20186, n: "Mini Wolfborn Hunter"},
	{u: 76, i: 20185, n: "Mini Wolfborn Shaman"},
	{u: 88, i: 20198, n: "Mini High Inquisitor Maut"},
	{u: 72, i: 20182, n: "Mini Ragar Shardhammer"},
	{u: 68, i: 20178, n: "Mini Skarn Darkhoof"},
	{u: 171, i: 44728, n: "Mini Twisted Nightmare"},
	{u: 93, i: 20203, n: "Mini Zojja"},
	{u: 102, i: 20211, n: "Mini Black Moa"},
	{u: 173, i: 44727, n: "Mini Enraged Twisted Nightmare"}
],
Set3: [
	{u: 245, i: 64206, n: "Mini Aetherblade Elementalist"},
	{u: 256, i: 64208, n: "Mini Aetherblade Swashbuckler"},
	{u: 257, i: 64209, n: "Mini Bandit Bomber"},
	{u: 103, i: 20212, n: "Mini Blue Moa"},
	{u: 258, i: 64210, n: "Mini Consortium Pacifier"},
	{u: 235, i: 64224, n: "Mini Destroyer Crab"},
	{u: 259, i: 64211, n: "Mini Freshwater Crab"},
	{u: 260, i: 64212, n: "Mini Grawl Berserker"},
	{u: 261, i: 64213, n: "Mini Lionguard"},
	{u: 264, i: 64215, n: "Mini Ministry Guard"},
	{u: 265, i: 64216, n: "Mini Mosquito"},
	{u: 242, i: 64217, n: "Mini Priory Historian"},
	{u: 263, i: 64214, n: "Mini Salamander Drake"},
	{u: 40, i: 20214, n: "Mini Skritt Bottle Lobber"},
	{u: 244, i: 64218, n: "Mini Sylvan Pup"},
	{u: 240, i: 64219, n: "Mini Toxic Skale"},
	{u: 241, i: 64220, n: "Mini Toxic Spider Queen"},
	{u: 249, i: 64221, n: "Mini Vigil Marksman"},
	{u: 251, i: 64207, n: "Mini Vulture Raptor"},
	{u: 271, i: 64222, n: "Mini Whispers Creator"},
	{u: 273, i: 64228, n: "Mini Aetherblade Thug"},
	{u: 284, i: 64229, n: "Mini Cave Troll"},
	{u: 286, i: 64230, n: "Mini Hazmat Suit"},
	{u: 283, i: 64205, n: "Mini Iron Legion Soldier"},
	{u: 287, i: 64232, n: "Mini Jotun"},
	{u: 105, i: 20217, n: "Mini Krait Damoss"},
	{u: 262, i: 64223, n: "Mini Ogre"},
	{u: 267, i: 64227, n: "Mini Priory Explorer"},
	{u: 288, i: 64233, n: "Mini Priory Researcher"},
	{u: 232, i: 64234, n: "Mini Risen Drake Broodmother"},
	{u: 254, i: 64235, n: "Mini Toxic Courtier"},
	{u: 253, i: 64236, n: "Mini Toxic Knight"},
	{u: 252, i: 64237, n: "Mini Vigil Tactician"},
	{u: 250, i: 64225, n: "Mini Whispers Keeper"},
	{u: 272, i: 64247, n: "Mini Aetherblade Taskmaster"},
	{u: 246, i: 64248, n: "Mini Ember"},
	{u: 285, i: 64239, n: "Mini Faolain"},
	{u: 248, i: 64249, n: "Mini Icebrood Goliath"},
	{u: 275, i: 64250, n: "Mini Kodan Icehammer"},
	{u: 277, i: 64238, n: "Mini Lord Faren"},
	{u: 268, i: 64245, n: "Mini Poobadoo"},
	{u: 266, i: 64246, n: "Mini Tsuru Whitewing"},
	{u: 280, i: 64240, n: "Mini Tybalt"},
	{u: 281, i: 64231, n: "Mini Vigil Warmaster"},
	{u: 282, i: 64226, n: "Mini Whispers Lightbringer"},
	{u: 269, i: 64241, n: "Mini Flame Legion Effigy"},
	{u: 279, i: 64242, n: "Mini King Adelbern"},
	{u: 276, i: 64244, n: "Mini Largos"},
	{u: 247, i: 64243, n: "Mini Mossheart"}
],
Special: [
	{u: 1, i: 21047, n: "Miniature Rytlock", p: {gem: 0}},
	{u: 4, i: 20948, n: "Miniature Orange Tabby Cat", p: {monument: 9}},
	{u: 5, i: 20947, n: "Miniature Orrian Baby Chicken", p: {monument: 15}},
	{u: 3, i: 20950, n: "Miniature Rockfur Racoon", p: {monument: 21}},
	{u: 2, i: 20949, n: "Miniature Servitor Golem", p: {monument: 27}},
	{u: 124, i: 39103, n: "Chauncey von Snuffles III", p: {laurel: 75}},
	{u: 125, i: 39104, n: "Goedulf", p: {laurel: 75}},
	{u: 131, i: 39712, n: "Miniature Red Siege Golem", p: {commendation: 25}},
	{u: 132, i: 39713, n: "Miniature Green Siege Golem", p: {commendation: 25}},
	{u: 130, i: 39714, n: "Miniature Blue Siege Golem", p: {commendation: 25}},
	{u: 113, i: 37206, n: "Mini Karka"},
	{u: 114, i: 37208, n: "Mini Karka Hatchlings"},
	{u: 112, i: 37207, n: "Mini Reef Drake"},
	{u: 138, i: 42599, n: "Mini Southsun Kasmeer"},
	{u: 137, i: 42598, n: "Mini Southsun Faren"},
	{u: 156, i: 43248, n: "Mini Reef Rider"},
	{u: 136, i: 42402, n: "Mini Molten Firestorm"},
	{u: 162, i: 43430, n: "Mini Helmed Moa Racer"},
	{u: 163, i: 43431, n: "Mini First Mate Horrik", p: {gem: 0}},
	{u: 66, i: 20176, n: "Mini Yellow Moa"},
	{u: 168, i: 43991, n: "Mini Ellen Kiel", p: {laurel: 25}},
	{u: 167, i: 43990, n: "Mini Evon Gnashblade", p: {laurel: 25}},
	{u: 169, i: 44639, n: "Mini Watchknight", p: {laurel: 25}},
	{u: 170, i: 44641, n: "Mini Liadri the Concealing Dark", p: {achievement: 0}},
	{u: 180, i: 45008, n: "Mini Steamrider"},
	{u: 179, i: 45009, n: "Mini Steam Hulk"},
	{u: 178, i: 45010, n: "Mini Steam Minotaur"},
	{u: 183, i: 46654, n: "Mini Moto", p: {bubble: 20}},
	{u: 184, i: 46653, n: "Mini Princess Miya", p: {bubble: 25}},
	{u: 177, i: 45001, n: "Mini Queen Jennah", p: {starting: true}},
	{u: 193, i: 47845, n: "Mini Risen Hylek"},
	{u: 194, i: 47846, n: "Mini Tequatl the Sunless"},
	{u: 195, i: 48739, n: "Mini Clockheart", p: {achievement: 0}},
	{u: 205, i: 48877, n: "Mini Toxic Hybrid"},
	{u: 203, i: 48743, n: "Mini Holographic Scarlet"},
	{u: 201, i: 48756, n: "Mini Caithe"},
	{u: 204, i: 48761, n: "Mini Dolyak", p: {skirmish: 200}},
	{u: 206, i: 48879, n: "Mini Toxic Nimross", p: {laurel: 25}},
	{u: 217, i: 49724, n: "Mini Cobalt Great Jungle Wurm Head"},
	{u: 214, i: 49827, n: "Mini Twisted Watchwork Moa"},
	{u: 219, i: 49950, n: "Mini Mai Trin"},
	{u: 222, i: 42952, n: "Mini Marjory Delaqua"},
	{u: 223, i: 50028, n: "Mini Captain Magnus"},
	{u: 291, i: 66216, n: "Mini Panda", p: {laurel: 25}},
	{u: 298, i: 66969, n: "Mini Monkey King"},
	{u: 129, i: 39090, n: "Risen Priest of Balthazar", p: {karma: 45500}},
	{u: 303, i: 67778, n: "Mini Mordrem Husk", p: {map_sw: 1200}},
	{u: 292, i: 66763, n: "Mini Mordrem Thrasher"},
	{u: 312, i: 68498, n: "Mini Mordrem Troll", p: {map_sw: 1200}},
	{u: 311, i: 68497, n: "Mini Mordrem Teragriff"},
	{u: 316, i: 68571, n: "Mini Kasmeer Meade"},
	{u: 289, i: 43006, n: "Mini Mystical Dragon", p: {gem: 0}},
	{u: 319, i: 68688, n: "Mini Revenant Rytlock Brimstone", p: {gem: 0}},
	{u: 343, i: 71258, n: "Mini Blademaster Diarmid", p: {map_ds: 250}},
	{u: 350, i: 71835, n: "Mini Chak Gerent", p: {achievement: 0}},
	{u: 346, i: 74444, n: "Mini Exalted Sage", p: {map_ab: 1000}},
	{u: 354, i: 74532, n: "Mini Holographic Zinn", p: {achievement: 0}},
	{u: 358, i: 75348, n: "Mini Itzel Bladedancer"},
	{u: 351, i: 76537, n: "Mini Itzel Shadowleaper"},
	{u: 367, i: 74055, n: "Mini Nuhoch", p: {map_td: 1000}},
	{u: 341, i: 75969, n: "Mini Nuhoch Crusher"},
	{u: 352, i: 74268, n: "Mini Professor Mew"},
	{u: 355, i: 76670, n: "Mini Mister Mittens", p: {craft: true}},
	{u: 361, i: 76608, n: "Mini Baron von Scrufflebutt", p: {craft: true}},
	{u: 344, i: 72873, n: "Mini Snuggles", p: {craft: true}},
	{u: 360, i: 76761, n: "Mini Old Tom", p: {achievement: 0}},
	{u: 365, i: 73476, n: "Mini Brine", p: {commendation: 25}},
	{u: 359, i: 73749, n: "Mini Bristleback", p: {commendation: 75}},
	{u: 349, i: 70703, n: "Mini Castor", p: {commendation: 50}},
	{u: 364, i: 74595, n: "Mini Chak Lobber", p: {commendation: 75}},
	{u: 363, i: 76594, n: "Mini Exalted Worker", p: {commendation: 75}},
	{u: 339, i: 73378, n: "Mini Gamli", p: {commendation: 25}},
	{u: 348, i: 70684, n: "Mini Kensho", p: {commendation: 50}},
	{u: 340, i: 76745, n: "Mini Mushroom Bomber", p: {commendation: 50}},
	{u: 338, i: 76663, n: "Mini Rekka", p: {commendation: 25}},
	{u: 347, i: 71848, n: "Mini Sophia", p: {commendation: 50}},
	{u: 337, i: 74762, n: "Mini Tengu", p: {commendation: 75}},
	{u: 396, i: 78458, n: "Mini Tiger Spirit", p: {achievement: 0}},
	{u: 395, i: 78409, n: "Mini Charr Car"},
	{u: 397, i: 78443, n: "Mini Vinetooth Faolain"},
	{u: 398, i: 78258, n: "Mini Stonehead"},
	{u: 399, i: 78625, n: "Mini Axemaster Hareth"},
	{u: 400, i: 78161, n: "Mini Pocket Raptor"},
	{u: 424, i: 79766, n: "Mini Aurene", p: {achievement: 0}},
	{u: 447, i: 80424, n: "Mini Eye of Janthir"},
	{u: 492, i: 81821, n: "Mini Lazarus", p: {achievement: 0}},
	{u: 494, i: 81980, n: "Mini GL-XC S7S"}
],
Halloween: [
	{u: 196, i: 48740, n: "Mini Bloody Prince Thorn", p: {cob: 6}},
	{u: 200, i: 48741, n: "Mini Ghost Carlotta", p: {cob: 6}},
	{u: 202, i: 48742, n: "Mini Candy-Corn Elemental", p: {laurel: 25}},
	{u: 300, i: 67365, n: "Mini Zuzu, Cat of Darkness"},
	{u: 302, i: 67364, n: "Mini Gwynefyrdd", p: {cob: 100}},
	{u: 301, i: 67384, n: "Mini Candy Corn Ghoulemental", p: {achievement: 0}},
	{u: 345, i: 72115, n: "Mini Husk-o-Lantern", p: {cob: 4}},
	{u: 356, i: 76569, n: "Mini Devil Dog"},
	{u: 353, i: 73858, n: "Mini Spooky Moa"},
	{u: 416, i: 79672, n: "Mini Thailog the Gargoyle"},
	{u: 417, i: 79684, n: "Mini Charles the Hellfire Skeleton"},
	{u: 418, i: 79654, n: "Mini Oxidecimus the Shadow Raven", p: {cob: 120}}
],
Wintersday: [
	{u: 121, i: 38048, n: "Mini Snowman"},
	{u: 122, i: 38047, n: "Foostivoo the Merry", p: {craft: true}},
	{u: 119, i: 38455, n: "Plush Griffon", p: {achievement: 0}},
	{u: 115, i: 38451, n: "Princess Doll", p: {achievement: 0}},
	{u: 118, i: 38454, n: "Toy Golem", p: {achievement: 0}},
	{u: 117, i: 38453, n: "Toy Soldier", p: {achievement: 0}},
	{u: 116, i: 38452, n: "Toy Ventari", p: {achievement: 0}},
	{u: 310, i: 68365, n: "Mini Skritta Claws", p: {achievement: 0}},
	{u: 213, i: 49524, n: "Mini Ho-Ho-Tron"},
	{u: 381, i: 77655, n: "Mini Gift Skritt", p: {gem: 0}},
	{u: 382, i: 77593, n: "Mini Charitable Gift Skritt", p: {craft: true}},
	{u: 385, i: 77639, n: "Mini Munificent Gift Skritt", p: {craft: true}},
	{u: 434, i: 80059, n: "Mini Tiny Snowball"},
	{u: 433, i: 80053, n: "Mini Snowball", p: {craft: true}},
	{u: 428, i: 79981, n: "Mini Large Snowball", p: {craft: true}}
],
PvP: [
	{u: 228, i: 63872, n: "Mini Llama", p: {league: 10}},
	{u: 322, i: 69645, n: "Mini Fancy Llama", p: {craft: true}},
	{u: 321, i: 69649, n: "Mini Elegant Llama", p: {craft: true}},
	{u: 323, i: 69650, n: "Mini Lavish Llama", p: {craft: true}},
	{u: 362, i: 73673, n: "Mini Nika", p: {pvp: true}},
	{u: 366, i: 74464, n: "Mini Grymm", p: {pvp: true}},
	{u: 388, i: 77754, n: "Mini Tybalt", p: {pvp: true}},
	{u: 432, i: 80033, n: "Mini Black Llama", p: {league: 10}},
	{u: 429, i: 80052, n: "Mini Fancy Black Llama", p: {craft: true}},
	{u: 431, i: 79962, n: "Mini Elegant Black Llama", p: {craft: true}},
	{u: 427, i: 80013, n: "Mini Lavish Black Llama", p: {craft: true}},
	{u: 450, i: 80804, n: "Mini Emperor Llama", p: {league: 10}},
	{u: 449, i: 80833, n: "Mini Fancy Emperor Llama", p: {craft: true}},
	{u: 453, i: 80738, n: "Mini Elegant Emperor Llama", p: {craft: true}},
	{u: 451, i: 80709, n: "Mini Lavish Emperor Llama", p: {craft: true}},
	{u: 474, i: 81283, n: "Mini Princess Llama", p: {league: 10}},
	{u: 471, i: 81513, n: "Mini Fancy Princess Llama", p: {craft: true}},
	{u: 473, i: 81421, n: "Mini Elegant Princess Llama", p: {craft: true}},
	{u: 472, i: 81507, n: "Mini Lavish Princess Llama", p: {craft: true}},
	{u: 476, i: 81559, n: "Mini Bronze Llama", p: {pvp: true}},
	{u: 479, i: 81535, n: "Mini Fancy Bronze Llama", p: {craft: true}},
	{u: 483, i: 81551, n: "Mini Elegant Bronze Llama", p: {craft: true}},
	{u: 485, i: 81576, n: "Mini Lavish Bronze Llama", p: {craft: true}},
	{u: 478, i: 81532, n: "Mini Silver Llama", p: {pvp: true}},
	{u: 477, i: 81555, n: "Mini Fancy Silver Llama", p: {craft: true}},
	{u: 487, i: 81531, n: "Mini Elegant Silver Llama", p: {craft: true}},
	{u: 486, i: 81587, n: "Mini Gold Llama", p: {pvp: true}},
	{u: 480, i: 81539, n: "Mini Fancy Gold Llama", p: {craft: true}},
],
Raid: [
	{u: 371, i: 77370, n: "Mini Red Guardian", p: {magnetite: 300}},
	{u: 376, i: 77457, n: "Mini Green Guardian", p: {magnetite: 300}},
	{u: 373, i: 77403, n: "Mini Blue Guardian", p: {magnetite: 300}},
	{u: 368, i: 77334, n: "Mini Vale Guardian", p: {magnetite: 300}},
	{u: 372, i: 77296, n: "Mini Gorseval the Multifarious", p: {magnetite: 300}},
	{u: 377, i: 77345, n: "Mini Knuckles", p: {magnetite: 300}},
	{u: 375, i: 77385, n: "Mini Kernan", p: {magnetite: 300}},
	{u: 370, i: 77311, n: "Mini Karde", p: {magnetite: 300}},
	{u: 390, i: 77848, n: "Mini Slubling", p: {magnetite: 300}},
	{u: 389, i: 77870, n: "Mini Slothasor", p: {magnetite: 300}},
	{u: 393, i: 78003, n: "Mini Berg", p: {magnetite: 250}},
	{u: 394, i: 77859, n: "Mini Zane", p: {magnetite: 250}},
	{u: 392, i: 77820, n: "Mini Narella", p: {magnetite: 250}},
	{u: 391, i: 77911, n: "Mini Matthias Abomination", p: {magnetite: 300}},
	{u: 401, i: 78815, n: "Mini Xera", p: {magnetite: 300}},
	{u: 402, i: 78828, n: "Mini McLeod the Silent", p: {magnetite: 300}},
	{u: 403, i: 78890, n: "Mini Keep Construct", p: {magnetite: 300}},
	{u: 436, i: 80327, n: "Mini Ragged White Mantle Figurehead", p: {magnetite: 300}},
	{u: 440, i: 80545, n: "Mini White Mantle Figurehead", p: {magnetite: 300}},
	{u: 441, i: 80562, n: "Mini Cairn the Indomitable", p: {magnetite: 300}},
	{u: 438, i: 80224, n: "Mini Mursaat Overseer", p: {magnetite: 300}},
	{u: 442, i: 80218, n: "Mini Samarog", p: {magnetite: 300}}
],
Zone: [
	{u: 406, i: 79227, n: "Mini Ghostly Justiciar Hablion", p: {magic: 2000}},
	{u: 407, i: 79229, n: "Mini Jade Construct", p: {magic: 3750}},
	{u: 408, i: 79139, n: "Mini Bloodstone Elemental", p: {magic: 2500}},
	{u: 410, i: 79411, n: "Mini Rolling Devil", p: {karma: 105000}},
	{u: 411, i: 79490, n: "Mini Captain Grumby", p: {karma: 105000}},
	{u: 412, i: 79585, n: "Mini Holographic Taimi", p: {magic: 2500}},
	{u: 413, i: 79433, n: "Mini Pirate Captain Huuhes", p: {karma: 105000}},
	{u: 414, i: 79493, n: "Mini Lava Elemental", p: {karma: 105000}},
	{u: 415, i: 79439, n: "Mini Vine-Touched Destroyer Crab", p: {karma: 105000}},
	{u: 421, i: 79821, n: "Mini Chicken", p: {karma: 105000}},
	{u: 422, i: 79877, n: "Mini Ice Beast", p: {karma: 105000}},
	{u: 423, i: 79783, n: "Mini Arctic Quaggan", p: {karma: 105000}},
	{u: 425, i: 79904, n: "Mini Icebrood Ogre", p: {karma: 105000}},
	{u: 426, i: 79774, n: "Mini Owl Griffon Hatchling", p: {karma: 105000}},
	{u: 437, i: 80584, n: "Mini Ghostly Cat", p: {karma: 105000}},
	{u: 439, i: 80528, n: "Mini Fire Tornado", p: {karma: 105000}},
	{u: 443, i: 80492, n: "Mini White Mantle Battle Mage", p: {karma: 105000}},
	{u: 445, i: 80148, n: "Mini Lady Valette Wi", p: {karma: 105000}},
	{u: 446, i: 80203, n: "Mini Captive Canach", p: {karma: 105000}},
	{u: 448, i: 80368, n: "Mini Convalescent Logan", p: {karma: 105000}},
	{u: 467, i: 81009, n: "Mini Dragon's Watch Rox", p: {map_dm: 25}},
	{u: 469, i: 81188, n: "Mini Lone Wolf Braham", p: {map_dm: 25}},
	{u: 462, i: 81116, n: "Mini Dragon's Watch Kasmeer", p: {map_dm: 25}},
	{u: 468, i: 81018, n: "Mini Dragon's Watch Marjory", p: {map_dm: 25}},
	{u: 465, i: 81104, n: "Mini Dragon's Watch Taimi", p: {map_dm: 25}},
	{u: 460, i: 81112, n: "Mini Smogscale", p: {karma: 105000}},
	{u: 461, i: 81037, n: "Mini Hound of Balthazar", p: {karma: 105000}},
	{u: 463, i: 81166, n: "Mini Nature Spirit", p: {karma: 105000}},
	{u: 464, i: 81077, n: "Mini G.O.X. 2.1.23", p: {karma: 105000}},
	{u: 466, i: 81151, n: "Mini M.O.X.", p: {karma: 245000}},
	{u: 488, i: 81801, n: "Mini Dagonet", p: {karma: 105000}},
	{u: 489, i: 81850, n: "Mini Anise", p: {karma: 105000}},
	{u: 490, i: 82012, n: "Mini Guardian of Secrets", p: {karma: 105000}},
	{u: 491, i: 82051, n: "Mini Livia", p: {magic: 5000}},
	{u: 495, i: 81893, n: "Mini Ley-Line Scavenger", p: {karma: 105000}},
	{u: 496, i: 81667, n: "Mini Queen Mahtab", p: {karma: 105000}},
],
Gem: [
	{u: 107, i: 36317, n: "Mini Spooky Ghost", p: {gem: 166}},
	{u: 110, i: 36321, n: "Mini Spooky Skeleton", p: {gem: 166}},
	{u: 109, i: 36319, n: "Mini Spooky Spider", p: {gem: 166}},
	{u: 111, i: 36323, n: "Chainsaw the Skeleton", p: {gem: 500}},
	{u: 123, i: 38046, n: "Mini Festive Golem", p: {gem: 100}},
	{u: 120, i: 38049, n: "Mini Infinirarium"},
	{u: 133, i: 41908, n: "Mini Super Spider", p: {gem: 166}},
	{u: 134, i: 41909, n: "Mini Super Bee Dog", p: {gem: 166}},
	{u: 135, i: 41910, n: "Mini Super Monkey", p: {gem: 166}},
	{u: 457, i: 80878, n: "Mini Super Storm Wizard", p: {gem: 500}},
	{u: 185, i: 46494, n: "Mini Super Banana", p: {gem: 166}},
	{u: 186, i: 46495, n: "Mini Super Raccoon", p: {gem: 166}},
	{u: 187, i: 46496, n: "Mini Super Yeti", p: {gem: 166}},
	{u: 188, i: 46497, n: "Mini Super Assassin", p: {gem: 500}},
	{u: 139, i: 42579, n: "Mini Hippo Calf", p: {gem: 400}},
	{u: 143, i: 42591, n: "Mini White Kitten", p: {gem: 400}},
	{u: 154, i: 42593, n: "Mini Lion Cub", p: {gem: 400}},
	{u: 148, i: 42592, n: "Mini Black Bear Cub", p: {gem: 400}},
	{u: 140, i: 42577, n: "Mini Moa Chick", p: {gem: 400}},
	{u: 159, i: 43427, n: "Mini Holographic Corrupted Wolf", p: {gem: 166}},
	{u: 158, i: 43426, n: "Mini Holographic Axe-Wielding Destroyer", p: {gem: 166}},
	{u: 157, i: 43425, n: "Mini Holographic Branded Minotaur", p: {gem: 166}},
	{u: 161, i: 43429, n: "Mini Holographic Risen Knight"},
	{u: 160, i: 43428, n: "Mini Holographic Colossus", p: {gem: 500}},
	{u: 164, i: 43921, n: "Mini Kookoochoo the Incredulous", p: {gem: 166}},
	{u: 165, i: 43922, n: "Mini Peggellegg the Pirate", p: {gem: 166}},
	{u: 166, i: 43923, n: "Mini Poowulpi the Persnicketous", p: {gem: 166}},
	{u: 181, i: 45011, n: "Mini Mr. Sparkles", p: {gem: 0}},
	{u: 189, i: 47841, n: "Mini Risen Thrall", p: {gem: 166}},
	{u: 190, i: 47842, n: "Mini Risen Brute", p: {gem: 166}},
	{u: 191, i: 47843, n: "Mini Risen Plague Carrier", p: {gem: 166}},
	{u: 192, i: 47844, n: "Mini Risen Abomination", p: {gem: 500}},
	{u: 197, i: 48753, n: "Mini Quaggan Ghost Trick-or-Treater", p: {gem: 166}},
	{u: 198, i: 48754, n: "Mini Assassin Trick-or-Treater", p: {gem: 166}},
	{u: 199, i: 48755, n: "Mini Aviator Trick-or-Treater", p: {gem: 166}},
	{u: 209, i: 49291, n: "Mini Fawn", p: {gem: 166}},
	{u: 210, i: 49292, n: "Mini Arctic Fox Kit", p: {gem: 166}},
	{u: 211, i: 49293, n: "Mini Puppy", p: {gem: 166}},
	{u: 212, i: 49294, n: "Mini Dolyak Calf", p: {gem: 500}},
	{u: 216, i: 49869, n: "Mini Amber Great Jungle Wurm", p: {gem: 100}},
	{u: 215, i: 49868, n: "Mini Crimson Great Jungle Wurm", p: {gem: 100}},
	{u: 218, i: 49870, n: "Mini Cobalt Great Jungle Wurm", p: {gem: 100}},
	{u: 225, i: 42953, n: "Mini Aetherblade Admiral", p: {gem: 166}},
	{u: 220, i: 42954, n: "Mini Toxic Warlock", p: {gem: 166}},
	{u: 224, i: 42955, n: "Mini Molten Berserker", p: {gem: 166}},
	{u: 226, i: 42956, n: "Mini Armored Scarlet Briar", p: {gem: 500}},
	{u: 237, i: 42959, n: "Miniature Hawk", p: {gem: 166}},
	{u: 239, i: 42958, n: "Miniature Raven", p: {gem: 166}},
	{u: 238, i: 42957, n: "Miniature Snow Owl", p: {gem: 166}},
	{u: 147, i: 42581, n: "Mini Arctodus Cub", p: {gem: 400}},
	{u: 144, i: 42583, n: "Mini Orange Kitten", p: {gem: 400}},
	{u: 149, i: 42582, n: "Mini Polar Bear Cub", p: {gem: 400}},
	{u: 141, i: 42578, n: "Mini Piglet", p: {gem: 400}},
	{u: 151, i: 42584, n: "Mini Jaguar Cub", p: {gem: 400}},
	{u: 182, i: 45044, n: "Mini Frostbite", p: {gem: 400}},
	{u: 293, i: 66164, n: "Mini Chickenado", p: {gem: 500}},
	{u: 294, i: 42960, n: "Mini Scruffy", p: {gem: 500}},
	{u: 297, i: 42951, n: "Mini Mordrem Leyleecher", p: {gem: 500}},
	{u: 296, i: 67025, n: "Mini Chieftain Utahein", p: {gem: 350}},
	{u: 295, i: 67022, n: "Mini Svanir", p: {gem: 350}},
	{u: 208, i: 67023, n: "Mini Candy Corn Skritt", p: {gem: 166}},
	{u: 229, i: 67024, n: "Miniature Glowing Bat", p: {gem: 166}},
	{u: 299, i: 67026, n: "Mini Mad King Head", p: {gem: 166}},
	{u: 308, i: 67837, n: "Miniature Belinda Delaqua", p: {gem: 350}},
	{u: 304, i: 67840, n: "Mini Drooburt's Ghost", p: {gem: 350}},
	{u: 305, i: 67839, n: "Mini Pact Airship", p: {gem: 350}},
	{u: 306, i: 67838, n: "Mini Sand Giant", p: {gem: 350}},
	{u: 309, i: 68432, n: "Mini Festive Lord Faren", p: {gem: 500}},
	{u: 307, i: 67841, n: "Mini Avatar of the Tree", p: {gem: 350}},
	{u: 315, i: 68570, n: "Mini Rox", p: {gem: 350}},
	{u: 313, i: 68572, n: "Mini Braham Eirsson", p: {gem: 350}},
	{u: 317, i: 68610, n: "Miniature Ram", p: {gem: 350}},
	{u: 318, i: 68683, n: "Mini Golden Pig", p: {gem: 350}},
	{u: 314, i: 68569, n: "Mini Red Panda", p: {gem: 350}},
	{u: 320, i: 69621, n: "Miniature Moose", p: {gem: 350}},
	{u: 327, i: 69667, n: "Mini Bear Cub", p: {gem: 400}},
	{u: 328, i: 69658, n: "Mini Blue Drake Hatchling", p: {gem: 400}},
	{u: 324, i: 69656, n: "Mini Fox Kit", p: {gem: 400}},
	{u: 326, i: 69672, n: "Mini Snow Cougar Cub", p: {gem: 400}},
	{u: 329, i: 69690, n: "Mini Beetle", p: {gem: 500}},
	{u: 330, i: 69790, n: "Mini Rock", p: {gem: 350}},
	{u: 342, i: 73815, n: "Mini Ghoul Legs", p: {gem: 300}},
	{u: 336, i: 70300, n: "Mini Bonebreaker", p: {gem: 350}},
	{u: 335, i: 70231, n: "Mini Tiger", p: {gem: 350}},
	{u: 332, i: 70191, n: "Mini Wyvern", p: {gem: 350}},
	{u: 333, i: 70234, n: "Mini Angry Chest", p: {gem: 400}},
	{u: 369, i: 77389, n: "Mini Red Spark", p: {gem: 0}},
	{u: 378, i: 77339, n: "Mini Sabetha", p: {gem: 350}},
	{u: 383, i: 77621, n: "Mini Angry Wintersday Gift", p: {gem: 400}},
	{u: 380, i: 77581, n: "Mini Snow Flurry Dragon", p: {gem: 500}},
	{u: 386, i: 77574, n: "Mini Tizlak", p: {gem: 200}},
	{u: 384, i: 77649, n: "Mini Arrowhead", p: {gem: 400}},
	{u: 387, i: 77675, n: "Mini Zintl Cavalier", p: {gem: 350}},
	{u: 405, i: 79048, n: "Mini Garm", p: {gem: 350}},
	{u: 409, i: 79361, n: "Mini Jungle Lord Faren", p: {gem: 350}},
	{u: 419, i: 79651, n: "Mini Feline Familiar", p: {gem: 350}},
	{u: 420, i: 79693, n: "Mini Bloodstone Rock", p: {gem: 350}},
	{u: 331, i: 70112, n: "Mini Mushroom Stomper", p: {gem: 0}},
	{u: 430, i: 80044, n: "Mini Festive Aurene", p: {gem: 400}},
	{u: 435, i: 80072, n: "Mini Celestial Rooster", p: {gem: 0}},
	{u: 444, i: 80371, n: "Mini Demmi Beetlestone", p: {gem: 400}},
	{u: 454, i: 80860, n: "Mini Krytan Floppy Fish", p: {gem: 350}},
	{u: 455, i: 80883, n: "Mini Super Goat", p: {gem: 200}},
	{u: 456, i: 80903, n: "Mini Super Frog", p: {gem: 200}},
	{u: 459, i: 80884, n: "Mini Super Snake", p: {gem: 200}},
	{u: 458, i: 80915, n: "Mini Super Queen Bee Dog", p: {gem: 600}},
	{u: 470, i: 81242, n: "Mini Outlaw Puppy", p: {gem: 400}},
	{u: 475, i: 81565, n: "Mini Plush Aurene", p: {gem: 400}},
	{u: 493, i: 81901, n: "Mini Dwayna's Messenger", p: {gem: 0}}
]
};
