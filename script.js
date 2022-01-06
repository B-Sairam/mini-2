// ========================1.Do the below programs in anonymous function & IIFE=====================



//===================KINDLY REMOVE THE COMMENTS AND SEE THE OUTPUT========================  


// a.Print odd numbers in an array


// {
//    (function(){
//     let arr = [2,3,4,1,6,7,8,3,10,7];
//     for(i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         console.log(arr[i])
//     }
//   }

// })
// ()
// }

// b.Convert all the strings to title caps in a string array


{
    (function(str){
        str = str.toLocaleLowerCase();
        str = str.split(' ');
        for(i=0;i<str.length;i++){
            str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1)
        }
        console.log(str.join(' '));
    })
    ('i love javascript')
}

// c.Sum of all numbers in an array

// {
//     (function(){
//         let arr = [2,3,4,1,6,7,8,3,10,7];
//         let sum = 0;
//         for(i=0;i<arr.length;i++){
//             sum += arr[i];
//         }
//         console.log(sum);

//     })
//     ()
// }

//d. Return all the prime numbers in an array

// {    (function(){
//         var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

//         num = numArray.filter((number) => {
//         for (var i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) return false;
//         }
//         return true;
//         });

//         console.log(num);
//     })
//  ()}

// //  e.Return all the palindromes in an array
// (function(){
//     let arr = ['amma','hello','madam']
//     arr = arr.filter((str)=>{
//         const len = str.length
//         for(i=0;i<len/2;i++){
//             if(str[i]!== str[len-1-i])
//             return false
//         }
//         return true;
//     })
//     console.log(arr);
    

// })
// ()



// f. Return median of two sorted arrays of same size

// {
//     (function(){
//         let arr1=[1,4,7] 
//         let arr2 =[9,10,11];
//         let median_arry=0
//         let merge = [...arr1,...arr2]
//         let sort = merge.sort((a,b)=>{
//             return a-b
//         })
//          let len = sort.length/2;
//          median_arry+=sort[len-1]+sort[len];

         

//         console.log("median of two sorted arrays: "+median_arry/2);
        
//     })
//     ()
// }

// // Remove duplicates from an array;

// {
   
//     (function(){
//         let dup_arry=[1,4,2,3,3,4,5,1]
//       let arr = dup_arry.filter((val,ind,a)=>{
//           return a.indexOf(val)==ind
//       })
//       console.log(arr);

//     })
//     ()
// }

// h.Rotate an array by k times
// {
//     function num(arr,k){
        
//         for(i=0;i<k;i++){
            
//             arr.unshift(arr.pop());

//         }
//         return arr;
//     }

    
//     console.log(num([1,2,3,4,5,6],3));
// }



//  ====================Do the below programs in arrow functions=====================

// a.Print odd numbers in an array
// let num = ()=>{
//     arr=[1,3,4,2,4,25,6,9];
//     console.log('odd numbers in an array:');
//     arr.filter((odd)=>{
//         if(odd%2!==0){
//             console.log(odd);
//         } 
//     })
    
    
// }

// num()

// b.Convert all the strings to title caps in a string array

// let caps = (str)=>{
//    str = str.split(' ');
//    for(i=0;i<str.length;i++){
//        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
//    }
//    console.log(str.join(' '));
// }
// caps('happy new year');

// c.Sum of all numbers in an array

// let sum = (arr)=>{
//     let total=0;
//     arr.map((e)=>{
//         total+=e;
//     })
//     console.log(total);
// }

// sum([2,45,6,7,4,3,9])

// d.Return all the prime numbers in an array

// let prime = ()=>{
//     let arr = [3,4,5,6,2,7,9,10,14]

//   let  primeNum = arr.filter((num)=>{
//       for(i=2;i<=Math.sqrt(num);i++){
//           if(num % i===0) return false
//       }
//       return true

//   })
//   console.log(primeNum);
// }

// prime();

// e.Return all the palindromes in an array

// let palindromes = ()=>{
//     let arr =['amma','hello','madam'];
//    let palni= arr.filter((str)=>{
//         let len = str.length;
//         for(i=0;i<len/2;i++){
//             if(str[i]!==str[len-1-i])
//             return false
//         }
//         return true

//     })
//     console.log(palni);
// }
// palindromes();