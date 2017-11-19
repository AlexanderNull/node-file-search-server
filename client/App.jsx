const React = require('react');
const jQuery = require('jquery');

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            files: [],
            searchInput: '',
        };
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }

    componentWillMount () {
        jQuery.get('/files', (response) => {
            this.setState({
                files: response,
            });
        });
    }

    handleSearchChange (e) {
        this.setState({
            searchInput: e.target.value,
        });
    }

    handleClearClick () {
        this.setState({
            searchInput: '',
        })
    }

    render () {
        const {
            files,
            searchInput,
        } = this.state;
        return (
            <div>
                <section className="search-section">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={this.handleSearchChange} />
                    <button
                        type="button"
                        onClick={this.handleClearClick}>
                        Clear
                    </button>
                </section>
                <section className="file-list">
                    {
                        files
                            .filter(f => !searchInput.length || f.fileName.indexOf(searchInput) > -1)
                            .map((f, i) => <p key={i}>{f.fileName}</p>)
                    }
                </section>
            </div>
        )
    }
}

module.exports = App;