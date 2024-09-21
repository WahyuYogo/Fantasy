const roles = [
    "Knight", "Mage", "Rogue", "Archer", "Paladin", "Blacksmith", "Healer", "Assassin", "Saint", "Tamer",
    "Necromancer", "Unknown", "Death Knight", "Farmer", "Demon King", "Swordman", "Magic Swordman",
    "Martial Artist", "Trader", "Archmage", "Slave", "Chef", "Gun Slinger", "Shaman"
];

const races = [
    "Human", "Elf", "Dwarf", "Orc", "Beast", "Dark Elf", "Dragon", "Half Dragon", "Half Elf", "Demon",
    "Werewolf", "Succubus", "Divine Being", "Feline", "Frogman", "Lizardman", "Slime", "Jawir",
    "Sarkaz", "Liberi", "Sankta", "Deer", "Fishman", "Unknown", "Vampire", "Elemental"
];

const regions = [
    "LowRess Kingdom", "Liberia", "Great Forest", "Heavenhold"
];

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
    "Gun Slinger": ["Gun Mastery", "Precision Shooting", "Rapid Fire", "Bullet Crafting", "Dual Wielding", "Long Range Shot", "Headshot", "Ricochet Shot", "Explosive Bullet", "Piercing Shot", "Steady Aim", "Trick Shot", "Reload Speed", "Rapid Reload", "Marksmanship", "Firearm Tactics", "Armor Piercing Rounds", "Blindfire", "Tactical Retreat", "Sniper Mastery"],
    "Shaman": ["Spirit Summoning", "Totem Mastery", "Healing Wave", "Ancestral Guidance", "Lightning Strike", "Earthquake", "Spirit Walk", "Fire Totem", "Water Shield", "Wind Rush", "Nature's Fury", "Totemic Recall", "Hex", "Storm Call", "Thunder Clap", "Feral Spirit", "Spirit Bond", "Tribal Knowledge", "Cleansing Ritual", "Spirit Control"],
    "Chef": ["Cooking", "Ingredient Sourcing", "Flavor Mastery", "Knife Skills", "Heat Control", "Herb Knowledge", "Food Presentation", "Recipe Creation", "Gourmet Crafting", "Culinary Expertise", "Meal Preparation", "Food Preservation", "Baking Mastery", "Herb Infusion", "Ingredient Substitution", "Food Safety", "Multitasking", "Culinary Innovation", "Taste Testing", "Plating Expertise"]
};

