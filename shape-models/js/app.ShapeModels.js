var app = angular.module('ShapeModelTable', ['ui.router']);

app.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/shape-models/');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
    });

    $stateProvider.state({
        name: 'table',
        url: '/shape-models/',
        templateUrl: 'shape-models/partials/states/table.html'
    })
    .state({
        name: 'dps2020',
        url: '/shape-models/dps-2020',
        templateUrl: 'shape-models/partials/states/dps-2020.html'
    })
    .state({
        name: 'agu2020',
        url: '/shape-models/agu-2020',
        templateUrl: 'shape-models/partials/states/agu-2020.html'
    })
    .state({
        name: 'modelDetail',
        url: '/shape-models/modelDetail/:modelName',
        templateUrl: 'shape-models/partials/states/model-detail.html',
        controller: function($stateParams, $scope, Asteroids, Comets, Satellites) {
            $scope.model = Asteroids.find(x => x.name == $stateParams.modelName);
            if (!$scope.model) $scope.model = Comets.find(x => x.name == $stateParams.modelName);
            if (!$scope.model) $scope.model = Satellites.find(x => x.name == $stateParams.modelName);
            if (!$scope.model) console.error('Something unexpected happened.');
        }
    });
})

app.controller('ShapeModels', ['$scope', '$state', 'Comets', 'Asteroids', 'Satellites', 'arDetector', function($scope, $state, Comets, Asteroids, Satellites, arDetector) {
    $scope.view = {
        comets: Comets,
        asteroids: Asteroids,
        satellites: Satellites,
        webAr: arDetector.isWebAr,  // android
        isRelAR: arDetector.isRelAR // ios
    };
}]);

app.directive('fileDownload', function() {
    return {
        templateUrl: 'shape-models/partials/file-download.html',
        transclude: true,
        scope: {
            file: '=fileToDownload'
        },
        controller: function($scope) {
            $scope.view = {
                altText: fileFormat => `Download ${fileFormat} file.`
            }
        }
    }
})
.directive('ferretLink', function() {
    return {
        templateUrl: 'shape-models/partials/ferret-link.html',
        transclude: true,
        scope: {
            name: '=objectName'
        },
        controller: function($scope) {
            const ferretUrl = `https://sbnapps.psi.edu/ferret/SimpleSearch/results.action?targetName=`;
            $scope.view = {
                link: ferretUrl + $scope.name.replace(/ /g,'%20')
            };
        }
    }
})
.directive('generatePreview', function() {
    return {
        scope: {
            dataset: '='
        },
        transclude: true,
        controller: function($scope, arDetector) {
            $scope.preview = {
                isRelAR: arDetector.isRelAR,

                getPreviewType: dataset => {
                    const isRelAR = $scope.preview.isRelAR;
                    // let src = null,
                    let type = null;
                    // if iOS AR Kit is enabled,
                    if (isRelAR) {
                        // if USDZ preview exists
                        if (dataset.files.previews.ios != null) {
                            // display USDZ preview
                            type = 'ios';
                        }
                    // else if default PNG preview exists,
                    } else if (dataset.files.previews.default != null) {
                        // display default PNG preview
                        type = 'default';
                    }
                    // else display no preview
                    return type;
                }
            };
        },
        link: function(scope,elm,attrs,ctrl) {
            let type = scope.preview.getPreviewType(scope.dataset);
            let src, newElement;
            if (type == 'default') {
                src = scope.dataset.files.previews.default.path;
                newElement = angular.element(`<img class="preview" src="${src}" alt="Preview" title="Preview">`);    
            } else if (type == 'ios') {
                src = scope.dataset.files.previews.default.path;
                srcAr = scope.dataset.files.previews.ios.path;
                newElement = angular.element(`<a href="${srcAr}" rel="ar"><img class="preview" src="${src}"></a>`);
            }
            elm.append(newElement);
        }
    }
})
.directive('sbnObjectHeaderRow', function() {
    return {
        templateUrl: 'shape-models/partials/object-header-row.html',
        restrict: 'A',
        scope: {
            object: '=sbnObject'
        }
    }
})
.directive('sbnDatasetRow', function() {
    return {
        templateUrl: 'shape-models/partials/dataset-row.html',
        restrict: 'A',
        scope: {
            dataset: '=sbnDataset'
        }
    }
})
.directive('dpsModel', function() {
    return {
        templateUrl: 'shape-models/partials/dps-model.html',
        restrict: 'E',
        scope: {
            model: '='
        }
    }
})
.directive('dpsQrCode', function() {
    return {
        controller: function($scope, $http, $location) {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${$location.absUrl()}&format=svg`;
            const successCallback = res => $scope.qrCode = res.data;
            $http.get(url).then(successCallback);
        },
        link: function(scope, element) {
            scope.$watch('qrCode',val => element.append(val));
        }
    }
})
.directive('dpsToggleAr', function() {
    return {
        controller: function($scope, arDetector) {
            $scope.view = {
                arEnabled: arDetector.isRelAR || arDetector.isWebAr
            };
        }
    }
})
.directive('dpsArLink', function() {
    return {
        scope: {
            dataset: '='
        },
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            const src = scope.dataset.files.previews.default.path;
            const srcAr = scope.dataset.files.previews.ios.path;
            element.append(`<a href="${srcAr}" rel="ar"><img class="preview-ar" src="${src}"></a>`);
        }
    }
})