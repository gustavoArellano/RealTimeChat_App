const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

environment.plugins.prepend('Provid', 
    new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery'
    })
)

module.exports = environment

