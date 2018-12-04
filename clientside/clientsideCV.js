/*************************************************************************************
 * IMPLEMENTATION: CV CREATION UTILITIES
 *************************************************************************************/
/// @brief class to make boite/boulot items add easy
class CLISIDE_CVCREATEHISTORY extends CLISIDE_DOM {

    /// ctor
    constructor() {
        super();
    }

    //------------------------------------------------------------------
    // BOITE INFO
    //------------------------------------------------------------------
    /// @brief add boite info
    /// @param contener is the destination DOM
    /// @param data contains data_CVboulotXX
    addentry(contener, data) {
        const keys = Object.keys(data);

        // -------------------------------------
        // boulotentryXXdate => [
        //      data    -> data[iddate][0]
        // ]
        const iddate = keys[0];
        const valuedate = data[iddate][0];
        this.addtext(contener, iddate, valuedate);

        // -------------------------------------
        // boulotentryXXboite => [
        //      null | href,       -> data[idboite][0]
        //      [ data ]           -> data[idboite][1]
        // ]
        const idboite = keys[1];
        const it = contener.getElementById(idboite);
        if(null == it) {
            //sometimes boulotentryXXboite is null
            return;
        }

        let valueboite;

        valueboite = data[idboite][0];
        if(null != valueboite) {
            //sometimes there is an href
            it.setAttribute("href", valueboite);
        }

        valueboite = data[idboite][1];
        if(null != valueboite){

            if(null != valueboite[0]){
                it.appendChild(contener.createTextNode(valueboite[0]));
            }

            if(null != valueboite[1]){
                it.parentNode.appendChild(contener.createElement("br"));
                it.parentNode.appendChild(contener.createTextNode(valueboite[1]));
            }

        }

//        console.log(this.getFuncName() + "OK");

    }

    //------------------------------------------------------------------
    // BOULOTS LEFT COLUMN
    //------------------------------------------------------------------
    /// @brief add a th element in current tr with id = data[0]
    /// @param contener is the destination DOM
    /// @param tr is the current contener in table
    /// @param data is formatted as
    ///     "boulotentry1item" => [ data ]
    addLcol(contener, tr, data) {
        //---------------------------
        //then tr left part with th containing title
        const th = tr.appendChild(contener.createElement("th"));

        // -------------------------------------
        // boulotentryXXitem,            ->  data[0]
        const idboulot = data[0];
        th.setAttribute("id", idboulot);
        // [
        //     Project / Product / ...,  ->  data[1][0]
        //     Name,                     ->  data[1][1]
        //     Duration,                 ->  data[1][2]
        //     ?                         ->  data[1][3]
        // ],
        if(null == data[1]) {
            //data[1] may be null
            return;
        }

        let valueboulot;

        valueboulot = data[1][0];
        if(null != valueboulot) {
            th.appendChild(contener.createTextNode(valueboulot));
        }

        valueboulot = data[1][1];
        if(null != valueboulot) {
            const span = contener.createElement("span");
            span.className = "w3-tag w3-teal w3-round";
            span.innerHTML = valueboulot;
            th.appendChild(span);
        }

        valueboulot = data[1][2];
        if(null != valueboulot) {
            th.appendChild(contener.createElement("br"));
            th.appendChild(contener.createTextNode(valueboulot));
        }

        valueboulot = data[1][3];
        if(null != valueboulot) {
            th.appendChild(contener.createElement("br"));
            th.appendChild(contener.createTextNode(valueboulot));
        }

//        console.log(this.getFuncName() + "OK");

    }

    //------------------------------------------------------------------
    // BOULOTS RIGHT COLUMN
    //------------------------------------------------------------------
    /// @brief add a column in a table row. The new column contains a table
    /// @param contener is the destination DOM
    /// @param tr is the table row
    /// @param data contains what is to be added
    /// @returns [ the new column, the table created inside the new column ]
    addRcol(contener, tr, data) {
        const td = tr.appendChild(contener.createElement("td"));
        const table = this.fillRcol(contener, td, data);
        return [ td, table ];
    }

    /// @brief push data in an existing column
    /// @param contener is the destination DOM
    /// @param td is the table div
    /// @param data contains what is to be added
    fillRcol(contener, td, data) {
        //-------------------------------
        //inside the right td there is 2 divs
        const div = this.adddisclosdivs(contener, td);
        //then there is the disclosure button
        this.adddisclosbutton(contener, div, data);

        //-------------------------------
        //then one more div which contains the details table
        // which will be disclosed when clicking disclosure button
        const table = this.adddiscloscontent(contener, div, data);
        return table;
    }

