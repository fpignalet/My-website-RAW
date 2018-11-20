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

    /// @brief
    ///     fetch the query content
    ///     udpates $srvside_result globale variable with the content of the query
    /// @uses $srvside_BDfields;
    /// @param $query which contains the query result
    /// @returns
    public function BDFetch($query) {
        global $srvside_BDfields;

        if ($query->num_rows > 0) {
            // output data of each row
            for ($row = $query->fetch_assoc(); NULL != $row; $row = $query->fetch_assoc()) {
                $this->BDresult .= "<br>fetch...";
                $this->BDresult .= " * field1: [ " . $row[$srvside_BDfields[0]] . " ]";
                $this->BDresult .= " - field2: [ " . $row[$srvside_BDfields[1]] . " ]";
                $this->BDresult .= " - field3: [ " . $row[$srvside_BDfields[2]] . " ]";
            }
        }
        else {
            $this->BDresult .= "<br>0 results";
        }

    }

    /// @brief makes a test select on the whole database
    /// @uses $srvside_BDtables, $srvside_BDfields;
    /// @returns $query which contains the query result
    public function BDSelect() {
        global $srvside_BDtables, $srvside_BDfields;

        //-------------------------------
        $sql = "SELECT ";
        $sql .= $srvside_BDfields[0] . ", ";
        $sql .= $srvside_BDfields[1] . ", ";
        $sql .= $srvside_BDfields[2] . " ";
        $sql .= "FROM $srvside_BDtables[0]";
        //-------------------------------

        $query = $this->BDconn->query($sql);
        if (NULL == $query) {
            die("<br>QUERY FAILED");
        }

        $this->BDresult = "<br>query fertig!";
        $this->BDresult .= "<br>es gibt $query->num_rows rows";

        return $query;
    }

    /// @brief
    ///     insert something in the database
    ///     udpates $srvside_result globale variable with success/error message
    /// @uses $srvside_BDtestvalues, $srvside_BDtables, $srvside_BDfields;
    /// @returns
    public function BDInsert()
    {
        global $srvside_BDtestvalues, $srvside_BDtables, $srvside_BDfields;

        //-------------------------------
        $sql = "INSERT INTO $srvside_BDtables[0] (";
        $sql .= $srvside_BDfields[0] . ", ";
        $sql .= $srvside_BDfields[1] . ", ";
        $sql .= $srvside_BDfields[2] . " ";
        $sql .= ") ";
        $sql .= "VALUES ($srvside_BDtestvalues[0], $srvside_BDtestvalues[1], '$srvside_BDtestvalues[2]')";
        //-------------------------------

        $query = $this->BDconn->query($sql);
        if (NULL != $query) {
            $this->BDresult .= "<br>New record created successfully";
        }
        else {
            $this->BDresult .= "<br>Error: " . $sql . "<br>" . $this->BDconn->error;
        }

        return $query;
    }

    /// @brief
    ///     delete something in the database
    ///     udpates $srvside_result globale variable with success/error message
    ///     @uses $srvside_BDtestvalues, $srvside_BDtables, $srvside_BDfields
    /// @returns
    public function BDDelete()
    {
        global $srvside_BDtestvalues, $srvside_BDtables, $srvside_BDfields;

        //-------------------------------
        $sql = "DELETE FROM `$srvside_BDtables[0]` ";
        $sql .= "WHERE `$srvside_BDfields[0]` = $srvside_BDtestvalues[0] ";
        $sql .= "AND `$srvside_BDfields[1]` = $srvside_BDtestvalues[1] ";
        $sql .= "AND `$srvside_BDfields[2]` = '$srvside_BDtestvalues[2]'";
        //-------------------------------

        $query = $this->BDconn->query($sql);
        if (NULL != $query) {
            $this->BDresult .= "<br>Record deleted successfully";
        }
        else {
            $this->BDresult .= "<br>Error: " . $sql . "<br>" . $this->BDconn->error;
        }

        return $query;
    }

}
?>
