(function(){
    
    Array.prototype.howManyMatch = function(key){
        var instancesOf = 1;
        
        this.forEach(function(cur){
            
            if(key === cur[2]){
                instancesOf++
            };
            
        });
        
        return instancesOf;
    };
    
    
var recipes = {
    oatmeal: {
        name: 'Oatmeal',
        qty: 1,
        ingredients: [
            [1, ' Cup ', 'oats'],
            [2, ' Cup ', 'water'],
            [3.2, ' Cup ', 'ect']
        ]
        },
    salad:{
        name: 'Salad',
        qty: 3,
        ingredients: [
            [3, ' whole ', 'Leaves'],
            [2, ' Tbsp ', 'Dressing'],
            [4, ' whole ', 'Cucumbers']
        ]
        },
    smoothie:{
        name: 'Smoothie',
        qty: 1,
        ingredients: [
            [2.4, ' Cup ', 'Berries'],
            [2, ' Cup ', 'Kale'],
            [4, ' oz ', 'Kevita'],
            [0.5, ' cup ', 'almonds']
        ]
        }
    }



 var myApp = angular.module('myApp', [])

.controller('weekController', ['$scope', function($scope){
    
    var week = this;
    
    week.mealOptions = recipes;
    
    week.meals = {
        day_0:{
            num: 0,
            dayName: 'Monday',
            bf:'hey',
            ln:'',
            dn:''
        },
        day_1:{
            num: 1,
            dayName: 'Tuesday',
            bf:'',
            ln:'',
            dn:''
        },
        day_2:{
            num: 2,
            dayName: 'Wednesday',
            bf:'',
            ln:'',
            dn:''
        }/* ,
        day_3:{
            num: 3,
            dayName: 'Thursday',
            bf:'',
            ln:'',
            dn:''
        },
        day_4:{
            num: 4,
            dayName: 'Friday',
            bf:'',
            ln:'',
            dn:''
        },
        day_5:{
            num: 5,
            dayName: 'Saturday',
            bf:'',
            ln:'',
            dn:''
        },
        day_6:{
            num: 6,
            dayName: 'Sunday',
            bf:'',
            ln:'',
            dn:''
        } */
    }
    
    week.tempList = [];
    week.groceryList = [];
    
    function addMultiples(someArray){
        var tempArray = someArray;
        var duplicateCheck = [];
        console.log(tempArray);
        
        console.log(someArray);
        someArray.forEach(function(cur){
            var tempCur = cur;
            var curValue = cur[0];
            console.log(cur);
            if(duplicateCheck.indexOf(cur) === -1){
                duplicateCheck.push(cur);
                console.log(duplicateCheck);
            } else if (duplicateCheck.indexOf(cur) > -1){
                var tempIndex = duplicateCheck.indexOf(cur);
                console.log(curValue);
                duplicateCheck[tempIndex][0] += curValue;
            } else {
                console.log('some problem, heres cur: ' + cur);
                console.log(duplicateCheck);
            }
            });
        
            console.log(duplicateCheck);
            
        }
        
    
    
    
    
         week.updateList = function compileGroceryList(weekObj){
         var returnWeekArray = [];
         
        for(var i = 0; i < 3; i++){
            var tempArray = compileDay(weekObj[('day_' + i)]);
            tempArray.forEach(function(cur){
                returnWeekArray.push(cur);
            });
        
        };
         
         console.log(returnWeekArray);
        week.tempList = returnWeekArray;
             
             addMultiples(week.tempList);
             
             
             
         
     }
     
     function compileDay(dayObj){
         var returnArray = [];
         
         var breakfastString = dayObj.bf.toLowerCase();
         
         var lunchString = dayObj.ln.toLowerCase();
         
         var dinnerString = dayObj.dn.toLowerCase();
         
       if(week.mealOptions[breakfastString] !== undefined){
           
           week.mealOptions[breakfastString].ingredients.forEach(function(cur){
               console.log(cur);
               console.log(returnArray);
               returnArray.push(cur);
               console.log(returnArray);
           });

       };
         

         if(week.mealOptions[lunchString] !== undefined){ week.mealOptions[lunchString].ingredients.forEach(function(cur){
               returnArray.push(cur);
           });
                                                         
                                                         
                                                    }
         
                                                 console.log(returnArray[0]);

         if(week.mealOptions[dinnerString] !== undefined){ week.mealOptions[dinnerString].ingredients.forEach(function(cur){
               returnArray.push(cur);
           });
                                                    }
         console.log(returnArray);
         return returnArray;
     };
    
}])
 
 .controller('groceryController', function(){
     var grocery = this;
     grocery.mealOptions = recipes;
     
     grocery.listAll = [];
     
     grocery.compiledList = [];
     

 })
 
 })();