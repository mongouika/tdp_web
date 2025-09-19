<?php
// セキュリティ対策は行っていません
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if($_POST) {
  $to = 'mongouika@gmail.com';
  //↑このお問い合わせフォームに入力された内容を送る先のメールアドレス

  $subject = 'お問い合わせがありましたよ';
  //↑送信されるメールの題名です。

  //↓以下は、送信するメールの本文です。1行ずつ$messageに追記する形です。
  // \nは、改行の意味。
  $message = "お問い合わせがありましたよ。\n\n";
  $message .= "入力された内容は以下の通りですよ。\n";
  $message .= "/***********/\n\n";
  $message .= "お名前: ";
  $message .= $_POST["name"] . "\n"; // name属性がnameの内容が入ります
  $message .= "メールアドレス: ";
  $message .= $_POST["email"] . "\n"; // name属性がemailの内容が入ります
  $message .= "選択した動物: ";
  $message .= $_POST['animal'] . "\n"; // name属性がanimalの内容が入ります
  $message .= "好きな色: ";
  if(isset($_POST['colors'])) {
    $selectedcolors = $_POST['colors'];
    foreach($selectedcolors as $colors) {
      $message .= $colors . "\n";
    }
  }
  $message .= "お仕事: ";
  $message .= $_POST['job'] . "\n";
  $message .= "お問い合わせ本文:\n";
  $message .= $_POST["message"]; // name属性がmessageの内容が入ります

  //↓最後に、設定した内容でメールを送る命令です
  //余談　送信元メールアドレスを明記しないとgmailなどはエラーを返すんじゃないかなあ
  //$param = "-ffrom@sample.com";
  if(mb_send_mail($to, $subject, $message)) { //通るならこっちがいい

  //if(mail($to,$subject,$message)) {
    echo "メールが送信されました";
    echo "<br><a href='index.html'>もどる</a>";
  } else {
    echo "メールの送信に失敗しました";
    echo "<br><a href='index.html'>もどる</a>";
  }


} else {
  echo "HTMLからのPOST送信受信に失敗しました\n";
  echo "<a href='index.html'>もどる</a>";
}