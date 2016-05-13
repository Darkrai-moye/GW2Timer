/*
 * This file is used by http://gw2timer.com/toys
 * Catalog of gizmos and consumables inventory items.
 */

/*
 * Category translations.
 */
var GW2T_TOYS_HEADERS = {
	Token: {name_en: "Keys and Tokens", name_de: "Schlüssel und Marken", name_es: "Llaves y Fichas", name_fr: "Clés et Jetons"},
	Gathering: {name_en: "Gathering Tools", name_de: "Sammelwerkzeug", name_es: "Herramienta de recolección", name_fr: "Outil de récolte"},
	Contract: {name_en: "Permanent Contracts", name_de: "Vertrag permanenten", name_es: "Contrato permanente", name_fr: "Contrat permanent"},
	Converter: {name_en: "Converters", name_de: "Konverter", name_es: "Conversores", name_fr: "Convertisseurs"},
	Blueprint: {name_en: "Siege Blueprints", name_de: "Belagerungswaffe Blaupausen", name_es: "Planos arma de asedio", name_fr: "Plans arme de siège"},
	Bundle: {name_en: "Bundles and Consumables", name_de: "Umgebungswaffen", name_es: "Arma ambiental", name_fr: "Arme environnementale"},
	Toy: {name_en: "Gem Store Toys", name_de: "Edelsteinshop Spielzeuge", name_es: "Juguetes tienda de gemas", name_fr: "Jouets boutique aux gemmes"},
	Music: {name_en: "Musical Instruments", name_de: "Musikinstrumente", name_es: "Instrumentos musicales", name_fr: "Instruments de musique"},
	Gem: {name_en: "Gem Store Items", name_de: "Edelsteinshop Gegenstandes", name_es: "Objetos tienda de gemas", name_fr: "Objets boutique aux gemmes"},
	Tonic: {name_en: "Transformation Tonics", name_de: "Transformation Trank", name_es: "Tónicos de transformación", name_fr: "Toniques de transformation"},
	TonicEndless: {name_en: "Endless Tonics", name_de: "Trank", name_es: "Tónicos", name_fr: "Toniques"},
	Aura: {name_en: "Cosmetic Auras", name_de: "Kosmetik-Auren", name_es: "Auras cosméticos", name_fr: "Auras cosmétiques"},
	Legendary: {name_en: "Legendary Weapons", name_de: "Legendäre Waffen", name_es: "Armas legendarias", name_fr: "Armes légendaires"}
};

/*
 * Catalog of toys.
 * i: Item ID associated with that toy
 * n: Name of toy
 * p: Payment type to acquire the item
 */
