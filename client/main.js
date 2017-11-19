const App = require('./App');
const {render} = require('react-dom');
const {createElement} = require('react');
window.start = () => {
    render(createElement(App, {}), document.getElementById('main'));
}