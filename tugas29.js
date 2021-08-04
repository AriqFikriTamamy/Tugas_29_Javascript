function regex(){
  let data = "Belajar menimba ilmu programming bersama Niomic";
  var string = new RegExp("bersama")
  console.log(string.exec(data))
}

regex()