var GW2T_TOYS_DATA = {
Token: [
	{i: "19980", n: "Black Lion Chest Key", p: {gem: 125}},
	{i: "36708", n: "Black Lion Chest Key", p: {gem: 125}},
	{i: "43992", n: "Black Lion Claim Ticket", p: {gem: 0}},
	{i: "43998", n: "Black Lion Claim Ticket Scrap", p: {gem: 0}},
	{i: "49129", n: "Mysterious Blue Key", p: {token: 10}},
	{i: "49130", n: "Mysterious Green Key", p: {token: 10}},
	{i: "49131", n: "Mysterious Pink Key", p: {token: 10}},
],
Gathering: [
	{i: "67032", n: "Fused Molten Sickle", p: {gem: 1000}},
	{i: "67030", n: "Fused Molten Logging Axe", p: {gem: 1000}},
	{i: "48933", n: "Molten Alliance Mining Pick", p: {gem: 1000}},
	{i: "67029", n: "Tireless Logging Minion", p: {gem: 1000}},
	{i: "67063", n: "Tireless Harvesting Minion", p: {gem: 1000}},
	{i: "48932", n: "Bone Pick", p: {gem: 1000}},
	{i: "67395", n: "Reap-r-Tron", p: {gem: 1000}},
	{i: "67394", n: "Log-r-Tron", p: {gem: 1000}},
	{i: "67396", n: "Mine-r-Tron", p: {gem: 1000}},
	{i: "49308", n: "Thresher-Sickle 5000", p: {gem: 1000}},
	{i: "48931", n: "Chop-It-All Logging Axe", p: {gem: 1000}},
	{i: "47897", n: "Watchwork Mining Pick", p: {gem: 1000}},
	{i: "69478", n: "Mad Scientist's Harvesting Tool", p: {gem: 1000}},
	{i: "68799", n: "Mad Scientist's Logging Tool", p: {gem: 1000}},
	{i: "68905", n: "Mad Scientist's Mining Tool", p: {gem: 1000}},
	{i: "70044", n: "Butterfly Harvesting Flute", p: {gem: 1000}},
	{i: "69921", n: "Swarm Logging Flute", p: {gem: 1000}},
	{i: "69958", n: "Firefly Mining Flute", p: {gem: 1000}},
	{i: "48930", n: "Consortium Harvesting Sickle", p: {gem: 1000}},
	{i: "48934", n: "Jack-in-the-Box Scythe", p: {gem: 1000}},
	{i: "48955", n: "Dreamcleaver Logging Axe", p: {gem: 1000}},
	{i: "48825", n: "Frost Wasp Logging Tool", p: {gem: 1000}},
	{i: "78731", n: "Cosmic Mining Tool", p: {gem: 1000}}
],
Contract: [
	{u: "35986", i: "35976", n: "Personal Trader Express"},
	{u: "35985", i: "35977", n: "Personal Merchant Express"},
	{u: "35984", i: "35978", n: "Permanent Bank Access Express"},
	{u: "38507", i: "38506", n: "Permanent Self-Style Hair Kit"},
	{u: "78455", i: "78217", n: "Endless Repair Canister"},
	{i: "35728", n: "Mystic Forge Conduit"},
	{u: "70010", i: "70013", n: "Mystic Forge Conduit"},
	{i: "49501", n: "Tarrktun Personal Delivery Portal", p: {coin: 100000000}},
	{i: "20030", n: "Hall of Monuments Portal Stone", p: {coin: 0}},
	{i: "49149", n: "Royal Terrace Pass", p: {gem: 1000}},
	{i: "50104", n: "Captain's Airship Pass", p: {gem: 1000}},
	{i: "78177", n: "Permanent Portable Provisioner", p: {coin: 10000}},
	{i: "76293", n: "Rata Sum Portal Scroll", p: {craft: true}},
	{i: "70968", n: "The Grove Portal Scroll", p: {craft: true}},
	{i: "71577", n: "Divinity's Reach Portal Scroll", p: {craft: true}},
	{i: "76065", n: "Ebonhawke Portal Scroll", p: {craft: true}},
	{i: "76630", n: "Black Citadel Portal Scroll", p: {craft: true}},
	{i: "76827", n: "Hoelbrak Portal Scroll", p: {craft: true}},
	{i: "73024", n: "Lion's Arch Portal Scroll", p: {craft: true}},
],
Converter: [
	{i: "67393", n: "Candy Corn Gobbler", p: {gem: 300}},
	{i: "77093", n: "Herta", p: {achievement: 0}},
],
Blueprint: [

],
Bundle: [
	{i: "24", n: "Sealed Package of Snowballs", p: {gem: 0}},
],
Toy: [
	{i: "20312", n: "How to Dance, Volume 1", p: {gem: 400}},
	{i: "36172", n: "Bobblehead Laboratory", p: {gem: 400}},
	{i: "49930", n: "Boxing Gloves", p: {gem: 0}},
	{i: "49931", n: "Riding Broom", p: {gem: 0}},
	{i: "49932", n: "Enchanted Broom", p: {gem: 0}},
	{i: "49933", n: "Bouquet of Roses", p: {gem: 0}},
	{i: "49939", n: "Frying Pan", p: {gem: 0}},
	{i: "49940", n: "Executioner Axe Toy", p: {gem: 0}},
	{i: "49941", n: "Bloody Prince's Staff Toy", p: {gem: 0}},
	{i: "49942", n: "Pirate Sword", p: {gem: 0}},
	{i: "49943", n: "Scepter of Thorn", p: {gem: 0}},
	{i: "49948", n: "Sonic Tunneling Tool", p: {gem: 0}},
	{i: "42967", n: "Lightning Kite", p: {gem: 0}},
	{i: "43076", n: "Wind Kite", p: {gem: 0}},
	{i: "43487", n: "Sun Kite", p: {gem: 0}},
	{i: "43930", n: "Guild Kite", p: {gem: 0}},
	{i: "66897", n: "Prosperity Mine Kite", p: {gem: 0}},
	{i: "66898", n: "Crystal Shard Kite", p: {gem: 0}},
	{i: "66900", n: "Ventari Follower Kite", p: {gem: 0}},
],
Music: [
	{i: "38128", n: "Choir Bell"},
	{i: "38129", n: "Unbreakable Choir Bell"},
	{u: "68362", i: "68361", n: "Magnanimous Choir Bell"},
	{i: "42888", n: "Marriner's Horn", p: {gem: 800}},
	{i: "42973", n: "Flute", p: {gem: 800}},
	{i: "36174", n: "Musical Bass Guitar", p: {gem: 800}},
	{i: "43526", n: "Musical Frame Drum", p: {gem: 800}},
	{i: "44883", n: "Musical Harp", p: {gem: 800}},
	{i: "66323", n: "Musical Lute", p: {gem: 800}},
	{i: "46500", n: "World 1 Super Boom Box", p: {bubble: 35}},
	{i: "46504", n: "World 2 Super Boom Box", p: {bubble: 35}}
],
Gem: [
	{i: "21043", n: "Golem Banker", p: {gem: 0}},
	{i: "21048", n: "Golem Banker", p: {gem: 0}},
	{i: "36171", n: "Banker Golem (2 weeks)", p: {gem: 500}},
	{i: "18827", n: "Instant Repair Canister", p: {gem: 30}},
	{i: "19992", n: "Instant Repair Canister", p: {gem: 30}},
	{i: "19983", n: "Mystic Forge Stone", p: {gem: 45}},
	{i: "42968", n: "Captain's Airship Pass (2 weeks)", p: {gem: 0}},
	{i: "42976", n: "Boost Enchantment Powder", p: {gem: 0}},
],
Tonic: [
	{i: "35747", n: "Cold Potion"},
	{i: "35748", n: "Hard Potion"},
	{i: "35749", n: "Charged Potion"},
	{i: "35750", n: "Warm Potion"},
	{u: "49145", i: "20319", n: "Endless Mystery Tonic (beast)"},
	{u: "49146", i: "20320", n: "Endless Mystery Tonic (furniture)"},
	{u: "49147", i: "20321", n: "Endless Mystery Tonic (forest)"},
	{i: "50014", n: "Selfless Potion", p: {gem: 0}},
	{i: "50048", n: "Thoughtless Potion", p: {gem: 0}},
	{i: "36105", n: "Endless Multicolored Ooze Tonic"},
	{i: "36106", n: "Endless Halloween Tonic"},
	{i: "36176", n: "Endless Riding Clothes Tonic"},
	{i: "36179", n: "Endless Common Clothing Tonic"},
	{i: "36180", n: "Endless Khaki Clothing Tonic"},
	{i: "36183", n: "Endless Designer Hoodie Clothing Tonic"},
	{i: "36184", n: "Endless Leather Hoodie Clothing Tonic"},
	{i: "36185", n: "Endless Silk Brocade Clothing Tonic"},
	{i: "36186", n: "Endless Layered Vest Clothing Tonic"},
	{i: "36187", n: "Endless Casual Clothing Tonic"},
	{i: "36188", n: "Endless Striped Silk Clothing Tonic"},
	{i: "36189", n: "Endless Cherry Blossom Clothing Tonic"},
	{i: "36190", n: "Endless Country Lace Clothing Tonic"},
	{i: "36191", n: "Endless Ornate Clothing Tonic"},
	{i: "36192", n: "Endless Dragon Emblem Clothing Tonic"},
	{i: "36200", n: "Endless Casual Hoodie Clothing Tonic"},
	{i: "36727", n: "Endless Karka Tonic"},
	{i: "38115", n: "Endless Toymaker's Tonic"},
	{i: "38116", n: "Endless Toy Ventari Tonic"},
	{i: "38117", n: "Endless Plush Griffon Tonic"},
	{i: "38118", n: "Endless Toy Golem Tonic"},
	{i: "38119", n: "Endless Toy Soldier Tonic"},
	{i: "38120", n: "Endless Princess Doll Tonic"},
	{i: "38121", n: "Endless Gift Dolyak Tonic"},
	{i: "39101", n: "Endless Mystery Cat Tonic"},
	{i: "39711", n: "Endless Guild Banner Tonic"},
	{i: "50040", n: "Endless Mystery Quaggan Tonic", p: {gem: 0}},
	{i: "50042", n: "Endless Blue Quaggan Tonic", p: {gem: 0}},
	{i: "50043", n: "Endless Pink Quaggan Tonic", p: {gem: 0}},
	{i: "50046", n: "Endless Black Quaggan Tonic", p: {gem: 0}},
	{i: "50047", n: "Endless Green Quaggan Tonic", p: {gem: 0}},
	{i: "49277", n: "Endless Fractal Tonic", p: {gem: -0}},
	{i: "66214", n: "Endless Dolyak Calf Tonic", p: {gem: -0}},
	{i: "66768", n: "Endless Monkey King Tonic", p: {gem: -0}},
	{i: "67362", n: "Endless Bottle of Batwing Brew", p: {gem: -0}},
	{i: "67784", n: "Endless Dust Mite Tonic", p: {gem: -0}},
	{i: "67805", n: "Endless Arid Devourer Tonic", p: {gem: -0}},
	{i: "68046", n: "Endless Skritt Burglar Tonic", p: {gem: -0}},
	{i: "68058", n: "Endless Mordrem Husk Tonic", p: {gem: -0}},
	{i: "68064", n: "Endless Mordrem Thrasher Tonic", p: {gem: -0}},
	{i: "68368", n: "Endless Gift Box Tonic", p: {gem: -0}},
	{i: "68520", n: "Endless Mordrem Troll Tonic", p: {gem: -0}},
	{i: "68530", n: "Endless Mordrem Teragriff Tonic", p: {gem: -0}},
	{i: "69651", n: "Endless Interface Crafter Golem Tonic", p: {gem: -0}},
	{i: "70619", n: "Endless Exalted Bastion Tonic", p: {gem: -0}},
	{i: "71680", n: "Endless Mushroom Emperor Tonic", p: {gem: -0}},
	{i: "71683", n: "Endless Chak Slinger Tonic", p: {gem: -0}},
	{i: "71739", n: "Endless Mushroom King Tonic", p: {gem: -0}},
	{i: "72894", n: "Endless Chak Drone Tonic", p: {gem: -0}},
	{i: "73310", n: "Endless Mushroom Queen Tonic", p: {gem: -0}},
	{i: "73577", n: "Endless Beetle Tonic", p: {gem: -0}},
	{i: "74186", n: "Endless Spotted Beetle Tonic", p: {gem: -0}},
	{i: "74594", n: "Endless Chak Zapper Tonic", p: {gem: -0}},
	{i: "75636", n: "Endless Mushroom Tonic", p: {gem: -0}},
	{i: "76174", n: "Endless Exalted Caster Tonic", p: {gem: -0}},
	{i: "77101", n: "Endless Nuhoch Tonic", p: {gem: -0}},
	{i: "77167", n: "Endless Nuhoch Crusher Tonic", p: {gem: -0}},
	{i: "42403", n: "Infinite Molten Berserker Tonic", p: {gem: 0}},
	{i: "43352", n: "Infinite Aetherized Tonic", p: {gem: -0}},
	{i: "44720", n: "Infinite Watchknight Tonic", p: {gem: -0}},
	{i: "49133", n: "Infinite Toxic Krait Tonic", p: {gem: -0}},
	{i: "77983", n: "Infinite Slubling Tonic", p: {gem: -0}},
],
Aura: [
	{i: "68440", n: "Preserved Queen Bee"},
	{i: "77594", n: "Preserved Queen Bee"},
	{i: "72021", n: "Chak Egg Sac"},
	{i: "76063", n: "Vial of Liquid Aurillium"},
	{i: "77274", n: "Ghostly Infusion"},
	{i: "77303", n: "Ghostly Infusion"},
	{i: "77310", n: "Ghostly Infusion"},
	{i: "77316", n: "Ghostly Infusion"},
	{i: "77366", n: "Ghostly Infusion"},
	{i: "77394", n: "Ghostly Infusion"},
	{i: "67375", n: "Poly-luminescent Undulating Refractor (Black)"},
	{i: "67370", n: "Poly-luminescent Undulating Refractor (Green)"},
	{i: "67372", n: "Poly-luminescent Undulating Refractor (Orange)"},
	{i: "78012", n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: "78052", n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: "78054", n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: "78079", n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: "78086", n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: "78090", n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: "78016", n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: "78028", n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: "78030", n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: "78031", n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: "78057", n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: "78097", n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}}
],
Legendary: [
	{i: "30684", n: "Frostfang"},
	{i: "30685", n: "Kudzu"},
	{i: "30686", n: "The Dreamer"},
	{i: "30687", n: "Incinerator"},
	{i: "30688", n: "The Minstrel"},
	{i: "30689", n: "Eternity"},
	{i: "30690", n: "The Juggernaut"},
	{i: "30691", n: "Kamohoali'i Kotaki"},
	{i: "30692", n: "The Moot"},
	{i: "30693", n: "Quip"},
	{i: "30694", n: "The Predator"},
	{i: "30695", n: "Meteorlogicus"},
	{i: "30696", n: "The Flameseeker Prophecies"},
	{i: "30697", n: "Frenzy"},
	{i: "30698", n: "The Bifrost"},
	{i: "30699", n: "Bolt"},
	{i: "30700", n: "Rodgort"},
	{i: "30701", n: "Kraitkin"},
	{i: "30702", n: "Howler"},
	{i: "30703", n: "Sunrise"},
	{i: "30704", n: "Twilight"},
	{i: "71383", n: "Nevermore", p: {craft: true}},
	{i: "72713", n: "HOPE", p: {craft: true}},
	{i: "76158", n: "Astralaria", p: {craft: true}},
	{i: "78556", n: "Chuka and Champawat", p: {craft: true}}
]
};