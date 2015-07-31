/*
 * This file is used by http://gw2timer.com
 * Contains Kryta continent map zone, region, dailies, and countdown data.
 */

var GW2T_REGION_DATA = {
"heart": {
	name_en: "Heart of Maguuma",
	name_de: "Herz von Maguuma",
	name_es: "Corazón de Maguuma",
	name_fr: "Cœur de Maguuma",
	color: "gray"
},
"wastes": {
	name_en: "Maguuma Wastes",
	name_de: "Maguuma-Einöde",
	name_es: "Páramos Maguuma",
	name_fr: "Contrées sauvages de Maguuma",
	color: "wheat"
},
"jungle": {
	name_en: "Maguuma Jungle",
	name_de: "Maguuma-Dschungel",
	name_es: "Jungla de Maguuma",
	name_fr: "Jungle de Maguuma",
	color: "cyan"
},
"kryta": {
	name_en: "Kryta",
	name_de: "Kryta",
	name_es: "Kryta",
	name_fr: "Kryte",
	color: "lightgreen"
},
"orr": {
	name_en: "Orr",
	name_de: "Orr",
	name_es: "Orr",
	name_fr: "Orr",
	color: "darkgoldenrod"
},
"shiverpeaks": {
	name_en: "Shiverpeaks",
	name_de: "Zittergipfelgebirge",
	name_es: "Picosescalofriantes",
	name_fr: "Cimefroides",
	color: "lightskyblue"
},
"ascalon": {
	name_en: "Ascalon",
	name_de: "Ascalon",
	name_es: "Ascalon",
	name_fr: "Ascalon",
	color: "orange"
}
};

/*
 * This associates the zone's nick with their ID number in the API JSON for
 * access in constant time.
 */
var GW2T_ZONE_ASSOCIATION = {
	"15": "queensdale",
	"17": "harathi",
	"18": "divinity",
	"19": "ashford",
	"20": "blazeridge",
	"21": "fields",
	"22": "fireheart",
	"23": "kessex",
	"24": "gendarran",
	"25": "marches",
	"26": "dredgehaunt",
	"27": "lornar",
	"28": "wayfarer",
	"29": "timberline",
	"30": "frostgorge",
	"31": "snowden",
	"32": "diessa",
	"34": "caledon",
	"35": "metrica",
	"39": "maelstrom",
	"50": "lion",
	"51": "straits",
	"53": "sparkfly",
	"54": "brisban",
	"62": "cursed",
	"65": "malchor",
	"73": "bloodtide",
	"91": "grove",
	"139": "rata",
	"218": "citadel",
	"326": "hoelbrak",
	"873": "southsun",
	"988": "dry",
	"1015": "silverwastes"
};

/*
 * Images that are overlayed on the map, such as underground areas.
 */
var GW2T_SUBMAP_DATA = {
angvarstrove: {
	img: "http://i.imgur.com/LuiwbAK.png", 
	bounds: [[17660, 11230], [18610, 11930]]
},
bonerattlercaverns: {
	img: "http://i.imgur.com/TyGZI9H.png", 
	bounds: [[13482, 11605], [15032, 12205]]
},
brandedmine: {
	img: "http://i.imgur.com/XdXqXTL.png",
	bounds: [[28674, 16701], [28984, 16951]]
},
dostoevskypeak: {
	img: "http://i.imgur.com/l0PyKxS.png", 
	bounds: [[20120, 16395], [20920, 17195]]
},
fionnghualascratch: {
	img: "http://i.imgur.com/6ELssZW.png",
	bounds: [[19718, 19035], [20268, 19785]]
},
highdencaves: {
	img: "http://i.imgur.com/V71MHb1.png", 
	bounds: [[31230, 16900], [31730, 17700]]
},
langmarestate: {
	img: "http://i.imgur.com/KUMY9HD.png", 
	bounds: [[25054, 14859], [25804, 15659]]
},
posternuscaverns: {
	img: "http://i.imgur.com/rFdG4jD.png", 
	bounds: [[17665, 14295], [18065, 15115]]
},
proxemicslab: {
	img: "http://i.imgur.com/shk8IVE.png", 
	bounds: [[5880, 14440], [6230, 15290]]
},
sawtoothbaycaves: {
	img: "http://i.imgur.com/SnaczAR.png", 
	bounds: [[13245, 19980], [13445, 20180]]
},
spidernestcavern: {
	img: "http://i.imgur.com/XCSCoDD.png", 
	bounds: [[25141, 11313], [25641, 11753]]
}
};

