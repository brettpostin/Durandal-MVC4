require.config({
    paths: {
        'lib': '/Scripts/lib',
        'app': '/Scripts/app',
        'durandal': '/Scripts/lib/durandal'
    }
});

define(['durandal/app', 'durandal/system', 'durandal/viewLocator', 'durandal/viewEngine'],
    function (app, system, viewLocator, viewEngine) {

        system.debug(true);

        viewLocator.useConvention('viewmodels', '../../..');
        viewEngine.viewPlugin = 'durandal/amd/text';
        viewEngine.viewExtension = '/';

        app.start().then(function () {
            app.setRoot('viewmodels/home/shell');
        });
    }
);