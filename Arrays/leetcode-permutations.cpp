//link: https://leetcode.com/problems/permutations

class Solution {
    
public:
    vector<vector<int> > container;
    vector<int> temp;

public:
    vector<vector<int>> permute(vector<int>& nums) {
        this->permutation(0, nums);
        
        return container;
    }
    
//state
//base
//transition
public:
    void permutation(int pos, vector<int> nums) {
        if (pos == nums.size()) {
            container.push_back(temp);
        } else {
            //foreach valid options
            for (int i = 0; i < nums.size(); i++) { 
                //option i#
                if (!count(temp.begin(), temp.end(), nums[i])) {
                    temp.push_back(nums[i]); //do
                    permutation(pos+1, nums); //recurse
                    temp.pop_back(); //undo    
                }
            }
        }
    }
};