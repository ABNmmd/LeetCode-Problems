/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    skill.sort((a, b) => a - b);
    let n = skill.length;
    let totalChemistry = 0;

    let targetTeamSkill = skill[0] + skill[n - 1];

    for (let i = 0; i < n / 2; i++) {
        if (skill[i] + skill[n - i - 1] != targetTeamSkill) return -1;
        totalChemistry += skill[i] * skill[n - i - 1];
    }

    return totalChemistry;
};