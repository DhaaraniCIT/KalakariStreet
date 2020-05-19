angular.module('app', ['ui.bootstrap','ngTouch','ngAnimate']);
angular.module('app').controller('CarouselDemoCtrl', function ($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'img/m1.jpg',
      cap: 'Traditional Silhouettes'
    },
    {
      image: 'img/m2.jpg',
      cap: 'Pretty Pastels'
    },
    {
      image: 'img/m3.jpg',
      cap: 'Fusion Finds'
    },
    {
      image: 'img/m4.jpg',
      cap: 'Dramantic Drapes'
    },
    {
      image: 'img/m5.jpg',
      cap: 'Mirror Mirror'
    },
    {
      image: 'img/m6.jpg',
      cap: 'Party Stunners'
    }
  ];
});
angular.module('app').controller('checkboxCtrl', function ($scope) {
$scope.arrlist = [
  {
    size:'XS'
  },
  {
    size:'S'
  },
  {
    size:'M'
  },
  {
    size:'L'
  },
  {
    size:'XL'
  }
];
});
angular.module('app').controller('checkboxCtrlCol', function ($scope) {
$scope.arrlist= [
  {
    color:'White'
  },
  {
    color:'Black'
  },
  {
    color:'Red'
  },
  {
    color:'Blue'
  }
];
});
angular.module('app').controller("cfController",function($scope){
	$scope.submitForm = function() {
	$scope.msg = 'Your response is recored'
	};
});
