/*
The arrow functionality in JavaScript(ES6) is substitution of function()

*/

/*
The following code will give
this.color= undefined and this.position= 1
since 'this' inside the inner function will point to global this which is out of the object box5

We can make below code run in ES5 in 2 ways:
1) Adding bind(this) to the inner function.
2) Storing 'this' in other variable 'self' in outer function and using 'self' instead of 'this' inside inner function
*/


var box5={
  color:"Green",
  position:1,
  clickMe: function(){// 'this' keyword will work inside this function and will fetch the correct output. But not inside inner function

    document.querySelector(".green"). addEventListener('click', function(){
      var str=" Color of the box: "+this.color +" The box is at the position: " +this. position;

      alert(str);
    })
  }
}

//box5.clickMe();

/*
//Method1:

var box5={
  color:"Green",
  position:1,
  clickMe: function(){

    document.querySelector(".green"). addEventListener('click', function(){
      var str=" Color of the box: "+this.color +" The box is at the position: " +this. position;

      alert(str);
    }.bind(this))
  }
}

box5.clickMe();

//Method:2

var box5={
  color:"Green",
  position:1,
  clickMe: function(){
    var self=this;
    document.querySelector(".green"). addEventListener('click', function(){
      var str=" Color of the box: "+self.color +" The box is at the position: " +self. position;

      alert(str);
    })
  }
}

box5.clickMe();

*/

var box6={
  color:"Green",
  position:1,
  clickMe: function(){// 'this' keyword will work inside this function and will fetch the correct output. But not inside inner function

    document.querySelector(".green"). addEventListener('click', ()=>{
      var str=" Color of the box: "+this.color +" The box is at the position: " +this. position;

      alert(str);
    })
  }
}

box6.clickMe();
