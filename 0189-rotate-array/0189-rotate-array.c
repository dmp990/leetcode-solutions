void swap(int *first, int *second)
{
    int temp = *first;
    *first = *second;
    *second = temp;
}

void rotate(int* nums, int numsSize, int k){
    k = k % numsSize;
    
    int leftPtr = 0;
    int rightPtr = numsSize - 1;
    while (leftPtr < rightPtr)
    {
        swap(&nums[leftPtr++], &nums[rightPtr--]);
    }
    
    leftPtr = 0;
    rightPtr = k - 1;
    while (leftPtr < rightPtr)
    {
        swap(&nums[leftPtr++], &nums[rightPtr--]);
    }
    
    leftPtr = k;
    rightPtr = numsSize - 1;
    while (leftPtr < rightPtr)
    {
        swap(&nums[leftPtr++], &nums[rightPtr--]);
    }
}