const ranks = ["F", "E", "D", "C", "B", "A", "S"];
const guilds = ["PSHT", "RHODES", "Silverthorn", "Dragonshade", "Shadowspire"];
const titles = {
    "Knight": ["Champion of Light", "Guardian of the Realm", "Master of Arms", "Sword Guardian", "Defender of the Weak", "Anomaly", "Noob"],
    "Mage": ["Master of Elements", "Arcane Scholar", "Stormcaller", "Elemental Weaver", "Mystic of the Arcane", "Anomaly", "Noob"],
    "Rogue": ["Adept of Shadows", "Silent Blade", "Shadow Stalker", "Master Thief", "Cloaked Avenger", "Anomaly", "Noob"],
    "Archer": ["Eagle Eye", "Sharpshooter", "Bowmaster", "Hunter of the Wild", "Silent Marksman", "Anomaly", "Noob"],
    "Paladin": ["Divine Protector", "Lightbringer", "Holy Crusader", "Guardian of the Faith", "Shield of Light", "Anomaly", "Noob"],
    "Blacksmith": ["Master Blacksmith", "Forge Master", "Hammer of the Forge", "Steel Crafter", "Anvil Guardian", "Anomaly", "Noob"],
    "Healer": ["Grand Healer", "Life Restorer", "Saint of Light", "Divine Medic", "Reviver of Souls", "Anomaly", "Noob"],
    "Assassin": ["Master Assassin", "Death's Whisper", "Silent Executioner", "Shadow's Edge", "Night Hunter", "Anomaly", "Noob"],
    "Saint": ["Blessed Savior", "Eternal Light", "Divine Speaker", "Holy Guardian", "Radiant Saint", "Anomaly", "Noob"],
    "Tamer": ["Beast Master", "Wild Whisperer", "Rider of Beasts", "Nature's Bond", "Animal Sovereign", "Anomaly", "Noob"],
    "Necromancer": ["Necromancer King", "Master of the Dead", "Soul Weaver", "Lord of Shadows", "Gravecaller", "Anomaly", "Noob"],
    "Unknown": ["Enigma", "Fate Twister", "Seeker of the Unknown", "Wielder of Chaos", "Shifter of Realms", "Anomaly", "Noob"],
    "Death Knight": ["Reaper of Souls", "Doombringer", "Knight of Death", "Grim Commander", "Bearer of Darkness", "Anomaly", "Noob"],
    "Farmer": ["Harvest Lord", "Master of Fields", "Crop Sovereign", "Tiller of the Earth", "Lord of the Land", "Anomaly", "Noob"],
    "Demon King": ["Emperor of Flames", "Lord of Chaos", "Dark Overlord", "Hell's Ruler", "Master of Despair", "Anomaly", "Noob"],
    "Swordman": ["Master Swordsman", "Blademaster", "Sword Sage", "Steel Tempest", "Blade Lord", "Anomaly", "Noob"],
    "Magic Swordman": ["Arcane Blademaster", "Mystic Swordsman", "Elemental Bladesman", "Spellblade", "Mana Wielder", "Anomaly", "Noob"],
    "Martial Artist": ["Master of Fists", "Chi Guardian", "Iron Fist", "Dragon Warrior", "Martial Master", "Anomaly", "Noob"],
    "Trader": ["Master Merchant", "Goldfinger", "Wealth Accumulator", "Lord of Trade", "Market King", "Anomaly", "Noob"],
    "Archmage": ["Archmage Supreme", "Master of Magic", "Eternal Scholar", "Cosmic Magus", "Arcane Sovereign", "Anomaly", "Noob"],
    "Slave": ["Survivor", "Endurer of Chains", "Liberated Soul", "Unseen Warrior", "Silent Strength", "Anomaly", "Noob"],
    "Chef": ["Ultimate Chef", "Gourmet King", "Master of Flavors", "Grand Cook", "Sovereign of Taste", "Anomaly", "Noob"],
    "Gun Slinger": ["Sharpshooter", "Bullet Storm", "Master Marksman", "Gun Master", "Sniper Elite", "Anomaly", "Noob"],
    "Shaman": ["Spirit Walker", "Totem Lord", "Elemental Conduit", "Mystic of the Wild", "Keeper of the Spirits", "Anomaly", "Noob"]

};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function submitName() {
    const name = document.getElementById("nameInput").value;

    if (name.toLowerCase() === "wahyu yogo" || name.toLowerCase() === "wahyuyogo" || name.toLowerCase() === "wahyu setya") {
        document.getElementById("inputForm").style.display = "none";

        document.getElementById("charName").textContent = name;
        document.getElementById("charAgi").textContent = "????";
        document.getElementById("charLev").textContent = "????";
        document.getElementById("charRole").textContent = "Creator";
        document.getElementById("charRace").textContent = "????";
        document.getElementById("charStrength").textContent = "????";
        document.getElementById("charHealth").textContent = "????";
        document.getElementById("charMana").textContent = "????";
        document.getElementById("charGuild").textContent = "????";
        document.getElementById("charRegion").textContent = "????";

        const skillList = document.getElementById("charSkill");
        skillList.innerHTML = "";
        const listItem = document.createElement("li");
        listItem.textContent = "???? (????)";
        skillList.appendChild(listItem);

        const titleList = document.getElementById("charTitle");
        titleList.innerHTML = "";
        const titleItem = document.createElement("li");
        titleItem.textContent = "???? (????)";
        titleList.appendChild(titleItem);

        document.getElementById("divinePower").style.display = "none";
        document.getElementById("darkEnergy").style.display = "none";

        document.getElementById("characterDisplay").style.display = "block";
    } else if (name) {
        const race = getRandomElement(races);

        let role;
        const randomChance = Math.random() * 100;

        if (randomChance < 5) {
            role = "Demon King";
        } else if (randomChance < 10) {
            role = "Saint";
        } else {
            do {
                role = getRandomElement(roles);
            } while (
                (["Demon", "Sarkaz", "Orc"].includes(race) && ["Healer", "Paladin", "Saint"].includes(role)) ||
                (role === "Blacksmith" && race !== "Dwarf") ||
                ["Demon King", "Saint"].includes(role)
            );
        }

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

        const skillList = document.getElementById("charSkill");
        skillList.innerHTML = "";

        const availableSkills = roleSkills[role];

        for (let i = 0; i < numberOfSkills; i++) {
            const skill = getRandomElement(availableSkills);
            const rank = getRandomElement(ranks);
            if (!characterSkills.includes(skill)) {
                characterSkills.push({
                    skill: skill,
                    rank: rank
                });
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

        document.getElementById("charName").textContent = name;
        document.getElementById("charAgi").textContent = agi;
        document.getElementById("charLev").textContent = lev;
        document.getElementById("charRole").textContent = role;
        document.getElementById("charRace").textContent = race;
        document.getElementById("charStrength").textContent = strength;
        document.getElementById("charHealth").textContent = health;
        document.getElementById("charMana").textContent = mana;
        document.getElementById("charGuild").textContent = guild;
        document.getElementById("charRegion").textContent = region;

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
