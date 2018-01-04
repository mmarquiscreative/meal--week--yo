(function(){
var recipes = {
    oatmeal: {
        name: 'Oatmeal',
        qty: 1,
        ingredients: [
            'oats',
            'water',
            'ect']
        },
    salad:{
        name: 'Salad',
        qty: 3,
        ingredients: [
            'Leaves',
            'Dressing',
            'Cucumbers']
        },
    smoothie:{
        name: 'Smoothie',
        qty: 1,
        ingredients: [
            'Berries',
            'Kale',
            'Kevita',
            'almonds']
        }
    }



 var myApp = angular.module('myApp', [])

.controller('weekController', function(){
    
    var week = this;
    
    week.mealOptions = recipes;
    
    week.meals = {
        _0_mon:{
            num: 0,
            dayName: 'Monday',
            bf:'hey',
            ln:'',
            dn:''
        },
        _1_tues:{
            num: 1,
            dayName: 'Tuesday',
            bf:'',
            ln:'',
            dn:''
        },
        _2_wed:{
            num: 2,
            dayName: 'Wednesday',
            bf:'',
            ln:'',
            dn:''
        },
        _3_thurs:{
            num: 3,
            dayName: 'Thursday',
            bf:'',
            ln:'',
            dn:''
        },
        _4_fri:{
            num: 4,
            dayName: 'Friday',
            bf:'',
            ln:'',
            dn:''
        },
        _5_sat:{
            num: 5,
            dayName: 'Saturday',
            bf:'',
            ln:'',
            dn:''
        },
        _6_sun:{
            num: 6,
            dayName: 'Sunday',
            bf:'',
            ln:'',
            dn:''
        }
    }
    
    week.groceryList = [];
    
         week.updateList = function compileGroceryList(weekObj){
         var returnWeekArray = [];
         
         var monArray = compileDay(weekObj._0_mon);
         
         var tuesArray = compileDay(weekObj._1_tues);
         
         var wedArray = compileDay(weekObj._2_wed);
         
         var thursArray = compileDay(weekObj._3_thurs);
         
         var friArray = compileDay(weekObj._4_fri);
         
         var satArray = compileDay(weekObj._5_sat);
         
         var sunArray = compileDay(weekObj._6_sun);
         
         returnWeekArray.push(monArray);
         returnWeekArray.push(tuesArray);
         returnWeekArray.push(wedArray);
         returnWeekArray.push(thursArray);
         returnWeekArray.push(friArray);
         returnWeekArray.push(satArray);
         returnWeekArray.push(sunArray);
         
         console.log(returnWeekArray);
        week.groceryList = returnWeekArray;
         
     }
     
     function compileDay(dayObj){
         var returnArray = [];
         
       if(week.mealOptions[dayObj].bf.ingredients){ returnArray.push(week.mealOptions[dayObj].bf.ingredients);
         }
         if(week.mealOptions[dayObj].ln.ingredients){ returnArray.push(week.mealOptions[dayObj].ln.ingredients);
                                                    }
         if(week.mealOptions[dayObj].dn.ingredients){ returnArray.push(week.mealOptions[dayObj].dn.ingredients);
                                                    }
         
         return returnArray;
     };
    
})
 
 .controller('groceryController', function(){
     var grocery = this;
     grocery.mealOptions = recipes;
     
     grocery.listAll = [];
     
     grocery.compiledList = [];
     

 })
 
 })();