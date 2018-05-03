function findIndex(str,ch,n)
{
    var len = str.length;
    var sum=0;
    for(var i=0;i<len;i++)
    {
        if(str[i] === ch){
            sum++;
            if(sum === n)
        {
            return i;
        }
        }
        
    }
}
console.log(findIndex("cococola","o",2));