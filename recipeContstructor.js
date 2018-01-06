(function(){

    var myApp = angular.module('myApp', [])
    
    .controller('buildController', function(){
        var build = this;
        
        build.recipeList = {
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
    };
        build.unitList = [' Cup ', ' Tbsp ', ' tsp ', 'oz ', ' whole ', ' '];
        
        build.newRecipeInit = {
            name: '',
            qty: 1,
            ingredients: [],
        }
        
        build.newRecipeTemp = {
            name: '',
            qty: 1,
            ingredients: [],
        }
        
        build.tempIngredient = []
        build.saveCode = '';
        
        build.saveRecipes = function(){
            
           var codeString = JSON.stringify(build.recipeList);
            console.log(codeString);
            
            build.saveCode = ('var recipeUpload = ' + codeString);
        }
        
        build.addNewIngredient = function(){

            build.newRecipeTemp.ingredients.push(build.tempIngredient);
            
            console.log(build.newRecipeTemp);
            build.tempIngredient = [];
        }
        
        build.addNewRecipe = function(){
            var tempPropertyName = build.newRecipeTemp.name.replace(/ /g,"_");
            build.recipeList[tempPropertyName] = build.newRecipeTemp;
            build.newRecipeTemp = build.newRecipeInit;
            build.newRecipeTemp.name = '';
            console.log(build.recipeList);
            
            
        }

    })
    

})();