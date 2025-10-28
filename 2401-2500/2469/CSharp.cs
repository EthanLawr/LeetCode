public class Solution {
    public double[] ConvertTemperature(double celsius) {
        double[] c = {celsius+273.15, celsius*1.8+32};
        return c;
    }
}