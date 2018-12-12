/*
Maps is the best choice for HashMap over objects

Major advantages of Maps over Objects:
1) We can have any datatype in key
2) We can iterate through Maps
*/



const question=new Map();
question.set('Question','What is the financial capital of India?');
question.set(1,'Delhi');
question.set(2,'Mumbai');
question.set(3,'Banglore');
question.set(4,'Chennai');
question.set(5,'Kolkata');
question.set('answer',2);
question.set(true,'Correct Answer !!! :-)');
question.set(false,'Wrong Answer !!! :-()');

/*
Maps operations:

question.get('question');
question.delete(3);
question.clear();
question.size();
question.has(3);


question.forEach((value,key)=>{
  console.log(`The value for key ${key} is ${value}`);
})


for (const [key,value] of question.entries())
{
  console.log(`The value for key ${key} is ${value}`);
}

*/

for (const [key,value] of question.entries())
{
  if(key!=='answer' && key!==true && key!== false){
    console.log(`${key}: ${value}`);
  }

}

var ans=prompt("Please enter your answer: ");

console.log(question.get(parseInt(ans)===question.get('answer')));
