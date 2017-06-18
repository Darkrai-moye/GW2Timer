/*
 * This file is used by http://gw2timer.com/gem
 * Catalog of gem store items.
 */

/*
 * Category translations.
 */
var GW2T_GEM_HEADERS = {
	Outfit: {name_en: "Outfits", name_de: "Kleidungssets", name_es: "Atuendos", name_fr: "Tenues", name_zh: "服装"},
	Back: {name_en: "Backpacks", name_de: "Rücken", name_es: "Espalda", name_fr: "Pièce de dos", name_zh: "背部物品皮肤"},
	Head: {name_en: "Head", name_de: "Kopfbedeckung", name_es: "Cabeza", name_fr: "Couvre-chef", name_zh: "帽甲"},
	Shoulder: {name_en: "Shoulders", name_de: "Schultern", name_es: "Hombros", name_fr: "Epaulières", name_zh: "护肩"},
	Gloves: {name_en: "Gloves", name_de: "Handschuhe", name_es: "Guantes", name_fr: "Gants", name_zh: "手套"},
	Boots: {name_en: "Boots", name_de: "Stiefel", name_es: "Botas", name_fr: "Bottes", name_zh: "长靴"},
	Armor: {name_en: "Armor Skin Sets", name_de: "Rüstungs-Skins", name_es: "Diseños de armaduras", name_fr: "Apparences de pièces d'armure", name_zh: "护甲皮肤"},
	Weapon: {name_en: "Weapon Skins", name_de: "Waffen-Skins", name_es: "Diseños de armas", name_fr: "Apparences d'armes", name_zh: "武器皮肤"},
	BlackLionWeapon: {name_en: "Black Lion Weapon Skins", name_de: "Schwarzlöwen Waffen-Skins", name_es: "Diseños de armas del León Negro", name_fr: "Apparences d'armes du Lion noir", name_zh: "黑狮武器皮肤"},
	Package: {name_en: "Packages", name_de: "Paket", name_es: "Paquete", name_fr: "Lot", name_zh: "组合包"},
	Dye: {name_en: "Dye Kits", name_de: "Flammen", name_es: "Kit de tintes", name_fr: "Kit de teintures", name_zh: "染料包"},
	Consumable: {name_en: "Consumables", name_de: "Verbrauchsgegenstand", name_es: "Consumible", name_fr: "Consommable", name_zh: "消耗"},
	Pass: {name_en: "Passes", name_de: "Passierschein", name_es: "Pase", name_fr: "Laissez-passer", name_zh: "通行证"},
	Gathering: {name_en: "Gathering Tools", name_de: "Sammelwerkzeug", name_es: "Herramienta de recolección", name_fr: "Outil de récolte", name_zh: "采集工具"},
	Mini: {name_en: "Miniature Pets", name_de: "Miniatur", name_es: "Miniatura", name_fr: "Miniature", name_zh: "迷你"},
	Toy: {name_en: "Toys and Stations", name_de: "Spielzeuge und Stationen", name_es: "Juguetes y Talleres", name_fr: "Jouets et Ateliers", name_zh: "玩具和造站"},
	Music: {name_en: "Musical Instruments", name_de: "Musikinstrumente", name_es: "Instrumentos musicales", name_fr: "Instruments de musique", name_zh: "乐器"},
	Glider: {name_en: "Gliders", name_de: "Gleitschirm", name_es: "Planeador", name_fr: "Deltaplane", name_zh: "滑翔翼"},
	Carrier: {name_en: "Mail Carriers", name_de: "Briefboten", name_es: "Carteros", name_fr: "Messagers", name_zh: "邮差"},
	Finisher: {name_en: "Finishers", name_de: "Todesstöße", name_es: "Remates", name_fr: "Coups de grâce", name_zh: "终结者"},
	Node: {name_en: "Gathering Nodes", name_de: "Knoten", name_es: "Nodos", name_fr: "Zones", name_zh: "节点"},
	Upgrade: {name_en: "Account Upgrades", name_de: "Account Upgrades", name_es: "Mejoras cuenta", name_fr: "Améliorations compte", name_zh: "升级帐户"}
};

/*
 * Gem store items that are available for sale will be considered "unlocked".
 * i: Item ID associated with that item
 * n: Name of item
 * p: Payment type to acquire the item, negative values are considered unavailable
 */