/*
 * Zones are sorted by how far from the top left corner (0,0) it is.
 */
var GW2T_ZONE_DATA = {
"silverwastes":
{
	name_en: "The Silverwastes",
	name_de: "Die Silberwüste",
	name_es: "Los Páramos Argentos",
	name_fr: "Les Contrées sauvages d'Argent",
	region: "wastes",
	rect: [[3838, 14206], [5886, 15742]]
},
"dry":
{
	name_en: "Dry Top",
	name_de: "Trockenkuppe",
	name_es: "Cima Seca",
	name_fr: "Cimesèche",
	region: "wastes",
	rect: [[3840, 15742], [5888, 17152]]//[3840, 14592]
},
"rata":
{
	name_en: "Rata Sum",
	name_de: "Rata Sum",
	name_es: "Rata Sum",
	name_fr: "Rata Sum",
	region: "jungle",
	rect: [[4608, 19710], [7168, 22270]]
},
"brisban":
{
	name_en: "Brisban Wildlands",
	name_de: "Brisban-Wildnis",
	name_es: "Selvas Brisbanas",
	name_fr: "Terres sauvages de Brisban",
	region: "jungle",
	rect: [[5888, 14464], [9344, 17152]]
},
"metrica":
{
	name_en: "Metrica Province",
	name_de: "Provinz Metrica",
	name_es: "Provincia de Métrica",
	name_fr: "Province de Metrica",
	region: "jungle",
	rect: [[7168, 17152], [9344, 20480]]
},
"caledon":
{
	name_en: "Caledon Forest",
	name_de: "Caledon-Wald",
	name_es: "Bosque de Caledon",
	name_fr: "Forêt de Caledon",
	region: "jungle",
	rect: [[9344, 16128], [11264, 20096]]
},
"kessex":
{
	name_en: "Kessex Hills",
	name_de: "Kessex-Hügel",
	name_es: "Colinas Kessex",
	name_fr: "Collines de Kessex",
	region: "kryta",
	rect: [[9344, 14080], [13440, 16128]]
},
"grove":
{
	name_en: "The Grove",
	name_de: "Der Hain",
	name_es: "La Arboleda",
	name_fr: "Le Bosquet",
	region: "jungle",
	rect: [[9728, 20096], [11136, 22144]]
},
"queensdale":
{
	name_en: "Queensdale",
	name_de: "Königintal",
	name_es: "Valle de la Reina",
	name_fr: "La Vallée de la reine",
	region: "kryta",
	rect: [[9856, 11648], [13440, 14080]]
},
"cursed":
{
	name_en: "Cursed Shore",
	name_de: "Fluchküste",
	name_es: "Ribera Maldita",
	name_fr: "Rivage maudit",
	region: "orr",
	rect: [[10112, 25216], [12160, 29312]]
},
"divinity":
{
	name_en: "Divinity's Reach",
	name_de: "Götterfels",
	name_es: "Linde de la Divinidad",
	name_fr: "Le Promontoire divin",
	region: "kryta",
	rect: [[10240, 9856], [12160, 11648]]
},
"malchor":
{
	name_en: "Malchor's Leap",
	name_de: "Malchors Sprung",
	name_es: "Salto de Malchor",
	name_fr: "Saut de Malchor",
	region: "orr",
	rect: [[10368, 23168], [14464, 25216]]
},
"southsun":
{
	name_en: "Southsun Cove",
	name_de: "Südlicht-Bucht",
	name_es: "Cala del Sol Austral",
	name_fr: "Crique de Sud-Soleil",
	region: "kryta",
	rect: [[11520, 18944], [14208, 20736]]
},
"harathi":
{
	name_en: "Harathi Hinterlands",
	name_de: "Harathi-Hinterland",
	name_es: "Interior Harathi",
	name_fr: "Hinterlands harathis",
	region: "kryta",
	rect: [[13440, 9472], [16640, 12288]]
},
"gendarran":
{
	name_en: "Gendarran Fields",
	name_de: "Gendarran-Felder",
	name_es: "Campos de Gendarran",
	name_fr: "Champs de Gendarran",
	region: "kryta",
	rect: [[13440, 12288], [17664, 14336]]
},
"straits":
{
	name_en: "Straits of Devastation",
	name_de: "Meerenge der Verwüstung",
	name_es: "Estrechos de la Devastación",
	name_fr: "Détroit de la Dévastation",
	region: "orr",
	rect: [[14464, 22400], [17792, 25216]]
},
"lion":
{
	name_en: "Lion's Arch",
	name_de: "Löwenstein",
	name_es: "Arco del León",
	name_fr: "L'Arche du Lion",
	region: "kryta",
	rect: [[15232, 14336], [17664, 15872]]
},
"bloodtide":
{
	name_en: "Bloodtide Coast",
	name_de: "Blutstrom-Küste",
	name_es: "Costa Mareasangrienta",
	name_fr: "Côte de la marée sanglante",
	region: "kryta",
	rect: [[15232, 15872], [17664, 19072]]
},
"sparkfly":
{
	name_en: "Sparkfly Fen",
	name_de: "Funkenschwärmersumpf",
	name_es: "Pantano de las Centellas",
	name_fr: "Marais de Lumillule",
	region: "jungle",
	rect: [[15232, 19072], [17792, 22400]]
},
"lornar":
{
	name_en: "Lornar's Pass",
	name_de: "Lornars Pass",
	name_es: "Paso de Lornar",
	name_fr: "Passage de Lornar",
	region: "shiverpeaks",
	rect: [[17664, 13312], [19456, 18176]]
},
"snowden":
{
	name_en: "Snowden Drifts",
	name_de: "Schneekuhlenhöhen",
	name_es: "Cúmulos de Guaridanieve",
	name_fr: "Congères d'Antreneige",
	region: "shiverpeaks",
	rect: [[17664, 11264], [21760, 13312]]
},
"maelstrom":
{
	name_en: "Mount Maelstrom",
	name_de: "Mahlstromgipfel",
	name_es: "Monte Vorágine",
	name_fr: "Mont Maelström",
	region: "jungle",
	rect: [[17792, 21376], [21632, 23808]]
},
"timberline":
{
	name_en: "Timberline Falls",
	name_de: "Baumgrenzen-Fälle",
	name_es: "Cataratas de Linarbórea",
	name_fr: "Chutes de la Canopée",
	region: "shiverpeaks",
	rect: [[18944, 18176], [21248, 21376]]
},
"hoelbrak":
{
	name_en: "Hoelbrak",
	name_de: "Hoelbrak",
	name_es: "Hoelbrak",
	name_fr: "Hoelbrak",
	region: "shiverpeaks",
	rect: [[19456, 13312], [21760, 14976]]
},
"dredgehaunt":
{
	name_en: "Dredgehaunt Cliffs",
	name_de: "Schauflerschreck-Klippen",
	name_es: "Acantilados de Guaridadraga",
	name_fr: "Falaises de Hantedraguerre",
	region: "shiverpeaks",
	rect: [[19456, 14976], [21760, 18176]]
},
"frostgorge":
{
	name_en: "Frostgorge Sound",
	name_de: "Eisklamm-Sund",
	name_es: "Estrecho de Gorjaescarcha",
	name_fr: "Détroit des gorges glacées",
	region: "shiverpeaks",
	rect: [[20736, 8192], [23808, 11264]]
},
"wayfarer":
{
	name_en: "Wayfarer Foothills",
	name_de: "Wanderer-Hügel",
	name_es: "Colinas del Caminante",
	name_fr: "Contreforts du Voyageur",
	region: "shiverpeaks",
	rect: [[21760, 11264], [23552, 15872]]
},
"citadel":
{
	name_en: "Black Citadel",
	name_de: "Schwarze Zitadelle",
	name_es: "Ciudadela Negra",
	name_fr: "La Citadelle noire",
	region: "ascalon",
	rect: [[23552, 13568], [25088, 15616]]
},
"diessa":
{
	name_en: "Diessa Plateau",
	name_de: "Diessa-Plateau",
	name_es: "Meseta de Diessa",
	name_fr: "Plateau de Diessa",
	region: "ascalon",
	rect: [[23552, 11264], [27136, 13568]]
},
"fireheart":
{
	name_en: "Fireheart Rise",
	name_de: "Feuerherzhügel",
	name_es: "Colina del Corazón de Fuego",
	name_fr: "Montée de Flambecœur",
	region: "ascalon",
	rect: [[23808, 8448], [27136, 11264]]
},
"ashford":
{
	name_en: "Plains of Ashford",
	name_de: "Ebenen von Aschfurt",
	name_es: "Llanuras de Ashford",
	name_fr: "Plaines d'Ashford",
	region: "ascalon",
	rect: [[25088, 13568], [29184, 15616]]
},
"marches":
{
	name_en: "Iron Marches",
	name_de: "Eisenmark",
	name_es: "Fronteras de Hierro",
	name_fr: "Marais de fer",
	region: "ascalon",
	rect: [[27136, 9472], [29184, 13568]]
},
"fields":
{
	name_en: "Fields of Ruin",
	name_de: "Felder der Verwüstung",
	name_es: "Campos de la Ruina",
	name_fr: "Champs de Ruine",
	region: "ascalon",
	rect: [[28672, 16256], [31744, 19328]]
},
"blazeridge":
{
	name_en: "Blazeridge Steppes",
	name_de: "Flammenkamm-Steppe",
	name_es: "Estepas Crestafulgurante",
	name_fr: "Les Steppes de la Strie flamboyante",
	region: "ascalon",
	rect: [[29184, 12160], [31232, 16256]]
}
};

