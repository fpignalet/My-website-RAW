<?php
/**
 * Created by PhpStorm.
 * User: franc
 * Date: 24.10.2018
 * Time: 11:33
 */

class SRVSIDE_ENTRY {

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

    /// @brief desc
    /// @param name
    /// @param email
    /// @param text
    public function ENTRYsendmail($name, $mail, $text) {
        global $dataENTRY_mail, $dataENTRY_subject;

        $nachricht =
            "RECEIVED NAME: " . $name . "\n" .
            "RECEIVED EMAIL: " . $mail . "\n" .
            "RECEIVED MESSAGE: " . $text;

        mail($dataENTRY_mail, $dataENTRY_subject, $nachricht);
        return $nachricht;
    }

}
?>