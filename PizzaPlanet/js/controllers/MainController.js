app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.45
    }
  ];
  $scope.mains = [
    {
      name: 'Calabresa',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Basca Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Frango e Catupiry',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 9.45
    }
  ];
  
  $scope.extras = [
  	{
      name: 'Maionese',
      description: 'Maionese e ovo.',
      price: 4.95
    },
    {
      name: 'Batata Frita',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Polenta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 1.45
    }
  ];

}]);
