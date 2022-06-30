// Create the playable character
const pc = newPlayableCharacter(100, 110);

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300);

// have the NPC start walking east immediately
npc.walkEast();

// Create the inventory
const inventory = newInventory();
move(inventory).to(0, 0);

// Create everything else
move(newImage("assets/Images/PNG/tree.png")).to(200, 450);
move(newImage("assets/Images/PNG/pillar.png")).to(350, 250);
move(newImage("assets/Images/PNG/pine-tree.png")).to(450, 350);
move(newImage("assets/Images/PNG/crate.png")).to(150, 350);
move(newImage("assets/Images/PNG/well.png")).to(500, 575);
move(newItem("assets/Images/PNG/sword.png")).to(500, 555);
move(newItem("assets/Images/PNG/shield.png")).to(165, 335);
move(newItem("assets/Images/PNG/staff.png")).to(600, 250);