    //------------------------------------------------------------------
    // UTILS
    //------------------------------------------------------------------
    /// @brief desc
    /// @param contener is the destination DOM
    /// @param rcol
    /// @param item
    /// @param index
    rcolinit(contener, rcol, item, index) {
        let tr;

        // boulotentryXXtitle
        tr = rcol[1].appendChild(contener.createElement("tr"));
        this.filltr(contener, tr, item[0], true);

        // boulotentryXXcontent
        tr = rcol[1].appendChild(contener.createElement("tr"));
        this.filltr(contener, tr, item[1], false);
        if(null != item[2]) {
            this.addtrsubs(contener, tr, item[2]);
        }
    }

    /// @brief desc
    /// @param contener is the destination DOM
    /// @param table
    /// @param item
    /// @param index
    rcolappend(contener, table, item, index) {
        let tr;

        // boulotentryXXtitle
        tr = table.appendChild(contener.createElement("tr"));
        this.filltr(contener, tr, item[0], true);

        // boulotentryXXcontent
        tr = table.appendChild(contener.createElement("tr"));
        this.filltr(contener, tr, item[1], false);
        if(null != item[2]) {
            this.addtrsubs(contener, tr, item[2]);
        }
    }

}

/*************************************************************************************
 * IMPLEMENTATION: PRESENTATION
 *************************************************************************************/
/// CV creator helper
///
///
class CLISIDE_CVCREATE extends CLISIDE_BASE {

    /// ctor
    constructor() {
        super();

        this.leftcreator = new CLISIDE_DOM();
        this.rightcreator = new CLISIDE_CVCREATEHISTORY();
    }

    //------------------------------------------------------------------
    // LEFT SIDE: CV TITLE
    //------------------------------------------------------------------
    /// @brief to add CV title
    /// @param contener is the destination DOM
    /// @param data is an array which contains details
    addtitle(contener, data) {
        const keys = Object.keys(data);

        //data_CVtitle
        const idphoto = keys[0];
        const valuephoto = data[idphoto];
        this.leftcreator.addphoto(contener, idphoto, valuephoto);

        const idname = keys[1];
        const valuename = data[idname];
        this.rightcreator.addtext(contener, idname, valuename);

    }

    //------------------------------------------------------------------
    // LEFT SIDE: CV PERSONAL INFO
    //------------------------------------------------------------------
    /// @brief to add info entry
    /// @param contener is the destination DOM
    /// @param data is an array which contains details
    addinfo(contener, data) {
        Object.keys(data).forEach((item, index) => {

            //data_CVinfo
            const idinfo = item;
            const valueinfo = data[idinfo];
            //--------------------------
            if(true === Array.isArray(valueinfo)) {
                if(1 < valueinfo.length){
                    const it = contener.getElementById(idinfo);
                    this.leftcreator.addhref(contener, it, valueinfo[0], valueinfo[1]);
                }
                else {
                    this.leftcreator.addtext(contener, idinfo, valueinfo[0]);
                }
            }
            //--------------------------
            else {
                this.leftcreator.addtext(contener, idinfo, valueinfo[0]);
            }

        });
    }

    //------------------------------------------------------------------
    // LEFT SIDE: CV PERSONAL XP
    //------------------------------------------------------------------
    /// @brief to add experience entry
    /// @param contener is the destination DOM
    /// @param data is an array which contains details
    addexperience(contener, data) {
        Object.keys(data).forEach((item, index) => {

            //data_CVexperience
            const id = item;
            const value = data[id];
            //--------------------------
            if(true === Array.isArray(value)) {
                value.forEach((_item, index) => {
                    const it = contener.getElementById(id);
                    this.leftcreator.addlistitem(contener, it, _item);
                });
            }
            //--------------------------
            else {
                this.leftcreator.addtext(contener, id, value);
            }

        });
    }

