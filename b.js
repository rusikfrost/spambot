const needle = require('needle');

const this_token = ('4813c4ba41a11f91bf25603db13666c9b03f09a03eb1deeab7144c701b0e51544cf552e70f3b02166f452');
const mess1 = ["Здравствуйте", "Привет", "Приветствую"];
const mess2 = (
"Вы выиграли 2700 рублей скидки на заказ бота от Ботмании, тоесть для Вас он будет стоить всего 299 рублей.\n"
+" Бот даёт постоянный значительный прирост аудитории в группы, каналу на YouTube, сайту, блогу, продаёт товары заинтересованным пользователям."
+" На сегодняшний день все крупные площадки используют автоматизированных ботов для продаж." 
+ " Для того, чтобы узнать подробные характеристики бота нажмите - 1 \n" 
+ " Для того, чтобы перейти к заказу, нажмите - 2 \n" 
+ " Для того, чтобы ничего не произошло, ничего не нажимайте.\n\n" 
+ " - скидка действует 24 часа с момента получения сообщения.")
const prikrep_media = ("")
const group_for_get_users = ("73260851")

var str = prikrep_media
var n = str.lastIndexOf('/')
var result_media = str.substring(n + 1)

setInterval(function() {

  function randomInteger(min, max) {
    var rand_offset = min - 0.5 + Math.random() * (max - min + 1)
    rand_offset = Math.round(rand_offset);
	var url = encodeURI("https://api.vk.com/api.php?oauth=1&method=groups.getMembers&group_id="+group_for_get_users+"&fields=bdate,sex,online,can_write_private_message&offset="+rand_offset+"&count=50&v=5.67&access_token="+this_token);
	needle.get(url, function(err, resp){
	  if (!err && resp.statusCode == 200)
		var re = (resp.body['response']);
		var items = (re.items);

  //console.log(items[0].id + ' - отправил сообщение');
  		//console.log(items[0])
  		
var i = 0;


for (var i = 0; i < 50; i++) {
	//console.log(items[i])
if ( items[i].online == 1 && items[i].sex == 2 && items[i].bdate < "12.12.2000"){
	console.log(items[i])
	mesend(items[i].id, items[i].first_name)
	continue;
}
}

	function mesend(id, name){

		function newrand(len) {
		    var radid = "";
		    var symbols = "0123456789";
			    for (var i = 0; i < len; i++){
			        radid += symbols.charAt(Math.floor(Math.random() * symbols.length));     
			    }
			    gogo(radid)
		}

		newrand(32)
		function gogo(radid){

		var randMess1 = mess1[Math.floor(Math.random() * mess1.length)];

			var url = encodeURI("https://api.vk.com/api.php?oauth=1&method=messages.send&user_id="+id+"&random_id="+radid+"&message="+randMess1+" "+name+"&v=5.95&access_token="+this_token);
			needle.get(url, function(err, resp){
			  	if (!err && resp.statusCode == 200);
			 		console.log(id + " --------id");
			})

			setTimeout(function(){
				var url = encodeURI("https://api.vk.com/api.php?oauth=1&method=messages.send&user_id="+id+"&random_id="+radid+'1'+"&message="+mess2+"&v=5.95&access_token="+this_token);
				needle.get(url, function(err, resp){
				  	if (!err && resp.statusCode == 200);
				 		console.log(id + " --------id");
				})
			},1200)

		} 

	}
})
}
var roffset = ( randomInteger(500, 5000));

}, 30000);

