require.config({
    baseUrl: '/js/',
    paths: {
        moduleLoader: '/js/module-loader',
        jquery: 'https://code.jquery.com/jquery-2.1.4.min',
        pistachio: '.'
    },
    shim: {
        moduleLoader: {
            deps: ['jquery']
        }
    }
});
require(['moduleLoader', 'docs/docs'], function(loader) {
    loader.default();
});
