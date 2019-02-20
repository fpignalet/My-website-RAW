'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_PAGE,
    CLISIDE_LOADER,
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
 * GLOBAL VARIABLES
 *************************************************************************************/
let cliside_INDEXpage = null;

/*************************************************************************************
 * IMPLEMENTATION: PAGE UTILS
 *************************************************************************************/
export class CLISIDE_IINDEX extends CLISIDE_PAGE {

    /*************************************************************************************
     * IMPLEMENTATION: PAGE ENTRYPOINTs
     *************************************************************************************/
    /// @brief fills the page with required data
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageload(contener, param) {
//        document.cookie = "fpiwebsite";

        //-----------------------------------------------------------
        window.INDEXmodalnews = CLISIDE_IINDEX.modalnews;
        window.INDEXmodaltech = CLISIDE_IINDEX.modaltech;
        window.INDEXpagefbk = CLISIDE_IINDEX.pagefbk;
        window.INDEXnavtoggle = CLISIDE_PAGE.navtoggle;

        //-----------------------------------------------------------
        cliside_INDEXpage = new CLISIDE_IINDEX(param);
        cliside_INDEXpage.loadtop(contener,
            "./clientside/cards/cardnavi.html"
        );
        cliside_INDEXpage.loadbody(contener, [
            "./clientside/cards/CVcardpres.html",
            "./clientside/cards/BLOGgridNEWS.html",
            "./clientside/cards/BLOGgridTECH1.html"
        ]);
        cliside_INDEXpage.loadbottom(contener, [
            "./clientside/cards/cardfooter.html",
            "./clientside/cards/cardmodal.html",
            "./clientside/cards/cardfeedback.html"
        ]);

    }

    /// @brief leaving the INDEX TECH page
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageunload(contener, param) {
        //...
    }

    /// @brief Change style of navbar on scroll
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pagescroll(contener, param) {
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

//    cliside_INDEXlazyload(contener);
    }

    /// @brief print function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageprint(contener, param) {
//        alert("notyetimplemented")
    }

    /*************************************************************************************
     * IMPLEMENTATION: PAGE SPECIFIC ENTRYPOINTS
     *************************************************************************************/
    /// @brief wrapper function to diaplay a sprite
    /// @param contener is the target DOM
    /// @param inst is the item which requests the load
    /// @param param selects the data_BNEWSmap item
    static modalnews(contener, inst, param) {
        try {
            cliside_INDEXpage.loader.showMODAL(contener, cliside_INDEXpage.cr, inst, data_INDEXfiles[1],"./clientside/cards/BLOGgridNEWS.html","gridnews", data_BNEWSmap[param]["desc"]);

        }
        catch (e) {
            console.log(e.toString())
        }
        finally {
            //...
        }
    }

    /// @brief wrapper function to diaplay a sprite
    /// @param contener is the target DOM
    /// @param inst is the item which requests the load
    /// @param index selects the data_BTECHmap item
    static modaltech(contener, inst, param) {
        try {
            cliside_INDEXpage.loader.showMODAL(contener, cliside_INDEXpage.cr, inst, data_INDEXfiles[2],"./clientside/cards/BLOGgridTECH1.html","gridtech1", param["desc"]);

        }
        catch (e) {
            console.log(e.toString())
        }
        finally {
            //...
        }
    }

    /// @brief sends a feedback message
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pagefbk(contener, param) {
        try {
            const basename = "cliside_ENTRYphpmail";
            const loader = new CLISIDE_LOADER(basename, cliside_BASEIDENT + param["load"]);

            const params = [
                basename,
                contener.getElementById(data_INDEXmailitems[0]).value,
                contener.getElementById(data_INDEXmailitems[1]).value,
                contener.getElementById(data_INDEXmailitems[2]).value
            ];
            loader.getdataraw(params,
                (result) => {
//                alert("Mail has been sent");
                    alert("GOT ANSWER: " + result);

                }

            );

        }
        catch (e) {
            console.log(e.toString())
        }
        finally {
            //...
        }
    }

    /*************************************************************************************
     * IMPLEMENTATION: INTERNALE
     *************************************************************************************/
    /// ctor
    /// @param id
    constructor(param) {
        super(-1);

        this.srcid = "contener";

        this.loader = new CLISIDE_INDEXLOADER(cliside_BASEIDENT + param["load"]);
        this.cr = new CLISIDE_INDEXCREATE(cliside_BASEIDENT + param["create"]);

    }

    loadtop(contener, file) {
        const local = this;

        this.loader.localgetfile(contener, file, this.srcid,"navi",
            () => {
                local.cr.displayNAVBARS(contener)
            }
        );

        this.cr.displayTITLE(contener);
        this.cr.displayABOUT(contener);

    }

    /// @brief fills the page with required data
    /// @param contener is the target DOM
    loadbody(contener, file) {
        this.loader.loadPRESENTATION(contener, this.cr, file[0]);
        this.loader.loadNEWS(contener, this.cr, file[1]);
        this.loader.loadTECH(contener, this.cr, file[2]);

    }

    loadbottom(contener, file) {
        this.loader.localgetfile(contener, file[0], this.srcid,"footer");
        this.loader.localgetfile(contener, file[1], this.srcid,"modalutil");

        this.loader.localgetfile(contener, file[2], this.srcid,"feedbackcard");

    }

}
