var score = +prompt("Toplagan balingizni kiriting :");

if (score > 0 && score < 80) {
	alert(
		`Siz oqishga kira olmadingiz 😕 \n Maximal ball 180 edi . Siz ${score} ball oldingiz !!!`
	);
} else if (score >= 80 && score < 100) {
	var money = +prompt(
		" Siz super-kontrakt asosida talabalikka tavsiya etildingiz 🥳 \n  Yillik kontrakt miqdori 3000$ ! \n Qancha pulingiz bor ?"
	);
	if (money > 3000) {
		alert("Sizda yetarlicha pulingiz bor ! \n Talabalik Muborak !!!");
	} else {
		alert(`Sizda ${3000 - money} cha pul yetishmayapti afsus 😔`);
	}
} else if (score >= 100 && score < 150) {
	var moneyTwo = +prompt(
		" Siz kontrakt asosida talabalikka tavsiya etildingiz 🥳 \n  Yillik kontrakt miqdori 2000$ ! \n Qancha pulingiz bor ?"
	);
	if (moneyTwo > 2000) {
		alert("Sizda yetarlicha pulingiz bor ! \n Talabalik Muborak !!!");
	} else {
		alert(`Sizda ${2000 - money} cha pul yetishmayapti afsus 😔`);
	}
} else if (score >= 150 && score <= 180) {
	alert("TABRIKLAYMIZ 🥳 \n Siz grand asosida talikka tavsiya etildingiz");
} else {
	alert("Noto'g'ri malimot kiritdingiz ❌");
}