/*
 * A month's achievements with associated days. Example of format:
 * pve: ["GATHER REGION", "ACTIVITY CONDITIONALREGION", "EVENTREGION", "BOSS"],
 * pvp: ["PVP0", "PVP1", "PROFESSIONS0", "PROFESSIONS1"],
 * wvw: ["WVW0", "WVW1", "WVW2", "WVW3"]
 */
var GW2T_DAILY_CALENDAR = {
"1": {
	pve: ["Lumberer Kryta", "Vista Shiverpeaks", "Cursed", "Fractal 1-10"],
	pvp: ["Reward", "Defender", "War Necro", "Thief Mes"],
	wvw: ["Caravan", "Ruins", "Camp", "Keep"]
},
"2": {
	pve: ["Forager Ascalon", "Forger", "Gendarran", "Fractal 1-10"],
	pvp: ["Defender", "Kills", "War Engi", "Ranger Engi"],
	wvw: ["Ruins", "Land", "Defender", "Camp"]
},
"3": {
	pve: ["Lumberer Wastes", "Fractal", "Bloodtide", "Fractal 1-10"],
	pvp: ["Rank", "Defender", "Ele Mes", "Guard Thief"],
	wvw: ["Spender", "Kills", "Camp", "Keep"]
},
"4": {
	pve: ["Forager Ascalon", "Vista Ascalon", "Harathi", "Fractal 1-10"],
	pvp: ["Capture", "Reward", "Engi Thief", "Ranger Engi"],
	wvw: ["Spender", "Land", "Tower", "Defender"]
},
"5": {
	pve: ["Forager Orr", "Vista Shiverpeaks", "Ashford", "Fractal 11-20"],
	pvp: ["Capture", "Rank", "War Guard", "Ranger Engi"],
	wvw: ["Land", "Kills", "Keep", "Tower"]
},
"6": {
	pve: ["Lumberer Ascalon", "Activity", "Frostgorge", "Fractal 1-10"],
	pvp: ["Reward", "Rank", "Ranger Thief", "Engi Ele"],
	wvw: ["Creature", "Guard", "Defender", "Camp"]
},
"7": {
	pve: ["Forager Jungle", "Vista Shiverpeaks", "Fields", "Fractal 1-10"],
	pvp: ["Defender", "Reward", "War Ranger", "Guard Necro"],
	wvw: ["Ruins", "Creature", "Camp", "Defender"]
},
"8": {
	pve: ["Miner Jungle", "Vista Orr", "Sparkfly", "Fractal 1-10"],
	pvp: ["Defender", "Capture", "Ranger Mes", "Guard Engi"],
	wvw: ["Land", "Guard", "Keep", "Camp"]
},
"9": {
	pve: ["Forager Kryta", "Forger", "Caledon", "Fractal 1-10"],
	pvp: ["Kills", "Reward", "War Engi", "Ranger Necro"],
	wvw: ["Guard", "Caravan", "Tower", "Defender"]
},
"10": {
	pve: ["Lumberer Jungle", "Fractal", "Timberline", "Fractal 11-20"],
	pvp: ["Rank", "Kills", "Ele Mes", "Guard Thief"],
	wvw: ["Creature", "Land", "Keep", "Tower"]
},
"11": {
	pve: ["Miner Jungle", "Vista Orr", "Metrica", "Fractal 1-10"],
	pvp: ["Reward", "Defender", "Engi Thief", "Ele Necro"],
	wvw: ["Caravan", "Spender", "Camp", "Defender"]
},
"12": {
	pve: ["Lumberer Kryta", "Vista Shiverpeaks", "Harathi", "Fractal 21-30"],
	pvp: ["Reward", "Kills", "War Thief", "Guard Ranger"],
	wvw: ["Ruins", "Kills", "Defender", "Camp"]
},
"13": {
	pve: ["Miner Shiverpeaks", "Forger", "Wayfarer", "Fractal 1-10"],
	pvp: ["Rank", "Capture", "Engi Mes", "Guard Ele"],
	wvw: ["Creature", "Caravan", "Keep", "Camp"]
},
"14": {
	pve: ["Forager Kryta", "Vista Ascalon", "Brisban", "Fractal 1-10"],
	pvp: ["Defender", "Rank", "War Ele", "Engi Necro"],
	wvw: ["Ruins", "Guard", "Tower", "Keep"]
},
"15": {
	pve: ["Forager Ascalon", "Activity", "Malchor", "Fractal 1-10"],
	pvp: ["Kills", "Defender", "Thief Ele", "Guard Mes"],
	wvw: ["Creature", "Caravan", "Defender", "Camp"]
},
"16": {
	pve: ["Miner Kryta", "Vista Shiverpeaks", "Maelstrom", "Fractal 1-10"],
	pvp: ["Kills", "Capture", "War Mes", "Ranger Necro"],
	wvw: ["Land", "Guard", "Tower", "Defender"]
},
"17": {
	pve: ["Lumberer Shiverpeaks", "Vista Kryta", "Cursed", "Fractal 1-10"],
	pvp: ["Reward", "Defender", "Thief Necro", "Ele Ranger"],
	wvw: ["Ruins", "Kills", "Keep", "Camp"]
},
"18": {
	pve: ["Forager Ascalon", "Forger", "Southsun", "Fractal 1-10"],
	pvp: ["Defender", "Capture", "War Necro", "Thief Mes"],
	wvw: ["Spender", "Ruins", "Defender", "Camp"]
},
"19": {
	pve: ["Miner Shiverpeaks", "Fractal", "Harathi", "Fractal 1-10"],
	pvp: ["Reward", "Kills", "War Guard", "Ranger Engi"],
	wvw: ["Ruins", "Guard", "Keep", "Tower"]
},
"20": {
	pve: ["Miner Shiverpeaks", "Vista Kryta", "Sparkfly", "Wurm"],
	pvp: ["Capture", "Rank", "Ranger Thief", "Engi Ele"],
	wvw: ["Creature", "Guard", "Camp", "Defender"]
},
"21": {
	pve: ["Forager Orr", "Vista Orr", "Gendarran", "Fractal 31-40"],
	pvp: ["Reward", "Capture", "War Ranger", "Guard Necro"],
	wvw: ["Land", "Spender", "Tower", "Camp"]
},
"22": {
	pve: ["Lumberer Jungle", "Fractal", "Straits", "FE"],
	pvp: ["Defender", "Rank", "Ranger Mes", "Guard Engi"],
	wvw: ["Ruins", "Kills", "Camp", "Defender"]
},
"23": {
	pve: ["Miner Ascalon", "Forger", "Kessex", "Fractal 11-20"],
	pvp: ["Reward", "Capture", "War Engi", "Ranger Necro"],
	wvw: ["Land", "Creature", "Keep", "Tower"]
},
"24": {
	pve: ["Lumberer Ascalon", "Activity", "Wayfarer", "Megades"],
	pvp: ["Defender", "Capture", "Ele Mes", "Guard Thief"],
	wvw: ["Land", "Guard", "Tower", "Camp"]
},
"25": {
	pve: ["Forager Kryta", "Forger", "Snowden", "Golem"],
	pvp: ["Kills", "Defender", "Engi Thief", "Ele Necro"],
	wvw: ["Spender", "Kills", "Defender", "Camp"]
},
"26": {
	pve: ["Lumberer Jungle", "Vista Shiverpeaks", "Fields", "Jormag"],
	pvp: ["Defender", "Capture", "War Thief", "Guard Ranger"],
	wvw: ["Land", "Caravan", "Defender", "Tower"]
},
"27": {
	pve: ["Miner Orr", "Activity", "Queensdale", "Fractal 21-30"],
	pvp: ["Reward", "Kills", "Engi Mes", "Guard Ele"],
	wvw: ["Ruins", "Kills", "Keep", "Camp"]
},
"28": {
	pve: ["Forager Jungle", "Fractal", "Bloodtide", "SB"],
	pvp: ["Defender", "Rank", "War Ele", "Engi Necro"],
	wvw: ["Ruins", "Creature", "Tower", "Camp"]
},
"29": {
	pve: ["Miner Shiverpeaks", "Forger", "Harathi", "Golem"],
	pvp: ["Capture", "Reward", "Thief Ele", "Guard Mes"],
	wvw: ["Kills", "Land", "Defender", "Tower"]
},
"30": {
	pve: ["Lumberer Ascalon", "Vista Shiverpeaks", "Metrica", "FE"],
	pvp: ["Capture", "Rank", "War Mes", "Guard Necro"],
	wvw: ["Guard", "Ruins", "Defender", "Camp"]
},
"31": {
	pve: ["Miner Shiverpeaks", "Vista Jungle", "Sparkfly", "Fractal 1-10"],
	pvp: ["Capture", "Defender", "Thief Necro", "Ele Ranger"],
	wvw: ["Guard", "Land", "Keep", "Camp"]
}
};

