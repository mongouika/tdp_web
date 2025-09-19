<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>一言</title>
<style>
  .box p:first-child{
    font-size:60px;
    margin:0;
  }
</style>
</head>
<body>
<form action="regist.php" method="post">
  <input type="text" name="message" size="50" value="">
  <input type="submit" value="post">
</form>

<div class="box">
<?php
$fp = fopen('message.txt', 'r');
while ($line = fgets($fp)) {
  echo '<p>' . htmlspecialchars($line, ENT_QUOTES) . "</p>\n";
}
fclose($fp);
?>
</div>

</body>
</html>