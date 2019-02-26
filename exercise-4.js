var tanggal = 1;// assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1;// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2019;// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch  (bulan) {
  case bulan=1:
    console.log ( tanggal + ' januari ' + tahun)
    break;
  case bulan=2:
    console.log (tanggal + ' februari ' + tahun)
    break;
  case bulan=3:
    console.log (tanggal + ' maret ' + tahun)
    break;
  case bulan=4:
    console.log (tanggal + ' april ' + tahun)
    break;
  case bulan=5:
    console.log (tanggal + ' mei ' + tahun)
    break;
  case bulan=6:
    console.log (tanggal + ' juni ' + tahun)
    break;
  case bulan=7:
    console.log (tanggal + ' juli ' + tahun)
    break;
  case bulan=8:
    console.log (tanggal + ' agustus ' + tahun)
    break;
  case bulan=9:
    console.log (tanggal + ' september ' + tahun)
    break;
  case bulan=10:
    console.log (tanggal + ' oktober ' + tahun)
    break;
  case bulan=11:
    console.log (tanggal + ' november ' + tahun)
    break;
  case bulan=12:
    console.log (tanggal + ' desember ' + tahun)
    break;
  default:
    console.log ('invalid date')
    break;
}