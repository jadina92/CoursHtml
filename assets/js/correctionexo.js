
 var today = new Date();
 var day = today.getDay();
 var daylist = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
 var hour = today.getHours();
 var minute = today.getMinutes();
 var second = today.getSeconds();
 var prepand = (hour >= 12) ? " PM " : " AM ";
 console.log("Aujourd'hui, nous sommes " + daylist[day] + ", et il est " + hour + "h" + minute+  "m" + second + "s" + prepand);