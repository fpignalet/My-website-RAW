'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_LOADER,
    cliside_disctoggle,
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
    const CVcr = new CLISIDE_CVCREATE(cliside_BASEIDENT + param["create"]);
    const CVldr = new CLISIDE_CVLOADER(cliside_BASEIDENT + param["load"]);

    const srcid = "contener";
    const loadmapitem = (entry) => {
        if(true === entry["loaded"]){
            return;
        }

        /*
        if (contener.body.scrollTop.scrollTop() + window.height() < contener.getElementById(entry["desc"]).offset().top) {
            return;
        }
        */

        entry["loaded"] = true;
        switch(entry["side"]) {

            case "left":
                //-----------------------------------------------------
                // parse LEFT side using schema:
                //  entry["data"],
                //  entry["cbk"],
                //-----------------------------------------------------
                CVldr.remotegetbatch(contener,
                    CVcr,
                    entry["data"],
                    null,
                    (cr, data) => {
                        entry["cbk"](contener, cr, data);
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
                CVldr.remotegetentry(contener,
                    CVcr,
                    entry["boite"],
                    entry["boulots"],
                    entry["progress"],
                    (cr, desc, content) => {
                        cr.fillrightside(contener, desc, content);
                    }
                );

                break;

        }
    };

    //-----------------------------------------------------------
    const loader = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"] + 12);

    loader.localgetfile(contener,
        "./clientside/cards/CVcardpres.html",
        srcid,
        "prescard"
    );
    loader.localgetfile(contener,
        "./clientside/cards/CVcardskills.html",
        srcid,
        "skillscard"
    );
    loader.localgetfile(contener,
        "./clientside/cards/CVcardlangs.html",
        srcid,
        "langscard"
    );
    loader.localgetfile(contener,
        "./clientside/cards/CVgridHIST.html",
        srcid,
        "gridhistory",
        () => {
            data_CVmap1.forEach((entry, index) => {
                loadmapitem(entry);
            });
        }
    );
    loader.localgetfile(contener,
        "./clientside/cards/CVcardbildung.html",
        srcid,
        "bildungcard",
        () => {
            data_CVmap2.forEach((entry, index) => {
                loadmapitem(entry);
            });
        }
    );
    loader.localgetfile(contener,
        "./clientside/cards/CVcardhobby.html",
        srcid,
        "hobbycard",
        () => {
            data_CVmap3.forEach((entry, index) => {
                loadmapitem(entry);
            });
        }
    );

    loader.localgetfile(contener,
        "./clientside/cards/cardfooter.html",
        srcid,
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
//        alert("notyetimplemented")
}

/// @brief print function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_CVpageprint(contener, param) {
    try {
        const status = cliside_disctoggle;
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
        console.log(e.name)
    }
    finally {
        //...
    }
}
