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
  function giris() {
    if (
      (email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
      (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)
    ) {
      console.log(tivitler);
    } else {
      console.log("kullanıcı adı veya şifre hatalı");
    }
  }
  giris(email,sifre)