    //------------------------------------------------------------------
    // LEFT SIDE: CV MAIN SKILLS AND SPOKEN LANGUAGES
    //------------------------------------------------------------------
    /// @brief to add skills and langages entries
    /// @param contener is the destination DOM
    /// @param adata is an array which contains details
    adddetails(contener, adata) {
        let keys = null;

        //--------------------------
        const head = adata[0];

        //data_CVskillshead / data_CVlanghead
        keys = Object.keys(head);
        const id = keys[0];
        const value = head[id];
        this.leftcreator.addtext(contener, id, value);

        //--------------------------
        const data = adata[1];
        if(null == data) {
            return;
        }

        //data_CVskillsentries / data_CVlangentries
        data.forEach((item, index) => {
            keys = Object.keys(item);

            const iddesc = keys[0];
            const valuedesc = item[iddesc];
            this.rightcreator.addtext(contener, iddesc, valuedesc);

            const idlevel = keys[1];
            const valueevel = item[idlevel];
            const it = contener.getElementById(idlevel);
            it.setAttribute("style", "width:" + valueevel);

            const idtext = keys[2];
            const valuetext = item[idtext];
            this.rightcreator.addtext(contener, idtext, valuetext);

        });
    }

    //------------------------------------------------------------------
    // RIGHT SIDE: CV BOITE & BOULOTS & BILDUNG & HOBBIES ENTRIES
    //------------------------------------------------------------------
    fillrightside(contener, CV, boite, boulots, progress) {
        const table = CV.addhistoryentry(contener, boite);
        Object.keys(boulots).forEach((key, _index) => {
            CV.addhistorysubentry(contener, table, boulots[key]);
        });
    }

    //------------------------------------------------------------------
    // RIGHT SIDE: INTERNAL IMPLEMENTATION
    //------------------------------------------------------------------
    /// @brief function to add ... item
    /// @param contener is the destination DOM
    /// @param data is an array which contains details
    addhistoryentry(contener, data) {
        this.rightcreator.addentry(contener, data);

        //table containing boulotentries
        // desc = boulotentryXXdesc
        const desc = Object.keys(data)[2];
        const table = contener.getElementById(desc);
        return table;
    }

    /// @brief function to add boite/boulot item
    /// @param contener is the destination DOM
    /// @param table is the name of the table to be filled
    /// @param data is an array which contains details
    addhistorysubentry(contener, table, data) {
        //MAIN ROW
        const tr = table.appendChild(contener.createElement("tr"));

        const keys = Object.keys(data);

        // LEFT COLUMN ----------
        // boulotentryXXitem
        const iditem = keys[0];
        const valueitem = data[iditem];
        this.rightcreator.addLcol(contener, tr, [ iditem, valueitem ]);

        // RIGHT COLUMN ----------
        let rcol = null;
        let table_ = null;
        [
            //                N * boulotentryXXtitle, boulotentryXXcontent
            /*pair[0, 1]*/[       keys[1],            keys[2] ],
            /*pair[0, 1]*/[       keys[3],            keys[4] ]
        ].forEach((pair, idx) => {
            if(null == data[pair[0]]) {
                return;
            }

            // boulotentryXXtitle
            const idtitle = pair[0];
            const valuetitle = data[idtitle];
            // boulotentryXXcontent
            const idcontent = pair[1];
            const valuecontent = data[idcontent];

            if(null == rcol) {
                //this is the first item, there is nothing yet, rcol must be created
                rcol = this.rightcreator.addRcol(contener, tr,  [ idtitle, valuetitle, idcontent ]);
                if(null != valuecontent) {
                    valuecontent.forEach((item, index) => {
                        this.rightcreator.rcolinit(contener, rcol, item, index);
                    });
                }
            }
            else {
                //this is additional item, there is already something in rcol
                table_ = this.rightcreator.fillRcol(contener, rcol[0], [ idtitle, valuetitle, idcontent ]);
                if(null != valuecontent) {
                    valuecontent.forEach((item, index) => {
                        this.rightcreator.rcolappend(contener, table_, item, index);
                    });
                }
            }

        });

    }

}

/// brief CV printer helper
class CLISIDE_CVPRINT extends CLISIDE_BASE {

    /// ctor
    constructor() {
        super();
    }

    //------------------------------------------------------------------
    // CV TITLE
    //------------------------------------------------------------------
    /// @brief desc
    /// @param html
    /// @param data
    printtitle(html, data){
        Object.keys(data).forEach((key, index) => {
            html+= document.getElementById(key).innerHTML;
            html+= "<br>";
        });

        return html;
    }

