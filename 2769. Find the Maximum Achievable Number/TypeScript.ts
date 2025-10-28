const theMaximumAchievableX = (num: number, t: number): number => {
    for (let i = 0; i < t; i++) num += 2;
    return num;
};