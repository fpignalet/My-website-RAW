<!DOCTYPE html>
<html>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <title>
        FPIGNALETDE
    </title>

    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="pragma" content="no-cache" />

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- EXTERNAL RESSOURCES -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- STYLE SHEETS -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <link rel="stylesheet" href="clientside/clientside.css">
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
        <!-- JS IMPLEMENTATION -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <script type="text/javascript" src="clientside/data/ENTRYdata.js">
        </script>
        <script type="text/javascript" src="clientside/data/BLOGdata.js">
        </script>
        <script type="text/javascript" src="clientside/data/CVdata.js">
        </script>

        <script type="text/javascript" src="clientside/clientside.js">
        </script>
        <script type="text/javascript" src="clientside/clientsideBLOG.js">
        </script>
        <script type="text/javascript" src="clientside/clientsideCV.js">
        </script>
        <script type="text/javascript" src="clientside/clientsideENTRY.js">
        </script>

    </head>

    <!-- -------------------------------------------------------------------------------------------------------------->
    <!-- Page Container -->
    <!-- -------------------------------------------------------------------------------------------------------------->
    <body onload="cliside_ENTRYpageload(document)">

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- NAVBARS / MENUS -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <div class="w3-top">
            <!-- sit on top -->
            <div class="w3-bar" id="entry_navbar">
                <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
                   href="javascript:void(0);"
                   onclick="clientside_ENTRYnavtoggle(document, " navDemo")"
                   title="Toggle Navigation Menu">
                    <i class="fa fa-bars"></i>
                </a>

                <a id="entry_navbar1" href="#home" class="w3-bar-item w3-button">
                </a>
                <a id="entry_navbar2" href="#about" class="w3-bar-item w3-button w3-hide-small">
                    <i class="fa fa-user"></i>
                </a>
                <a id="entry_navbar3" href="#portfolio2" class="w3-bar-item w3-button w3-hide-small">
                    <i class="fa fa-th"></i>
                </a>
                <a id="entry_navbar4" href="#portfolio1" class="w3-bar-item w3-button w3-hide-small">
                    <i class="fa fa-th"></i>
                </a>
                <a id="entry_navbar5" href="#contact" class="w3-bar-item w3-button w3-hide-small">
                    <i class="fa fa-envelope"></i>
                </a>
                <a id="entry_navbar6" href="impressum.html" class="w3-bar-item w3-button w3-hide-small">
                    <i class="fa fa-envelope"></i>
                </a>

            </div>
            <!-- on small screens -->
            <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a id="navDemo2" href="#about" class="w3-bar-item w3-button" onclick="clientside_ENTRYnavtoggle(document, " navDemo")"></a>
                <a id="navDemo3" href="#portfolio2" class="w3-bar-item w3-button" onclick="clientside_ENTRYnavtoggle(document, " navDemo")"></a>
                <a id="navDemo4" href="#portfolio1" class="w3-bar-item w3-button" onclick="clientside_ENTRYnavtoggle(document, " navDemo")"></a>
                <a id="navDemo5" href="#contact" class="w3-bar-item w3-button" onclick="clientside_ENTRYnavtoggle(document, " navDemo")"></a>
                <a id="navDemo6" href="impressum.html" class="w3-bar-item w3-button" onclick="clientside_ENTRYnavtoggle(document, " navDemo")"></a>

            </div>
        </div>

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- First Parallax Image with Logo Text -->
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

        <!-- About Section -->
        <div class="w3-content w3-container w3-padding-64" id="about">
            <h3 class="w3-center">
                ABOUT ME
            </h3>
            <div class="w3-row">
                <div class="column">
                    <!-- ------------------------->
                    <div class="w3-col m6 w3-center w3-padding-large">
                        <p>
                            <h3 id="entryname" class="w3-center">
                                <i class="fa fa-user w3-margin-right"></i>
                            </h3>
                        </p>
                        <br>
                        <img id="entryphoto" class="w3-round w3-image" width="500" height="333" alt="Photo of Me">

                    </div>
                </div>
                <div class="column">
                    <div id="entrypresentation">
                    </div>

                    <form>
                        <button id="entrycvbutton"></button>
                    </form>

                </div>

            </div>

        </div>

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- Second Parallax Image with BLOG Text -->
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
            <h3 id="pf2title" class="w3-center">
            </h3>
            <p class="w3-center">
                <em id="pf2text"></em>
            </p>
            <br>
            <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
            <div class="w3-card w3-margin">
                <div class="w3-row-padding w3-center">
                    <div class="w3-col m6">
                        <img id="pf2img1" style="width:100%"
                             onclick="cliside_ENTRYwrapnews(document, this, 0)"
                             class="w3-hover-opacity" alt="BLOGNEWS entry 0">
                    </div>

                    <div class="w3-col m6">
                        <img id="pf2img2" style="width:100%"
                             onclick="cliside_ENTRYwrapnews(document, this, 1)"
                             class="w3-hover-opacity" alt="BLOGNEWS entry 1">
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

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- Third Parallax Image with BLOG Text -->
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
            <h3 id="pf1title" class="w3-center">
            </h3>
            <p class="w3-center">
                <em id="pf1text"></em>
            </p>
            <br>

            <!-- Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) -->
            <div class="w3-card w3-margin">
                <div class="w3-row-padding w3-center">
                    <div class="w3-col m6">
                        <img id="pf1img1" style="width:100%"
                             onclick="cliside_ENTRYwraptech(document, this, 0)"
                             class="w3-hover-opacity" alt="BLOGTECH entry 0">
                    </div>

                    <div class="w3-col m6">
                        <img id="pf1img2" style="width:100%"
                             onclick="cliside_ENTRYwraptech(document, this, 1)"
                             class="w3-hover-opacity" alt="BLOGTECH entry 1">
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

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- Fourth Parallax Image with feedback formular -->
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

            <div class="w3-card w3-margin">
                <h3 class="w3-center">
                    I'D LOVE YOUR FEEDBACK
                </h3>
                <div class="w3-container w3-padding">

                    <p>
                        <i class="fa fa-beer"></i>,
                        Please don't hesitate to leave a note:
                    </p>

                    <!-- Feedback fields. Will send an email on submit (SEND MESSAGE button) -->
                    <form action="javascript:cliside_ENTRYpagefbk(document)">

                        <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
                            <div class="w3-half">
                                <input id="feedbackname" class="w3-input w3-border" type="text" placeholder="Name" required>
                            </div>

                            <div class="w3-half">
                                <input id="feedbackmail" class="w3-input w3-border" type="text" placeholder="Email" required>
                            </div>

                        </div>

                        <input id="feedbacktext" class="w3-input w3-border" type="text" rows="5" cols="40" placeholder="Message" required>

                        <button class="w3-button w3-black w3-right w3-section" type="submit">
                            <i class="fa fa-paper-plane"></i>
                            SEND MESSAGE
                        </button>

                    </form>

                </div>

                <!-- Für später: add Google Maps -->
                <!-- div id="googleMap" class="w3-round-large w3-greyscale" style="width:100%;height:400px;">
                </div -->
                <!-- div class="w3-col m4 w3-container">
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5330.759791175086!2d11.63675597722834!3d48.08361119099929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479de0863d2eada1%3A0xecf7e95475a09464!2sCurd-J%C3%BCrgens-Stra%C3%9Fe+18%2C+81739+M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1539927416198"
                            height="450"
                            frameborder="0"
                            style="border:0"
                            allowfullscreen>
                    </iframe>
                </div -->

            </div>

        </div>

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- Footer -->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
            <a href="#home" class="w3-button w3-light-grey">
                <i class="fa fa-arrow-up w3-margin-right"></i>
                To the top
            </a>

            <h6 class="w3-text-teal">
                Find me on social media.
            </h6>
            <div class="w3-xlarge w3-section">
                <a class="fa fa-facebook-official w3-hover-opacity" href="https://www.facebook.com/francois-pignalet">
                </a>
                <a class="fa fa-twitter w3-hover-opacity" href="https://twitter.com/fpignalet">
                </a>
                <a class="fa fa-linkedin w3-hover-opacity" href="https://www.linkedin.com/in/françois-pignalet-in-bayern/">
                </a>
                <!-- i class="fa fa-instagram w3-hover-opacity">
                </i>
                <i class="fa fa-snapchat w3-hover-opacity">
                </i>
                <i class="fa fa-pinterest-p w3-hover-opacity">
                </i -->
            </div>

            <p>
                Powered by
                <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">
                    w3.css
                </a>
            </p>

        </footer>

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- Modal utility for full size images on click-->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <div id="modaldiv" class="w3-modal w3-black" onclick="this.style.display='none'">
            <span class="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image">
                <i class="fa fa-remove"></i>
            </span>
            <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                <img id="modalimg" class="w3-image">
                <p id="modalcaption" class="w3-opacity w3-large"></p>
            </div>
        </div>

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <!--
        To use this code on your website, get a free API key from Google.
        Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
        -->
        <!-- script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCA4Ast8z4S1oRDkopGSpOIa5kVEHfhN2g&callback=clientside_ENTRYshowgmap">
        </script -->

        <!-- -------------------------------------------------------------------------------------------------------------->
        <!-- -------------------------------------------------------------------------------------------------------------->
        <script>
            window.onscroll = function() {
                clientside_ENTRYnavscroll(document, "entry_navbar")
            };

        </script>

    </body>

</html>