    //------------------------------------------------------------------
    // CV PERSONAL INFO
    //------------------------------------------------------------------
    /// @brief desc
    /// @param html
    /// @param data
    printinfo(html, data){
        Object.keys(data).forEach((key, index) => {
            html+= document.getElementById(key).innerHTML;
            html+= "<br>";
        });

        return html;
    }

    //------------------------------------------------------------------
    // CV PERSONAL XP
    //------------------------------------------------------------------
    /// @brief desc
    /// @param html
    /// @param data
    printexperience(html, data){
        Object.keys(data).forEach((key, index) => {
            html+= document.getElementById(key).innerHTML;
            html+= "<br>";
        });

        return html;
    }

    //------------------------------------------------------------------
    // CV MAIN SKILLS AND SPOKEN LANGUAGES
    //------------------------------------------------------------------
    /// @brief desc
    /// @param html
    /// @param adata
    printdetails(html, adata){
        const datah = adata[0];
        const datae = adata[1];

        html+= document.getElementById(Object.keys(datah)[0]).innerHTML;
        html+= "<br>";
        datae.forEach((item, index) => {
            html+= document.getElementById(Object.keys(item)[0]).innerHTML;
            html+= ": ";
            html+= document.getElementById(Object.keys(item)[2]).innerHTML;
            html+= "<br>";
        });

        return html;
    }

    //------------------------------------------------------------------
    // CV BOITE & BOULOTS & BILDUNG & HOBBIES ENTRIES
    //------------------------------------------------------------------
    /// @brief desc
    /// @param entry
    /// @param cbk
    printrightside(html, entry, cbk) {
        if(null != document.getElementById(Object.keys(entry["boite"])[0])) {
            html+= document.getElementById(Object.keys(entry["boite"])[0]).innerHTML;
            html+= ": ";
        }
        if(null != document.getElementById(Object.keys(entry["boite"])[1])) {
            html+= document.getElementById(Object.keys(entry["boite"])[1]).innerHTML;
            html+= "<br>";
        }
        entry["boulots"].forEach((item, index) => {
            html+= "<br>___________________________________<br>";
            Object.keys(item).forEach((key, index) => {
                html = cbk(html, key, index);
            });

        });

        html+= "____________________________________________________________________<br>";
        html+= "____________________________________________________________________<br>";

        return html;
    }

    printhistoryentry(contener, html, key, index) {
        const text = contener.getElementById(key).innerHTML;

        let done = false;
        data_CVprintindexes.forEach((item, index) => {
            item[1] = text.indexOf(item[0]);
            if(-1 !== item[1]) {
                done = true;
            }
        });

        if(false === done) {
            //it's just text
            html+= text + " ";

        }
        else {
            data_CVprintindexes.forEach((item, index) => {
                if(-1 === item[1]) {
                    return;
                }

                function substr_getstart() {
                    return item[1] + item[0].length;
                }
                function substr_getend() {
                    if(index < (data_CVprintindexes.length - 1)) {
                        if(-1 !== data_CVprintindexes[index + 1][1]) {
                            return data_CVprintindexes[index + 1][1] - 1;
                        }
                    }

                    return text.length;
                }

                html+= "<br>";
                html+= item[0] + ": ";
                html+= text.substring(substr_getstart(), substr_getend()) + "<br>";
            });

        }

        return html;
    }

}

/*************************************************************************************
 * IMPLEMENTATION: COMMUNICATION WITH SERVER
 *************************************************************************************/

///@brief CV asynchronous loader
class CLISIDE_CVLOADER extends CLISIDE_LOADER {

    /// @brief ctor
    constructor() {
        super("cliside_CVphpgetdata");
    }

    //-----------------------------------------------------
    // ACCESS
    //-----------------------------------------------------
    /// @brief
    ///     calls serverside with cliside_BLOGphptest1 selector
    ///     updates txtHint html item
    /// @param CV is th instance of the CV creator
    /// @param data desc...
    /// @param cbk will be executed
    remotegetleftside(CV, data, cbk) {
        this.remotegetdata(CV, data, cbk);
    }

