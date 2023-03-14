const costOfPayment = costs => {
    const fee = 3;
    const interestFee = 0.01;
    costs = costs + fee + (costs * interestFee);
    console.log(`Maria needs to pay ${costs}$`);
}

costOfPayment(1000); //Maria needs to pay 1013$