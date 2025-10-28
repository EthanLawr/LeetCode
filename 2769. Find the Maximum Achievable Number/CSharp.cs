public class Solution {
    public int TheMaximumAchievableX(int num, int t) {
        for (int i = 0; i < t; i++) num += 2;
        return num;
    }
}