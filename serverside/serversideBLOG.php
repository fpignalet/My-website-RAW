<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 11.10.2018
 * Time: 07:01
 */

include 'data/BLOGdata.php';

class SRVSIDE_BLOG {

    /// @brief global result variable.
    public $BLOGresult = "";
    /// @brief global result array
    public $BLOGresultA = array();

    /// @brief ctor
    public function __construct() {
        //...
    }

    /*************************************************************************************
     * VISIBLE IMPLEMENTATION: BLOG NEWS TEST FUNCTIONS
     ************************************************************************************/
    /// @brief desc
    /// @param $param
    /// @param $debug
    /// @returns 1 desc
    public function BNtest1($param, $debug) {
        global $data_BLOGdatamap, $data_BNloadsleep;

        if(true == $debug) {
            usleep($data_BNloadsleep);
        }

        return $data_BLOGdatamap[$param];
    }

    /*************************************************************************************
     * VISIBLE IMPLEMENTATION: BLOG TECH TEST FUNCTIONS
     ************************************************************************************/
    /// @brief lookup all hints from array if $q is different from "" then udpates
    ///     $srvside_resultA globale variable with success/error message
    /// @param $param
    /// @returns 1 desc
    public function BTtest1($param) {
        global $data_BTtestarray;

        $param = strtolower($param);
        $len = strlen($param);
        foreach ($data_BTtestarray as $item) {
            if (false == stristr($param, substr($item, 0, $len))) {
                continue;
            }

            if ("" === $this->BLOGresult) {
                $this->BLOGresult = $item;
            }
            else {
                $this->BLOGresult .= ", $item";
            }

            $this->BLOGresultA[] = $item;
        }
    }

    /// @brief desc
    /// @returns 1 desc
    public function BTtest2() {
        $bd = new SRVSIDE_BD;
        if (NULL == $bd->BDconn) {
            $bd->BDConnect();
        }

        $query = $bd->BDSelect();
        $bd->BDFetch($query);

        $bd->BDDelete();
        $bd->BDInsert();

        $this->BLOGresult = $bd->BDresult;
    }

    /// @brief desc
    /// @returns 1 desc
    public function BTtest3() {
        $adata = array("object_id" => 1, "object_title" => "PhP_Testobject1");
        return $adata;
    }

    /// @brief desc
    /// @param param
    /// @returns 1 desc
    public function BTtest4($param) {
        $jsdata = json_decode($param, true);
        $adata = array("object_id" => $jsdata[0], "object_title" => $jsdata[1]);
        return $adata;
    }

