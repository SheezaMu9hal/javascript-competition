console.log("***********Question#1***************");
let no = prompt("Enter no of elements of array: ");
console.log(no);
console.log("Enter the elements of array: ");
arr = new Array(no);
for(let i=0;i<no;i++){
    arr[i] = prompt("Element",i ," :");
}
console.log(arr);
    let max=0,sum=0;
    let result= new Array(2);
for(let i=0;i<no-1;i++){
    let j=i+1;
    sum = arr[i]*arr[j];
    if(sum>max){
        max = sum;
        result[0]=i;
        result[1] = j;
    }

}
if(max!=0)
console.log("[",arr[result[0]],",",arr[result[1]],"] has the largest product " ,max);
else{
    console.log("The result is " ,max);
}

console.log("/n/n/n/n/n***********Question#2***************");
let size = prompt("Q2:\nEnter no of elements of array: ");
console.log(size);
console.log("Q2:\nEnter the elements of array: ");
nums = new Array(size);
for(let i=0;i<size;i++){
    nums[i] = prompt("Element",i ," :");
}
console.log(nums);
let target = prompt("Enter the Target: ");
console.log(target);

let flag = false;
for(let i=0;i<size-1;i++)
{
    for(let j = i+1;j<size;j++)
        {
            if(Number(nums[i]) + Number(nums[j])==target){
                console.log("The indices of number that add upto target:" , target , "is [" , i,",",j, "].");
                flag=true;
                break;
              }
        }
        if(flag){
            break;
        }
}



console.log("/n/n/n/n***********Question#3***************");
let word = prompt("Enter a string");
console.log(word);
let array = word.split(' ');
console.log(array);
for(let i=0;i<array.length;i++){
    let reversed = array[i];
    let newString = "";
    for (var j = reversed.length - 1; j >= 0; j--) { 
        newString += reversed[j]; 
    }
    array[i] = newString;
}
word = array.toString();
console.log("The new string is " ,word);

console.log("/n/n/n/n***********Question#5***************");

function amountToCoins(amt, coins) {
    let answer = [];
    let leftamt = amt;

    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        while (leftamt >= coin) {
            console.log(leftamt);
            answer.push(coin);
            leftamt -= coin;
        }
    }

    return answer;
}
let No = prompt("Q5:\nEnter the no of Coins: ");
console.log(No);
console.log("Q2:\nEnter the coins: ");
Coins = new Array(No);
for(let i=0;i<No;i++){
    Coins[i] = prompt("Coin",i ," :");
}
console.log(Coins);
let Amount = prompt("Enter the Amount: ");
console.log(Amount);

console.log(amountToCoins(Amount, Coins));