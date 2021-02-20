// Explaining the solution
// https://www.youtube.com/watch?v=w9ohNqO_4V4&t=9s&ab_channel=TheCodeShow

class Solution {

public:
    vector<vector<int>> memo;
public:
    int lengthOfLIS(vector<int>& nums) {
        int length = nums.size();
        memo.clear();
        memo.resize(length+4, vector<int>(length+4, -1));
        nums.push_back((int)-10e5); //-10000

        int res = dfs(0, length, nums);
        nums.pop_back();
        
        return res;
    }
    
    int dfs(int pos, int last, vector<int>& items) {
        if (pos == items.size() - 1) {
            return 0;
        }
        
        //DB
        if (memo[pos][last] != -1) {
            return memo[pos][last];
        }
        //leave
        int leave = dfs(pos+1, last, items);
        //pick
        int pick = 0;
        if (items[pos] > items[last]) {
            pick = dfs(pos+1, pos, items) + 1;
        }
        
        return memo[pos][last] = max(leave, pick);
    }
};
