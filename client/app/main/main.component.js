import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  query = '';
  bars = [];

  /*@ngInject*/
  constructor($http, Auth) {
    this.$http = $http;
    this.auth = Auth;
  }

  $onInit() {
    var q = localStorage.getItem('query');
    if (q) {
      this.query = q;
      this.getSearch();
    }
  }

  getSearch() {
  var _self = this;
    this.$http.get('/api/things/search/' + this.query)
    .then(function (response) {
      _self.bars = response.data;
      localStorage.setItem('query', _self.query);
    })
    .catch(function (err) {
      alert('Yelp server error');
    });
  }

  going(id, index) {
    var _self = this;
    if (!_self.auth.isLoggedInSync()) {
      return location.href = '/login';
    }

    this.$http.get('/api/things/going/' + id)
    .then(function (response) {
     if (response.data.data) {
      _self.bars[index].goingCount = response.data.data.goingIds.length;
     }
    })
    .catch(function (err) {
      alert('Yelp server error');
    })

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
