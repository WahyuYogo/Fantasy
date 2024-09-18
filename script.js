const roles = ["Warrior", "Mage", "Rogue", "Archer", "Paladin", "Blacksmith", "Healer", "Assassin", "Saint", "Summoner", "Necromancer", "Unknown"];
const races = ["Human", "Elf", "Dwarf", "Orc", "Beast", "Dark Elf", "Dragon", "Half Dragon", "Half Elf", "Demon", "Unknown"];

const roleSkills = {
    "Warrior": ["Swordsmanship", "Shield Mastery", "Axe Mastery", "Hand-to-Hand Combat", "War Cry", "Heavy Armor", "Tactical Strategy", "Battle Charge", "Spear Mastery", "Warrior's Endurance", "Berserk Mode", "Shield Bash", "Combat Reflexes", "Battlefield Awareness"],
    "Mage": ["Fire Magic", "Water Magic", "Earth Magic", "Wind Magic", "Lightning Magic", "Arcane Magic", "Teleportation", "Time Manipulation", "Illusion", "Energy Bolt", "Mana Control", "Dark Magic", "Summon Elementals", "Meteor Shower", "Magic Shield"],
    "Rogue": ["Stealth", "Sneak Attack", "Lockpicking", "Pickpocketing", "Backstab", "Evasion", "Poison Crafting", "Agility Boost", "Silent Step", "Ambush", "Trap Detection", "Shadow Step", "Dagger Mastery", "Dual Wielding"],
    "Archer": ["Archery", "Tracking", "Trap Setting", "Camouflage", "Eagle Eye", "Quick Shot", "Bow Mastery", "Arrow Crafting", "Precision Shot", "Wind Guidance", "Critical Strike", "Multi Shot", "Long Range Mastery", "Animal Companion"],
    "Paladin": ["Holy Strike", "Divine Protection", "Healing", "Sword Mastery", "Shield of Faith", "Blessing of Light", "Aura of Courage", "Smite Evil", "Guardian's Shield", "Divine Resilience", "Holy Aura", "Purification", "Divine Judgement"],
    "Blacksmith": ["Blacksmithing", "Crafting", "Metal Manipulation", "Weapon Forging", "Armor Crafting", "Enchanting", "Repairing", "Mining", "Material Refinement", "Tool Crafting", "Metalworking", "Rune Engraving", "Weapon Enhancement", "Resource Management"],
    "Healer": ["Healing", "Potion Brewing", "Herbalism", "Light Magic", "First Aid", "Divine Touch", "Cure Disease", "Revitalize", "Holy Ward", "Life Restoration", "Group Healing", "Resurrection", "Mana Regeneration", "Protective Aura"],
    "Assassin": ["Stealth", "Poison Crafting", "Sneak Attack", "Dagger Mastery", "Critical Strike", "Dual Wielding", "Silent Step", "Shadow Meld", "Smoke Bomb", "Assassination", "Death Strike", "Vanish", "Shadow Clone", "Nerve Strike"],
    "Saint": ["Blessing Magic", "Divine Protection", "Healing", "Charisma", "Inspiration", "Holy Flame", "Sanctuary", "Holy Light", "Miracle", "Divine Aura", "Sacred Shield", "Purify", "Light of Hope", "Holy Wrath"],
    "Summoner": ["Summoning", "Spirit Summoning", "Necrotic Mastery", "Animal Communication", "Demon Summoning", "Soul Binding", "Elemental Summoning", "Totem Creation", "Ritual Casting", "Summon Guardian", "Blood Pact", "Summon Familiar", "Mind Control"],
    "Necromancer": ["Necromancy", "Curse Magic", "Soul Magic", "Bone Magic", "Dark Ritual", "Raise Dead", "Undead Mastery", "Corpse Explosion", "Soul Drain", "Lich Transformation", "Plague Magic", "Life Drain", "Dark Pact", "Death's Embrace"],
    "Unknown": ["Unknown Skill", "Mystery", "Hidden Talent", "Adaptability", "Survival Instinct", "Random Burst", "Eternal Enigma", "Shifting Powers", "Unpredictable Talent", "Foresight", "Chaos Manipulation", "Arcane Puzzle", "Reality Bending", "Anomalous Strength"]
};

const ranks = ["F", "E", "D", "C", "B", "A", "S"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function submitName() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        const race = getRandomElement(races);

        let role;
        do {
            role = getRandomElement(roles);
        } while (race === "Demon" && ["Healer", "Paladin", "Saint"].includes(role));

        document.getElementById("inputForm").style.display = "none";

        const strength = getRandomNumber(1, 100);
        const health = getRandomNumber(100, 1000);
        const mana = getRandomNumber(1, 100);
        const characterSkills = [];
        const numberOfSkills = getRandomNumber(1, 8);

        const skillList = document.getElementById("charSkill");
        skillList.innerHTML = "";

        const availableSkills = roleSkills[role];

        for (let i = 0; i < numberOfSkills; i++) {
            const skill = getRandomElement(availableSkills);
            const rank = getRandomElement(ranks);
            if (!characterSkills.includes(skill)) {
                characterSkills.push(`${skill} (Rank ${rank})`);
            }

            const listItem = document.createElement("li");
            listItem.textContent = `${skill} (Rank ${rank})`;
            skillList.appendChild(listItem);
        }

        document.getElementById("charName").textContent = name;
        document.getElementById("charRole").textContent = role;
        document.getElementById("charRace").textContent = race;
        document.getElementById("charStrength").textContent = strength;
        document.getElementById("charHealth").textContent = health;
        document.getElementById("charMana").textContent = mana;

        if (["Healer", "Paladin", "Saint"].includes(role)) {
            const divinePower = getRandomNumber(50, 100);
            document.getElementById("charDivinePower").textContent = divinePower;
            document.getElementById("divinePower").style.display = "block";
        }

        if (["Necromancer", "Unknown"].includes(role) || race === "Demon") {
            const darkEnergy = getRandomNumber(50, 100);
            document.getElementById("charDarkEnergy").textContent = darkEnergy;
            document.getElementById("darkEnergy").style.display = "block";
        }

        document.getElementById("characterDisplay").style.display = "block";
    } else {
        alert("Please enter a name.");
    }
}