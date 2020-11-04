<?php
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "quentin.fisch@epita.fr";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;
    
    if (mail($mailTo, $subject, $txt, $headers)){
        header("Location: index.html?mailsend");
    }
    else {
        echo('Error while sending the message, i am sorry about that. If you want to contact me, please send a mail to quentin.fisch@epita.fr')
    }
?>