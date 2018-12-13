'use strict';

import {
    CLISIDE_DOM,
    CLISIDE_LOADER
} from "./clientside.js";

import {
    CLISIDE_CVLOADER,
    CLISIDE_CVCREATE
} from "./clientsideCV.js";

import {
    CLISIDE_BLOGLOADER
} from "./clientsideBLOG.js";

import {
    cliside_ENTRYaboutdata,
    cliside_ENTRYcontentdata,
    cliside_ENTRYfiles,
    cliside_ENTRYitemsabout,
    cliside_ENTRYitemsmail,
    cliside_ENTRYitemsnav1,
    cliside_ENTRYitemsnav2,
    cliside_ENTRYitemsnews,
    cliside_ENTRYitemspres,
    cliside_ENTRYitemstech,
    cliside_ENTRYitemstitle,
    cliside_ENTRYmenubars,
    cliside_ENTRYtitledata
} from "./data/ENTRYdata.js";

import {
    data_CVmap
} from "./data/CVdata.js";

import {
    data_BNEWSlasts,
    data_BTECHlasts,
    data_BNEWSmap,
    data_BTECHmap
} from "./data/BLOGdata.js";

let cliside_ENTRYcr = null;
let cliside_ENTRYloader = null;

/*************************************************************************************
 * IMPLEMENTATION: ENTRY PAGE ITEMS CREATION
 *************************************************************************************/
/// @brief specific DOM utilities for ENTRY page
export class CLISIDE_ENTRYCREATE extends CLISIDE_DOM {

    /// ctor
    /// @param id
    constructor(id) {
        super(id);

    }

