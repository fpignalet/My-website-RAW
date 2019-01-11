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
 * IMPLEM
 *************************************************************************************/
/// @brief main entry function
/// @param contener is the target DOM
/// @param param maybe anything
export function cliside_OFFERpageload(contener, param) {
    const srcid = "contener";

    let cliside_OFFERldr = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"]);

    cliside_OFFERldr.localgetfile(contener,
        "./clientside/cards/cardheader.html",
        srcid,
        "headercard",
        () => {
            contener.getElementById("titlepart").appendChild(contener.createTextNode(
                "What can I do for you? And how much it costs...")
            )
        }
    );
    cliside_OFFERldr.localgetfile(contener,
        "./clientside/cards/cardfooter.html",
        "contener",
        "footer"
    );
    cliside_OFFERldr.localgetfile(contener,
        "./clientside/cards/cardabout.html",
        srcid,
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
