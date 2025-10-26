#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
  vector<int> getConcatenation(vector<int> nums) {
    vector<int> numms(nums.size() * 2);
    int count = 0;
    for (int i = 0; i < nums.size() * 2; i++) {
      for (int j = 0; j < nums.size(); j++) {
        numms[count > numms.size() ? numms.size() : count] = nums[j];
        count++;
      }
    }
    return numms;
  }
};