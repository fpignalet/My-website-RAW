/*************************************************************************************
 * INCLUDES
 *************************************************************************************/
//import React from 'react';
//import ReactDOM from 'react-dom';
//import neck from './rsrc/neck.jpg';

/*************************************************************************************
 * IMPLEMENTATION
 *************************************************************************************/
class ReactButtonJSX extends React.Component {

    /// @brief ctor
    /// @param props
    constructor(props) {
        super(props);

        this.contener = props.data;
        this.select = props.select;
        this.index = props.index;

        this.buttontext = [
            'Show/hide scale',
        ];

        this.tableid = "reacttablejsx" + props.index;
        this.tabledata = [];
        this.harmo = new Harmony();

        this.state = {
            clicked: false,
            text: this.harmo.mods[this.select]
        };

    }

    /// @brief diaplay a table when button is clicked
    createtable() {
        this.tabledata = [];
        this.harmo.getscale(this.select).forEach((it, id) => {
            this.tabledata.push(it);
        });

        const container = this.contener.querySelector('#' + this.tableid);
        ReactDOM.render(<ReactTableJSX data={ this.tabledata } />, container);
    }

    /****************************************
     * EVENT LAYER
     ****************************************/
    /// @brief set the text
    /// @param e
    onMouseover (e) { this.setState({ text: this.buttontext[0]}) }
    /// @brief set the text
    /// @param e
    onMouseout (e) { this.setState({ text: this.harmo.mods[this.select]}) }
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
                    { this.renderbutton() }
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
                <tr key="0"><th>[Index]</th><th>[Name]</th></tr>
                { namesList }
                </tbody>
            </table>
        );

    }

    /// display 1 table item
    renderitem(item, index) {

        return (
            <tr key={index + 1}>
                <td>{index}</td>
                <td>{item}</td>
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

        this.img = "./clientside/js/rsrc/neck.jpg";

        this.canid = "canvas0";
        this.canwidth = 2048;
        this.canheight = 425;
        this.canstyle = { background: "black" };

        this.harmo = new Harmony();
    }

    componentDidMount() {
        var canvas=document.getElementById(this.canid),
            ctx = canvas.getContext("2d");

        canvas.width = 320;
        canvas.height = 480;

        ctx.fillStyle = "red";
        ctx.fillRect(160, 240, 20,20);
        ctx.fillText("Im on top of the world!", 30,30);    }

    /****************************************
     * RENDERING LAYER
     ****************************************/
    /// display the object content
    render() {
        return (
            <div id="container">
                <img className='img' src="./rsrc/neck.jpg" alt=""/>
                <canvas id={this.canid} style={this.canstyle} width={this.canwidth} height={this.canheight}/>
            </div>
        );
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
//                this.reset(init);
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
            [ "C", "B#" ],
            [ "C#", "Db" ],
            [ "D" ],
            [ "D#", "Eb" ],
            [ "E", "Fb" ],
            [ "F", "E#" ],
            [ "F#", "Gb" ],
            [ "G" ],
            [ "G#", "Ab" ],
            [ "A" ],
            [ "A#", "Bb" ],
            [ "B", "Cb" ]
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

    constructor(props) {
        super(props);

        this.harmo = new Harmony();
    }

    /****************************************
     * RENDERING LAYER
     ****************************************/
    /// display 'application', contents
    render() {
        return (
            <div>
                <div>
                    <ReactCanvas data={document} />

                </div>

                <div>
                    <h3>SCALES / MODES</h3>
                    <ReactButtonJSX data={document} index={0} select={0}/>
                    <ReactButtonJSX data={document} index={2} select={2}/>
                    <ReactButtonJSX data={document} index={4} select={4}/>
                    <ReactButtonJSX data={document} index={6} select={5}/>
                    <ReactButtonJSX data={document} index={1} select={7}/>
                    <ReactButtonJSX data={document} index={3} select={9}/>
                    <ReactButtonJSX data={document} index={5} select={11}/>

                </div>

                <div>
                    <h3>CHORDS</h3>
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
