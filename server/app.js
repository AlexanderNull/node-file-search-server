const express = require('express');
const helmet = require('helmet');
const React = require('react');
const ReactServer = require('react-dom/server');
const path = require('path');

const karaokeServer = (serverSettings) => {
    const app = express();
    app.use(express.static(path.resolve('public')));

    const files = require('./getFiles')(serverSettings.scanDirectories);

    app.get('/files', (req, res) => {
        res.json(files);
    });

    require('babel-register')({
        ignore: false,
        presets: ['env', 'react'],
        extensions: ['.jsx'],
    });
    const Layout = require('./Layout.jsx');
    const layoutPage = ReactServer.renderToString(React.createElement(Layout, {
        files
    }));

    app.get('/', (req, res) => {
        res.send('<!DOCTYPE html>' + layoutPage);
    });

    return app;
}

module.exports = karaokeServer;