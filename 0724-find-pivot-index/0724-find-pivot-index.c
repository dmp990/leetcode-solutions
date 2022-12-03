int pivotIndex(int* nums, int numsSize){
    int sum = 0;
    for (int i = 0; i < numsSize; i++)
    {
        sum += nums[i];
    }
    int ls = 0;
    for (int i = 0; i < numsSize; i++)
    {
        if (ls == (sum - ls - nums[i]))
        {
            return i;
        }
        ls += nums[i];
    }
    return -1;
}