    /// @brief prepare navigation menu/bar
    /// @param contener is the target DOM
    displayNAVBARS(contener) {
        cliside_ENTRYitemsnav1.forEach((item, index) => {
            if("" === item) return;
            contener.getElementById(item).appendChild(contener.createTextNode(cliside_ENTRYmenubars[index]));
        });
        cliside_ENTRYitemsnav2.forEach((item, index) => {
            if("" === item) return;
            contener.getElementById(item).appendChild(contener.createTextNode(cliside_ENTRYmenubars[index]));
        });

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare title
    /// @param contener is the target DOM
    displayTITLE(contener) {
        cliside_ENTRYitemstitle.forEach((item, index) => {
            if("" === item) return;
            contener.getElementById(item).appendChild(contener.createTextNode(cliside_ENTRYtitledata[index]));
        });

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare about part
    /// @param contener is the target DOM
    displayABOUT(contener) {
        cliside_ENTRYitemsabout.forEach((item, index) => {
            if("" === item) return;
            contener.getElementById(item[1]).appendChild(contener.createTextNode(cliside_ENTRYaboutdata[index][0]));
            contener.getElementById(item[0]).appendChild(contener.createTextNode(cliside_ENTRYaboutdata[index][1]));
        });

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    displayPRESENTATION(contener){
        const nameid = cliside_ENTRYitemspres[0];
        contener.getElementById(nameid).appendChild(contener.createTextNode(cliside_ENTRYcontentdata[0][0]));
        const photoid = cliside_ENTRYitemspres[1];
        contener.getElementById(photoid).setAttribute("src", cliside_ENTRYcontentdata[0][1]);

        //----------------------
        this.addbutton(contener, cliside_ENTRYitemspres[4], cliside_ENTRYfiles[0]);

    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    previewNEWS(contener){
        const titleid = cliside_ENTRYitemsnews[0];
        contener.getElementById(titleid).appendChild(contener.createTextNode(cliside_ENTRYcontentdata[1][0]));

        const textid = cliside_ENTRYitemsnews[1];
        const it = contener.getElementById(textid);
        const text = cliside_ENTRYcontentdata[1][1];
        it.appendChild(contener.createTextNode(text[0]));
        it.appendChild(contener.createElement("br"));
        it.appendChild(contener.createTextNode(text[1]));

        //----------------------
        this.addbutton(contener, cliside_ENTRYitemsnews[4], cliside_ENTRYfiles[1]);

    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    previewTECH(contener){
        const titleid = cliside_ENTRYitemstech[0];
        contener.getElementById(titleid).appendChild(contener.createTextNode(cliside_ENTRYcontentdata[2][0]));

        const textid = cliside_ENTRYitemstech[1];
        const it = contener.getElementById(textid);
        const text = cliside_ENTRYcontentdata[2][1];
        it.appendChild(contener.createTextNode(text[0]));
        it.appendChild(contener.createElement("br"));
        it.appendChild(contener.createTextNode(text[1]));

        //----------------------
        this.addbutton(contener, cliside_ENTRYitemstech[4], cliside_ENTRYfiles[2]);

    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    displaymodal (domsrc, datasrc, contndst, idsrc, iddst){
        contndst.getElementById("modaldiv").style.display = "block";
        contndst.getElementById("modalimg").src = idsrc.src;

        //SRC side --------------------
        const idtitle = Object.keys(datasrc)[0];
        const itsrc = domsrc.getElementById(idtitle);

        const datatitle = datasrc[idtitle];
        const iddate = Object.keys(datasrc)[1];
        const datadate1 = datasrc[iddate][0];
        const datadate2 = datasrc[iddate][1];

        itsrc.innerHTML = datatitle + ": " +
            datadate1 + " / " + datadate2;

        //DST side --------------------
        const itdst = contndst.getElementById(iddst);
        for(let content = itdst.firstChild; null != content; content = itdst.firstChild) {
            //target cleanup
            contndst.getElementById(iddst).removeChild(content);
        }

        //target update
        contndst.getElementById(iddst).appendChild(itsrc);
    }

    /*******************************************
     * Loading completion
     *******************************************/
    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    updatePRESENTATION(domsrc, datasrc, contndst, idsrc, iddst){
        //SRC side
        const CV = new CLISIDE_CVCREATE();
        CV.addINFO(domsrc, datasrc);
        const itsrc = domsrc.getElementById(idsrc);
        //DST side
        const itdst = contndst.getElementById(iddst);
        for(let content = itdst.firstChild; null != content; content = itdst.firstChild) {
            //target cleanup
            itdst.removeChild(content);
        }

        //target update
        contndst.getElementById(iddst).appendChild(itsrc);

    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    updateSPRITE (domsrc, datasrc, contndst, idsrc, iddst){
        const itsrc = domsrc.getElementById(datasrc);
        const img = itsrc.getAttribute("src");
        contndst.getElementById(iddst).setAttribute("src", img);

    }

}

/*************************************************************************************
 * IMPLEMENTATION: COMMUNICATION WITH SERVER
 *************************************************************************************/

/// @brief specific loader for ENTRY page
export class CLISIDE_ENTRYLOADER extends CLISIDE_LOADER {

    /// @brief ctor
    /// @param data desc
    constructor(creator, id) {
        super("", id);

        this.parser = new DOMParser();

        //Need to use sub loaders instead of making everything directly with this loader:
        //in displayitems the target property should be fixed with the file,
        //so it's better to use intermediate loaders to be sure that it'll not mess with Http/ajax async behaviour
        this.CVpreloader = new CLISIDE_CVLOADER();
        this.BLOGpreloader = new CLISIDE_BLOGLOADER();
    }

    /*******************************************
     * Loading layer
     *******************************************/
    /// @brief loading presentation data
    /// @param contener is the destination DOM
    loadPRESENTATION(contener, creator) {
        creator.displayPRESENTATION(contener);

        //----------------------
        const local = this;

        // the goal consists in loading the page which contains the data we need,
        // but it'll be empty, so we need to load the data too.
        //------------------
        // PRELOAD:
        // 1st - load remote data
        this.CVpreloader.remotegetbatch(contener,
            creator,
            data_CVmap[1]["data"],
            null,
            (cr, dataremote) => {
                //------------------
                // POSTLOAD:
                // 2nd - then load reference page
                const file = cliside_ENTRYfiles[0];
                const srcpresid = cliside_ENTRYitemspres[2];
                const dstpresid = cliside_ENTRYitemspres[3];
                local.displayitems(contener, file, dataremote, srcpresid, dstpresid,
                    (dom, datasrc, contener, idsrc, itdst) => {
                        // 3rd - then fill ref page with data and transfer items to current page
                        cr.updatePRESENTATION(dom, datasrc, contener, idsrc, itdst);
                    }
                );
            }
        );
    }

    /// @brief loading blog news data
    /// @param contener is the destination DOM
    loadNEWS(contener, creator) {
        creator.previewNEWS(contener);

        //----------------------
        // 1st - load reference page
        const file = cliside_ENTRYfiles[1];
        const imgsits = [ data_BNEWSlasts[0], data_BNEWSlasts[1] ];
        const imgsids = [ cliside_ENTRYitemsnews[2], cliside_ENTRYitemsnews[3] ];
        this.displayitems(contener, file, imgsits, null, imgsids,
            (dom, datasrc, contener, idsrc, itdst) => {
                // 2nd - then transfer reference page items to current page
                creator.updateSPRITE(dom, datasrc, contener, idsrc, itdst);
            }
        );
    }

    /// @brief loading blog tech data
    /// @param contener is the destination DOM
    loadTECH(contener, creator) {
        creator.previewTECH(contener);

        //----------------------
        // 1st - load reference page
        const file = cliside_ENTRYfiles[2];
        const imgsits = [ data_BTECHlasts[0], data_BTECHlasts[1] ];
        const imgsids = [ cliside_ENTRYitemstech[2], cliside_ENTRYitemstech[3] ];
        this.displayitems(contener, file, imgsits, null, imgsids,
            (dom, datasrc, contener, idsrc, itdst) => {
                // 2nd - then transfer reference page items to current page
                creator.updateSPRITE(dom, datasrc, contener, idsrc, itdst);
            }
        );
    }

    /// @brief Modal Image Gallery handling
    /// @param contener is the destination DOM
    /// @param element desc
    /// @param file desc
    /// @param data desc
    showmodal(contener, creator, element, file, data) {
        const local = this;

        //------------------
        // PRELOAD:
        // 1st - load remote data
        this.BLOGpreloader.remotegetbatch(contener,
            creator,
            data,
            null,
            (cr, d) => {
                //------------------
                // POSTLOAD:
                // 2nd - then load reference page
                local.displayitems(contener, file, d, null, "modalcaption",
                    (dom, datasrc, contener, idsrc, itdst) => {
                        // 3rd - then fill ref page with data and transfer items to current page
                        cr.displaymodal(dom, datasrc, contener, element, itdst);
                    }
                );
            }
        );
    }

    /*******************************************
     * Display wrapper
     *******************************************/
    /// @brief calls serverside with cliside_BLOGphptest1 selector then updates txtHint html item
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    /// @param cbk desc
    displayitems(contener, file, data, idsrc, itdst, cbk) {
        const inst = this;

        this.target = file;
        this.getdataraw(null, (result) => {
            if(true === Array.isArray(data)) {
                data.forEach((item, index) => {
                    const dom = inst.parser.parseFromString(result, "text/html");
                    cbk(dom, item, contener, idsrc, itdst[index]);
                })
            }
            else {
                const dom = inst.parser.parseFromString(result, "text/html");
                cbk(dom, data, contener, idsrc, itdst);
            }
        });
    }

}

/*************************************************************************************
 * IMPLEMENTATION: PAGE ENTRYPOINTs
 *************************************************************************************/
/// @brief fills the page with required data
/// @param contener is the target DOM
export function cliside_ENTRYpageload(contener) {
    try {
        cliside_ENTRYcr = new CLISIDE_ENTRYCREATE(-1);

        cliside_ENTRYcr.displayNAVBARS(contener);

        cliside_ENTRYcr.displayTITLE(contener);
        cliside_ENTRYcr.displayABOUT(contener);

        cliside_ENTRYloader = new CLISIDE_ENTRYLOADER(-1);
        cliside_ENTRYloader.loadPRESENTATION(contener, cliside_ENTRYcr);
        cliside_ENTRYloader.loadNEWS(contener, cliside_ENTRYcr);
        cliside_ENTRYloader.loadTECH(contener, cliside_ENTRYcr);

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/// @brief wrapper function to diaplay a sprite
/// @param contener is the target DOM
/// @param inst is the item which requests the load
/// @param index selects the data_BNEWSmap item
export function cliside_ENTRYmodalnews(contener, inst, index) {
    try {
        cliside_ENTRYloader.showmodal(
            contener, cliside_ENTRYcr, inst,
            cliside_ENTRYfiles[1], data_BNEWSmap[index]["desc"]
        );

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/// @brief wrapper function to diaplay a sprite
/// @param contener is the target DOM
/// @param inst is the item which requests the load
/// @param index selects the data_BTECHmap item
export function cliside_ENTRYmodaltech(contener, inst, index) {
    try {
        cliside_ENTRYloader.showmodal(
            contener, cliside_ENTRYcr, inst,
            cliside_ENTRYfiles[2], data_BTECHmap[index][0]
        );

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/// @brief sends a feedback message
/// @param contener is the target DOM
export function cliside_ENTRYpagefbk(contener) {
    try {
        const basename = "cliside_ENTRYphpmail";
        const loader = new CLISIDE_LOADER(basename, -1);

        const params = [
            basename,
            contener.getElementById(cliside_ENTRYitemsmail[0]).value,
            contener.getElementById(cliside_ENTRYitemsmail[1]).value,
            contener.getElementById(cliside_ENTRYitemsmail[2]).value
        ];
        loader.getdataraw(
            params,
            (result) => {
//                alert("Mail has been sent");
                alert("GOT ANSWER: " + result);

            }

        );

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}
