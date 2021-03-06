(function(){
    
    function decodeString(){
         var loadString = 'Oatmeal%%%1%%%1## Cup ##oats&&&2## Cup ##water&&&3.2## Cup ##ect&&&';
         
        var testString = "var testObj = new Object(); testObj.oatmeal = new Object(); testObj.oatmeal.name = 'BoOatmeal'; testObj.oatmeal.qty= 1; testObj.oatmeal.ingredients = [[1, ' Cup ', 'oats'],[2, ' Cup ', 'water'],[3.2, ' Cup ', 'ect']]; console.log(testObj)";
        
        var testString2 = "var testObj2 = {oatmeal: { name: 'Oatmeal', qty: 1, ingredients: [[1, ' Cup ', 'oats'],[2, ' Cup ', 'water'],[3.2, ' Cup ', 'ect']]}};"
        
        
        var ultTest = "var recipesTest = {oatmeal: {name: 'Oatmeal',qty: 1,ingredients: [[1, ' Cup ', 'oats'],[2, ' Cup ', 'water'],[3.2, ' Cup ', 'ect']]},salad:{name: 'Salad',qty: 3,ingredients: [[3, ' whole ', 'Leaves'],[2, ' Tbsp ', 'Dressing'],[4, ' whole ', 'Cucumbers']]},smoothie:{name: 'Smoothie',qty: 1,ingredients: [[2.4, ' Cup ', 'Berries'],[2, ' Cup ', 'Kale'],[4, ' oz ', 'Kevita'],[0.5, ' cup ', 'almonds']]}}"
        eval(ultTest);

         var returnObj = {};
         
         var objArray = loadString.split('___');
         
         objArray.forEach(function(cur){
             var tempInObj = {};
             var propertyArray = cur.split('%%%');
             tempInObj.name = propertyArray[0];
             tempInObj.qty = (parseInt(propertyArray[1]));
             
             var ingredientArray = [];
             
             if(cur.split('&&&').length > 0 && propertyArray[2]){
                 console.log(propertyArray);
                var ingredArray = propertyArray[2].split('&&&');
                 console.log(ingredArray);
                 
                 for(var i = 0; i < (ingredArray.length - 1); i++){
                                    
                                    var detailArray = ingredArray[i].split('##');
                 var pushArray = [(parseInt(detailArray[0])), detailArray[1], detailArray[2]];
                 
                 ingredientArray.push(pushArray);
                                    
                                    }
             }
             
             tempInObj.ingredients = ingredientArray;
             returnObj[tempInObj.name] = tempInObj;
             console.log(tempInObj);
         })
         console.log(returnObj);
        console.log(recipesTest);
     }
     
     decodeString();
    
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
    /* oatmeal: {
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
        } */
    }



 var myApp = angular.module('myApp', [])

.controller('weekController', ['$scope', function($scope){
    
    var week = this;
    
    week.mealOptions = recipes;

    week.testSave = function(){
        var testString = $scope.loadSave;
        eval(testString);
        
recipes = recipeUpload;
        console.log(recipes);
    console.log(week.mealOptions);
        week.mealOptions = recipes;
    }
    
    week.meals = {
        day_0:{
            num: 0,
            dayName: 'Monday',
            bf:'',
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
        },
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
        } 
    }
    
    week.tempList = [];
    week.groceryList = [];
    
    week.loadString = function(){
        document.querySelector('#loadCollectionString').value;
    }
        week.updateList = function compileGroceryList(weekObj){
            console.log(weekObj);
            
            
            var returnWeekArray = [];
         
            for(var i = 0; i < 7; i++){
                var tempArray = compileDay(weekObj[('day_' + i)]);
                
                tempArray.forEach(function(cur){
                    returnWeekArray.push(cur);
                });
        
            };
         
            console.log(returnWeekArray);
            week.tempList = [];
            week.tempList = returnWeekArray.slice();
             
            var compiledList = compileIngredients(week.tempList);
        
            console.log(compiledList);
            week.groceryList = compiledList;
        }
     
            function compileIngredients(someArray){
        var talliedIngredients = [];
        var returnArray = [];
        someArray.forEach(function(cur){
            // console.log(cur);
            var thisIngredient = cur[2];
            var howMany = 0;
            var tempMatch = false;
            var pushArray = [];
            
            if(!(talliedIngredients.includes(thisIngredient))){
                 someArray.forEach(function(cur){
              tempMatch = cur.includes(thisIngredient);
                if(tempMatch){
                    howMany++;
                    talliedIngredients.push(thisIngredient);
                   // console.log(thisIngredient);
                };
            });
                pushArray = [(cur[0] * howMany), cur[1], cur[2]];
            
            returnArray.push(pushArray);
            };
            
            
        });
        // console.log(talliedIngredients);
        // console.log(compiledIngredients);
        return returnArray
    };
    
    
        /* function addMultiples(someArray){
            var tempArray = someArray.slice();
            var duplicateCheck = [];
            var returnArray = [];
            
            console.log(someArray);
        
            someArray.forEach(function(cur){
                var tempCur = cur;
                var curValue = cur[0];
                
                console.log(duplicateCheck.indexOf(cur));
                
                if(!(duplicateCheck.includes(cur))){
                    var tempArr = cur.slice();
                    console.log(tempArr);
                    console.log(cur);

                    console.log(duplicateCheck);
                    
                    duplicateCheck.push(tempArr);
                    returnArray.push(tempArr);

                } else if (duplicateCheck.includes(cur)){
                    var tempIndex = duplicateCheck.indexOf(cur);
                    var tempNum = duplicateCheck[tempIndex][0];
                    
                    console.log(returnArray[tempIndex]);
                    console.log(duplicateCheck[tempIndex]);
                    
                    returnArray[tempIndex][0] += tempNum;

                } else {
                    console.log('some problem, heres cur: ' + cur);
                    console.log(duplicateCheck);
                }
            });

        } */
        
    
    
    
    
     function compileDay(dayObj){
         var returnArray = [];
         
         var breakfastString = dayObj.bf.replace(/ /g,"_");
         
         var lunchString = dayObj.ln.replace(/ /g,"_");
         
         var dinnerString = dayObj.dn.replace(/ /g,"_");
         
        if(week.mealOptions[breakfastString] !== undefined){
           
           week.mealOptions[breakfastString].ingredients.forEach(function(cur){
               returnArray.push(cur);
           });

       };
         

         if(week.mealOptions[lunchString] !== undefined){ week.mealOptions[lunchString].ingredients.forEach(function(cur){
               returnArray.push(cur);
           });
                                                         
                                                         
                                                    }
         
         if(week.mealOptions[dinnerString] !== undefined){ week.mealOptions[dinnerString].ingredients.forEach(function(cur){
               returnArray.push(cur);
           });
                                                    }
         return returnArray;
     };
    
    week.showLoad = false;
    week.toggleLoadString = ['Show Input', 'Hide Input'];
    week.toggleLoadStringNum = 0;
    week.toggleLoad = function(){
        week.showLoad = !week.showLoad;
        week.toggleLoadStringNum = 1 - week.toggleLoadStringNum;
    }
    
}])

 .controller('collectionController', function(){
     
     var collect = this;
     
     collect.updateCollect = function(loadString){
         
         
         
     }
     
     
 })

 
 })();