/*************************************************************************************
 * INCLUDES
 *************************************************************************************/
//import React from 'react';
//import ReactDOM from 'react-dom';

/*************************************************************************************
 * IMPLEMENTATION
 *************************************************************************************/
class ReactButtonJSX extends React.Component {

    /// @brief ctor
    /// @param props
    constructor(props) {
        super(props);

        this.tableid = "reacttablejsx";

        this.testtext = [
            'CLICK ME!',
            'Do something',
            'Did something using React/JSX: now displaying the following list\n'
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
                <div>

                    { this.testtext[2] }
                    <div id={this.tableid}></div>

                </div>

            );
        }
        else {
            return (
                <div>

                    { this.renderbutton() }
                    <div id={this.tableid}></div>

                </div>
            );
        }
    }

    renderbutton() {
        return (
            <button
                onMouseEnter={ this.onMouseover.bind(this) }
                onMouseLeave={ this.onMouseout.bind(this) }
                onClick={ this.onClick.bind(this) }>
                { this.state.text }
            </button>
        );
    }

    /// diaplay a table when button is clicked
    createtable() {
        const container = this.contener.querySelector('#' + this.tableid);
        ReactDOM.render(<ReactTableJSX data={ this.testdata } />, container);
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

    /// display the object content
    render() {

        // 1st parse the map to generate table items
        const namesList = this.state.data.map(
            (item, index) => {
                return this.renderitem(item, index);
            }
        );

        // 2nd insert table items
        return (
            <div>
                { this.rendertable(namesList) }
            </div>
        );

    }

    /// display table
    rendertable(namesList) {

        return (
            <table>
                <tbody>
                <tr key="0"><th>Name</th><th>Index</th></tr>
                { namesList }
                </tbody>
            </table>
        );

    }

    /// display 1 table item
    renderitem(item, index) {

        return (
            <tr key={index + 1}>
                <td>{item}</td>
                <td>{index}</td>
            </tr>
        );

    }

}

//-----------------------------------------------------------------------------------------------------------
/// desc
class ReactList extends React.Component {
    /// ctor
    /// @param props
    constructor(props) {
        super(props);

        this.onchange = this.onchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this);

        this.state = {
            items: [],
            text: ''
        };

    }

    /// display the object content
    render() {
        return (
            <div>

                { this.renderlist() }
                { this.renderform() }

            </div>
        );
    }

    /// display the list
    renderlist() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }

    /// display the form with list input
    renderform() {
        return (
            <form onSubmit={this.onsubmit}>

                <label htmlFor="new-todo">
                    What needs to be added?
                </label>

                <input
                    id="new-todo"
                    onChange={this.onchange}
                    value={this.state.text}
                />

                <button>
                    Add #{this.state.items.length + 1}
                </button>

            </form>
        );
    }

    /// called when input modified
    onchange(e) {
        this.setState({ text: e.target.value });
    }

    /// called when list modified
    onsubmit(e) {
        e.preventDefault();

        if (!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: this.state.items.concat(newItem),
            text: ''
        }));
    }
}

//-----------------------------------------------------------------------------------------------------------
/// desc
class TestApp extends React.Component {

    /// display 'application', contents
    render() {
        return (
            <div>
                <div>
                    <h3>BUTTON</h3>
                    <ReactButtonJSX data={document} />

                </div>

                <div>
                    <h3>LIST</h3>
                    <ReactList data={document} />

                </div>

            </div>
        );
    }
}

//export default TestApp;

function reactexecute() {
    ReactDOM.render(<TestApp />, document.querySelector('#reacttestjsx'));
}
