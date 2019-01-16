'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_LOADER,
    cliside_BASEIDENT
} from "./lib/clientside.js";

/*************************************************************************************
 * INCLUDES DATA
 *************************************************************************************/

/*************************************************************************************
 * GLOBAL VARIABLES
 *************************************************************************************/
const cliside_OFFERsrcid = "contener";

let cliside_OFFERloader = null;

/*************************************************************************************
 * IMPLEM
 *************************************************************************************/
/// @brief main entry function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_OFFERpageload(contener, param) {
    //-----------------------------------------------------
    cliside_OFFERloader = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"]);

    cliside_OFFERloader.localgetfile(contener,
        "./clientside/cards/cardheader.html",
        cliside_OFFERsrcid,
        "headercard",
        () => {
            contener.getElementById("titlepart").appendChild(contener.createTextNode(
                "What can I do for you? And how much it costs...")
            )
        }
    );

    //-----------------------------------------------------
    //...

    //-----------------------------------------------------
    cliside_OFFERloader.localgetfile(contener,
        "./clientside/cards/cardfooter.html",
        "contener",
        "footer"
    );
    cliside_OFFERloader.localgetfile(contener,
        "./clientside/cards/cardabout.html",
        cliside_OFFERsrcid,
        "aboutcard"
    );

}

/// @brief leav function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_OFFERpageunload(contener, param) {
//        alert("notyetimplemented")
}

/// @brief scroll function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_OFFERpagescroll(contener, param) {
//        alert("notyetimplemented")
}
