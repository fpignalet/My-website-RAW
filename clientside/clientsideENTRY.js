let cliside_ENTRYloader = null;

/*************************************************************************************
 * IMPLEMENTATION: DYNAMIC
 *************************************************************************************/
/// @brief specific loader for ENTRY page
class CLISIDE_ENTRYLOADER extends CLISIDE_LOADER {

    /// @brief ctor
    /// @param data desc
    constructor(data) {
        super("");

        this.parser = new DOMParser();

        this.aboutname = data[0][0];
        this.aboutphoto = data[0][1];
        this.pf2title = data[1][0];
        this.pf2text = data[1][1];
        this.pf1title = data[2][0];
        this.pf1text = data[2][1];

        this.newsphoto1 = data_BNEWSlasts[0];
        this.newsphoto2 = data_BNEWSlasts[1];
        this.techphoto1 = data_BTECHlasts[0];
        this.techphoto2 = data_BTECHlasts[1];

    }

    /*******************************************
     * Page construction
     *******************************************/
    /// @brief prepare navigation menu/bar
    /// @param contener is the target DOM
    updatenavbars(contener) {
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
    updatetitle(contener) {
        cliside_ENTRYitemstitle.forEach((item, index) => {
            if("" === item) return;
            contener.getElementById(item).appendChild(contener.createTextNode(cliside_ENTRYtitledata[index]));
        });

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare about part
    /// @param contener is the target DOM
    updateabout(contener) {
        cliside_ENTRYitemsabout.forEach((item, index) => {
            if("" === item) return;
            contener.getElementById(item[1]).appendChild(contener.createTextNode(cliside_ENTRYaboutdata[index][0]));
            contener.getElementById(item[0]).appendChild(contener.createTextNode(cliside_ENTRYaboutdata[index][1]));
        });

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare presentation part
    /// @param contener is the target DOM
    updatepres(contener) {
        this.loadpres(contener, cliside_ENTRYfiles[0], cliside_ENTRYitemspres);
        this.addbutton(contener, cliside_ENTRYbuttonpres, cliside_ENTRYfiles[0]);

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare blog news part
    /// @param contener is the target DOM
    updatenews(contener) {
        this.loadnews(contener, cliside_ENTRYfiles[1], cliside_ENTRYitemsnews);
        this.addbutton(contener, cliside_ENTRYbuttonnews, cliside_ENTRYfiles[1]);

//        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare blog tech part
    /// @param contener is the target DOM
    updatetech(contener) {
        this.loadtech(contener, cliside_ENTRYfiles[2], cliside_ENTRYitemstech);
        this.addbutton(contener, cliside_ENTRYbuttontech, cliside_ENTRYfiles[2]);

//        console.log(this.getFuncName() + "OK");
    }

    /*******************************************
     * Loading layer
     *******************************************/
    /// @brief loading presentation data
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param desc desc
    loadpres(contener, file, desc) {
        //----------------------
        const nameid = desc[0];
        contener.getElementById(nameid).appendChild(contener.createTextNode(this.aboutname));

        const photoid = desc[1];
        contener.getElementById(photoid).setAttribute("src", this.aboutphoto);

        //----------------------
        const srcpresid = desc[2];
        const dstpresid = desc[3];
        const local = this;
        new CLISIDE_CVLOADER().remotegetdata(null,
            data_CVmap[1]["data"],
            (CV, d) => {
                local.loaditem(contener, file, d, srcpresid, dstpresid, local.cbkloadpres);
            }
        );
    }

    /// @brief loading blog news data
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param desc desc
    loadnews(contener, file, desc) {
        //----------------------
        const titleid = desc[0];
        contener.getElementById(titleid).appendChild(contener.createTextNode(this.pf2title));

        const textid = desc[1];
        contener.getElementById(textid).appendChild(contener.createTextNode(this.pf2text[0]));
        contener.getElementById(textid).appendChild(contener.createElement("br"));
        contener.getElementById(textid).appendChild(contener.createTextNode(this.pf2text[1]));

        //----------------------
        const img1id = desc[2];
        const img2id = desc[3];
        this.loaditem(contener, file, this.newsphoto1, null, img1id, this.cbkloadsprite);
        this.loaditem(contener, file, this.newsphoto2, null, img2id, this.cbkloadsprite);
    }

    /// @brief loading blog tech data
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param desc desc
    loadtech(contener, file, desc) {
        //----------------------
        const titleid = desc[0];
        contener.getElementById(titleid).appendChild(contener.createTextNode(this.pf1title));

        const textid = desc[1];
        contener.getElementById(textid).appendChild(contener.createTextNode(this.pf1text[0]));
        contener.getElementById(textid).appendChild(contener.createElement("br"));
        contener.getElementById(textid).appendChild(contener.createTextNode(this.pf1text[1]));

        //----------------------
        const img1id = desc[2];
        const img2id = desc[3];
        this.loaditem(contener, file, this.techphoto1, null, img1id, this.cbkloadsprite);
        this.loaditem(contener, file, this.techphoto2, null, img2id, this.cbkloadsprite);
    }

    /// @brief Modal Image Gallery handling
    /// @param contener is the destination DOM
    /// @param element desc
    /// @param file desc
    /// @param data desc
    loadmodal(contener, element, file, data) {
        contener.getElementById("modaldiv").style.display = "block";
        contener.getElementById("modalimg").src = element.src;

        //----------------------
        const local = this;
        new CLISIDE_BLOGLOADER().remotegetdata(null,
            data,
            (CV, d) => {
                local.loaditem(contener, file, d, null, "modalcaption", this.cbkloadmodal);
            }
        );
    }

    /*******************************************
     * Loading wrapper
     *******************************************/
    /// @brief calls serverside with cliside_BLOGphptest1 selector then updates txtHint html item
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    /// @param cbk desc
    loaditem(contener, file, data, idsrc, itdst, cbk) {
        const inst = this;

        this.target = file;
        this.getdataraw(null, (result) => {
            const dom = inst.parser.parseFromString(result, "text/html");
            cbk(contener, dom, data, idsrc, itdst);
        });
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
    cbkloadpres (contener, dom, data, idsrc, iddst){
        //SRC side --------------------
        const CV = new CLISIDE_CVCREATE();
        CV.addinfo(dom, data);

        //DST side --------------------
        const itdst = contener.getElementById(iddst);
        for(let content = itdst.firstChild; null != content; content = itdst.firstChild) {
            //target cleanup
            itdst.removeChild(content);
        }

        //target update
        const itsrc = dom.getElementById(idsrc);
        contener.getElementById(iddst).appendChild(itsrc);
    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    cbkloadsprite (contener, dom, data, idsrc, iddst){
        const it = dom.getElementById(data);
        const img = it.getAttribute("src");
        contener.getElementById(iddst).setAttribute("src", img);
    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    cbkloadmodal (contener, dom, data, idsrc, iddst){
        //SRC side --------------------
        const idtitle = Object.keys(data)[0];
        const itsrc = dom.getElementById(idtitle);

        const datatitle = data[idtitle];
        const iddate = Object.keys(data)[1];
        const datadate1 = data[iddate][0];
        const datadate2 = data[iddate][1];

        itsrc.innerHTML = datatitle + ": " +
            datadate1 + " / " + datadate2;

        //DST side --------------------
        function getcontent(){ return contener.getElementById(iddst).firstChild; }
        for(let content = getcontent(); null != content; content = getcontent()) {
            //target cleanup
            contener.getElementById(iddst).removeChild(content);
        }

        //target update
        contener.getElementById(iddst).appendChild(itsrc);
    }

}

/*************************************************************************************
 * IMPLEMENTATION: PAGE ENTRYPOINTs
 *************************************************************************************/
/// @brief fills the page with required data
/// @param contener is the target DOM
function cliside_ENTRYpageload(contener) {
    try {
        cliside_ENTRYloader = new CLISIDE_ENTRYLOADER(cliside_ENTRYcontentdata);

        cliside_ENTRYloader.updatenavbars(contener);

        cliside_ENTRYloader.updatetitle(contener);

        cliside_ENTRYloader.updateabout(contener);

        cliside_ENTRYloader.updatepres(contener);

        cliside_ENTRYloader.updatenews(contener);
        cliside_ENTRYloader.updatetech(contener);

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
function cliside_ENTRYmodalnews(contener, inst, index) {
    cliside_ENTRYloader.loadmodal(
        contener, inst,
        cliside_ENTRYfiles[1], data_BNEWSmap[index]["desc"]
    );
}

/// @brief wrapper function to diaplay a sprite
/// @param contener is the target DOM
/// @param inst is the item which requests the load
/// @param index selects the data_BTECHmap item
function cliside_ENTRYmodaltech(contener, inst, index) {
    cliside_ENTRYloader.loadmodal(
        contener, inst,
        cliside_ENTRYfiles[2], data_BTECHmap[index][0]
    );
}

/// @brief sends a feedback message
/// @param contener is the target DOM
function cliside_ENTRYpagefbk(contener) {
    try {
        const basename = "cliside_ENTRYphpmail";
        const loader = new CLISIDE_LOADER(basename);

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

/*************************************************************************************
 * IMPLEMENTATION: NAVBAR UTILS
 *************************************************************************************/
/// @brief Used to toggle the menu on small screens when clicking on the menu button
/// @param contener is the target DOM
function clientside_ENTRYnavtoggle(contener, navid) {
    try {
        const x = contener.getElementById(navid);
        if (x.className.indexOf("w3-show") === -1) {
            x.className += " w3-show";
        }
        else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/// @brief Change style of navbar on scroll
/// @param contener is the target DOM
function clientside_ENTRYnavscroll(contener, barid) {
    try {
        const navbar = contener.getElementById(barid);
        if (contener.body.scrollTop > 100 || contener.documentElement.scrollTop > 100) {
            navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
        }
        else {
            navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
        }
    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}

/*************************************************************************************
 * IMPLEMENTATION: GOOGLE MAPS INTEGRATION
 *************************************************************************************/
const clientside_ENTRYlat = 41.878114;
const clientside_ENTRYlong = -87.629798;

function clientside_ENTRYgmapshow(contener, mapid/*"googleMap"*/) {
    try {
        const myCenter = new google.maps.LatLng(clientside_ENTRYlat, clientside_ENTRYlong);

        const options = {
            center: myCenter,
            zoom: 12,
            scrollwheel: false,
            draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        const map = new google.maps.Map(contener.getElementById(mapid), options);

        const marker = new google.maps.Marker({position: myCenter});
        marker.setMap(map);
    }
    catch (e) {
        console.log(e.name)
    }
    finally {
        //...
    }
}
