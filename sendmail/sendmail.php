<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//hsmc lwfe qfrc gkkn

	
	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'dimkalakhmitskij@gmail.com';                     //SMTP username
	$mail->Password   = 'hsmc lwfe qfrc gkkn';                               //SMTP password
	$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
	$mail->Port       = 465;                 
	

	// От кого письмо
	$mail->setFrom('dimkalakhmitskij@gmail.com', 'Портфолио'); 
	
	// Кому отправлять (замените email)
	$mail->addAddress('dimkalakhmitskij@gmail.com'); 
	
	// Тема письма
	$mail->Subject = 'Новое сообщение с Портфолио';
	
	// Формируем тело письма
	$body = '<h1>Новое сообщение с формы!</h1>';
	
	if (!empty($_POST['user_name'])) {
		 $body .= '<p><strong>Имя:</strong> ' . htmlspecialchars($_POST['user_name']) . '</p>';
	}
	if (!empty($_POST['user_email'])) {
		 $body .= '<p><strong>Email:</strong> ' . htmlspecialchars($_POST['user_email']) . '</p>';
	}
	if (!empty($_POST['user_project'])) {
		 $body .= '<p><strong>Сообщение:</strong> ' . nl2br(htmlspecialchars($_POST['user_project'])) . '</p>';
	}
	
	$mail->Body = $body;
	
	// Отправка письма
	$response = [];
	
	if (!$mail->send()) {
		 $response['message'] = 'Ошибка отправки: ' . $mail->ErrorInfo;
	} else {
		 $response['message'] = 'Данные отправлены!';
	}
	
	// Отдаем JSON-ответ
	header('Content-Type: application/json');
	echo json_encode($response);
	?>>