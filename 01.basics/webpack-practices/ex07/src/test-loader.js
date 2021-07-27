module.exports = function(source) {
    console.log('text-loader preprocessing...');
    return `module.exports = {text: '${source}'}`;
}