        if(params.klhgh1==undefined){
                params.klhgh1="";
        }
        if(params.klhgh2==undefined){
                params.klhgh2="";
        }
        if(params.klhgh3==undefined){
                params.klhgh3="";
        }
        if(params.klpsch1==undefined){
                params.klpsch1="";
        }
        if(params.klpsch2==undefined){
                params.klpsch2="";
        }
        if(params.klpsch3==undefined){
                params.klpsch3="";
        }
        document.getElementById("login").innerHTML=decodeURIComponent(params.login);
        document.getElementById("pass").innerHTML=decodeURIComponent(params.pass);
        document.getElementById("im").innerHTML=decodeURIComponent(params.im);
        document.getElementById("naz").innerHTML=decodeURIComponent(params.naz);
        document.getElementById("wiek").innerHTML=decodeURIComponent(params.wiek);
        document.getElementById("ur").innerHTML=decodeURIComponent(params.ur);
        document.getElementById("tel").innerHTML=decodeURI(params.tel);
        document.getElementById("email").innerHTML=decodeURIComponent(params.email);
        document.getElementById("woj").innerHTML=decodeURIComponent(params.woj);
        document.getElementById("mst").innerHTML=decodeURIComponent(params.mst);
        document.getElementById("ul").innerHTML=decodeURIComponent(params.ul);
        document.getElementById("pcode").innerHTML=decodeURIComponent(params.pcode)+" - "+decodeURIComponent(params.pcode2);
        document.getElementById("nr").innerHTML=decodeURIComponent(params.nr)+" - "+decodeURIComponent(params.nr2);
        document.getElementById("wls").innerHTML=decodeURIComponent(params.wls);
        document.getElementById("ocz").innerHTML=decodeURIComponent(params.ocz);
        document.getElementById("plc").innerHTML=decodeURIComponent(params.plc);
        document.getElementById("wzr").innerHTML=decodeURIComponent(params.wzr);
        document.getElementById("muz").innerHTML=decodeURIComponent(params.muz);
        document.getElementById("flm").innerHTML=decodeURIComponent(params.flm);
        document.getElementById("klhsch").innerHTML=decodeURIComponent(params.klhgh1)+" " + decodeURIComponent(params.klhgh2)+" "+decodeURIComponent(params.klhgh3);
        document.getElementById("spr").innerHTML=decodeURIComponent(params.spr);
        document.getElementById("dev").innerHTML=decodeURIComponent(params.dev);
        document.getElementById("oes").innerHTML=decodeURIComponent(params.oes);
        document.getElementById("prmsch").innerHTML=decodeURIComponent(params.prmsch);
        document.getElementById("klpsch").innerHTML=decodeURIComponent(params.klpsch1)+" "+decodeURIComponent(params.klpsch2)+" "+decodeURIComponent(params.klpsch3);
        document.getElementById("hghsch").innerHTML=decodeURIComponent(params.hghsch);