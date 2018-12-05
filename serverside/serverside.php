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

class SRVSIDE_ANALYSER {

    public function parserepo($cbk, $file){
        $files = array();

        $filters = [ ".js", ".php" ];
        foreach($this->scanrepo('..') as $line){
            foreach($filters as $filter){
                if(FALSE != strpos($line, $filter)){
                    $files[$filter][] = $line;
                }
            }
        }

        if(null != $file) {
            $stream = fopen($file, "w");

            foreach($files[$filters[0]] as $item){
                call_user_func_array(array($this, $cbk), array([ "JAVASCRIPT: ", $stream, $item ]));
            }
            foreach($files[$filters[1]] as $item){
                call_user_func_array(array($this, $cbk), array([ "PHP: ", $stream, $item ]));
            }

            fclose($stream);
        }

        return $files;
    }

    private function callbackparse($params) {
        fwrite($params[1], $params[0]);
        fwrite($params[1], $params[2]);
        fwrite($params[1], "\r\n");
    }

    private function scanrepo($dir, &$results = array()){
        $files = scandir($dir);

        foreach($files as $key => $value){
            $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
            if(!is_dir($path)) {
                $results[] = $path;
            }
            else if($value != "." && $value != "..") {
                $this->scanrepo($path, $results);
                $results[] = $path;
            }
        }

        return $results;
    }

}

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

        /*9*/"cliside_BLOGphptest7"

    ];

    /// @brief ctor
    public function __construct() {
        try {
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                //...

            }
            elseif ($_SERVER["REQUEST_METHOD"] == "GET") {
                //...

            }

            $this->param[] = $_REQUEST["p1"];
            $this->param[] = $_REQUEST["p2"];

            if(false) {
                //debug only
                $analyser = new SRVSIDE_ANALYSER();
                $analyser->parserepo("callbackparse", "../listfile.txt");
            }
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
                // SEND CV CONTENT
                // return json data
                case $this->triggers[6]:
                    $debug = false;

                    $CV = new SRVSIDE_CV;
                    $data = $CV->CVsend($this->param[1], $debug);
                    // Output encoded data
                    echo json_encode($data);
                    break;

                //----------------------------------------------------------------
                // BLOG NEWS tasks
                //----------------------------------------------------------------

                //----------------------------------
                // UTILITY
                case $this->triggers[9]:
                    echo php_uname();
                    break;

                //----------------------------------
                // SEND BLOG CONTENT
                // return json data
                case $this->triggers[7]:
                    $debug = false;

                    $blog = new SRVSIDE_BLOG;
                    $data = $blog->BLOGsend($this->param[1], $debug);
                    // Output encoded data
                    echo json_encode($data);
                    break;

                //----------------------------------------------------------------
                // BLOG TECH tasks
                //----------------------------------------------------------------

                //----------------------------------
                // SEND TESTS RESULTS
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
                // SEND TESTS RESULTS
                // return json data
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

                //----------------------------------
                // SEND DIRECTORY CONTENT
                // return json data
                case $this->triggers[8]:
                    $analyser = new SRVSIDE_ANALYSER();
                    $data = $analyser->parserepo(null, null);
                    echo json_encode($data);
                    break;

                //----------------------------------------------------------------
                // others / Not yet implemented
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