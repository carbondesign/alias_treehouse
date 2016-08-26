import angular from 'angular';

export default angular.module('directives.footer', [])
    .component('footer', {
        template: require('./footer.html'),
        controller: function() {
            this.totalItems = [1, 2, 3, 4];
            this.currentPage = 1;
            this.maxSize = 5;
            this.setPage = function(pageNo) {
                this.currentPage = pageNo;
            };
            this.pageChanged = function() {
                $log.log('Page changed to: ' + $scope.currentPage);
            };
        },
        bindings: {
            totalItems: '<',
            currentPage: '<'
        }
    })

.name;
