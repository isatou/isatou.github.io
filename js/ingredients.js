var ingredientApp = angular.module('ingredientApp', []);

ingredientApp.controller('IngredientListCtrl', function ($scope) {
  $scope.ingredients = [
    {'name': 'Coconut oil',
     'description': 'Fast just got faster with Nexus S.'},
    {'name': 'Sweet almond oil',
     'description': 'The Next, Next Generation tablet.'},
    {'name': 'Castor oilâ„¢',
     'description': 'The Next, Next Generation tablet.'}
  ];
});
