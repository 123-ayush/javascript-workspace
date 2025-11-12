/* 
    Try -> allow you to define a block of code to be tested for error while it is being executed
    catch -> allow you to define a block of code to be executed, if an error is occured in try block

    Always use catch with try.
*/

try{
    console.log(`value of a is ${a}`);
} catch(err){
    console.log('variable not defined');
    console.log('err');
}