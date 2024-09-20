const roles = [
    "Knight", "Mage", "Rogue", "Archer", "Paladin", "Blacksmith", "Healer", "Assassin", "Saint", "Tamer",
    "Necromancer", "Unknown", "Death Knight", "Farmer", "Demon King", "Swordman", "Magic Swordman",
    "Martial Artist", "Trader", "Archmage", "Slave", "Chef", "Rifleman"
];

const races = [
    "Human", "Elf", "Dwarf", "Orc", "Beast", "Dark Elf", "Dragon", "Half Dragon", "Half Elf", "Demon",
    "Werewolf", "Succubus", "Divine Being", "Feline", "Frogman", "Lizardman", "Slime", "Jawir",
    "Sarkaz", "Liberi", "Sankta", "Deer", "Fishman", "Unknown"
];

const regions = [
    "LowRess Kingdom", "Liberia", "Great Forest", "Heavenhold", "Kingdom of Erusea", "Soviet Republics"
];
const genders = ["Male", "Female", "Non-binary"];
const roleSkills = {
    "Knight": ["Sword Mastery", "Shield Mastery", "Mounted Combat", "War Cry", "Heavy Armor", "Tactical Strategy", "Battle Charge", "Shield Bash", "Combat Reflexes", "Defensive Stance", "Sword Block", "Battlefield Awareness", "Parry", "Shield Slam", "Armor Reinforcement", "Toughness", "Sword Precision", "Holy Vow", "Defender's Resolve", "Battle Endurance"],
    "Mage": ["Fire Magic", "Water Magic", "Earth Magic", "Wind Magic", "Lightning Magic", "Arcane Magic", "Teleportation", "Time Manipulation", "Illusion", "Energy Bolt", "Mana Control", "Dark Magic", "Summon Elementals", "Meteor Shower", "Magic Shield", "Mana Drain", "Arcane Blast", "Magic Ward", "Mana Burst", "Elemental Mastery"],
    "Rogue": ["Stealth", "Sneak Attack", "Lockpicking", "Pickpocketing", "Backstab", "Evasion", "Poison Crafting", "Agility Boost", "Silent Step", "Ambush", "Trap Detection", "Shadow Step", "Dagger Mastery", "Dual Wielding", "Smoke Bomb", "Shadow Meld", "Thievery", "Quick Escape", "Decoy", "Cloak of Shadows"],
    "Archer": ["Archery", "Tracking", "Trap Setting", "Camouflage", "Eagle Eye", "Quick Shot", "Bow Mastery", "Arrow Crafting", "Precision Shot", "Wind Guidance", "Critical Strike", "Multi Shot", "Long Range Mastery", "Animal Companion", "Piercing Arrow", "Explosive Arrow", "Double Shot", "Sniper Focus", "Hawk Eye", "Rapid Fire"],
    "Paladin": ["Holy Strike", "Divine Protection", "Healing", "Sword Mastery", "Shield of Faith", "Blessing of Light", "Aura of Courage", "Smite Evil", "Guardian's Shield", "Divine Resilience", "Holy Aura", "Purification", "Divine Judgement", "Divine Shield", "Light's Wrath", "Sacred Sword", "Healing Light", "Holy Hammer", "Divine Crusade", "Faith Barrier"],
    "Blacksmith": ["Blacksmithing", "Crafting", "Metal Manipulation", "Weapon Forging", "Armor Crafting", "Enchanting", "Repairing", "Mining", "Material Refinement", "Tool Crafting", "Metalworking", "Rune Engraving", "Weapon Enhancement", "Resource Management", "Hammer Strike", "Metal Shaping", "Smith's Endurance", "Ore Detection", "Forge Mastery", "Anvil Strike"],
    "Healer": ["Healing", "Potion Brewing", "Herbalism", "Light Magic", "First Aid", "Divine Touch", "Cure Disease", "Revitalize", "Holy Ward", "Life Restoration", "Group Healing", "Resurrection", "Mana Regeneration", "Protective Aura", "Restoration Surge", "Healing Circle", "Cleanse", "Renewal", "Sanctified Healing", "Restorative Light"],
    "Assassin": ["Stealth", "Poison Crafting", "Sneak Attack", "Dagger Mastery", "Critical Strike", "Dual Wielding", "Silent Step", "Shadow Meld", "Smoke Bomb", "Assassination", "Death Strike", "Vanish", "Shadow Clone", "Nerve Strike", "Ambush", "Silent Kill", "Toxin Expert", "Blinding Powder", "Heart Strike", "Deadly Precision"],
    "Saint": ["Blessing Magic", "Divine Protection", "Healing", "Charisma", "Inspiration", "Holy Flame", "Sanctuary", "Holy Light", "Miracle", "Divine Aura", "Sacred Shield", "Purify", "Light of Hope", "Holy Wrath", "Blessed Words", "Divine Intervention", "Blessing of Strength", "Holy Song", "Sacred Prayer", "Eternal Light"],
    "Tamer": ["Animal Training", "Beast Communication", "Taming Magic", "Summon Beast", "Beast Mastery", "Animal Bond", "Feral Rage", "Beast Riding", "Track Animals", "Command Beast", "Wild Frenzy", "Animal Empathy", "Beast Whisperer", "Tame Elemental", "Summon Spirit Beast", "Feral Protection", "Nature's Call", "Primal Roar", "Savage Charge", "Pack Leader"],
    "Necromancer": ["Necromancy", "Curse Magic", "Soul Magic", "Bone Magic", "Dark Ritual", "Raise Dead", "Undead Mastery", "Corpse Explosion", "Soul Drain", "Lich Transformation", "Plague Magic", "Life Drain", "Dark Pact", "Death's Embrace", "Graveborn", "Soul Reaver", "Spirit Shackles", "Shadow of Death", "Soul Harvest", "Deathly Aura"],
    "Unknown": ["Unknown Skill", "Mystery", "Hidden Talent", "Adaptability", "Survival Instinct", "Random Burst", "Eternal Enigma", "Shifting Powers", "Unpredictable Talent", "Foresight", "Chaos Manipulation", "Arcane Puzzle", "Reality Bending", "Anomalous Strength", "Unstable Magic", "Flicker Strike", "Quantum Leap", "Temporal Shift", "Mimic", "Darkness Within"],
    "Death Knight": ["Death Blade", "Soul Drain", "Plague Strike", "Undead Mastery", "Dark Armor", "Cursed Shield", "Death Charge", "Grim Command", "Necrotic Slash", "Unholy Aura", "Corpse Explosion", "Bone Shield", "Life Steal", "Dark Pact", "Vampiric Strike", "Reaper's Touch", "Soul Reaper", "Dark Command", "Death's Advance", "Doom Strike"],
    "Farmer": ["Harvesting", "Soil Knowledge", "Crop Mastery", "Animal Husbandry", "Seed Crafting", "Irrigation Mastery", "Plowing", "Plant Growth", "Land Fertility", "Livestock Care", "Crop Rotation", "Agricultural Trade", "Farming Tools", "Pest Control", "Farm Management", "Compost Creation", "Breeding Mastery", "Crop Forecasting", "Herbology", "Barn Construction"],
    "Demon King": ["Dark Command", "Infernal Flames", "Demon Summoning", "Absolute Domination", "Demonic Aura", "Soul Corruption", "Hellfire", "Dark Rebirth", "Demon Lord's Might", "Dark Pact", "Summon Demon Hordes", "Hellstorm", "Infernal Protection", "Shadow Flame", "Doom Prophecy", "Chaos Control", "Abyssal Magic", "Soul Reaver", "Eternal Torment", "Cursed Throne"],
    "Swordman": ["Sword Mastery", "Blade Dance", "Quick Strike", "Deflect", "Parry", "Sword Combo", "Sharp Focus", "Sword Spin", "Deadly Slash", "Sword Precision", "Sword Reflection", "Blade Guard", "Heavy Strike", "Sword Blitz", "Raging Slash", "Sword of Fury", "Rapid Slash", "Sword Counter", "Blade Crush", "Whirling Blade"],
    "Magic Swordman": ["Sword Mastery", "Elemental Blade", "Arcane Strike", "Mana Infusion", "Sword Dance", "Enchanted Weapon", "Magic Burst", "Quick Slash", "Spellblade", "Blade of Flames", "Ice Blade", "Lightning Edge", "Earth Cleave", "Wind Cutter", "Sword of Light", "Darkness Slash", "Sword Aura", "Mystic Edge", "Arcane Barrier", "Mana Shield"],
    "Martial Artist": ["Hand-to-Hand Combat", "Pressure Point Strike", "Fists of Fury", "Agility Boost", "Palm Strike", "Roundhouse Kick", "Counterattack", "Chi Focus", "Tiger Stance", "Dragon Kick", "Iron Fist", "Body Hardening", "Mental Focus", "Chi Channeling", "Flurry of Blows", "Disarm", "Sweeping Kick", "Nerve Strike", "Power Punch", "Energy Burst"],
    "Trader": ["Bartering", "Market Analysis", "Negotiation", "Wealth Accumulation", "Merchant's Eye", "Inventory Management", "Contract Drafting", "Supply Chain", "Risk Assessment", "Sales Mastery", "Trade Secrets", "Customer Rapport", "Trade Route Knowledge", "Investment Strategies", "Merchant's Luck", "Price Manipulation", "Logistics Expertise", "Market Expansion", "Haggling", "Wealth Control"],
    "Archmage": ["Ultimate Fireball", "Meteor Shower", "Elemental Mastery", "Arcane Surge", "Mystic Explosion", "Mana Mastery", "Teleportation", "Time Warp", "Mana Storm", "Reality Shatter", "Infinite Wisdom", "Arcane Barrage", "Planar Rift", "Arcane Manipulation", "Elemental Fury", "Cosmic Insight", "Eternal Flame", "Mana Explosion", "Spellsurge", "Mana Infusion"],
    "Slave": ["Endurance", "Survival Instinct", "Pain Tolerance", "Obedience", "Escape Artist", "Servitude Mastery", "Submission", "Silent Endurance", "Servant's Will", "Willpower", "Stealth Work", "Escape Plan", "Unseen Movement", "Rebellious Mind", "Survival Expert", "Hidden Talent", "Chained Strength", "Mental Resilience", "Resistance", "Hidden Strength"],
    "Chef": ["Cooking", "Ingredient Sourcing", "Flavor Mastery", "Knife Skills", "Heat Control", "Herb Knowledge", "Food Presentation", "Recipe Creation", "Gourmet Crafting", "Culinary Expertise", "Meal Preparation", "Food Preservation", "Baking Mastery", "Herb Infusion", "Ingredient Substitution", "Food Safety", "Multitasking", "Culinary Innovation", "Taste Testing", "Plating Expertise"],
    "Rifleman": ["Precise Aim", "Wind Estimation", "Critical Strike", "Lethality", "Mass Shooting", "Bayonet Fight", "Multishot", "Dead Eye", "Overload", "Suppresive Fire", "Close Air Support", "Guerrilla", "Artillery Strike", "Iron Clad", "Dual Welding", "Bullseye", "Total Focus", "Eyes In The Sky", "Infinite Mazagine", "Bulletproof", "Limit Break", "Two Birds One Stone", "APHE Shots"]
};
const stage = ["Married", "Divorced", "Widowed", "Alone", "Engaged"];
const ranks = ["F", "E", "D", "C", "B", "A", "S", "SS", "SSS"];
const guilds = ["PSHT", "RHODES", "Silverthorn", "Dragonshade", "Shadowspire", "El Gasing", "Mariners"];
const titles = {
    "Knight": ["Champion of Light", "Guardian of the Realm", "Master of Arms", "Sword Guardian", "Defender of the Weak"],
    "Mage": ["Master of Elements", "Arcane Scholar", "Stormcaller", "Elemental Weaver", "Mystic of the Arcane"],
    "Rogue": ["Adept of Shadows", "Silent Blade", "Shadow Stalker", "Master Thief", "Cloaked Avenger"],
    "Archer": ["Eagle Eye", "Sharpshooter", "Bowmaster", "Hunter of the Wild", "Silent Marksman"],
    "Paladin": ["Divine Protector", "Lightbringer", "Holy Crusader", "Guardian of the Faith", "Shield of Light"],
    "Blacksmith": ["Master Blacksmith", "Forge Master", "Hammer of the Forge", "Steel Crafter", "Anvil Guardian"],
    "Healer": ["Grand Healer", "Life Restorer", "Saint of Light", "Divine Medic", "Reviver of Souls"],
    "Assassin": ["Master Assassin", "Death's Whisper", "Silent Executioner", "Shadow's Edge", "Night Hunter"],
    "Saint": ["Blessed Savior", "Eternal Light", "Divine Speaker", "Holy Guardian", "Radiant Saint"],
    "Tamer": ["Beast Master", "Wild Whisperer", "Rider of Beasts", "Nature's Bond", "Animal Sovereign"],
    "Necromancer": ["Necromancer King", "Master of the Dead", "Soul Weaver", "Lord of Shadows", "Gravecaller"],
    "Unknown": ["Enigma", "Fate Twister", "Seeker of the Unknown", "Wielder of Chaos", "Shifter of Realms"],
    "Death Knight": ["Reaper of Souls", "Doombringer", "Knight of Death", "Grim Commander", "Bearer of Darkness"],
    "Farmer": ["Harvest Lord", "Master of Fields", "Crop Sovereign", "Tiller of the Earth", "Lord of the Land"],
    "Demon King": ["Emperor of Flames", "Lord of Chaos", "Dark Overlord", "Hell's Ruler", "Master of Despair"],
    "Swordman": ["Master Swordsman", "Blademaster", "Sword Sage", "Steel Tempest", "Blade Lord"],
    "Magic Swordman": ["Arcane Blademaster", "Mystic Swordsman", "Elemental Bladesman", "Spellblade", "Mana Wielder"],
    "Martial Artist": ["Master of Fists", "Chi Guardian", "Iron Fist", "Dragon Warrior", "Martial Master"],
    "Trader": ["Master Merchant", "Goldfinger", "Wealth Accumulator", "Lord of Trade", "Market King"],
    "Archmage": ["Archmage Supreme", "Master of Magic", "Eternal Scholar", "Cosmic Magus", "Arcane Sovereign"],
    "Slave": ["Survivor", "Endurer of Chains", "Liberated Soul", "Unseen Warrior", "Silent Strength"],
    "Chef": ["Ultimate Chef", "Gourmet King", "Master of Flavors", "Grand Cook", "Sovereign of Taste"],
    "Rifleman": ["Deadshot", "Precision Shooter", "Pistol Specialist", "Rifle Expert", "Marines for Life"],
};
const roleWeapon = {
    "Knight": ["Heavy Sword", "Short Sword", "Sword and Shield", "Spear", "Club", "Bat"],
    "Mage": ["Staff of Water", "Staff of Earth", "Staff of Fire", "Staff of Darkness", "Metal Staff", "Magic Book"],
    "Rogue": ["Daggers", "Short Sword", "Switchblade", "Club", "Cleaver", "Silenced Pistol"],
    "Archer": ["Longbow", "Quick-fire Bow"],
    "Paladin": ["Heavy Sword", "Short Sword", "Sword and Shield"],
    "Blacksmith": ["Hammer", "Anvil", "Pickaxe", "Shovel", "Axe"],
    "Healer": ["Staff of Cleanse", "Staff of Healing", "Staff of Regeneration", "Book of Healing"],
    "Assasin": ["Katana", "Wakizashi", "Shuriken", "Daggers", "Sickle"],
    "Saint": [],
    "Tamer": ["Bear", "Crocodile", "Dinosaur", "Elephant", "Tiger", "Leopard"],
    "Necromancer": ["Staff of Darkness", "Staff of Skull", "Femur", "Bone Staff", "Book of the Undead"],
    "Unknown": [],
    "Death Knight": ["Reaper", "Undead Heavy Sword", "Short Sword of Death", "Sword and Shield", "Spear", "Club", "Bat"],
    "Farmer": ["Sickles", "Pitchforks", "Sticks", "Stone", "Bat"],
    "Demon King": [],
    "Swordman": ["Heavy Sword", "Short Sword", "Daggers", "Katana", "Wakizashi", "Cleaver"],
    "Magic Swordman": ["Magic-induced Heavy Sword", "Magic-induced Short Sword", "Magic-induced Daggers", "Magic-induced Katana", "Magic-induced Wakizashi", "Magic-induced Cleaver"],
    "Martial Artist" :[],
    "Trader": [],
    "Archmage": ["Staff of Water", "Staff of Earth", "Staff of Fire", "Staff of Darkness", "Metal Staff", "Magic Book", "Staff of Darkness", "Staff of Skull", "Femur", "Bone Staff", "Book of the Undead"],
    "Slave": [],
    "Chef": ["Cleaver", "Axe", "Spatula", "Saucepan", "Wok", "Pot", "Kettle", "Rolling Pin"],
    "Rifleman": ["Pistol", "Dagger", "Shotgun", "Assault Rifle", "Light Machine Gun", "Heavy Machine Gun", "Sniper Rifle", "Flashbang", "Frag Grenade"]
};
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Weapon = document.getElementById("weaponry");
Weapon.style.display = "None";
function submitName() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        const race = getRandomElement(races);

        let role;
        do {
            role = getRandomElement(roles);
        } while (
            (["Demon", "Sarkaz", "Orc"].includes(race) && ["Healer", "Paladin", "Saint"].includes(role)) ||
            (role === "Blacksmith" && race !== "Dwarf")
        );


        document.getElementById("inputForm").style.display = "none";

        const strength = getRandomNumber(1, 100);
        const health = getRandomNumber(25, 100);
        const mana = getRandomNumber(1, 100);
        const agi = getRandomNumber(1, 100);
        const lev = getRandomNumber(1, 100);
        const guild = getRandomElement(guilds);
        const ra = getRandomElement(ranks);
        const region = getRandomElement(regions);
        const characterSkills = [];
        const numberOfSkills = getRandomNumber(3, 5);
        const age = getRandomNumber(22, 60);
        const situation = getRandomElement(stage);
        const skillList = document.getElementById("charSkill");
        skillList.innerHTML = "";

        const availableSkills = roleSkills[role];
        const availableWeapon = roleWeapon[role];
        const characterWeapon = [];
        const WeaponNumber = 1;
        
        for (let i = 0; i < numberOfSkills; i++) {
            const skill = getRandomElement(availableSkills);
            const rank = getRandomElement(ranks);
            if (!characterSkills.includes(skill)) {
                //characterSkills.push(`${skill} (Rank ${rank})`);
                characterSkills.push({
                    skill: skill,
                    rank: rank
                })
            }

            const listItem = document.createElement("li");
            listItem.textContent = `${skill} (Rank ${rank})`;
            skillList.appendChild(listItem);
        }

        const titlesCount = getRandomNumber(1, 2);
        const titleList = document.getElementById("charTitle");
        titleList.innerHTML = "";

        const availableTitles = titles[role];


        for (let i = 0; i < titlesCount; i++) {
            const title = getRandomElement(availableTitles);
            const titleRank = getRandomElement(ranks);
            const listItem = document.createElement("li");
            listItem.textContent = `${title} (Rank ${titleRank})`;
            titleList.appendChild(listItem);
        }

        for (let i = 0; i <WeaponNumber; i++){
            if(role == "Saint" || role == "Unknown" || role == "Demon King" || role == "Martial Artist" || role == "Trader" || role == "Slave"){
                Weapon.style.display = "None";
            }
            else{
                Weapon.style.display = "block";
                const weapon = getRandomElement(availableWeapon);
                const rank = getRandomElement(ranks);
                if(role == "Tamer"){
                    document.getElementById("name").innerHTML = "Favorite Animal";
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (Rank ${rank})`)
                    }
                }
                else{
                    if(!characterWeapon.includes(weapon)){
                        characterWeapon.push(`${weapon} (Rank ${rank})`)
                    }
                }
            }
        }

        document.getElementById("charName").textContent = name;
        document.getElementById("charAgi").textContent = agi;
        document.getElementById("charLev").textContent = lev;
        document.getElementById("charRole").textContent = role;
        document.getElementById("charRace").textContent = race;
        document.getElementById("charStrength").textContent = strength;
        document.getElementById("charHealth").textContent = health;
        document.getElementById("charMana").textContent = mana;
        //document.getElementById("charRank").textContent = ra;
        document.getElementById("charGuild").textContent = guild;
        document.getElementById("charRegion").textContent = region;
        document.getElementById("charAge").textContent = age;
        document.getElementById("charStatus").textContent = situation;
        document.getElementById("charWeapon").textContent = characterWeapon;
        document.getElementById("charWeapon").textContent = characterWeapon;

        if (["Healer", "Paladin", "Saint"].includes(role)) {
            const divinePower = getRandomNumber(50, 100);
            document.getElementById("charDivinePower").textContent = divinePower;
            document.getElementById("divinePower").style.display = "block";
        }

        if (["Necromancer", "Unknown", "Death Knight", "Demon King"].includes(role) || race === "Demon") {
            const darkEnergy = getRandomNumber(50, 100);
            document.getElementById("charDarkEnergy").textContent = darkEnergy;
            document.getElementById("darkEnergy").style.display = "block";
        }

        document.getElementById("characterDisplay").style.display = "block";
    } else {
        alert("Please enter a name.");
    }
}