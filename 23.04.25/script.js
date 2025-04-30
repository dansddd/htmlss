let click_Power = 1;
let upgrade_count = 1;
let level_Power = 1; 

function click_Handler() {
    let user_Points = parseInt(document.getElementById("points").innerText);
    user_Points += click_Power * level_Power;  
    document.getElementById("points").innerText = user_Points;
}

function upgrade_handler() {
    let user_Points = parseInt(document.getElementById("points").innerText);
    let upgrade_price = 15 * upgrade_count;

    if (user_Points >= upgrade_price) {
        click_Power++;
        upgrade_count++;
        document.getElementById("points").innerText = user_Points - upgrade_price;
        document.getElementById("upgrade1").value = 15 * upgrade_count;
    } else {
        console.warn("Points < " + upgrade_price);
    }
}

function buyLevel() {
    let user_Points = parseInt(document.getElementById("points").innerText);
    let level_Price = 10; 
    if (user_Points >= level_Price) {
        level_Power++; 
        document.getElementById("points").innerText = user_Points - level_Price;
        console.log("Level up! Now your click power is multiplied by " + level_Power);
    } else {
        console.warn("Not enough points to buy a level.");
    }
}
