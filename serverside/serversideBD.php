<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 11.10.2018
 * Time: 06:57
 */

include 'data/BDdata.php';

class SRVSIDE_BD {

    /// @brief conection instance
    public $BDconn = NULL;
    /// @brief global result variable.
    public $BDresult = "";

    /// @brief ctor
    public function __construct() {
        //...
    }

    /*************************************************************************************
     * BD ACCESS FUNCTIONS
     *************************************************************************************/
    /// @brief connection to database
    /// @uses $srvside_BDconnect, $srvside_BDsrvname;
    /// @returns
    ///  Connection total failed or
    ///  Connection failed or
    ///  Connected successfully
    public function BDConnect() {
        global $srvside_BDconnect, $srvside_BDsrvname;

        $username = strtok($srvside_BDconnect, ":");
        $password = strtok(":");
        $dbname = strtok(":");

        // Create connection
        $this->BDconn = new mysqli($srvside_BDsrvname, $username, $password, $dbname);
        // Check connection
        if (NULL == $this->BDconn) {
            die("<br>Connection total failed: " . $this->BDconn->connect_error);
        }
        if ($this->BDconn->connect_error) {
            die("<br>Connection failed: " . $this->BDconn->connect_error);
        }

        echo "<br>Connected successfully";
    }

    /// @brief fetch the query content then udpates $srvside_result globale variable with the content of the query
    /// @uses $srvside_BDfields;
    /// @param $query which contains the query result
    /// @returns fills BDresult field
    public function BDFetch($query) {
        global $srvside_BDfields;

        if ($query->num_rows > 0) {
            // output data of each row
            for ($row = $query->fetch_assoc(); NULL != $row; $row = $query->fetch_assoc()) {
                $this->BDresult .= "<br>fetch...";
                for ($index = 0; NULL != $srvside_BDfields[$index]; $index++) {
                    $this->BDresult .= " * field" . $index . ": [ " . $row[$srvside_BDfields[$index]] . " ]";
                }
            }
        }
        else {
            $this->BDresult .= "<br>0 results";
        }

    }

    /*************************************************************************************
     * BD CHANGE/MODIF FUNCTIONS
     *************************************************************************************/
    /// @brief makes a test select on the whole database
    /// @uses $srvside_BDtables, $srvside_BDfields;
    /// @returns the query and fills BDresult field
    public function BDSelect() {
        global $srvside_BDtables, $srvside_BDfields;

        //-------------------------------
        //QUERY create: find the entries containing the following values in a tabe
        $sql = "SELECT ";
        for ($index = 0; NULL != $srvside_BDfields[$index]; $index++) {
            if(NULL != $srvside_BDfields[$index+1]) {
                $sql .= $srvside_BDfields[$index] . ", ";
            }
            else {
                $sql .= $srvside_BDfields[$index] . " ";
            }
        }
        $sql .= "FROM $srvside_BDtables[0]";

        //-------------------------------
        //QUERY use
        $query = $this->BDconn->query($sql);
        if (NULL == $query) {
            $this->BDresult .= "<br>Error: " . $sql . "<br>" . $this->BDconn->error;
            return NULL;
        }

        $this->BDresult = "<br>query fertig!";
        $this->BDresult .= "<br>es gibt $query->num_rows rows";

        return $query;
    }

    /// @brief insert something in the database then udpates $srvside_result globale variable with success/error message
    /// @uses $srvside_BDtestvalues, $srvside_BDtables, $srvside_BDfields;
    /// @returns the query and fills BDresult field
    public function BDInsert() {
        global $srvside_BDtestvalues, $srvside_BDtables, $srvside_BDfields;

        //-------------------------------
        //QUERY create: insert into a table with the given fields the following values
        $sql = "INSERT INTO $srvside_BDtables[0] (";
        for ($index = 0; NULL != $srvside_BDfields[$index]; $index++) {
            if(NULL != $srvside_BDfields[$index+1]) {
                $sql .= $srvside_BDfields[$index] . ", ";
            }
            else {
                $sql .= $srvside_BDfields[$index] . " ";
            }
        }
        $sql .= ") ";
        $sql .= "VALUES ($srvside_BDtestvalues[0], $srvside_BDtestvalues[1], '$srvside_BDtestvalues[2]')";

        //-------------------------------
        //QUERY use
        $query = $this->BDconn->query($sql);
        if (NULL == $query) {
            $this->BDresult .= "<br>Error: " . $sql . "<br>" . $this->BDconn->error;
            return NULL;
        }

        $this->BDresult .= "<br>New record created successfully";
        return $query;
    }

    /// @brief delete something in the database then udpates $srvside_result globale variable with success/error message
    /// @uses $srvside_BDtestvalues, $srvside_BDtables, $srvside_BDfields
    /// @returns the query and fills BDresult field
    public function BDDelete() {
        global $srvside_BDtestvalues, $srvside_BDtables, $srvside_BDfields;

        //-------------------------------
        //QUERY create: delete in a table the entries which contains the following values
        $sql = "DELETE FROM `$srvside_BDtables[0]` ";
        for ($index = 0; NULL != $srvside_BDfields[$index]; $index++) {
            if(0 == $index) {
                $sql .= "WHERE `$srvside_BDfields[$index]` = $srvside_BDtestvalues[$index] ";
            }
            else {
                $sql .= "AND `$srvside_BDfields[$index]` = '$srvside_BDtestvalues[$index]'";
            }
        }

        //-------------------------------
        //QUERY use
        $query = $this->BDconn->query($sql);
        if (NULL == $query) {
            $this->BDresult .= "<br>Error: " . $sql . "<br>" . $this->BDconn->error;
            return NULL;
        }

        $this->BDresult .= "<br>Record deleted successfully";
        return $query;
    }

}

