//var list = document.getElementById("list").getElementsByTagName("li");
var list = document.getElementsByClassName("button");
for (var i = 0; i < list.length; i++){
    list[i].addEventListener("click", buttonClick);
}
var text = new Array(list.length);
text[0] = "Model:	Unisex\nCadru:	Hardtail\nTip:	Cross Country XC\nTransmisie:	3x8 viteze\nSistem franare:	Disc -mecanic\nMaterial cadru:	Aluminiu\nAngrenaj (Foi):	Shimano FC-TY501, 42x34x24T, 170mm\nAnvelopa fata:	Schwalbe Smart Sam, Active, 2.1\nAnvelopa spate:	Schwalbe Smart Sam, Active, 2.1\nButuc fata:	CUBE Alloy Light, 6-Bolt\nButuc spate:	CUBE Alloy Light, 6-Bolt\nCadru:	Aluminium Lite, AMF, Internal Cable Routing, Easy Mount Kickstand Ready\nColier tija sa:	CUBE Varioclose, 31.8mm\nCuvete:	CUBE No.10 Semi-Integrated\nFrane:	Tektro MD-280, Mech. Disc Brake\nFurca:	SR Suntour XCE, 100mm\nGhidon:	CUBE Rise Trail Bar, 680mm\nJante:	CUBE SD20, 32H, Disc\nLant:	KMC Z7\nManete frana:	Tektro MD-280, Mech. Disc Brake\nManete schimbator:	Shimano ST-TX800, EZ Fire Plus\nMansoane:	CUBE Performance Grip\nPedale:	CUBE PP MTB\nPinioane:	Shimano CS-HG200, 12-32T\nPipa:	CUBE Performance Stem, 31.8mm\nSa:	CUBE Active 1.1\nSchimbator foi:	Shimano FD-TY700-TS6, Downswing, 31.8mm Clamp\nSchimbator pinioane:	Shimano RD-TX800, 8-Speed\nTija sa:	CUBE Performance Post, 27.2mm";
text[1] = "Model:	Unisex\nCadru:	Hardtail\nTip:	Cross Country XC\nTransmisie:	3x9 viteze\nSistem franare:	Disc -hidraulic\nMaterial cadru:	Aluminiu\nAngrenaj (Foi):	Shimano FC-M2000, 40x30x22T, 175mm\nAnvelopa fata:	Schwalbe Smart Sam, Active, 2.25\nAnvelopa spate:	Schwalbe Smart Sam, Active, 2.25\nButuc fata:	Shimano HB-TX505, QR, Centerlock\nButuc spate:	Shimano FH-TX505, QR, Centerlock\nCadru:	Aluminium Lite, AMF, Internal Cable Routing, Easy Mount Kickstand Ready\nColier tija sa:	CUBE Varioclose, 31.8mm\nCuvete:	FSA No.10, Semi-Integrated\nFrane:	Shimano BR-MT200, Hydr. Disc Brake (160/160)\nFurca:	RockShox XC 30 TK Coil, 100mm, Remote Lockout\nGhidon:	CUBE Rise Trail Bar, 680mm\nJante:	CUBE ZX20, 32H, Disc\nLant:	Shimano CN-HG53\nManete frana:	Shimano BR-MT200, Hydr. Disc Brake (160/160)\nManete schimbator:	Shimano SL-M2000, Rapidfire-Plus\nMansoane:	CUBE Performance Grip\nPedale:	CUBE PP MTB\nPinioane:	Shimano CS-HG400, 12-36T\nPipa:	CUBE Performance Stem Pro, 31.8mm\nSa:	CUBE Active 1.1\nSchimbator foi:	Shimano FD-M4000, Downswing, 31.8mm Clamp\nSchimbator pinioane:	Shimano XT RD-M772, Shadow, 9-Speed\nTija sa:	CUBE Performance Post, 27.2mm";
text[2] = "Model:	Unisex\nCadru:	Hardtail\nTip:	Cross Country XC\nTransmisie:	3x10 viteze\nSistem franare:	Disc -hidraulic\nMaterial cadru:	Aluminiu\nAngrenaj (Foi):	Shimano FC-MT500, 40x30x22T, 175mm\nAnvelopa fata:	Schwalbe Smart Sam, Active, 2.25\nAnvelopa spate:	Schwalbe Smart Sam, Active, 2.25\nButuc fata:	Shimano HB-M3050, Centerlock\nButuc spate:	Shimano FH-M3050, Centerlock\nCadru:	Aluminium Lite, AMF, Internal Cable Routing, Easy Mount Kickstand Ready\nColier tija sa:	CUBE Varioclose, 31.8mm\nCuvete:	FSA No.10, Semi-Integrated\nFrane:	Shimano BR-MT200, Hydr. Disc Brake (160/160)\nFurca:	RockShox XC 30 TK Coil, 100mm, Remote Lockout\nGhidon:	CUBE Rise Trail Bar, 680mm\nJante:	CUBE ZX20, 32H, Disc\nLant:	Shimano CN-HG54\nManete frana:	Shimano BR-MT200, Hydr. Disc Brake (160/160)\nManete schimbator:	Shimano Deore SL-M6000, Rapidfire-Plus\nMansoane:	CUBE Performance Grip\nPedale:	CUBE PP MTB\nPinioane:	Shimano CS-HG50, 11-36T\nPipa:	CUBE Performance Stem Pro, 31.8mm\nSa:	CUBE Active 1.1\nSchimbator foi:	Shimano Deore FD-M611, Downswing, 31.8mm Clamp\nSchimbator pinioane:	Shimano XT RD-M781-DSGSL, Shadow, 10-Speed\nTija sa:	CUBE Performance Post, 27.2mm";
var image = new Array(list.length);
image[0] = "CUBE AIM.jpg";
image[1] = "CUBE ANALOG.jpg";
image[2] = "CUBE ATTENTION.jpg";
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