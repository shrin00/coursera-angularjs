(function() {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
      this.items=ShoppingListCheckOffService.getbuyItems();
      this.shop= function (itemIndex) {
        ShoppingListCheckOffService.shop(itemIndex);
      }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items= ShoppingListCheckOffService.getboughtItems();

  }

  function ShoppingListCheckOffService() {
    var buyItems = [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "Chips",
        quantity: 5
      },
      {
        name: "Cake",
        quantity: 2
      },
      {
        name: "chocolates",
        quantity: 14
      },
      {
        name: "candies",
        quantity: 20
      },
      {
        name: "ice cream",
        quantity: 3
      },
      {
        name: "apples",
        quantity: 7
      }
    ];
    var boughtItems = [];

    this.shop = function (index) {
        boughtItems.push(buyItems[index]);
        buyItems.splice(index, 1);
    };

    this.getbuyItems=function () {
      return buyItems;
    };
    this.getboughtItems=function () {
      return boughtItems;
    };
  }
})();
