const mix = require('laravel-mix')

mix.disableNotifications()

mix
    .js('src/js/app.js', 'dist/')
    .sass('src/scss/app.scss', 'dist/')