/*
 * GW2 special events, such as those announced on GuildWars2.com.
 * Format:
	name: "", // Language independent, overrides others
	name_en: "",
	name_de: "",
	name_es: "",
	name_fr: "",
	news: "", // Official GW2 site news link
	url: "", // Language independent, overrides others
	url_en: "",
	url_de: "",
	url_es: "",
	url_fr: "",
	Start: new Date("2015-07-10T19:00:00Z"),
	Finish: new Date("2015-07-13T19:00:00Z")
 */
var GW2T_COUNTDOWN_DATA = {
	
Header: "<b>Feature of the Week</b>: <a href='http://gw2timer.com/?page=Map&section=Resource'>gw2timer.com/resource</a><br />",
Countdowns: [
{
	name: "Resource Nodes Farm Map",
	url: "http://gw2timer.com/?page=Map&section=Resource",
	Start: new Date("2015-07-26T00:00:00Z"),
	Finish: new Date("2015-08-03T00:00:00Z")
},
{
	name_en: "Beta Weekend Event",
	name_de: "Beta Weekend Event",
	name_es: "Beta de fin de semana",
	name_fr: "Week-end de bêta",
	news: "the-first-beta-weekend-event-begins-august-7/",
	Start: new Date("2015-08-07T19:00:00Z"),
	Finish: new Date("2015-08-10T19:00:00Z")
}
]
};