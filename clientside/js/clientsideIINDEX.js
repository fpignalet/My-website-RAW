'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_LOADER,
    clientside_navtoggle,
    cliside_BASEIDENT
} from "./lib/clientside.js";

import {
    CLISIDE_INDEXCREATE,
    CLISIDE_INDEXLOADER
} from "./impl/clientsideINDEX.js";

/*************************************************************************************
 * INCLUDES DATA
 *************************************************************************************/
import {
    data_INDEXfiles,
    data_INDEXmailitems
} from "../data/INDEXdata.js";

import {
    data_BNEWSmap,
    data_BTECHmap1,
    data_BTECHmap2
} from "../data/BLOGdata.js";

/*************************************************************************************
 * IMPLEMENTATION: PAGE ENTRYPOINTs
 *************************************************************************************/
let cliside_INDEXcr = null;
let cliside_INDEXldr = null;

/// @brief fills the page with required data
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_INDEXpageload(contener, param) {
//        document.cookie = "fpiwebsite";

    //-----------------------------------------------------------
    window.ENTRYmodalnews = cliside_INDEXmodalnews;
    window.ENTRYmodaltech = cliside_INDEXmodaltech;
    window.ENTRYpagefbk = cliside_INDEXpagefbk;
    window.ENTRYnavtoggle = clientside_navtoggle;

    //-----------------------------------------------------------
    cliside_INDEXcr = new CLISIDE_INDEXCREATE(cliside_BASEIDENT + param["create"]);
    cliside_INDEXldr = new CLISIDE_INDEXLOADER(cliside_BASEIDENT + param["load"]);

    cliside_INDEXldr.localgetfile(contener,
        "./clientside/cards/cardnavi.html",
        "contener",
        "navi",
        () => {
            cliside_INDEXcr.displayNAVBARS(contener)
        }
    );

    cliside_INDEXcr.displayTITLE(contener);
    cliside_INDEXcr.displayABOUT(contener);

    cliside_INDEXldr.loadPRESENTATION(contener, cliside_INDEXcr, "./clientside/cards/CVcardpres.html");
    cliside_INDEXldr.loadNEWS(contener, cliside_INDEXcr, "./clientside/cards/BLOGgridNEWS.html");
    cliside_INDEXldr.loadTECH(contener, cliside_INDEXcr, "./clientside/cards/BLOGgridTECH1.html");

    cliside_INDEXldr.localgetfile(contener,
        "./clientside/cards/cardfooter.html",
        "contener",
        "footer"
    );
    cliside_INDEXldr.localgetfile(contener,
        "./clientside/cards/cardmodal.html",
        "contener",
        "modalutil"
    );

}

/// @brief leaving the INDEX TECH page
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_INDEXpageunload(contener, param) {
    //...
}

/// @brief Change style of navbar on scroll
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_INDEXpagescroll(contener, param) {
    const navbar = contener.getElementById(param);
    if(null === navbar){
        return;
    }

    if (contener.body.scrollTop > 100 || contener.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    }
    else {
        navbar.className = navbar.className.replace(
            " w3-card w3-animate-top w3-white", ""
        );
    }
}

/// @brief wrapper function to diaplay a sprite
/// @param contener is the target DOM
/// @param inst is the item which requests the load
/// @param param selects the data_BNEWSmap item
export function cliside_INDEXmodalnews(contener, inst, param) {
    try {
        cliside_INDEXldr.showMODAL(
            contener, cliside_INDEXcr, inst,
            data_INDEXfiles[1],
            "./clientside/cards/BLOGgridNEWS.html",
            "gridnews",
            data_BNEWSmap[param]["desc"]
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
export function cliside_INDEXmodaltech(contener, inst, param) {
    try {
        cliside_INDEXldr.showMODAL(
            contener, cliside_INDEXcr, inst,
            data_INDEXfiles[2],
            "./clientside/cards/BLOGgridTECH1.html",
            "gridtech1",
            data_BTECHmap1[param]["desc"]
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
/// @param param maybe anything
export function cliside_INDEXpagefbk(contener, param) {
    try {
        const basename = "cliside_ENTRYphpmail";
        const loader = new CLISIDE_LOADER(basename, cliside_BASEIDENT + param["load"]);

        const params = [
            basename,
            contener.getElementById(data_INDEXmailitems[0]).value,
            contener.getElementById(data_INDEXmailitems[1]).value,
            contener.getElementById(data_INDEXmailitems[2]).value
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
