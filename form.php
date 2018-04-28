<?php
	if (!empty($_POST['login'])AND !empty($_POST['email']) AND !empty($_POST['text'])){
		
		$theme = 'new message';
		
		$letter = "данные сообшения:";
		$letter .= "\n\n";
		$letter .= "\nИмя:".$_POST['login'];
		$letter .= "\nEmail:".$_POST['email'];
		$letter .= "\nSMS:".$_POST['text'];
		
		if (mail('piskysl@yahoo.com', $theme, $letter)){
			echo ('message sent');
		} else {
			header('Location:/');
		}
	} else {
		header('Location:/');
	}
?>