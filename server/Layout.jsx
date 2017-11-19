const React = require('react');
module.exports = props => {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
            </head>
            <body>
                <main id="main" />
                <script src="scripts/app.js" />
                <script>start()</script>
            </body>
        </html>
    )
};
