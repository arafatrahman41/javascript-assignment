function canPay(coins, price) {
    if (coins.length === 0) {
        return "Empty array";
    }

    let totalCoins = 0;
    for (let i = 0; i < coins.length; i++) {
        totalCoins += coins[i];
    }

    if (totalCoins >= price) {
        return true;
    } else {
        return false;
    }
}