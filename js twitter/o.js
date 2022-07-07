var kullanicilar = [
  {
    email: "kubrayildiz@gmail.com",
    sifre: "12345",
  },
  {
    email: "kbrayyildiz@gmail.com",
    sifre: "12345",
  },
];
var tivitler = [
  {
    email: "kubrayildiz@gmail.com",
    tivit: "hava çok güzel",
  },
  {
    email: "kubrayildiz@gmail.com",
    tivit: "hava çok güzel 2",
  },
  { email: "kbrayyildiz@gmail.com", tivit: "hava çok güzel" },
];
var email = prompt("email?");
var sifre = prompt("sifre?");
function kullaniciVarMi(email, sifre) {
  console.log(email);
  console.log(sifre);
  for (i = 0; i < kullanicilar.length; i++) {
    if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
      return true;
    }
  }
  return false;
}
function giris() {
  if (kullaniciVarMi(email, sifre)) {
    console.log(tivitler);
  } else {
    console.log("kullanıcı adı veya şifre hatalı");
  }
}
giris(email, sifre);
