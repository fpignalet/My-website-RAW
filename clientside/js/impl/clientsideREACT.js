/*************************************************************************************
 * INCLUDES
 *************************************************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import neck from './rsrc/neck.jpg';

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

    /// @brief diaplay a table when button is clicked
    createtable() {
        const container = this.contener.querySelector('#' + this.tableid);
        ReactDOM.render(<ReactTableJSX data={ this.testdata } />, container);
    }

    /****************************************
     * EVENT LAYER
     ****************************************/
    /// @brief set the text
    /// @param e
    onMouseover (e) { this.setState({ text: this.testtext[0]}) }
    /// @brief set the text
    /// @param e
    onMouseout (e) { this.setState({ text: this.testtext[1]}) }
    /// @brief set the clicked status
    /// @param e
    onClick (e) { this.setState({ clicked: true }) }

    /****************************************
     * RENDERING LAYER
     ****************************************/
    /// @brief display object content
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

    /// @brief display button
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

    /****************************************
     * RENDERING LAYER
     ****************************************/
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

    /****************************************
     * RENDERING LAYER
     ****************************************/
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

}

//-----------------------------------------------------------------------------------------------------------
/// desc
class ReactCanvas extends React.Component {

    constructor(props) {
        super(props);

        this.img = neck;

        this.canid = "canvas0";
        this.canwidth = 640;
        this.canheight = 425;
        this.canstyle = { background: "black" };

        this.harmo = new Harmony();
    }

    componentDidMount() {
        this.renderimage();
    }

    /****************************************
     * RENDERING LAYER
     ****************************************/
    /// display the object content
    render() {
        return (
            <div>
                { this.rendercanvas() }
            </div>
        );
    }

    /// display the list
    rendercanvas() {
        return (
            <div>

                <canvas id={this.canid} style={this.canstyle} width={this.canwidth} height={this.canheight}/>
                <hr/>
                { this.harmo.testlinkedplus("K") }
                <br/>
                <br/>
                { this.harmo.testlinkedplus("M") }
                <br/>
                <br/>
                <hr/>
                { this.harmo.getscale(0).toString() }
                <br/>
                <br/>
                { this.harmo.getscale(7).toString() }
                <br/>
                <br/>
                { this.harmo.getscale(2).toString() }
                <br/>
                <br/>
                { this.harmo.getscale(9).toString() }
                <br/>
                <br/>
                { this.harmo.getscale(4).toString() }
                <br/>
                <br/>
                { this.harmo.getscale(11).toString() }
                <br/>
                <br/>
                { this.harmo.getscale(6).toString() }
                <br/>
                <br/>
                { this.harmo.getscale(2, "dorien").toString() }

            </div>
        );
    }

    /// display the list
    renderimage() {
        const local = this;

        const canvas = document.getElementById(this.canid);
        const ctx = canvas.getContext("2d");

        var imageObj1 = new Image();
        imageObj1.onload = function() {
            ctx.drawImage(imageObj1,0,0, local.canwidth, local.canheight);
        }
        imageObj1.src = this.img;
    }

}

//-----------------------------------------------------------------------------------------------------------
/// desc
class Harmony {

    constructor(){
        class Linked extends Array {
            constructor(val, init = 0){
                super();
                val.forEach((it, ix) => { this.push(it) });
                this.reset(init);
            }
            reset(init = 0) {
                this.index = (init % this.length);
            }
            next(step = 1){
                this.index = ((this.index + step) % this.length);
                return this.index;
            }
            prev(step = 1){
                this.index = ((this.index - step) % this.length);
                return this.index;
            }
        }
        /*
        DO  RE  MI          FA  SOL LA   SI
        SOL LA  SI          DO  RE  MI   FA#
        RE  MI  FA#         SOL LA  SI   DO#
        LA  SI  DO#         RE  MI  FA#  SOL#
        MI  FA# SOL#        LA  SI  DO#  RE#
        SI  DO# RE#         MI  FA# SOL# LA#
        FA# SOL# LA#        SI  DO# RE#  MI#
         */
        this.keyz = new Linked([
            [ "DO", "SI#" ],
            [ "DO#", "REb" ],
            [ "RE" ],
            [ "RE#", "MIb" ],
            [ "MI", "FAb" ],
            [ "FA", "MI#" ],
            [ "FA#", "SOLb" ],
            [ "SOL" ],
            [ "SOL#", "LAb" ],
            [ "LA" ],
            [ "LA#", "SIb" ],
            [ "SI", "DOb" ]
        ]);
        this.mods = new Linked([
            "ionien",
            "",
            "dorien",
            "",
            "phrygien",
            "lydien",
            "",
            "myxolydien",
            "",
            "eolien",
            "",
            "locrien"
        ]);
    }

