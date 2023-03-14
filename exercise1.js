const costOfPayment = costs => {
    const fee = 3;
    const interestFee = 0.01;
    costs = costs + fee + (costs * interestFee);
    console.log(`Maria needs to pay ${costs}`);
    return costs;
}

costOfPayment(1000);