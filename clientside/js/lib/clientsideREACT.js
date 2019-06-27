/*************************************************************************************
 * INCLUDES
 *************************************************************************************/
//import React from 'react';
//import ReactDOM from 'react-dom';

/*************************************************************************************
 * IMPLEMENTATION: SITE STRUCTURE
 *************************************************************************************/
class SiteGridJSX extends React.Component {

    ///ctor
    constructor(props) {
        super(props);

        this.content = props.content;

        this.ENTRY = "blog_entry";
        this.PHOTOID = "PHOTO";
        this.TITLEID = "TITLE";
        this.TITLEDATE = "DATE";
        this.WAITID = "wait";
        this.WAITPROGRID = "progress";
        this.WAITBARID = "bar";
        this.CONTID = "CONTENT";
    }

    componentDidMount() {
        window.onload_();
    }

    componentWillUnmount() {
        window.onunload_();
    }

    listenScrollEvent() {
        window.onscroll_();
    }

    /// display the object content
    render() {

        // 1st parse the map to generate table items
        const entrylist = this.content.map(
            (item, index) => {
                return this.renderitem(item, index);
            }
        );
        // 2nd insert table items
        return (
            <div onScroll={this.listenScrollEvent.bind(this)}>
                { entrylist }
            </div>
        );

    }

    /// display 1 table item
    renderitem(item, index) {

        const entryID = this.ENTRY + item.id;
        const entryPHOTOSRC = "";

        const entryPHOTOID = entryID + this.PHOTOID;
        const entryTITLEID = entryID + this.TITLEID;
        const entryTITLEDATE = entryID + this.TITLEDATE;
        const entryWAITID = entryID + this.WAITID;
        const entryWAITPROGRID = entryID + this.WAITPROGRID;
        const entryWAITBARID = entryID + this.WAITBARID;
        const entryCONTID = entryID + this.CONTID;

        return (
            <div id={ entryID }
                 className="w3-card-4 w3-margin w3-white">
                <img id={ entryPHOTOID }
                     src={ entryPHOTOSRC }
                     alt="img"
                     style={{width:'100%'}} />
                <div className="w3-container">
                    <h3 id={ entryTITLEID }></h3>
                    <h5 id={ entryTITLEDATE }></h5>
                </div>
                <div id={ entryWAITID }>
                    <div id={ entryWAITPROGRID }
                         className="myProgress">
                        <div id={ entryWAITBARID }
                             className="myBar reactentry"
                             style={{width:'100%'}}>Loading...</div>
                    </div>
                </div>
                <div id={ entryCONTID }
                     className="w3-container">
                </div>
            </div>
        );

    }

}

//-----------------------------------------------------------------------------------------------------------
//export default TestAppJSX;

function reactexecuteBLOG(id, content) {
    ReactDOM.render(<SiteGridJSX content={ content } />, document.querySelector(id));
}
