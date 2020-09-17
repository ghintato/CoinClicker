// Rules of the ClickCoin game

// 1. Fields of the game
// 1.1. Total ClickCoin Count
// 1.2. Available ClicCoin count
// 1.3. Button "Click me". Clicking it it will increate the coin count by 1
// 1.4. Buttons to buy 1x and 10x Upgrades 
// 1.5. It needs to be able to see the number of each upgrade type

// 2. Gameplay
// 2.1. Clicking the "Click me" button would increase the count of the coins by 1

// 2.2. When you have at least 10 coins available, it is possible to buy an 1x upgrade.Initially it costs 10 coins,
//Each time you buy it it increases the price by 10%.

// 2.3. When you have at least 90 coins available, it is possible to buy an 10x update.
//The price increases by 10% each time as well.

// 2.4. When you buy an upgrade, the cost is subtracted from available coins.
//Total coins will show the number of coins you have ever made, available will show the amount you can spend.

// 2.5. Each 1x upgrade will give 1 coin per second,
//each 10x upgrade will give 10 coins per second. Meaning if you have 5 1x upgrades and 3 10x ones, you get 30+5=35 coins per second.

// 2.6. If you do not have enough coins to buy a upgrade, the button has to be disabled.

var totalCoins = 0;
var cash = 0;
var totalSpendings = 0;
var total1xUprgades = 0;
var total10xUpgrades = 0;
var priceOf1x = 10 ;
var priceOf10x = 90;


var infoOn1x = document.querySelector('#upgrades-1x');
infoOn1x.innerText = '1x upgrades: ' + total1xUprgades + ', current price: ' + priceOf1x;

var infoOn10x = document.querySelector('#upgrades-10x');
infoOn10x.innerText = '10x upgrades: ' + total10xUpgrades + ', current price: ' + priceOf10x;

var getCoin =  document.querySelector('#get-coin').addEventListener('click', function(){
    totalCoins +=1;
    walletUpdate();
})

function walletUpdate(){
    var cash = totalCoins - totalSpendings;
    var avalableToSpend = document.querySelector('#wallet');
    avalableToSpend.innerHTML = 'Avalable funds: ' + cash;
    var totalEl = document.querySelector('#total');
    totalEl.innerHTML = 'Total earnings: ' + totalCoins;
    if (cash > priceOf1x){
        document.querySelector('#buy-1x').disabled = false;
    } else {document.querySelector('#buy-1x').disabled = true;

    }
    if (cash > priceOf10x){
        document.querySelector('#buy-10x').disabled = false;
    } else { document.querySelector('#buy-10x').disabled = true;}
}


var upgrades1x = document.querySelector('#buy-1x').addEventListener('click', function(){
        cash -= priceOf1x;
        totalSpendings += priceOf1x;
        priceOf1x = Math.round(priceOf1x*1.1);
        total1xUprgades +=1;
        infoOn1x.innerHTML = '1x upgrades: ' + total1xUprgades + ', current price: ' + priceOf1x;
        walletUpdate();
    })


var upgrades10x = document.querySelector('#buy-10x').addEventListener('click', function(){
        cash -= priceOf10x;
        totalSpendings += priceOf10x;
        priceOf10x = Math.round(priceOf10x*1.1);
        total10xUpgrades +=1;
        infoOn10x.innerHTML = '10x upgrades: ' + total10xUpgrades + ', current price: ' + priceOf10x;
        walletUpdate();
    })

    setInterval(function(){
        cash += 1*total1xUprgades;
        totalCoins += 1*total1xUprgades;
        walletUpdate();
    }, 1000);

    setInterval(function(){
        cash += 1*total10xUpgrades;
        totalCoins += 1*total10xUpgrades;
        walletUpdate();
    }, 100);