    /// @brief
    ///     calls serverside with cliside_BLOGphptest1 selector
    ///     updates txtHint html item
    /// @param CV is th instance of the CV creator
    /// @param boite is the name of the desired boite data
    /// @param boulots is the name of the desired boulots data
    /// @param progress contains the DOM items required to display progress
    /// @param cbk will be executed
    remotegetrightside(contener, CV, boite, boulots, progress, cbk) {
        const inst = this;

        /**********************************
         * 1ST: PREPARE DATA FOR UPDATE
         **********************************/
        inst.showprogress(contener, progress);

        /*
        boite contains result for boite item
        bmap contains result for each boulot item.
        it is there to be sure that they are correctl sorted:
        everything is fully asynchrone, and CV.addhistorysubentry fills the table in a total random way
        */
        let boitedata = null;
        const boulotsmap = {};
        inst.mapinit(boulots, boulotsmap);

        /**********************************
         * 2ND: RETRIEVE DATA
         * the main request, to get the boite item contents
         * @type {XMLHttpRequest}
         **********************************/
        const params = [inst.cmdname, boite];
        inst.getdatajson(params, (result) => {
            //store result
            boitedata = result;

            boulots.forEach((item, index) => {
                /**********************************
                 * the sub request, to get a boulot item contents
                 * @type {XMLHttpRequest}
                 **********************************/
                const _params = [inst.cmdname, item];
                inst.getdatajson(_params, (_result) => {
                    // ---------------------------------------------------
                    // store result and survey: we need to be sure that all results are there:
                    boulotsmap[item] = _result;
                    if(false === inst.mapisfull(boulotsmap)) {
                        /// not everything is there, we need to keep on waiting
                        return;
                    }

                    // ---------------------------------------------------
                    /// OK we got all boulots results
                    inst.hideprogress(contener, progress);
                    cbk(CV, boitedata, boulotsmap, progress);
                });
            })
        });
    }

}

/*************************************************************************************
 * IMPLEMENTATION: PAGE ENTRYPOINTs
 *************************************************************************************/
/// @brief main entry function which fills the CV.html page. Called during page load
/// @returns 1 desc
function cliside_CVpageload(contener) {
    try {
        const CVcr = new CLISIDE_CVCREATE();
        const loader = new CLISIDE_CVLOADER();

        data_CVmap.forEach((entry, index) => {
            //-----------------------------------------------------
            // parse LEFT side using schema:
            //  entry["data"],
            //  entry["cbk"],
            //-----------------------------------------------------
            if("left" === entry["side"]) {
                loader.remotegetleftside(CVcr,
                    entry["data"],
                    (CV, d) => {
                        entry["cbk"](CV, d);
                    }
                );
            }
            //-----------------------------------------------------
            // parse RIGHT side using schema:
            //  entry["boite"],
            //  entry["boulots"],
            //  entry["progress"],
            //-----------------------------------------------------
            else {
                loader.remotegetrightside(contener,
                    CVcr,
                    entry["boite"],
                    entry["boulots"],
                    entry["progress"],
                    (CV, boite, boulots, progress) => {
                        CV.fillrightside(contener, CV, boite, boulots, progress);
                    }
                );
            }
        });

    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }

}

/// @brief print function
function cliside_CVpageprint(contener)
{
    try {
        const CVpr = new CLISIDE_CVPRINT();

        let html = "<html>";

        //-----------------------------------------------------
        // parse LEFT side
        //-----------------------------------------------------
        html+= "____________________________________________________________________<br>";
        html+= "____________________________________________________________________<br>";
        html = CVpr.printtitle(html, data_CVstructleft[0][0]);
        html = CVpr.printinfo(html, data_CVstructleft[1][0]);
        html+= "<br>";
        html = CVpr.printexperience(html, data_CVstructleft[2][0]);
        html+= "<br>";
        html = CVpr.printdetails(html, data_CVstructleft[3]);
        html+= "<br>";
        html = CVpr.printdetails(html, data_CVstructleft[4]);

        //-----------------------------------------------------
        // parse RIGHT side
        //-----------------------------------------------------
        html+= "____________________________________________________________________<br>";
        html+= "____________________________________________________________________<br>";
        data_CVstructright.forEach((entry, index) => {
            html = CVpr.printrightside(html,
                entry,
                (html, key, index) => { return CVpr.printhistoryentry(contener, html, key, index); }
            );
        });

        //-----------------------------------------------------
        // print result
        //-----------------------------------------------------
        html+= "</html>";

        const printWin = window.open('', '', 'left=0,top=0,width=1,height=1,toolbar=0,scrollbars=0,status  =0');
        printWin.document.write(html);
        printWin.document.close();
        printWin.focus();
        printWin.print();
        printWin.close();

//        console.log(this.getFuncName() + "OK");
    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}
