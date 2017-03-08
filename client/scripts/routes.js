import { Config } from 'angular-ecmascript/module-helpers';

import exampleTemplateUrl from '../templates/example.html';
import tabsTemplateUrl from '../templates/tabs.html';

export default class RoutesConfig extends Config {
    configure() {
        this.$stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: tabsTemplateUrl
            })
            .state('tab.example', {
                url: '/example',
                views: {
                    'tab-chats': {
                        templateUrl: exampleTemplateUrl
                    }
                }
            });

        this.$urlRouterProvider.otherwise('tab/example');
    }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];