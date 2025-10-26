#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
  vector<int> getConcatenation(vector<int> nums) {
    vector<int> nummys = nums;
    nummys.insert(nummys.end(), nums.begin(), nums.end());
    return nummys;
  }
};

// Modified from Google Search AI
void displayVector(const vector<int> &vec) {
  cout << "Vector elements: ";
  for (int x : vec)
    cout << x << " ";
}

int main() {
  displayVector(getConcatenation({1, 2, 1}));
  displayVector(getConcatenation({1, 3, 2, 1})); 
  return 0;
}