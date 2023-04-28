function createCheckDigit(membershipId){
    if(membershipId < 10){
        return membershipId;
     }
     const lastDigit = membershipId % 10;
     const remainingNum = Math.floor(membershipId / 10);
     return createCheckDigit(lastDigit + createCheckDigit(remainingNum));
}

function createCheckDigit2(membershipId)
{
    let sum = 0;
        while (membershipId > 0 || sum > 9) {
             if(membershipId == 0) {
                membershipId = sum;
                sum = 0;
             }
             sum = sum + membershipId % 10;
             membershipId = Math.floor(membershipId / 10);
        }
        return sum;
    }
  
  console.log(createCheckDigit2("99"));