    testlinkedplus(sel) {
        switch(sel){
            case "K":
                this.keyz.reset();
                return  "keyz[0] = " + this.keyz[0][0] +
                    ", keyz.next() = " + this.keyz[this.keyz.next(1)][0] +
                    ", keyz.next() = " + this.keyz[this.keyz.next(1)][0] +
                    ", keyz.next() = " + this.keyz[this.keyz.next(1)][0] +
                    ", keyz.next() = " + this.keyz[this.keyz.next(1)][0];
            case "M":
                this.mods.reset();
                return  "mods[0] = " + this.mods[0] +
                    ", mods.next() = " + this.mods[this.mods.next(1)] +
                    ", mods.next() = " + this.mods[this.mods.next(1)] +
                    ", mods.next() = " + this.mods[this.mods.next(1)] +
                    ", mods.next() = " + this.mods[this.mods.next(1)];
        }
    }

    testlinkedminus(sel) {
        switch(sel){
            case "K":
                this.keyz.reset();
                return  "keyz[0] = " + this.keyz[0][0] +
                    ", keyz.prev() = " + this.keyz[this.keyz.prev(1)][0] +
                    ", keyz.prev() = " + this.keyz[this.keyz.prev(1)][0] +
                    ", keyz.prev() = " + this.keyz[this.keyz.prev(1)][0] +
                    ", keyz.prev() = " + this.keyz[this.keyz.prev(1)][0];
            case "M":
                this.mods.reset();
                return  "mods[0] = " + this.mods[0] +
                    ", mods.prev() = " + this.mods[this.mods.prev(1)] +
                    ", mods.prev() = " + this.mods[this.mods.prev(1)] +
                    ", mods.prev() = " + this.mods[this.mods.prev(1)] +
                    ", mods.prev() = " + this.mods[this.mods.prev(1)];
        }
    }

    getscale(ton, mod=this.mods[0]) {

        /*
        let ref = this.mods.indexOf(mod);
        for(let i = 0; i < ref; i--){
            this.keyz.prev();
        }*/

        let triade = [];
        this.keyz.reset(ton);
        triade.push(this.keyz[this.keyz.index][0]);
        [ 2, 2 ].forEach((it, id) => {
            triade.push(this.keyz[this.keyz.next(it)][0]);
        });

        let tetrade = [];
        this.keyz.reset(ton + 5);
        tetrade.push(this.keyz[this.keyz.index][0]);
        [ 2, 2, 2 ].forEach((it, id) => {
            tetrade.push(this.keyz[this.keyz.next(it)][0]);
        });

        return triade.concat(tetrade);
    }

    getnext5th(ton) {}
    getarpeges(ton) {}
    getrelative(ton) {}
    getchords(ton) {}

};

//-----------------------------------------------------------------------------------------------------------
/// desc
class TestApp extends React.Component {

    /****************************************
     * RENDERING LAYER
     ****************************************/
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

                <div>
                    <h3>CANVAS</h3>
                    <ReactCanvas data={document} />

                </div>

            </div>
        );
    }
}

//export default TestApp;

function reactexecute() {
    ReactDOM.render(<TestApp />, document.querySelector('#reacttestjsx'));
}