var GW2T_GEM_DATA = {
Outfit: [
	{i: 65196, n: "Mad King's Outfit", p: {gem: -700}},
	{i: 65201, n: "Witch's Outfit", p: {gem: -700}},
	{i: 65195, n: "Bloody Prince's Outfit", p: {gem: -700}},
	{i: 65194, n: "Executioner's Outfit", p: {gem: -700}},
	{i: 67037, n: "Raiment of the Lich", p: {gem: -700}},
	{i: 70385, n: "Lunatic Guard Outfit", p: {gem: -700}},
	{i: 65198, n: "Fancy Winter Outfit", p: {gem: -700}},
	{i: 77595, n: "Winter Solstice Outfit", p: {gem: -700}},
	{i: 64754, n: "Pirate Captain's Outfit", p: {gem: -700}},
	{i: 64756, n: "Cook's Outfit", p: {gem: 700}},
	{i: 66279, n: "Ancestral Outfit", p: {gem: -700}},
	{i: 66658, n: "Shadow Assassin Outfit", p: {gem: -700}},
	{i: 67040, n: "Ceremonial Plated Outfit", p: {gem: 700}},
	{i: 67398, n: "Noble Count Outfit", p: {gem: -700}},
	{i: 67868, n: "Arctic Explorer Outfit", p: {gem: -700}},
	{i: 67990, n: "Jungle Explorer Outfit", p: {gem: -700}},
	{i: 68577, n: "Arcane Outfit", p: {gem: -700}},
	{i: 68654, n: "Imperial Outfit", p: {gem: -700}},
	{i: 68684, n: "Crystal Nomad Outfit", p: {gem: 700}},
	{i: 69607, n: "Balthazar's Regalia Outfit", p: {gem: 700}},
	{i: 69623, n: "Exemplar Attire Outfit", p: {gem: 700}},
	{i: 69662, n: "Daydreamer's Finery Outfit", p: {gem: 700}},
	{i: 69753, n: "Mad Scientist Outfit", p: {gem: -700}},
	{i: 69806, n: "Dwayna's Regalia Outfit", p: {gem: 700}},
	{i: 69863, n: "Monk's Outfit", p: {gem: 700}},
	{i: 70071, n: "Harbinger of Mordremoth Outfit", p: {gem: 700}},
	{i: 70253, n: "Wedding Attire Outfit", p: {gem: 1000}},
	{i: 75129, n: "Lyssa's Regalia", p: {gem: 700}},
	{i: 76905, n: "Crystal Arbiter Outfit", p: {gem: 700}},
	{i: 77282, n: "Bandit Sniper's Outfit", p: {gem: 700}},
	{i: 77483, n: "Slayer's Outfit", p: {gem: -700}},
	{i: 77676, n: "Nature's Oath Outfit", p: {gem: -700}},
	{i: 77808, n: "Crystal Savant Outfit", p: {gem: 700}},
	{i: 78011, n: "White Mantle Outfit", p: {gem: 700}},
	{i: 78008, n: "Gwen's Attire", p: {gem: -700}},
	{i: 78010, n: "Ironclad Outfit", p: {gem: -700}},
	{i: 78574, n: "Sentinel Outfit", p: {gem: 700}},
	{i: 79220, n: "Verdant Executor Outfit", p: {gem: 700}},
	{i: 79531, n: "Mursaat Robes", p: {gem: 700}},
	{i: 79380, n: "Taimi Outfit", p: {gem: 700}},
	{i: 79671, n: "Ghostly Outfit", p: {gem: -700}},
	{i: 79705, n: "Marjory's Shrouded Outfit", p: {gem: 700}},
	{i: 79703, n: "Braham's Wolfblood Outfit", p: {gem: 700}},
	{i: 80049, n: "Ice Encasement Outfit", p: {gem: -700}},
	{i: 80077, n: "Rox's Pathfinder Outfit", p: {gem: 700}},
	{i: 80906, n: "Spring Promenade Outfit", p: {gem: -700}},
	{i: 80973, n: "Kasmeer's Regal Outfit", p: {gem: 700}},
	{i: 81223, n: "Outlaw Outfit", p: {gem: 700}}
],
Glider: [
	{i: 70009, n: "White Feather Wings Glider", p: {gem: -700}},
	{i: 70048, n: "Black Feather Wings Glider", p: {gem: -700}},
	{i: 72252, n: "Crystal Arbiter Glider", p: {gem: 500}},
	{i: 74684, n: "Bat Wings Glider", p: {gem: -700}},
	{i: 76236, n: "Exalted Glider", p: {gem: -400}},
	{i: 77269, n: "Golden Feather Wings Glider", p: {gem: -700}},
	{i: 77291, n: "Soul River Glider", p: {gem: -500}},
	{i: 77528, n: "Snowflake Glider", p: {gem: -500}},
	{i: 77646, n: "Ugly Wool Glider", p: {gem: 0}},
	{i: 77678, n: "Hawk Wings Glider", p: {gem: -700}},
	{i: 77738, n: "Phoenix Kite Glider", p: {gem: 400}},
	{i: 77804, n: "Wings of Love Glider", p: {gem: -400}},
	{i: 77811, n: "Electromagnetic-Descender Glider", p: {gem: -400}},
	{i: 77821, n: "Classical Glider", p: {gem: -400}},
	{i: 78006, n: "Ironclad Glider", p: {gem: -500}},
	{i: 78007, n: "Bubble Glider", p: {gem: 500}},
	{i: 78009, n: "Super Adventure Glider", p: {gem: -400}},
	{i: 78025, n: "Phoenix Glider", p: {gem: -500}},
	{i: 78727, n: "Macaw Wings Glider", p: {gem: -700}},
	{i: 78768, n: "Moth Wings Glider", p: {gem: 700}},
	{i: 78790, n: "Floral Glider", p: {gem: 400}},
	{i: 79010, n: "Glide-r-Tron", p: {gem: -500}},
	{i: 79016, n: "White Mantle Glider", p: {gem: 400}},
	{i: 79084, n: "Shining Blade Glider", p: {gem: -700}},
	{i: 79595, n: "Mursaat Wings Glider", p: {gem: 700}},
	{i: 79631, n: "Spectral Glider", p: {gem: -500}},
	{i: 79663, n: "Bloodstone Glider", p: {gem: 500}},
	{i: 79660, n: "Grasping Phantom Glider", p: {gem: 0}},
	{i: 79704, n: "Crystalline Dragon Wings Glider", p: {gem: -700}},
	{i: 80018, n: "Infinirarium Glider", p: {gem: 0}},
	{i: 80066, n: "Celestial Rooster Glider", p: {gem: 500}},
	{i: 80484, n: "Necrotic Glider", p: {gem: 500}},
	{i: 80795, n: "Shattered Bloodstone Glider", p: {gem: -400}},
	{i: 80725, n: "Raven's Spirit Glider", p: {gem: -500}},
	{i: 80919, n: "Super Cloud Glider", p: {gem: -500}},
	{i: 80958, n: "Super Adventure Holo-Copter", p: {gem: -700}},
	{i: 80985, n: "Vine-Touched Destroyer Glider", p: {gem: 700}},
	{i: 81291, n: "Magic Carpet Glider", p: {gem: 400}}
],
Back: [
	{i: 39131, n: "Plush Quaggan Backpack Cover", p: {gem: 300}},
	{i: 39512, n: "Plush Charr Backpack Cover", p: {gem: 300}},
	{i: 39516, n: "Covert Charr Backpack Cover", p: {gem: 300}},
	{i: 39519, n: "Warrior Quaggan Backpack Cover", p: {gem: -300}},
	{i: 44735, n: "Plush Moto Backpack Cover", p: {gem: -300}},
	{i: 68612, n: "Plush Ram Backpack", p: {gem: -300}},
	{i: 67405, n: "Replica Job-o-Tron Backpack", p: {gem: 500}},
	{i: 78733, n: "Sloth Backpack", p: {gem: 500}},
	{i: 79702, n: "Plush Aurene Backpack Cover", p: {gem: 400}},
	{i: 80019, n: "Scruffy Backpack", p: {gem: 400}},
	{i: 77494, n: "Wintersday Wreath Backpack", p: {gem: -500}},
	{i: 44888, n: "Mist Herald Back Item Skin", p: {gem: -500}},
	{i: 42663, n: "Rox's Quiver Backpack Cover", p: {gem: -600}},
	{i: 74219, n: "Dread Quiver Backpack", p: {gem: 350}},
	{i: 79771, n: "Fire Quiver Backpack", p: {gem: 400}},
	{i: 68686, n: "Black Feather Wings Backpack", p: {gem: -700}},
	{i: 69882, n: "White Feather Wings Backpack", p: {gem: -700}},
	{i: 69737, n: "Daydreamer's Wings Backpack", p: {gem: 500}},
	{i: 70095, n: "Butterfly Wings Backpack", p: {gem: 500}},
	{i: 70277, n: "Glittering Wings Backpack", p: {gem: 500}},
	{i: 73939, n: "Bat Wings Backpack", p: {gem: -700}},
	{i: 77270, n: "Golden Feather Wings Backpack", p: {gem: -700}},
	{i: 77677, n: "Hawk Wings Backpack Skin", p: {gem: -700}},
	{i: 78732, n: "Macaw Wings Backpack", p: {gem: -700}},
	{i: 78745, n: "Moth Wings Backpack", p: {gem: 700}},
	{i: 79288, n: "Shining Blade Backpack", p: {gem: -700}},
	{i: 79523, n: "Mursaat Wings Backpack", p: {gem: 700}},
	{i: 79707, n: "Crystalline Dragon Wings Backpack", p: {gem: -700}},
	{i: 80887, n: "Super Adventure Holo-Copter Backpack", p: {gem: -700}},
	{i: 80984, n: "Vine-Touched Destroyer Wings", p: {gem: 700}},
	{i: 81263, n: "Mercenary Backpack", p: {gem: 400}}
],
Head: [
	{i: 64752, n: "Celebration Hat", p: {gem: 0}},
	{i: 65197, n: "Devil Horns", p: {gem: -200}},
	{i: 65200, n: "Wintersday Earmuffs", p: {gem: -25}},
	{i: 65202, n: "Festive Hat", p: {gem: -150}},
	{i: 64742, n: "Aviator Cap", p: {gem: -200}},
	{i: 64745, n: "Ringmaster's Hat", p: {gem: 200}},
	{i: 64749, n: "Sailor's Beanie", p: {gem: -200}},
	{i: 64750, n: "Top Hat", p: {gem: -200}},
	{i: 64757, n: "Wizard's Hat", p: {gem: -200}},
	{i: 79374, n: "Pirate Corsair Hat Skin", p: {gem: 300}},
	{i: 64740, n: "Aviator Sunglasses", p: {gem: -150}},
	{i: 64743, n: "Sport Sunglasses", p: {gem: -150}},
	{i: 64748, n: "Reading Glasses", p: {gem: -150}},
	{i: 64753, n: "Wide Rim Glasses", p: {gem: -150}},
	{i: 64747, n: "Inventor's Sunglasses", p: {gem: -150}},
	{i: 64738, n: "Bunny Ears", p: {gem: -200}},
	{i: 79619, n: "Furrocious Cat Ears", p: {gem: -400}},
	{i: 44607, n: "Mask of the Jubilee", p: {gem: 400}},
	{i: 44608, n: "Mask of the Queen", p: {gem: 400}},
	{i: 44609, n: "Mask of the Crown", p: {gem: -400}},
	{i: 47883, n: "Stag Helm Skin", p: {gem: -500}},
	{i: 68574, n: "Shadow of the Dragon Helmet Skin", p: {gem: -300}},
	{i: 63940, n: "Lawless Helmet Skin", p: {gem: -300}},
	{i: 47890, n: "Grenth Hood Skin", p: {gem: -500}},
	{i: 65203, n: "Phantom's Hood", p: {gem: -200}},
	{i: 48944, n: "Mask of the Wanderer Skin", p: {gem: -500}},
	{i: 49157, n: "Mask of the Silent Skin", p: {gem: -500}},
	{i: 50103, n: "Magnus's Eye Patch", p: {gem: -400}},
	{i: 63891, n: "Glowing Crimson Mask", p: {gem: -500}},
	{i: 67038, n: "Glowing Green Mask", p: {gem: -500}},
	{i: 67857, n: "Glint's Gaze Mask", p: {gem: -500}},
	{i: 64739, n: "Fuzzy Quaggan Hat", p: {gem: -200}},
	{i: 64744, n: "Fuzzy Panda Hat", p: {gem: -200}},
	{i: 64746, n: "Fuzzy Leopard Hat", p: {gem: -200}},
	{i: 64751, n: "Fuzzy Quaggan Hat with Bow", p: {gem: 200}},
	{i: 64755, n: "Fuzzy Bear Hat", p: {gem: 200}},
	{i: 64758, n: "Fuzzy Cat Hat", p: {gem: -200}},
	{i: 64759, n: "Fuzzy Hylek Hat", p: {gem: -200}},
	{i: 66309, n: "Wreath of Cooperation", p: {gem: -400}},
	{i: 79316, n: "Shattered Bloodstone Circlet", p: {gem: 400}},
	{i: 80026, n: "Ice Crown", p: {gem: -400}},
	{i: 68655, n: "Dragon Mask Skin", p: {gem: -300}},
	{i: 68656, n: "Lion Mask Skin", p: {gem: -300}},
	{i: 79014, n: "Xera's Mask", p: {gem: -400}},
	{i: 81212, n: "Sworn Zaishen Helm Skin", p: {gem: 0}}
],
Shoulder: [
	{i: 42962, n: "Lawless Shoulder Skin", p: {gem: -300}},
	{i: 48824, n: "Scarlet's Spaulders", p: {gem: -400}},
	{i: 49024, n: "Toxic Mantle Skin", p: {gem: -400}},
	{i: 68575, n: "Shadow of the Dragon Shoulder Skin", p: {gem: -300}},
	{i: 67887, n: "Shoulder Scarf", p: {gem: -400}},
	{i: 80082, n: "Braham's Wolfblood Pauldrons", p: {gem: -300}},
	{i: 81412, n: "Foefire Mantle", p: {gem: 500}}
],
Gloves: [
	{i: 43525, n: "Lawless Gloves Skin", p: {gem: -300}},
	{i: 48817, n: "Scarlet's Grasp", p: {gem: -400}},
	{i: 49031, n: "Toxic Gloves Skin", p: {gem: -400}},
	{i: 68576, n: "Shadow of the Dragon Gloves Skin", p: {gem: -300}},
	{i: 79391, n: "Pirate Hook Skin", p: {gem: 300}},
	{i: 78667, n: "Chaos Gloves Skin", p: {gem: 500}},
	{i: 81293, n: "Foefire Wraps", p: {gem: 500}}
],
Boots: [
	{i: 42966, n: "Lawless Boots Skin", p: {gem: -300}},
	{i: 79387, n: "Peg-Leg Boots Skin", p: {gem: 300}}
],
Armor: [
	{i: 20274, n: "Profane Light Armor Skin", p: {gem: -500}},
	{i: 20273, n: "Krytan Medium Armor Skin", p: {gem: -500}},
	{i: 20272, n: "Primeval Heavy Armor Skin", p: {gem: -500}},
	{i: 42870, n: "Aetherblade Light Armor Skin", p: {gem: -800}},
	{i: 42869, n: "Aetherblade Medium Armor Skin", p: {gem: -800}},
	{i: 42868, n: "Aetherblade Heavy Armor Skin", p: {gem: -800}},
	{i: 43018, n: "Zodiac Light Armor Skin", p: {gem: 800}},
	{i: 43017, n: "Zodiac Medium Armor Skin", p: {gem: 800}},
	{i: 43016, n: "Zodiac Heavy Armor Skin", p: {gem: 800}},
	{i: 43102, n: "Trickster's Light-Armor Skin", p: {gem: 800}},
	{i: 43101, n: "Viper's Medium-Armor Skin", p: {gem: 800}},
	{i: 43100, n: "Phalanx Heavy-Armor Skin", p: {gem: 800}},
	{i: 43159, n: "Phoenix Light Armor Skin", p: {gem: 800}},
	{i: 43158, n: "Magitech Medium Armor Skin", p: {gem: 800}},
	{i: 43157, n: "Braham's Heavy Armor Skin", p: {gem: 800}},
	{i: 43576, n: "Flamekissed Light Armor Skin", p: {gem: -800}},
	{i: 43575, n: "Flamewalker Medium Armor Skin", p: {gem: -800}},
	{i: 43574, n: "Flamewrath Heavy Armor Skin", p: {gem: -800}},
	{i: 63909, n: "Incarnate Light Armor Skin", p: {gem: -800}},
	{i: 63899, n: "Strider's Medium Armor Skin", p: {gem: -800}},
	{i: 63929, n: "Rampart Heavy Armor Skin", p: {gem: -800}}
],
Weapon: [
	{i: 8466, n: "Belinda's Greatsword Skin", p: {gem: -600}},
	{i: 20004, n: "Caithe's Bloom Dagger", p: {gem: -600}},
	{i: 42653, n: "Braham's Mace Skin", p: {gem: -600}},
	{i: 42656, n: "Braham's Shield Skin", p: {gem: -600}},
	{i: 42659, n: "Rox's Short Bow Skin", p: {gem: -600}},
	{i: 49015, n: "Marjory's Axe Skin", p: {gem: -600}},
	{i: 49018, n: "Marjory's Dagger Skin", p: {gem: -600}},
	{i: 49021, n: "Kasmeer's Staff Skin", p: {gem: -600}},
	{i: 68687, n: "Lord Faren's Rapier Skin", p: {gem: -500}},
	{i: 69664, n: "Elegant Fan Focus Skin", p: {gem: -600}},
	{i: 69752, n: "Chain-Whip Sword Skin", p: {gem: -600}},
	{i: 79089, n: "Lord Caudecus's Sword Skin", p: {gem: -600}},
	{i: 79179, n: "Lord Caudecus's Pistol Skin", p: {gem: -600}},
	{i: 79310, n: "Storm Bow", p: {gem: -600}},
	{i: 79315, n: "Emissary's Staff", p: {gem: -600}},
	{i: 79360, n: "Amethyst Aegis", p: {gem: -600}},
	{i: 79365, n: "Peacock Scepter Skin", p: {gem: -600}},
	{i: 79372, n: "Kurzick Dual Axe Skin", p: {gem: -600}},
	{i: 79386, n: "Dragon Kama Skin", p: {gem: -600}},
	{i: 79853, n: "Eir's Legacy Longbow", p: {gem: -600}},
	{i: 80861, n: "Shield of the Goddess", p: {gem: -600}},
	{i: 80981, n: "Hourglass Staff", p: {gem: -600}},
	{i: 81001, n: "Replica Mirror of Lyssa", p: {gem: -600}},
	{i: 81240, n: "Menzies's Agony", p: {gem: -600}}
],
BlackLionWeapon: [
	{i: 38089, n: "Winter's weapon skins#Gallery", p: {blticket: -2}},
	{i: 41760, n: "Fused weapon skins#Gallery", p: {blticket: -7}},
	{i: 42614, n: "Sclerite weapon skins#Gallery", p: {blticket: -3}},
	{i: 43376, n: "Dragon's Jade weapon skins#Gallery", p: {blticket: -5}},
	{i: 44010, n: "Aetherized weapon skins#Gallery", p: {blticket: -5}},
	{i: 44791, n: "Bloody Prince's Toybox#Gallery", p: {blticket: -2}},
	{i: 44839, n: "Zodiac weapon skins#Gallery", p: {blticket: -5}},
	{i: 44900, n: "Lovestruck weapon skins#Gallery", p: {blticket: -5}},
	{i: 48967, n: "Dreamthistle weapon skins#Gallery", p: {blticket: -3}},
	{i: 49323, n: "Tormented weapon skins#Gallery", p: {blticket: -5}},
	{i: 64003, n: "Ley Line weapon skins#Gallery", p: {blticket: -5}},
	{i: 66230, n: "Phoenix weapon skins#Gallery", p: {blticket: -5}},
	{i: 67028, n: "Chaos weapon skins#Gallery", p: {blticket: -5}},
	{i: 67046, n: "Tempest weapon skins#Gallery", p: {blticket: -5}},
	{i: 67844, n: "Wintersday weapon skins#Gallery", p: {blticket: -5}},
	{i: 68021, n: "Pact Fleet weapon skins#Gallery", p: {blticket: -5}},
	{i: 68579, n: "Mordrem weapon skins#Gallery", p: {blticket: -5}},
	{i: 68660, n: "Crimson Lion weapon skins#Gallery", p: {blticket: -5}},
	{i: 68743, n: "Shadow weapon skins#Gallery", p: {blticket: -3}},
	{i: 69653, n: "Balthazar's weapon skins#Gallery", p: {blticket: 5}},
	{i: 69744, n: "Daydreamer's weapon skins#Gallery", p: {blticket: -5}},
	{i: 69799, n: "Scientific weapon skins#Gallery", p: {blticket: -5}},
	{i: 70027, n: "Gallant weapon skins#Gallery", p: {blticket: -3}},
	{i: 70197, n: "Dwayna's weapon skins#Gallery", p: {blticket: -3}},
	{i: 71400, n: "Improvised weapon skins#Gallery", p: {blticket: 3}},
	{i: 72683, n: "Glittering weapon skins#Gallery", p: {blticket: 3}},
	{i: 77414, n: "Plasma weapon skins#Gallery", p: {blticket: 3}},
	{i: 77518, n: "Merciless weapon skins#Gallery", p: {blticket: 3}},
	{i: 77673, n: "Timekeeper weapon skins#Gallery", p: {blticket: 3}},
	{i: 77790, n: "Soaring weapon skins#Gallery", p: {blticket: -3}},
	{i: 77898, n: "Dominator weapon skins#Gallery", p: {blticket: -3}},
	{i: 78660, n: "Spectral weapon skins#Gallery", p: {blticket: 3}},
	{i: 78772, n: "Cavalier weapon skins#Gallery", p: {blticket: 3}},
	{i: 78924, n: "Privateer weapon skins#Gallery", p: {blticket: 1}},
	{i: 79261, n: "Embellished weapon skins#Gallery", p: {blticket: 3}},
	{i: 79389, n: "Bloodstone weapon skins#Gallery", p: {blticket: 3}},
	{i: 79655, n: "Gargoyle weapon skins#Gallery", p: {blticket: 3}},
	{i: 80041, n: "Frostforged weapon skins#Gallery", p: {blticket: 3}},
	{i: 80179, n: "Devoted weapon skins#Gallery", p: {blticket: 3}},
	{i: 80943, n: "Beastslayer weapon skins#Gallery", p: {blticket: 2}},
	{i: 81249, n: "Keepsake weapon skins#Gallery", p: {blticket: 1}}
],
Package: [
	//{i: "http://i.imgur.com/ODWMADq.png", n: "Braham's Bitterfrost Frontier Pack", p: {gem: 2000}},
	{i: 38034, n: "Wintersday Mystery Box", p: {gem: -100}},
	{i: 37190, n: "Consortium Chest", p: {gem: -250}, discount: [[1, 250], [5, 1100]]},
	{i: 42600, n: "Southsun Supply Crate", p: {gem: -150}, discount: [[1, 150], [10, 1200]]},
	{i: 42899, n: "Rich Dragon Coffer", p: {gem: -100}, discount: [[1, 100], [5, 400], [25, 2000]]},
	{i: 20764, n: "Recovery Package", p: {gem: -300}, discount: [[1, 300], [5, 1200]]},
	{i: 8468, n: "Zephyrite Rescue Pack", p: {gem: -1000}},
	{i: 68568, n: "Pact Fleet Survival Pack", p: {gem: -1600}},
	{i: 67359, n: "World vs. World Support Pack", p: {gem: -1895}},
	{i: 37204, n: "Tyrian Explorer's Knapsack", p: {gem: -1650}},
	{i: 43077, n: "Black Lion Introductory Package", p: {gem: 1600}},
	{i: 68013, n: "Salvager's Supplies", p: {gem: -2720}},
	{i: 79698, n: "Customer Appreciation Package", p: {gem: -125}},
	{i: 20761, n: "Air Rider Package", p: {gem: -650}},
	{i: 79706, n: "Swashbuckler's Package", p: {gem: -900}}
],
Dye: [
	{i: 19998, n: "Dye Pack", p: {gem: 200}, discount: [[1, 200], [5, 800], [25, 4000]]},
	{i: 43934, n: "Zephyrite Color Swatch: Blue", p: {gem: 250}},
	{i: 36177, n: "Zephyrite Color Swatch: Green", p: {gem: 250}},
	{i: 36178, n: "Zephyrite Color Swatch: Red", p: {gem: 250}},
	{i: 36175, n: "Zephyrite Color Swatch: Yellow", p: {gem: 250}},
	{i: 41744, n: "Flame Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 41745, n: "Frost Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 43935, n: "Deathly Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 48954, n: "Toxic Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 47900, n: "Metallurgic Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 64254, n: "Lion's Arch Survivors Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 43078, n: "Lion's Arch Commemorative Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 67291, n: "Taimi's Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 68005, n: "Glint's Winter Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 68653, n: "Crimson Lion Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 68786, n: "Shadow Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 69934, n: "Lion's Arch Rebuild Dye Kit", p: {gem: -125},  discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 70367, n: "Mad King Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 77470, n: "Winter Chimes Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 78734, n: "Blue Shift Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 79354, n: "Bloodstone Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 79695, n: "Vibrant Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 80069, n: "Solar and Lunar Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]},
	{i: 80974, n: "Primordus Dye Kit", p: {gem: -125}, discount: [[1, 125], [5, 500], [25, 2500]]}
],
Consumable: [
	{i: 44602, n: "Copper-Fed Salvage-o-Matic", p: {gem: 800}},
	{i: 67027, n: "Silver-Fed Salvage-o-Matic", p: {gem: -500}},
	{i: 19986, n: "Black Lion Salvage Kit", p: {gem: 300}},
	{i: 20349, n: "Upgrade Extractor", p: {gem: 250}, discount: [[1, 250], [5, 1100], [25, 5000]]},
	{i: 49867, n: "Identity Repair Kit", p: {gem: 1000}},
	{i: 35989, n: "Name Change Contract", p: {gem: 800}},
	{i: 35991, n: "Total Makeover Kit", p: {gem: 350}, discount: [[1, 350], [5, 1400]]},
	{i: 35987, n: "Self-Style Hair Kit", p: {gem: 250}, discount: [[1, 250], [5, 1000]]},
	{i: 64736, n: "Transmutation Charge", p: {gem: 150}, discount: [[5, 150], [10, 270], [25, 600]]},
	{i: 19980, n: "Black Lion Chest Key", p: {gem: 125}, discount: [[1, 125], [5, 450], [25, 2100]]},
	{i: 19992, n: "Instant Repair Canister", p: {gem: 35}, discount: [[1, 35], [5, 150]]},
	{i: 19996, n: "Revive Orb", p: {gem: 250}, discount: [[1, 250], [5, 900]]},
	{i: 19983, n: "Mystic Forge Stone", p: {gem: 250}, discount: [[5, 250], [10, 450]]},
	{i: 20760, n: "Tradesman's Package", p: {gem: 100}, discount: [[1, 100], [10, 800]]},
	{i: 20017, n: "Trading Post Express", p: {gem: 50}, discount: [[1, 50], [5, 200]]},
	{i: 20018, n: "Merchant Express", p: {gem: 35}, discount: [[1, 35], [5, 125]]},
	{i: 19984, n: "Bank Access Express", p: {gem: 35}, discount: [[1, 35], [5, 125]]},
	{i: 36171, n: "Banker Golem (2 weeks)", p: {gem: 500}},
	{i: 44604, n: "Royal Pass (2 weeks)", p: {gem: 150}},
	{i: 50093, n: "Captain's Airship Pass (2 weeks)", p: {gem: 150}},
	{i: 79270, n: "Noble's Folly Pass (2 weeks)", p: {gem: 150}},
	{i: 79498, n: "Lava Lounge Pass (2 weeks)", p: {gem: 150}},
	{i: 42877, n: "Metabolic Primer", p: {gem: 150}, discount: [[1, 150], [5, 550], [25, 2625]]},
	{i: 8469, n: "Utility Primer", p: {gem: 150}, discount: [[1, 150], [5, 550], [25, 2625]]},
	{i: 20005, n: "Heroic Booster", p: {gem: 150}, discount: [[1, 150], [5, 637], [20, 2100]]},
	{i: 20002, n: "Experience Booster", p: {gem: 100}, discount: [[1, 100], [5, 450], [20, 1600]]},
	{i: 20003, n: "Item Booster", p: {gem: 100}, discount: [[1, 100], [5, 450], [20, 1600]]},
	{i: 41741, n: "Communal Boost Bonfire", p: {gem: -300}, discount: [[1, 300], [5, 1200]]},
	{i: 67406, n: "Candy Corn Gobbler Pack", p: {gem: -300}},
	{i: 67352, n: "Foil-Wrapped Candy", p: {gem: -25}, discount: [[1, 25], [5, 118], [25, 500]]},
	{i: 42876, n: "Dragon's Fortune Fireworks", p: {gem: -200}, discount: [[1, 200], [5, 800]]},
	{i: 48714, n: "Hallows Fortune Fireworks", p: {gem: -200}},
	{i: 42974, n: "Kite Fortune", p: {gem: -24}, discount: [[5, 120], [10, 200], [25, 400]]}
],
Pass: [
	{i: 46499, n: "Infinite Continue Coin", p: {gem: -600}},
	{i: 66927, n: "Home Portal Stone", p: {gem: 900}},
	{i: 49149, n: "Royal Terrace Pass", p: {gem: -1000}},
	{i: 50104, n: "Captain's Airship Pass", p: {gem: -1000}},
	{i: 79140, n: "Noble's Folly Pass", p: {gem: -1000}},
	{i: 79500, n: "Lava Lounge Pass", p: {gem: -1000}}
	//{n: "Lava Lounge Pass Bundle", p: {gem: -1200}},
],
Gathering: [
	{i: 49531, n: "Gathering Tool 3 Pack", p: {gem: -2250}},
	{i: 48930, n: "Consortium Harvesting Sickle", p: {gem: 1000}},
	{i: 48931, n: "Chop-It-All Logging Axe", p: {gem: 1000}},
	{i: 47897, n: "Watchwork Mining Pick", p: {gem: 1000}},
	{i: 48825, n: "Frost Wasp Logging Tool", p: {gem: -1000}},
	{i: 48934, n: "Jack-in-the-Box Scythe", p: {gem: -1000}},
	{i: 48955, n: "Dreamcleaver Logging Axe", p: {gem: 1000}},
	{i: 49308, n: "Thresher-Sickle 5000", p: {gem: 1000}},
	{i: 78724, n: "Focused Solar Logging Tool", p: {gem: 1000}},
	{i: 78909, n: "Glitter Bomb Harvesting Tool", p: {gem: 1000}},
	{i: 80067, n: "Celestial Rooster Harvesting Tool", p: {gem: -1000}},
	{i: 67032, n: "Fused Molten Sickle", p: {gem: -1000}},
	{i: 67030, n: "Fused Molten Logging Axe", p: {gem: -1000}},
	{i: 48933, n: "Molten Alliance Mining Pick", p: {gem: -1000}},
	{i: 67063, n: "Tireless Harvesting Minion", p: {gem: -1000}},
	{i: 67029, n: "Tireless Logging Minion", p: {gem: -1000}},
	{i: 48932, n: "Bone Pick", p: {gem: -1000}},
	{i: 67395, n: "Reap-r-Tron", p: {gem: 1000}},
	{i: 67394, n: "Log-r-Tron", p: {gem: 1000}},
	{i: 67396, n: "Mine-r-Tron", p: {gem: 1000}},
	{i: 69478, n: "Mad Scientist's Harvesting Tool", p: {gem: -1000}},
	{i: 68799, n: "Mad Scientist's Logging Tool", p: {gem: -1000}},
	{i: 68905, n: "Mad Scientist's Mining Tool", p: {gem: -1000}},
	{i: 70044, n: "Butterfly Harvesting Flute", p: {gem: -1000}},
	{i: 69921, n: "Swarm Logging Flute", p: {gem: -1000}},
	{i: 69958, n: "Firefly Mining Flute", p: {gem: -1000}},
	{i: 79721, n: "Cosmic Harvesting Tool", p: {gem: 1000}},
	{i: 79472, n: "Cosmic Logging Tool", p: {gem: 1000}},
	{i: 78731, n: "Cosmic Mining Tool", p: {gem: 1000}},
	{i: 78996, n: "Unbreakable Harvesting Sickle", p: {gem: 800}},
	{i: 78806, n: "Unbreakable Logging Axe", p: {gem: 800}},
	{i: 78812, n: "Unbreakable Mining Pick", p: {gem: 800}},
	{i: 80966, n: "Super Adventure Logging Bear", p: {gem: -1000}},
	{i: 80987, n: "Unbound Magic Harvesting Blast", p: {gem: -900}},
	{i: 80979, n: "Unbound Magic Logging Pulse", p: {gem: -900}},
	{i: 80977, n: "Unbound Magic Mining Beam", p: {gem: -900}}
],
Mini: [
	{i: 20019, n: "Minis 3-Pack (Set 1)", p: {gem: -300}},
	{i: 44722, n: "Minis 3-Pack (Set 2)", p: {gem: -300}},
	{i: 63870, n: "Minis 3-Pack (Set 3)", p: {gem: -300}},
	{i: 43009, n: "Mini Egg", p: {gem: -200}},
	{i: 36169, n: "Mini Avian 3 Pack", p: {gem: -500}},
	{i: 36320, n: "Miniature Spooky Trio", p: {gem: -500}},
	{i: 41907, n: "Miniature Super Trio", p: {gem: -500}},
	{i: 46498, n: "Miniature Super Trio—World 2", p: {gem: -500}},
	{i: 80939, n: "Miniature Super Trio—Series 3", p: {gem: -600}},
	{i: 42897, n: "Dragon Bash Mini Pack", p: {gem: -500}},
	{i: 42978, n: "Wintersday Minis 3-Pack", p: {gem: -500}},
	{i: 42981, n: "Bazaar Quaggan Mini Pack", p: {gem: -500}},
	{i: 43933, n: "Tequatl Rising Mini Pack", p: {gem: -500}},
	{i: 44779, n: "Costumed Mini 3-Pack", p: {gem: -500}},
	{i: 47907, n: "Scarlet's Champions Mini 3-Pack", p: {gem: -500}},
	{i: 48936, n: "Great Jungle Wurm 3 Pack", p: {gem: -300}},
	{i: 50090, n: "Creepy Mini 3-Pack", p: {gem: -500}},
	{i: 64192, n: "Baby Minis Series 1 Pack", p: {gem: -1600}},
	{i: 67281, n: "Mini Chieftain Utahein and Mini Svanir", p: {gem: -700}},
	{i: 36317, n: "Mini Spooky Ghost", p: {gem: -166}},
	{i: 36321, n: "Mini Spooky Skeleton", p: {gem: -166}},
	{i: 36319, n: "Mini Spooky Spider", p: {gem: -166}},
	{i: 36323, n: "Chainsaw the Skeleton", p: {gem: -500}},
	{i: 38046, n: "Mini Festive Golem", p: {gem: -100}},
	{i: 38049, n: "Mini Infinirarium", p: {gem: -100}},
	{i: 41908, n: "Mini Super Spider", p: {gem: -166}},
	{i: 41909, n: "Mini Super Bee Dog", p: {gem: -166}},
	{i: 41910, n: "Mini Super Monkey", p: {gem: -166}},
	{i: 80878, n: "Mini Super Storm Wizard", p: {gem: -500}},
	{i: 46494, n: "Mini Super Banana", p: {gem: -166}},
	{i: 46495, n: "Mini Super Raccoon", p: {gem: -166}},
	{i: 46496, n: "Mini Super Yeti", p: {gem: -166}},
	{i: 46497, n: "Mini Super Assassin", p: {gem: -500}},
	{i: 80883, n: "Mini Super Goat", p: {gem: -200}},
	{i: 80903, n: "Mini Super Frog", p: {gem: -200}},
	{i: 80884, n: "Mini Super Snake", p: {gem: -200}},
	{i: 80915, n: "Mini Super Queen Bee Dog", p: {gem: -600}},
	{i: 42579, n: "Mini Hippo Calf", p: {gem: -400}},
	{i: 42591, n: "Mini White Kitten", p: {gem: 400}},
	{i: 42593, n: "Mini Lion Cub", p: {gem: -400}},
	{i: 42592, n: "Mini Black Bear Cub", p: {gem: -400}},
	{i: 42577, n: "Mini Moa Chick", p: {gem: -400}},
	{i: 43427, n: "Mini Holographic Corrupted Wolf", p: {gem: -166}},
	{i: 43426, n: "Mini Holographic Axe-Wielding Destroyer", p: {gem: -166}},
	{i: 43425, n: "Mini Holographic Branded Minotaur", p: {gem: -166}},
	{i: 43921, n: "Mini Kookoochoo the Incredulous", p: {gem: -166}},
	{i: 43922, n: "Mini Peggellegg the Pirate", p: {gem: -166}},
	{i: 43923, n: "Mini Poowulpi the Persnicketous", p: {gem: -166}},
	{i: 45011, n: "Mini Mr. Sparkles", p: {gem: 0}},
	{i: 47841, n: "Mini Risen Thrall", p: {gem: -166}},
	{i: 47842, n: "Mini Risen Brute", p: {gem: -166}},
	{i: 47843, n: "Mini Risen Plague Carrier", p: {gem: -166}},
	{i: 47844, n: "Mini Risen Abomination", p: {gem: -500}},
	{i: 48753, n: "Mini Quaggan Ghost Trick-or-Treater", p: {gem: -166}},
	{i: 48754, n: "Mini Assassin Trick-or-Treater", p: {gem: -166}},
	{i: 48755, n: "Mini Aviator Trick-or-Treater", p: {gem: -166}},
	{i: 49291, n: "Mini Fawn", p: {gem: -166}},
	{i: 49292, n: "Mini Arctic Fox Kit", p: {gem: -166}},
	{i: 49293, n: "Mini Puppy", p: {gem: -166}},
	{i: 49294, n: "Mini Dolyak Calf", p: {gem: -500}},
	{i: 49869, n: "Mini Amber Great Jungle Wurm", p: {gem: -100}},
	{i: 49868, n: "Mini Crimson Great Jungle Wurm", p: {gem: -100}},
	{i: 49870, n: "Mini Cobalt Great Jungle Wurm", p: {gem: -100}},
	{i: 42953, n: "Mini Aetherblade Admiral", p: {gem: -166}},
	{i: 42954, n: "Mini Toxic Warlock", p: {gem: -166}},
	{i: 42955, n: "Mini Molten Berserker", p: {gem: -166}},
	{i: 42956, n: "Mini Armored Scarlet Briar", p: {gem: -500}},
	{i: 42959, n: "Miniature Hawk", p: {gem: -166}},
	{i: 42958, n: "Miniature Raven", p: {gem: -166}},
	{i: 42957, n: "Miniature Snow Owl", p: {gem: -166}},
	{i: 42581, n: "Mini Arctodus Cub", p: {gem: -400}},
	{i: 42583, n: "Mini Orange Kitten", p: {gem: 400}},
	{i: 42582, n: "Mini Polar Bear Cub", p: {gem: -400}},
	{i: 42578, n: "Mini Piglet", p: {gem: -400}},
	{i: 42584, n: "Mini Jaguar Cub", p: {gem: -400}},
	{i: 45044, n: "Mini Frostbite", p: {gem: 400}},
	{i: 66164, n: "Mini Chickenado", p: {gem: -500}},
	{i: 42960, n: "Mini Scruffy", p: {gem: 500}},
	{i: 42951, n: "Mini Mordrem Leyleecher", p: {gem: -500}},
	{i: 67025, n: "Mini Chieftain Utahein", p: {gem: -350}},
	{i: 67022, n: "Mini Svanir", p: {gem: -350}},
	{i: 67023, n: "Mini Candy Corn Skritt", p: {gem: -166}},
	{i: 67024, n: "Miniature Glowing Bat", p: {gem: -166}},
	{i: 67026, n: "Mini Mad King Head", p: {gem: -166}},
	{i: 67837, n: "Miniature Belinda Delaqua", p: {gem: -350}},
	{i: 67840, n: "Mini Drooburt's Ghost", p: {gem: 350}},
	{i: 67839, n: "Mini Pact Airship", p: {gem: 350}},
	{i: 67838, n: "Mini Sand Giant", p: {gem: -350}},
	{i: 68432, n: "Mini Festive Lord Faren", p: {gem: -500}},
	{i: 67841, n: "Mini Avatar of the Tree", p: {gem: 350}},
	{i: 68570, n: "Mini Rox", p: {gem: -350}},
	{i: 68572, n: "Mini Braham Eirsson", p: {gem: -350}},
	{i: 68610, n: "Miniature Ram", p: {gem: -350}},
	{i: 68683, n: "Mini Golden Pig", p: {gem: -350}},
	{i: 68569, n: "Mini Red Panda", p: {gem: -350}},
	{i: 69621, n: "Miniature Moose", p: {gem: 350}},
	{i: 69667, n: "Mini Bear Cub", p: {gem: -400}},
	{i: 69658, n: "Mini Blue Drake Hatchling", p: {gem: -400}},
	{i: 69656, n: "Mini Fox Kit", p: {gem: 400}},
	{i: 69672, n: "Mini Snow Cougar Cub", p: {gem: 400}},
	{i: 69690, n: "Mini Beetle", p: {gem: -500}},
	{i: 69790, n: "Mini Rock", p: {gem: 350}},
	{i: 73815, n: "Mini Ghoul Legs", p: {gem: -300}},
	{i: 70300, n: "Mini Bonebreaker", p: {gem: -350}},
	{i: 70231, n: "Mini Tiger", p: {gem: -350}},
	{i: 70191, n: "Mini Wyvern", p: {gem: 350}},
	{i: 70234, n: "Mini Angry Chest", p: {gem: -400}},
	{i: 77339, n: "Mini Sabetha", p: {gem: -350}},
	{i: 77621, n: "Mini Angry Wintersday Gift", p: {gem: -400}},
	{i: 77581, n: "Mini Snow Flurry Dragon", p: {gem: -500}},
	{i: 77574, n: "Mini Tizlak", p: {gem: -200}},
	{i: 77649, n: "Mini Arrowhead", p: {gem: 400}},
	{i: 77675, n: "Mini Zintl Cavalier", p: {gem: -350}},
	{i: 79048, n: "Mini Garm", p: {gem: 350}},
	{i: 79361, n: "Mini Jungle Lord Faren", p: {gem: -350}},
	{i: 79651, n: "Mini Feline Familiar", p: {gem: -350}},
	{i: 79693, n: "Mini Bloodstone Rock", p: {gem: 350}},
	{i: 80044, n: "Mini Festive Aurene", p: {gem: -400}},
	{i: 80072, n: "Mini Celestial Rooster", p: {gem: 0}},
	{i: 80860, n: "Mini Krytan Floppy Fish", p: {gem: 350}},
	{i: 81242, n: "Mini Outlaw Puppy", p: {gem: 400}}
],
Toy: [
	{i: 20312, n: "How to Dance, Volume 1", p: {gem: 400}},
	{i: 36172, n: "Bobblehead Laboratory", p: {gem: 400}},
	{i: 66342, n: "Water Fight Balloon Bucket", p: {gem: 500}},
	{i: 67881, n: "Aviator's Memory Box", p: {gem: 400}},
	{i: 20000, n: "Box o' Fun", p: {gem: 80}, discount: [[1, 80], [5, 320]]},
	{i: 41911, n: "Super Adventure Box o' Fun", p: {gem: -125}, discount: [[1, 125], [5, 400]]},
	{i: 49930, n: "Boxing Gloves", p: {gem: -300}},
	{i: 49931, n: "Riding Broom", p: {gem: 250}},
	{i: 49948, n: "Sonic Tunneling Tool", p: {gem: 250}},
	{i: 67356, n: "Magic Carpet", p: {gem: 250}},
	{i: 79666, n: "Hovering Mad Mirror", p: {gem: -250}},
	{i: 78771, n: "Electromagnetic Ascender", p: {gem: -250}},
	{i: 80854, n: "Bloodstone Ascender", p: {gem: -250}},
	{i: 49933, n: "Bouquet of Roses", p: {gem: -250}},
	{i: 43528, n: "Box of Chocolates", p: {gem: -250}},
	{i: 42967, n: "Lightning Kite", p: {gem: 500}},
	{i: 43076, n: "Wind Kite", p: {gem: 500}},
	{i: 43487, n: "Sun Kite", p: {gem: 500}},
	{i: 67835, n: "Pact Airship Balloon", p: {gem: -500}},
	{i: 68614, n: "Red Lantern", p: {gem: -250}},
	{i: 68650, n: "Ram Balloon", p: {gem: -250}}
],
Music: [
	{i: 42888, n: "Marriner's Horn", p: {gem: 800}},
	{i: 42973, n: "Flute", p: {gem: 800}},
	{i: 36174, n: "Musical Bass Guitar", p: {gem: 800}},
	{i: 43526, n: "Musical Frame Drum", p: {gem: 800}},
	{i: 44883, n: "Musical Harp", p: {gem: 800}},
	{i: 66323, n: "Musical Lute", p: {gem: 800}},
	{i: 67391, n: "Haunted Gramophone", p: {gem: -600}}
],
Carrier: [
	{i: 67355, n: "Ghostly Mail Courier", p: {gem: 500}},
	{i: 67863, n: "Exalted Mail Courier", p: {gem: 500}},
	{i: 68102, n: "Confetti Mail Delivery", p: {gem: 300}},
	{i: 68104, n: "Gifts Mail Delivery", p: {gem: 350}},
	{i: 68106, n: "Griffon Mail Carrier", p: {gem: 500}},
	{i: 68652, n: "Red Envelope Mail Carrier", p: {gem: 600}},
	{i: 68681, n: "Snow Owl Mail Carrier", p: {gem: -350}},
	{i: 68682, n: "Sylvari Seed Pod Mail Carrier", p: {gem: 350}},
	{i: 69628, n: "Aviator Quaggan Mail Carrier", p: {gem: 500}},
	{i: 69715, n: "Revenant Mail Carrier", p: {gem: 350}},
	{i: 78088, n: "Super Bee Dog Mail Carrier", p: {gem: 0}},
	{i: 81215, n: "Hounds of Balthazar Mail Carrier", p: {gem: 0}}
],
Node: [
	{i: 67290, n: "Basic Harvesting Node Pack", p: {gem: 800}},
	{i: 66769, n: "Basic Lumber Node Pack", p: {gem: 800}},
	{i: 44884, n: "Basic Ore Node Pack", p: {gem: 800}},
	{i: 67842, n: "Basic Cloth Rack", p: {gem: 800}},
	{i: 78019, n: "Basic Leather Rack", p: {gem: 800}}
],
Finisher: [
	{i: 44068, n: "Permanent Mad King Finisher", p: {gem: -500}},
	{i: 44069, n: "Permanent Scarecrow Finisher", p: {gem: -500}},
	{i: 44724, n: "Permanent Super Explosive Finisher", p: {gem: -600}},
	{i: 49165, n: "Permanent Mystical Dragon Finisher", p: {gem: -800}},
	{i: 49952, n: "Permanent Llama Finisher", p: {gem: -800}},
	{i: 63941, n: "Permanent Minstrel Finisher", p: {gem: -800}},
	{i: 69616, n: "Permanent Unicorn Finisher", p: {gem: -700}}
],
Upgrade: [
	{i: "character_slot_expansion", n: "Character Slot Expansion", p: {gem: 800}},
	{i: 42970, n: "Additional Crafting License", p: {gem: 800}},
	{i: 19995, n: "Bank Tab Expansion", p: {gem: 600}},
	{i: 42932, n: "Storage Expander", p: {gem: 800}},
	{i: 19993, n: "Bag Slot Expansion", p: {gem: 400}},
	{i: 67071, n: "Shared Inventory Slot", p: {gem: 700}, discount: [[1, 700], [3, 1890], [5, 2800]]}
]
};
