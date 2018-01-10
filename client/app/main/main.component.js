import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  query = '';
  bars = [];

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    
  }

  getSearch() {
  var _self = this;
    this.$http.get('/api/things/search/' + this.query)
    .then(function (response) {
      _self.bars = response.data;
      console.log(_self.bars);
    })
    .catch(function (err) {
      alert('Yelp server error');
    })
  }

  going(id) {
    var _self = this;
    console.log(id);
  }
}

export default angular.module('nlcApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: '$ctrl'
  })
  .name;
