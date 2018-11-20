var cliside_ENTRYloader = null;

/*************************************************************************************
 * IMPLEMENTATION: DYNAMIC
 *************************************************************************************/
class CLISIDE_ENTRYLOADER extends CLISIDE_LOADER {

    /// @brief ctor
    /// @param data desc
    constructor(data) {
        super("");

        this.parser = new DOMParser();

        this.pf2title = data[0][0];
        this.pf2text = data[0][1];

        this.pf1title = data[1][0];
        this.pf1text = data[1][1];

        this.aboutname = data[2][0];
        this.aboutphoto = data[2][1];

        this.newsphoto1 = data[3][0];
        this.newsphoto2 = data[3][1];

        this.techphoto1 = data[4][0];
        this.techphoto2 = data[4][1];

    }

    /// @brief prepare navigation menu/bar
    /// @param contener is the target DOM
    updatenavbars(contener) {
        cliside_ENTRYitemsnav1.forEach((item, index) => {
            if("" == item) return;
            contener.getElementById(item).appendChild(contener.createTextNode(cliside_ENTRYmenubars[index]));
        });
        cliside_ENTRYitemsnav2.forEach((item, index) => {
            if("" == item) return;
            contener.getElementById(item).appendChild(contener.createTextNode(cliside_ENTRYmenubars[index]));
        });

        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare title
    /// @param contener is the target DOM
    updatetitle(contener) {
        cliside_ENTRYitemstitle.forEach((item, index) => {
            if("" == item) return;
            contener.getElementById(item).appendChild(contener.createTextNode(cliside_ENTRYtitledata[index]));
        });

        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare about part
    /// @param contener is the target DOM
    updateabout(contener) {
        cliside_ENTRYitemsabout.forEach((item, index) => {
            if("" == item) return;
            contener.getElementById(item[1]).appendChild(contener.createTextNode(cliside_ENTRYaboutdata[index][0]));
            contener.getElementById(item[0]).appendChild(contener.createTextNode(cliside_ENTRYaboutdata[index][1]));
        });

        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare presentation part
    /// @param contener is the target DOM
    updatepres(contener) {
        this.loadpres(contener, cliside_ENTRYfiles[0], cliside_ENTRYitemspres);
        this.addbutton(contener, cliside_ENTRYpresbutton, cliside_ENTRYfiles[0]);

        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare blog news part
    /// @param contener is the target DOM
    updatenews(contener) {
        this.loadnews(contener, cliside_ENTRYfiles[1], cliside_ENTRYitemsnews);
        this.addbutton(contener, cliside_ENTRYnewsbutton, cliside_ENTRYfiles[1]);

        console.log(this.getFuncName() + "OK");
    }

    /// @brief prepare blog tech part
    /// @param contener is the target DOM
    updatetech(contener) {
        this.loadtech(contener, cliside_ENTRYfiles[2], cliside_ENTRYitemstech);
        this.addbutton(contener, cliside_ENTRYtechbutton, cliside_ENTRYfiles[2]);

        console.log(this.getFuncName() + "OK");
    }

    /*******************************************
     *
     *******************************************/
    /// @brief loading presentation data
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param desc desc
    loadpres(contener, file, desc) {
        //----------------------
        var nameid = desc[0];
        contener.getElementById(nameid).appendChild(contener.createTextNode(this.aboutname));

        var photoid = desc[1];
        contener.getElementById(photoid).setAttribute("src", this.aboutphoto);

        //----------------------
        var srcpresid = desc[2];
        var dstpresid = desc[3];
        var local = this;
        new CLISIDE_CVLOADER().remotegetdata(null,
            data_CVmap[1]["data"],
            (CV, d) => {
                local.loaditem(contener, file, d, srcpresid, dstpresid, local.cbkCVpres);
            }
        );
    }

    /// @brief loading blog news data
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param desc desc
    loadnews(contener, file, desc) {
        //----------------------
        var titleid = desc[0];
        contener.getElementById(titleid).appendChild(contener.createTextNode(this.pf2title));

        var textid = desc[1];
        contener.getElementById(textid).appendChild(contener.createTextNode(this.pf2text[0]));
        contener.getElementById(textid).appendChild(contener.createElement("br"));
        contener.getElementById(textid).appendChild(contener.createTextNode(this.pf2text[1]));

        //----------------------
        var img1id = desc[2];
        var img2id = desc[3];
        this.loaditem(contener, file, this.newsphoto1, null, img1id, this.cbkBLOGsprite);
        this.loaditem(contener, file, this.newsphoto2, null, img2id, this.cbkBLOGsprite);
    }

    /// @brief loading blog tech data
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param desc desc
    loadtech(contener, file, desc) {
        //----------------------
        var titleid = desc[0];
        contener.getElementById(titleid).appendChild(contener.createTextNode(this.pf1title));

        var textid = desc[1];
        contener.getElementById(textid).appendChild(contener.createTextNode(this.pf1text[0]));
        contener.getElementById(textid).appendChild(contener.createElement("br"));
        contener.getElementById(textid).appendChild(contener.createTextNode(this.pf1text[1]));

        //----------------------
        var img1id = desc[2];
        var img2id = desc[3];
        this.loaditem(contener, file, this.techphoto1, null, img1id, this.cbkBLOGsprite);
        this.loaditem(contener, file, this.techphoto2, null, img2id, this.cbkBLOGsprite);
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
        var local = this;
        new CLISIDE_BLOGLOADER().remotegetdata(null,
            data,
            (CV, d) => {
                local.loaditem(contener, file, d, null, "modalcaption", this.cbkBLOGmodal);
            }
        );
    }

    /*******************************************
     *
     *******************************************/
    /// @brief
    ///     calls serverside with cliside_BLOGphptest1 selector
    ///     updates txtHint html item
    /// @param contener is the destination DOM
    /// @param file desc
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    /// @param cbk desc
    loaditem(contener, file, data, idsrc, itdst, cbk) {
        var inst = this;

        this.target = file;
        this.getdatadirect(null, (result) => {
            var dom = inst.parser.parseFromString(result, "text/html");
            cbk(contener, dom, data, idsrc, itdst);
        });
    }

    /*******************************************
     *
     *******************************************/
    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    cbkCVpres (contener, dom, data, idsrc, iddst){
        //SRC side --------------------
        var CV = new CLISIDE_CVCREATE();
        CV.addinfo(dom, data);

        //DST side --------------------
        var itdst = contener.getElementById(iddst);
        for(var content = itdst.firstChild; null != content; content = itdst.firstChild) {
            //target cleanup
            itdst.removeChild(content);
        }

        //target update
        var itsrc = dom.getElementById(idsrc);
        contener.getElementById(iddst).appendChild(itsrc);
    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    cbkBLOGsprite (contener, dom, data, idsrc, iddst){
        var it = dom.getElementById(data);
        var img = it.getAttribute("src");
        contener.getElementById(iddst).setAttribute("src", img);
    }

    /// @brief
    /// @param contener is the destination DOM
    /// @param dom is the source DOM
    /// @param data says which source data shall be fetched
    /// @param idsrc desc
    /// @param iddst desc
    cbkBLOGmodal (contener, dom, data, idsrc, iddst){
        //SRC side --------------------
        var idtitle = Object.keys(data)[0];
        var itsrc = dom.getElementById(idtitle);

        var datatitle = data[idtitle];
        var iddate = Object.keys(data)[1];
        var datadate1 = data[iddate][0];
        var datadate2 = data[iddate][1];

        itsrc.innerHTML = datatitle + ": " +
            datadate1 + " / " + datadate2;

        //DST side --------------------
        function getcontent(){ return contener.getElementById(iddst).firstChild; }
        for(var content = getcontent(); null != content; content = getcontent()) {
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
/// @brief desc
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

/// @brief ...
/// @param inst ...
/// @param index ...
function cliside_ENTRYwrapnews(inst, index) {
    cliside_ENTRYloader.loadmodal(
        document,
        inst,
        cliside_ENTRYfiles[1],
        data_BNEWSmap[index][0]
    );
}

/// @brief ...
/// @param inst ...
/// @param index ...
function cliside_ENTRYwraptech(inst, index) {
    cliside_ENTRYloader.loadmodal(
        document,
        inst,
        cliside_ENTRYfiles[2],
        data_BTECHmap[index][0]
    );
}

/// @brief
/// @param contener is the target DOM
function cliside_ENTRYpagefbk(contener) {
    try {
        var basename = "cliside_ENTRYphpmail";
        var params = [
            contener.getElementById(cliside_ENTRYitemsmail[0]).value,
            contener.getElementById(cliside_ENTRYitemsmail[1]).value,
            contener.getElementById(cliside_ENTRYitemsmail[2]).value
        ];
        var loader = new CLISIDE_LOADER(basename);
        loader.getdatadirect(
            params,
            (result) => {
                alert("Mail has been sent");
                //alert("GOT ANSWER: " + this.responseText);

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
