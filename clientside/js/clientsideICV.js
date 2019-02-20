'use strict';

/*************************************************************************************
 * INCLUDES CODE
 *************************************************************************************/
import {
    CLISIDE_PAGE,
    CLISIDE_LOADER,
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
let cliside_CVpage = null;

/*************************************************************************************
 * IMPLEMENTATION: PAGE UTILS
 *************************************************************************************/
export class CLISIDE_ICV extends CLISIDE_PAGE {

    /*************************************************************************************
     * IMPLEMENTATION: PAGE ENTRYPOINTs
     *************************************************************************************/
    /// @brief main entry function
    /// @param contener is the target DOM
    /// @param param may be anything
    /// @returns 1 desc
    static pageload(contener, param) {
        //-----------------------------------------------------------
        window.CVpageprint = CLISIDE_ICV.pageprint;
        window.CVtoggleall = CLISIDE_PAGE.disctoggle;

        //-----------------------------------------------------------
        cliside_CVpage = new CLISIDE_ICV(param);
        cliside_CVpage.loadtop(contener, [
            "./clientside/cards/CVcardpres.html",
            "./clientside/cards/CVcardbuttons.html",
            "./clientside/cards/CVcardexp.html",
            "./clientside/cards/CVcardskills.html",
            "./clientside/cards/CVcardlangs.html"
        ]);
        cliside_CVpage.loadbody(contener, [
            "./clientside/cards/CVgridHIST.html",
            "./clientside/cards/CVcardbildung.html",
            "./clientside/cards/CVcardhobby.html"
        ]);
        cliside_CVpage.loadbottom(contener,
            "./clientside/cards/cardfooter.html"
        );

        //-----------------------------------------------------------
//        loader.getdatajson([ "cliside_CVexport" ], (text) => {
//        alert(text);
//        });

    }

    static pageunload(contener, param) {
//        alert("notyetimplemented")
    }

    /// @brief scroll function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pagescroll(contener, param) {
        /*
        cliside_CVlazyload(contener);
        */
    }

    /// @brief print function
    /// @param contener is the target DOM
    /// @param param maybe anything
    static pageprint(contener, param) {
        try {
            const status = cliside_disctoggled;
            if(false === status) {
                CLISIDE_PAGE.disctoggle(contener);
            }
            window.print();
            if(false === status) {
                CLISIDE_PAGE.disctoggle(contener);
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

    /*************************************************************************************
     * IMPLEMENTATION: INTERNAL
     *************************************************************************************/
    /// ctor
    /// @param id
    constructor(param) {
        super(-1);

        this.srcid = "contener";

        this.loader = new CLISIDE_LOADER(cliside_BASEIDENT + param["load"] + 12);

        this.cr = new CLISIDE_CVCREATE(cliside_BASEIDENT + param["create"]);
        this.ld = new CLISIDE_CVLOADER(cliside_BASEIDENT + param["load"]);

    }

    loadtop(contener, file) {
        this.loader.localgetfile(contener, file[0], this.srcid,"prescard");
        this.loader.localgetfile(contener, file[1], this.srcid,"buttonscard");
        this.loader.localgetfile(contener, file[2], this.srcid,"expcard");
        this.loader.localgetfile(contener, file[3], this.srcid,"skillscard");
        this.loader.localgetfile(contener, file[4], this.srcid,"langscard");
    }

    /// @brief main entry function
    /// @param contener is the target DOM
    /// @returns 1 desc
    loadbody(contener, file) {
        const local = this;

        this.loader.localgetfile(contener, file[0], this.srcid,"gridhistory",
            () => {
                data_CVmap1.forEach((entry, index) => {
                    local.loadmapitem(contener, entry);
                });
            }
        );
        this.loader.localgetfile(contener, file[1], this.srcid,"bildungcard",
            () => {
                data_CVmap2.forEach((entry, index) => {
                    local.loadmapitem(contener, entry);
                });
            }
        );
        this.loader.localgetfile(contener, file[2], this.srcid,"hobbycard",
            () => {
                data_CVmap3.forEach((entry, index) => {
                    local.loadmapitem(contener, entry);
                });
            }
        );

    }

    loadbottom(contener, file) {
        this.loader.localgetfile(contener, file, this.srcid,"footer");

    }

    loadmapitem(contener, entry){
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
                this.ld.remotegetbatch(contener, this.cr, entry["data"], null,
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
                this.ld.remotegetentry(contener, this.cr, entry["boite"], entry["boulots"], entry["progress"],
                    (cr, desc, content) => {
                        cr.fillrightside(contener, desc, content);
                        entry["loaded"] = true;
                    }
                );

                break;

        }
    };

}
