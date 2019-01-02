//var list = document.getElementById("list").getElementsByTagName("li");
var list = document.getElementsByClassName("button");
for (var i = 0; i < list.length; i++){
    list[i].addEventListener("click", buttonClick);
}
var text = new Array(list.length);
text[0] = "Model:	Unisex\nCadru:	Hardtail\nTip:	Cross Country XC\nTransmisie:	3x9 viteze\nSistem franare:	Disc -hidraulic\nMaterial cadru:	Aluminiu\nAngrenaj (Foi):	Shimano Acera M3000\nAnvelopa fata:	Continental Conti X-King\nAnvelopa spate:	Continental Conti X-King\nButuc fata:	F- Shimano TX505 R- Shimano TX5058\nButuc pedalier:	VP-BC73\nButuc spate:	F- Shimano TX505 R- Shimano TX5058\nCadru:	Aluminiu\nCuvete:	VP A42E\nFrane:	Shimano M315\nFurca:	Rock Shox FS XC30 TK29 Q CL T:100\nGhidon:	HL Mtb 320 BT\nJante:	Crosser X11 32H\nLant:	KMC X9\nManete frana:	Shimano M315\nManete schimbator:	Shimano Altus M370\nSa:	Selle Royal SR-8014URO\nSchimbator foi:	Shimano Acera M3000\nTija sa:	HL SP-C255";
text[1] = "Model:	Unisex\nCadru:	Hardtail\nTip:	Cross Country XC\nTransmisie:	3x10 viteze\nSistem franare:	Disc -hidraulic\nMaterial cadru:	Aluminiu\nAngrenaj (Foi):	Shimano MT 500 EB\nAnvelopa fata:	Schwalbe Racing Ralph\nAnvelopa spate:	Schwalbe Racing Ralph\nButuc fata:	F- Shimano TX505 R- Shimano TX5058\nButuc pedalier:	Inclus in bratul pedalier\nButuc spate:	F- Shimano TX505 R- Shimano TX5058\nCadru:	Aluminiu\nCuvete:	VP A41AC\nFrane:	Shimano M365\nFurca:	Rock Shox FS 30 TK R Q SA T:100 DFBS DSC AL\nGhidon:	Kalloy HB-RB12 B.B 31.8 W 680 Rise 15 Bend 5\nJante:	Crosser X11 32H\nLant:	KMC X10\nManete frana:	Shimano M365\nManete schimbator:	Shimano Deore M610\nSa:	Selle Royal SR-8014URO\nSchimbator foi:	Shimano Deore M610\nTija sa:	Kalloy SP-368";
var image = new Array(list.length);
image[0] = "Cross Xtreme Eco.jpg";
image[1] = "Cross Euphoria.jpg";
var div,img,index;

function buttonClick(e){
    e.preventDefault();
    var target = e.target;
    var ok = 0;
    for (var i = 0; i < list.length; i++) {
        if(list[i].style.display == "none"){
            list[i].style.display = "block";
            ok = 1;
        }
    }
    if(ok == 1){
        document.getElementById("list").children[index].removeChild(details);
    }
    else{
        for (var i = 0; i < list.length; i++) {
            if(list[i].textContent == target.textContent){
                index = i;
                break;
            }
        }
        for (var i = 0; i < list.length; i++) {
            if(i != index){
                list[i].style.display = "none";
            }
        }
        details = document.createElement("aside");
        details.className = "details";

        div = document.createElement("div");
        div.appendChild(document.createTextNode(text[index]));
        div.className = "specs";
        details.appendChild(div);

        img = document.createElement("img");
        img.src = image[index];
        img.className = "picture";
        details.appendChild(img);

        document.getElementById("list").children[index].appendChild(details);
    }
}