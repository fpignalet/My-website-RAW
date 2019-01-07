/*************************************************************************************
 * INCLUDES
 *************************************************************************************/
//...

/*************************************************************************************
 * IMPLEMENTATION
 *************************************************************************************/
class ReactButtonJSX extends React.Component {

    /// @brief ctor
    /// @param props
    constructor(props) {
        super(props);

        this.testtext = [
            'CLICK ME!',
            'Do something'
        ];

        this.testdata = [
            'JSX Test table Item1 ',
            'JSX Test table Item2 ',
            'JSX Test table Item3 '
        ];

        this.state = {
            clicked: false,
            text: 'Do something'
        };

        this.contener = props.data;

    }

    //set the text
    onMouseover (e) { this.setState({ text: this.testtext[0]}) }
    //set the text
    onMouseout (e) { this.setState({ text: this.testtext[1]}) }
    //set the clicked status
    onClick (e) { this.setState({ clicked: true }) }

    /// display button
    render() {
        if (this.state.clicked) {
            this.createtable();

            return (
                <span>
                    Did something using React/JSX:
                    now displaying the following list
                </span>
            );
        }
        else {
            return (
                <button
                    onMouseEnter={ this.onMouseover.bind(this) }
                    onMouseLeave={ this.onMouseout.bind(this) }
                    onClick={ this.onClick.bind(this) }>
                    { this.state.text }
                </button>
            );
        }
    }

    /// diaplay a table when button is clicked
    createtable() {
        const table = React.createElement(ReactTableJSX, {data: this.testdata});
        const container = this.contener.querySelector('#' + "reacttablejsx");
        ReactDOM.render(table, container);
    }

}

//-----------------------------------------------------------------------------------------------------------
class ReactTableJSX extends React.Component {

    ///ctor
    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        };
    }

    /// display table
    render() {

        // 1st parse the map to generate table items
        const namesList = this.state.data.map(
            (item, index) => {
                return (
                    <tr key={index + 1}>
                        <td>{item}</td>
                        <td>{index}</td>
                    </tr>
                );
            }
        );

        // 2nd insert table items
        return (
            <table>
                <tbody>
                    <tr key="0"><th>Name</th><th>Index</th></tr>
                    { namesList }
                </tbody>
            </table>
        );

    }

}

//-----------------------------------------------------------------------------------------------------------
/// desc
class ReactApp extends React.Component {

    /// ctor
    /// @param props
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            items: [],
            text: ''
        };

    }

    /// display 'application', in fact a dynamic list
    render() {
        return (
            <div>
                <h3>LIST</h3>
                <ReactList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="new-todo">
                        What needs to be added?
                    </label>

                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />

                    <button>
                        Add #{this.state.items.length + 1}
                    </button>

                </form>
            </div>
        );
    }

    /// desc
    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    /// desc
    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
}

/// desc
class ReactList extends React.Component {
    /// desc
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

function reactexecute() {
    let contener;

    const button = React.createElement(ReactButtonJSX, {data: document});
    contener = document.querySelector('#' + "reactbuttonjsx");
    ReactDOM.render(button, contener);

    contener = document.querySelector('#' + "reacttodojsx");
    ReactDOM.render(<ReactApp />, contener);
}
