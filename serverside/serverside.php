<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 23.04.2018
 * Time: 21:05
 * Brief: server main entrypooint
 */

include 'serversideBD.php';
include 'serversideBLOG.php';
include 'serversideCV.php';
include 'serversideENTRY.php';

/*************************************************************************************
 * IMPLEMENTATION: SITE MAIN ENTRYPOINT
 *************************************************************************************/
class SERVERSIDE {

    /// @brief get the parameters from URL
    public $param = [];

    public $triggers = [
        /*0*/"cliside_ENTRYphpmail",

        /*1*/"cliside_BLOGphptest1",
        /*2*/"cliside_BLOGphptest2",
        /*3*/"cliside_BLOGphptest5",
        /*4*/"cliside_BLOGphptest3",
        /*5*/"cliside_BLOGphptest4",

        /*6*/"cliside_CVphpgetdata",
        /*7*/"cliside_BLOGphpgetdata",

        /*8*/"cliside_BLOGphptest6",
        /*9*/"cliside_BLOGphptest7",
        /*10*/"cliside_BLOGphptest8",

        /*11*/"cliside_CVexport",
    ];

    /// @brief ctor
    public function __construct() {
        try {
            $this->param[] = $_REQUEST["p1"];
            $this->param[] = $_REQUEST["p2"];

            /*
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                //...
            }
            elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
                //...
            }
            */
//            (new SRVSIDE_BLOG)->BTtest6();
//            (new SRVSIDE_CV)->CVconvert(null, null);
        }
        catch(Exception $e) {
            echo 'Exception abgefangen: ',  $e->getMessage(), "\n";
        }
        finally {
            //...
        }

    }

    /// @brief ctor
    public function __destruct() {
        try {
            //...
        }
        catch(Exception $e) {
            echo 'Exception abgefangen: ',  $e->getMessage(), "\n";
        }
        finally {
            //...
        }

    }

    /// @brief receives and handles commands from clientside
    public function execute() {
        try {
            switch ($this->param[0]) {
                //----------------------------------------------------------------
                // ENTRY tasks
                //----------------------------------------------------------------

                //----------------------------------
                // SEND A MAIL
                case $this->triggers[0]:
                    $this->param[] = $_REQUEST["p3"];
                    $this->param[] = $_REQUEST["p4"];

                    $mail = new SRVSIDE_ENTRY;
                    $nachricht = $mail->ENTRYsendmail($this->param[1], $this->param[2], $this->param[3]);
                    echo "SEND MAIL SUCCESSFULL with parameters\n" . $nachricht;
                    break;

                //----------------------------------------------------------------
                // CV tasks
                //----------------------------------------------------------------

                //----------------------------------
                // SEND CV JSON CONTENT
                case $this->triggers[6]:
                    $this->param[] = $_REQUEST["p3"];

                    $debug = false;

                    $CV = new SRVSIDE_CV;
                    $data = $CV->CVsend($this->param[1], $this->param[2], $debug);
                    // Output encoded data
                    echo json_encode($data);
                    break;

                //----------------------------------
                // EXPORT CV AS JSON
                case $this->triggers[11]:
                    $debug = false;

                    $CV = new SRVSIDE_CV;
                    $data = $CV->CVconvert(null, $debug);
//                    echo $data;
                    $data = "{ \"jsondata\": \"jsondata\" }";
                    echo json_encode($data);
                    break;

                //----------------------------------------------------------------
                // BLOG NEWS tasks
                //----------------------------------------------------------------

                //----------------------------------
                // SEND BLOG DIRECT CONTENT
                // return json data
                case $this->triggers[7]:
                    $debug = false;

                    $blog = new SRVSIDE_BLOG;
                    $data = $blog->BNsend($this->param[1], $debug);
                    // Output encoded data
                    echo json_encode($data);
                    break;

                //----------------------------------------------------------------
                // BLOG TECH tasks
                //----------------------------------------------------------------

                //----------------------------------
                // SEND TESTS DIRECT RESULTS
                // fill and return $srvside_BDresult
                case $this->triggers[1]:
                    $blog = new SRVSIDE_BLOG;
                    $blog->BTtest1($this->param[1]);
                    // Output "no suggestion" if no hint was found or output correct values
                    echo $blog->BLOGresult === "" ? "no suggestion" : $blog->BLOGresult;
                    break;

                case $this->triggers[2]:
                    $blog = new SRVSIDE_BLOG;
                    $blog->BTtest2();
                    // Output "no suggestion" if no hint was found or output correct values
                    echo $blog->BLOGresult === "" ? "no suggestion" : $blog->BLOGresult;
                    break;

                case $this->triggers[3]:
                    $blog = new SRVSIDE_BLOG;
                    $blog->BTtest5();
                    // Output "no suggestion" if no hint was found or output correct values
                    echo $blog->BLOGresult === "" ? "no suggestion" : $blog->BLOGresult;
                    break;

                //----------------------------------
                // SEND TESTS JSON RESULTS
                case $this->triggers[4]:
                    $blog = new SRVSIDE_BLOG;
                    $data = $blog->BTtest3();
                    // Output encoded data
                    echo json_encode($data);
                    break;

                case $this->triggers[5]:
                    $blog = new SRVSIDE_BLOG;
                    $data = $blog->BTtest4($this->param[1]);
                    // Output encoded data
                    echo json_encode($data);
                    break;

                case $this->triggers[8]:
                    $analyser = new SRVSIDE_BLOG;
                    $data = $analyser->BTtest6(null, '..', null);
                    echo json_encode($data);
                    break;

                //----------------------------------------------------------------
                // UTILITIES, TESTS and MORE
                //----------------------------------------------------------------

                case $this->triggers[9]:
                    echo php_uname();
                    break;

                case $this->triggers[10]:
                    //Push test
                    $test = new SRVSIDE_BLOG;
                    $test->BTtest8();
                    break;

                //----------------------------------------------------------------
                // Not yet implemented
                //----------------------------------------------------------------
                default:
                    echo "? Unknown command...\n";
                    break;

            }

        }
        catch(Exception $e) {
            echo 'Exception abgefangen: ',  $e->getMessage(), "\n";
        }
        finally {
            //...
        }

    }

}

$entry = new SERVERSIDE;
$entry->execute();
