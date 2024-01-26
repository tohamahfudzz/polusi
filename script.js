var a=document.getElementById('main');
var tombol=document.getElementById('tombol');
var table=document.querySelector('#table');

function cari(){
	
	var info=a.querySelector('p:nth-child(1)');
	var info2=a.querySelector('p:nth-child(2)');

	if(info){
	
	a.removeChild(info);
	a.removeChild(info2);
}
var form=document.pencarian.city.value;

var request=new XMLHttpRequest();

request.open('GET',`http://api.waqi.info/feed/${form}/?token=28da87eeb04da304eceb8c1cb82431ca5cbe5bc2`,true);
request.onload=function()
{
if (request.status==200) {
	var data=JSON.parse(request.responseText);
	var aqi=data.data.aqi;
	var kota=data.data.city.name;
	var pm25=data.data.forecast.daily.pm25;
	console.log(pm25);
	
const text=document.createTextNode(`aqi=${aqi}`);
const text2=document.createTextNode(`Kota=${kota}`);
var b=document.createElement('p');
var c=document.createElement('p');
c.appendChild(text2);

b.appendChild(text);
a.appendChild(b);
a.appendChild(c);

	
	for(var i=0;i<pm25.length;i++)
	{
		var tr=document.createElement('tr');   //buat tr 

		var day=document.createTextNode(pm25[i].day);
	var maksimal=document.createTextNode(pm25[i].max);
	var minimal=document.createTextNode(pm25[i].min);
	var rata=document.createTextNode(pm25[i].avg);

	/*var day1=document.createElement('td');
	var maksimal1=document.createElement('td');*/

		for(var k=0;k<4;k++)
		{
			var elemen=document.createElement('td');
			if(k==0){
				elemen.appendChild(day);


			}
			if(k==1)
			{
				elemen.appendChild(maksimal);
			}
			if(k==2){
				elemen.appendChild(minimal);
			}
			if(k==3)
			{
				elemen.appendChild(rata);
			}
			
			tr.appendChild(elemen);
			table.appendChild(tr);
		


		}

		/*day1.appendChild(day);
		//td.appendChild(day1);
		maksimal1.appendChild(maksimal);
		td.appendChild(day1);
		td.appendChild(maksimal1);
			console.log(pm25[i].day);
			return;*/
	}

	

	
}//tutup request true
else if(request.status!=200){
	alert("masukkan nama kota yang benar dan tersedia :)");
}
};
request.send();
}
tombol.onclick=cari;
/*
function cari(){


var link=`http://api.waqi.info/feed/${form}/?token=28da87eeb04da304eceb8c1cb82431ca5cbe5bc2`;


alert(link);
}

*/


