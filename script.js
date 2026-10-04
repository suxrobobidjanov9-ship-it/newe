let son = prompt("Son kiriting,biz uni juft yoki toqligini bilib beramiz !")
while (isNaN(son)) {
    let son = prompt("Notog'ri kiritdingiz,sonni boshidan kiriting")
    
}


if (son % 2 == 0) {
    alert("Siz juft son kiritdingiz")
    
}
else if (son % 2 == 1) {
    alert("Siz toq son kiritdingiz")
}