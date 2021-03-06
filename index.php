<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en">

    <!-- -------------------------------------------------------------------------------------------------------------->
    <head>
    <!-- -------------------------------------------------------------------------------------------------------------->

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="entrypage">
        <meta http-equiv="Content-Type" content="text/html">
        <meta http-equiv="pragma" content="no-cache" />
        <!-- meta http-equiv="Content-Security-Policy"
              content="default-src 'self'
                https://www.w3schools.com
                https://fonts.googleapis.com
                https://cdnjs.cloudflare.com;
                script-src 'unsafe-inline' 'self';"
        -->

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- EXTERNAL RESSOURCES -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <link rel="stylesheet" type="text/css" href="https://www.w3schools.com/w3css/4/w3.css">

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <link rel="modulepreload" href="./clientside/js/lib/clientside.js">
        <link rel="modulepreload" href="./clientside/js/impl/clientsideINDEX.js">
        <link rel="modulepreload" href="./clientside/js/clientsideIINDEX.js">

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- STYLE SHEETS -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <link rel="stylesheet" type="text/css" href="clientside/css/clientside.css">
        <style>
            body,h1,h2,h3,h4,h5,h6 {
                font-family: "Lato", sans-serif;
            }
            body, html {
                height: 100%;
                color: #777;
                line-height: 1.8;
            }
        </style>

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- OTHERS -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <title>
            WELCOME TO:
        </title>

    </head>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- body onload="window.ENTRYpageload(document)" -->
    <body class="w3-light-grey">
    <!-- -------------------------------------------------------------------------------------------------------------->

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- NAVBARS / MENUS -->
        <div id="navi"></div>

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- FIRST Parallax Image with Logo Text -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
            <div class="w3-display-middle" style="white-space:nowrap;">
                <span id="entry_mtitlename" class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
                    <span id="entry_mtitlesub" class="w3-hide-small"></span>
                </span>
            </div>
        </div>
        <!-- About stripe -->
        <div class="w3-row w3-center w3-dark-grey w3-padding-16">
            <div id="parallax1stripe">
                <div id="aboutyearstext" class="w3-quarter w3-section">
                    <span id="aboutyearsnum" class="w3-xlarge"></span><br>
                </div>
                <div id="aboutprojectstext" class="w3-quarter w3-section">
                    <span id="aboutprojectsnum" class="w3-xlarge"></span><br>
                </div>
                <div id="aboutboitestext" class="w3-quarter w3-section">
                    <span id="aboutboitesnum" class="w3-xlarge"></span><br>
                </div>
                <div id="abouthourstext" class="w3-quarter w3-section">
                    <span id="abouthoursnum" class="w3-xlarge"></span><br>
                </div>
            </div>
        </div>
        <!-- About Section -->
        <div class="w3-content w3-container w3-padding-64" id="about">
            <div id="parallax1about">
                <h3 class="w3-center">
                    ABOUT ME
                </h3>
                <div class="w3-row">
                    <div class="w3-col m6 w3-center w3-padding-large">
                        <p>
                        <h3 id="entryname" class="w3-center">
                            <i class="fa fa-user w3-margin-right"></i>
                        </h3>
                        </p>
                        <br>
                        <img id="entryphoto" class="w3-round w3-image" alt="Photo of Me">
                    </div>
                    <div class="w3-col m6 w3-padding-large">
                        <div id="entrypresentation">
                        </div>

                        <hr/>
                        <form><button id="entrycvbutton"></button></form>
                        <hr/>
                        <form><button id="entryofferbutton"></button></form>
                    </div>
                </div>
            </div>
        </div>

    <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- SECOND Parallax Image with BLOG Text -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <div class="bgimg-2 w3-display-container w3-opacity-min">
            <div class="w3-display-middle">
                <span class="w3-xxlarge w3-text-white w3-wide">
                    News BLOG
                </span>
            </div>
        </div>
        <!-- Container (BLOG Section) -->
        <div class="w3-content w3-container w3-padding-64" id="portfolio2">
            <div id="parallax2">
                <h3 id="pf2title" class="w3-center">
                </h3>
                <p class="w3-center">
                    <em id="pf2text"></em>
                </p>
                <br>
                <!-- Responsive Grid. Four columns on tablets, laptops and desktops.
                Will stack on mobile devices/small screens (100% width) -->
                <div class="w3-card w3-margin">
                    <div class="w3-row-padding w3-center">
                        <div class="w3-col m6">
                            <img id="pf2img1" style="width:100%" class="w3-hover-opacity" alt="BLOGNEWS entry 0"
                                 onclick="window.INDEXmodalnews(document, this, 0)">
                        </div>
                        <div class="w3-col m6">
                            <img id="pf2img2" style="width:100%" class="w3-hover-opacity" alt="BLOGNEWS entry 1"
                                 onclick="window.INDEXmodalnews(document, this, 1)">
                        </div>

                    </div>
                </div>
                <hr>
                <div class="w3-row-padding w3-center">
                    <form>
                        <button id="pf2button"></button>
                    </form>
                </div>

            </div>

        </div>
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- THIRD Parallax Image with BLOG Text -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <div class="bgimg-3 w3-display-container w3-opacity-min">
            <div class="w3-display-middle">
                <span class="w3-xxlarge w3-text-white w3-wide">
                    Technical BLOG
                </span>
            </div>
        </div>
        <!-- Container (BLOG Section) -->
        <div class="w3-content w3-container w3-padding-64" id="portfolio1">
            <div id="parallax3">
                <h3 id="pf1title" class="w3-center">
                </h3>
                <p class="w3-center">
                    <em id="pf1text"></em>
                </p>
                <br>
                <!-- Responsive Grid. Four columns on tablets, laptops and desktops.
                Will stack on mobile devices/small screens (100% width) -->
                <div class="w3-card w3-margin">
                    <div class="w3-row-padding w3-center">
                        <div class="w3-col m6">
                            <script type="module">
                                import { data_BTECHmap2 } from "./clientside/data/BLOGdata.js";
                                window.modaltarget1 = data_BTECHmap2[0];
                            </script>
                            <img id="pf1img1" style="width:100%" class="w3-hover-opacity" alt="BLOGTECH entry 0"
                                 onclick="window.INDEXmodaltech(document, this, window.modaltarget1)">
                        </div>
                        <div class="w3-col m6">
                            <script type="module">
                                import { data_BTECHmap1 } from "./clientside/data/BLOGdata.js";
                                window.modaltarget2 = data_BTECHmap1[5];
                            </script>
                            <img id="pf1img2" style="width:100%" class="w3-hover-opacity" alt="BLOGTECH entry 1"
                                 onclick="window.INDEXmodaltech(document, this, window.modaltarget2)">
                        </div>

                    </div>

                </div>
                <hr>
                <div class="w3-row-padding w3-center">
                    <form>
                        <button id="pf1button"></button>
                    </form>
                </div>

            </div>

        </div>
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- FOURTH Parallax Image with feedback formular -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <div class="bgimg-4 w3-display-container w3-opacity-min">
            <div class="w3-display-middle">
                <span class="w3-xxlarge w3-text-white w3-wide">
                    CONTACT
                </span>
            </div>
        </div>
        <!-- Container (Contact Section) -->
        <div class="w3-content w3-container w3-padding-64" id="contact">
            <div id="feedbackcard"></div>
        </div>

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- END Parallaxes -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->

        <!-- Footer -->
        <div id="footer"></div>
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- Modal utility-->
        <div id="modalutil"></div>
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- junkyard-->
        <div id="junkyard">
            <!-- -------------------------------------------------------------------------------------------------------------->
            <!-- -------------------------------------------------------------------------------------------------------------->
            <!-- Für später: add Google Maps
            To use this code on your website, get a free API key from Google.
            Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
            -->
            <!-- div id="googleMap" class="w3-round-large w3-greyscale" style="width:100%;height:400px;">
            </div -->
            <!-- div class="w3-col m4 w3-container">
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5330.759791175086!2d11.63675597722834!3d48.08361119099929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479de0863d2eada1%3A0xecf7e95475a09464!2sCurd-J%C3%BCrgens-Stra%C3%9Fe+18%2C+81739+M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1539927416198"
                        height="450" frameborder="0" style="border:0" allowfullscreen>
                </iframe>
            </div -->
            <!-- script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCA4Ast8z4S1oRDkopGSpOIa5kVEHfhN2g&callback=clientside_ENTRYshowgmap">
            </script -->

        </div>

        <script src="https://unpkg.com/lodash@4.16.6"></script>
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- JS IMPLEMENTATION: STANDARD -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <script type="module">
            /*************************************************************************************
             * INCLUDES CODE
             *************************************************************************************/
            import { CLISIDE_IINDEX } from "./clientside/js/clientsideIINDEX.js";
            /*************************************************************************************
             * INCLUDES DATA
             *************************************************************************************/
            /*************************************************************************************
             * IMPLEMENTATION
             *************************************************************************************/
            try {
                //page initialsation happends there
                window.onload = function() { CLISIDE_IINDEX.pageload(document, { create: 0, load: 1 }) };
                window.onunload = function() { CLISIDE_IINDEX.pageunload(document, null) };
                window.onscroll = function() { CLISIDE_IINDEX.pagescroll(document, "entry_navbar") };

            }
            catch (e) {
                console.log(e.toString())
            }
            finally {
                //...
            }

        </script>

    </body>

</html>