    /// @brief desc
    /// @returns 1 desc
    public function BTtest5() {
        $adata = array();

        $adata[] = $_SERVER['PHP_SELF'];//Returns the filename of the currently executing script

        $adata[] = $_SERVER['QUERY_STRING'];//Returns the query string if the page is accessed via a query string

        $adata[] = $_SERVER['GATEWAY_INTERFACE'];//Returns the version of the Common Gateway Interface (CGI) the server is using

        $adata[] = $_SERVER['SERVER_ADDR'];//Returns the IP address of the host server
        $adata[] = $_SERVER['SERVER_NAME'];//Returns the name of the host server (such as www.w3schools.com)
        $adata[] = $_SERVER['SERVER_SOFTWARE'];//Returns the server identification string (such as Apache/2.2.24)
        $adata[] = $_SERVER['SERVER_ADMIN'];//Returns the value given to the SERVER_ADMIN directive in the web server configuration file (if your script runs on a virtual host, it will be the value defined for that virtual host) (such as someone@w3schools.com)
        $adata[] = $_SERVER['SERVER_PORT'];//Returns the port on the server machine being used by the web server for communication (such as 80)
        $adata[] = $_SERVER['SERVER_SIGNATURE'];//Returns the server version and virtual host name which are added to server-generated pages
        $adata[] = $_SERVER['SERVER_PROTOCOL'];//Returns the name and revision of the information protocol (such as HTTP/1.1)

        $adata[] = $_SERVER['REQUEST_METHOD'];//Returns the request method used to access the page (such as POST)
        $adata[] = $_SERVER['REQUEST_TIME'];//Returns the timestamp of the start of the request (such as 1377687496)

        $adata[] = $_SERVER['HTTP_ACCEPT'];//Returns the Accept header from the current request
        $adata[] = $_SERVER['HTTP_HOST'];//Returns the Host header from the current request
        $adata[] = $_SERVER['HTTP_REFERER'];//Returns the complete URL of the current page (not reliable because not all user-agents support it)

        $adata[] = $_SERVER['REMOTE_ADDR'];//Returns the IP address from where the user is viewing the current page
        $adata[] = $_SERVER['REMOTE_PORT'];//Returns the port being used on the user's machine to communicate with the web server

        $adata[] = $_SERVER['SCRIPT_FILENAME'];//Returns the absolute pathname of the currently executing script
        $adata[] = $_SERVER['SCRIPT_NAME'];//Returns the path of the current script

        //not available ?
//      $adata[] = $_SERVER['HTTP_ACCEPT_CHARSET'];//Returns the Accept_Charset header from the current request (such as utf-8,ISO-8859-1)
//      $adata[] = $_SERVER['HTTPS'];//Is the script queried through a secure HTTP protocol
//      $adata[] = $_SERVER['REMOTE_HOST'];//Returns the Host name from where the user is viewing the current page
//      $adata[] = $_SERVER['PATH_TRANSLATED'];//Returns the file system based path to the current script
//      $adata[] = $_SERVER['SCRIPT_URI'];//Returns the URI of the current page

        foreach ($adata as $item) {
            if ("" === $this->BLOGresult) {
                $this->BLOGresult = $item;
            }
            else {
                $this->BLOGresult .= " -- $item";
            }

            $this->BLOGresultA[] = $item;
        }

    }

    public function BTtest6($cbk, $dir, $file){
        $files = array();

        $filters = [ ".js", ".php" ];
        foreach($this->reposcan($dir) as $line){
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

    public function BTtest8() {
        // Error Reporting und Zeitlimit für Serverbetrieb setzen
        error_reporting(E_ERROR);
        set_time_limit (0);

        $host = 'localhost'; // Serverhost auf der gelauscht werden soll
        $port = 1414; // Port auf dem Verbindungen angenommen werden sollen

        // Socket erstellen
        $sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
        // Socket an Adresse und Port binden
        socket_bind($sock, $host, $port);
        // An Port lauschen
        socket_listen($sock);

        $sockets = array($sock);
        $arClients = array();
        $count = 0;
        while (true){
            echo "Warte auf Verbindung...rn";

            $sockets_change = $sockets;
            $ready = socket_select($sockets_change, $write = null, $expect = null, null);

            echo "Verbindung angenommen...rn";

            foreach($sockets_change as $s){
                if ($s == $sock){
                    // Änderung am Serversocket
                    $client = socket_accept($sock);
                    array_push($sockets, $client);
                    print_r($sockets);
                }
                else{
                    // Eingehende Nachrichten der Clientsockets
                    $bytes = @socket_recv($s, $buffer, 2048, 0);
                    if("TESTTOTOTESTTOTO" == $buffer) {
                        $buffer = "OKOKOKOK".$count;
                        $bytes = @socket_send($s, $buffer, 2048, 0);
                        $count = $count+1;
                    }
                }
            }
        }
    }

    /*************************************************************************************
     * NON VISIBLE IMPLEMENTATION
     ************************************************************************************/
    private function repocbk($params) {
        fwrite($params[1], $params[0]);
        fwrite($params[1], $params[2]);
        fwrite($params[1], "\r\n");
    }

    private function reposcan($dir, &$results = array()){
        $files = scandir($dir);

        foreach($files as $key => $value){
            $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
            if(!is_dir($path)) {
                $results[] = $path;
            }
            else if($value != "." && $value != "..") {
                $this->reposcan($path, $results);
                $results[] = $path;
            }
        }

        return $results;
    }

}
