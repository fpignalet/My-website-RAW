'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_LOADER,
    cliside_disctoggle,
    cliside_disctoggled,
    cliside_BASEIDENT
} from "./lib/clientside.js";

import {
    CLISIDE_CVCREATE,
    CLISIDE_CVLOADER
} from "./impl/clientsideCV.js";

/*************************************************************************************
 * INCLUDES DATA
 *************************************************************************************/
import {
    data_CVmap1,
    data_CVmap2,
    data_CVmap3
} from "../data/CVdata.js";

/*************************************************************************************
 * GLOBAL VARIABLES
 *************************************************************************************/
const cliside_CVsrcid = "contener";

let cliside_CVloader = null;
let cliside_CVcr = null;
let cliside_CVldr = null;

/*************************************************************************************
 * IMPLEMENTATION: PAGE UTILS
 *************************************************************************************/
/// @brief main entry function
/// @param contener is the target DOM
/// @returns 1 desc
function cliside_CVlazyload(contener) {
    const loadmapitem = (entry) => {
        if(true === entry["loaded"]){
            return;
        }

        switch(entry["side"]) {

            case "left":
                //-----------------------------------------------------
                // parse LEFT side using schema:
                //  entry["data"],
                //  entry["cbk"],
                //-----------------------------------------------------
                cliside_CVldr.remotegetbatch(contener,
                    cliside_CVcr,
                    entry["data"],
                    null,
                    (cr, data) => {
                        entry["cbk"](contener, cr, data);
                        entry["loaded"] = true;
                    }
                );

                break;

            case "right":
            default:
                //-----------------------------------------------------
                // parse RIGHT side using schema:
                //  entry["boite"],
                //  entry["boulots"],
                //  entry["progress"],
                //-----------------------------------------------------
                cliside_CVldr.remotegetentry(contener,
                    cliside_CVcr,
                    entry["boite"],
                    entry["boulots"],
                    entry["progress"],
                    (cr, desc, content) => {
                        cr.fillrightside(contener, desc, content);
                        entry["loaded"] = true;
                    }
                );

                break;

        }
    };

    cliside_CVloader.localgetfile(contener,
        "./clientside/cards/CVgridHIST.html",
        cliside_CVsrcid,
        "gridhistory",
        () => {
            data_CVmap1.forEach((entry, index) => {
                loadmapitem(entry);
            });
        }
    );

    cliside_CVloader.localgetfile(contener,
        "./clientside/cards/CVcardbildung.html",
        cliside_CVsrcid,
        "bildungcard",
        () => {
            data_CVmap2.forEach((entry, index) => {
                loadmapitem(entry);
            });
        }
    );
    cliside_CVloader.localgetfile(contener,
        "./clientside/cards/CVcardhobby.html",
        cliside_CVsrcid,
        "hobbycard",
        () => {
            data_CVmap3.forEach((entry, index) => {
                loadmapitem(entry);
            });
        }
    );

}

/*************************************************************************************
 * IMPLEMENTATION: PAGE ENTRYPOINTs
 *************************************************************************************/
/// @brief main entry function
/// @param contener is the target DOM
/// @param param may be anything
/// @returns 1 desc
export function cliside_CVpageload(contener, param) {
    //-----------------------------------------------------------
    window.CVpageprint = cliside_CVpageprint;
    window.CVtoggleall = cliside_disctoggle;

    //-----------------------------------------------------------
    cliside_CVloader = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"] + 12);
    cliside_CVcr = new CLISIDE_CVCREATE(cliside_BASEIDENT + param["create"]);
    cliside_CVldr = new CLISIDE_CVLOADER(cliside_BASEIDENT + param["load"]);

    cliside_CVloader.localgetfile(contener,
        "./clientside/cards/CVcardpres.html",
        cliside_CVsrcid,
        "prescard"
    );
    cliside_CVloader.localgetfile(contener,
        "./clientside/cards/CVcardskills.html",
        cliside_CVsrcid,
        "skillscard"
    );
    cliside_CVloader.localgetfile(contener,
        "./clientside/cards/CVcardlangs.html",
        cliside_CVsrcid,
        "langscard"
    );

    //-----------------------------------------------------------
    cliside_CVlazyload(contener);
    //-----------------------------------------------------------

    cliside_CVloader.localgetfile(contener,
        "./clientside/cards/cardfooter.html",
        cliside_CVsrcid,
        "footer"
    );

}

/// @brief leave function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_CVpageunload(contener, param) {
//        alert("notyetimplemented")
}

/// @brief scroll function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_CVpagescroll(contener, param) {
    /*
    cliside_CVlazyload(contener);
    */
}

/// @brief print function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_CVpageprint(contener, param) {
    try {
        const status = cliside_disctoggled;
        if(false === status) {
            cliside_disctoggle(contener);
        }
        window.print();
        if(false === status) {
            cliside_disctoggle(contener);
        }

//        console.log(this.getFuncName() + "OK");
    }
    catch (e) {
        console.log(e.toString())
    }
    finally {
        //...
    }
}
