<?php
$info = json_encode($_GET);
// $Object = new DateTime();
// $Object->setTimezone(new DateTimeZone('Asia/Tokyo'));
// $DateAndTime = $Object->format("d-m-Y_h-i-s_a");
mkdir("./history/".$_GET['dateAndTime'], 0700);
$fp = fopen("./history/".$_GET['dateAndTime']."/info_GPS.txt", "w");
if ($fp !== false) {
  foreach ($_GET as $key => $value) {
    fwrite($fp, $key.' : '.$value.",\n");
  }
} else {
  echo "fopen関数でエラーが発生しました\n";
}
?>

<script>
  // console.log('<?php echo "./history/".$_GET['dateAndTime']."/info_GPS.txt" ?>');
  let bar = JSON.parse('<?php echo $info; ?>');
  console.log('typeof: ' + typeof bar);
  for (let key in bar) {
    console.log(key + ': ' + bar[key]);
  }
  console.log('<?php echo $DateAndTime; ?>');
</script>
