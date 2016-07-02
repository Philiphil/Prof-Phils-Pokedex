function get_texte(string)
{
	var prefixe = "en";
	var array =[];
	array['fr']=[];
	array['en'] = [];
	array['en']['ppp'] = "Prof Philou's Pokedex";
	array['en']['main_compare']="Compare Pokemon";
	array['en']['main_add']="Add Pokemon";
	array['en']['main_exit'] = "Exit";
	array['en']['wrong_id'] = "Wrong Id";
	array['en']['add_skip'] = "You can skip this";


	array['en']["hardy"]= "hardy";
	array['en']["lonely"]=        "lonely";
	array['en']["brave"]= "brave";
	array['en']["adamant"]=       "adamant";
	array['en']["naughty"]=       "naughty";
	array['en']["bold"]=  "bold";
	array['en']["docile"]=        "docile";
	array['en']["relaxed"]=       "relaxed";
	array['en']["impish"]=        "impish";
	array['en']["lax"]=   "lax";
	array['en']["timid"]= "timid";
	array['en']["hasty"]= "hasty";
	array['en']["serious"]=       "serious";
	array['en']["jolly"]= "jolly";
	array['en']["naive"]= "naive";
	array['en']["modest"]=        "modest";
	array['en']["mild"]=  "mild";
	array['en']["quiet"]= "quiet";
	array['en']["bashful"]=       "bashful";
	array['en']["rash"]=  "rash";
	array['en']["calm"]=  "calm";
	array['en']["gentle"]= "gentle";
	array['en']["sassy"]= "sassy";
	array['en']["careful"]=       "careful";
	array['en']["quirky"]=        "quirk";





	return array[prefixe][string];
}




/**/
var pokemon = {};

function check_id()
{
	var x = document.getElementById("pkmn_id");
	var y = parseInt(x.value);
	if (y < 0 || y > 386 || x.value == "")
	{
	    App.popUp(get_texte("wrong_id"));
	    return;
	}
	pokemon.id = y;
	$.get("http://pokeapi.co/api/v2/pokemon/" + y+"/", function (data, status) {
	    pokemon.type1 = data.types[0]["type"].name;
	    pokemon.type2 = data.types.length > 1  ? data.types[1]["type"].name : 0;

	});
	$.get("http://pokeapi.co/api/v2/pokemon-form/" + y + "/", function (data, status) {
	    var tmp = data.sprites["front_default"];
	    var img = document.createElement("img");
	    img.src = tmp;
	    var tmipt = document.getElementById("ajax");
	    tmipt.innerHTML = "";
	    tmipt.appendChild(img);
	});
}

function ok(etape)
{
    if (etape == 1) {
        var id = parseInt($("input:text[name=id]").val());
        var pv = parseInt($("input:text[name=pv]").val());
        var level = parseInt($("input:text[name=level]").val());
        var atk = parseInt($("input:text[name=atk]").val());
        var def = parseInt($("input:text[name=def]").val());
        var ats = parseInt($("input:text[name=ats]").val());
        var des = parseInt($("input:text[name=des]").val());
        var spd = parseInt($("input:text[name=spd]").val());
        if (!id) {
            $("input:text[name=id]").css('background-color', 'red');
            return;
        }
        if (!level) {
            $("input:text[name=level]").css('background-color', 'red');
            return;
        }
        if (!pv) {
            $("input:text[name=pv]").css('background-color', 'red');
            return;
        }
        if (!atk) {
            $("input:text[name=atk]").css('background-color', 'red');
            return;
        }
        if (!def) {
            $("input:text[name=def]").css('background-color', 'red');
            return;
        }
        if (!ats) {
            $("input:text[name=ats]").css('background-color', 'red');
            return;
        }
        if (!des) {
            $("input:text[name=des]").css('background-color', 'red');
            return;
        }
        if (!spd) {
            $("input:text[name=spd]").css('background-color', 'red');
            return;
        }
        pokemon.pv = pv;
        pokemon.level = level;
        pokemon.atk = atk;
        pokemon.def = def;
        pokemon.ats = ats;
        pokemon.des = des;
        pokemon.spd = spd;
        $("#ajouter_1").addClass("invisible");
        $("#ajouter_2").removeClass("invisible");

    }
    if (etape == 2) {
        var ivpv = parseInt($("input:text[name=ivpv]").val());
        var ivatk = parseInt($("input:text[name=ivatk]").val());
        var ivdef = parseInt($("input:text[name=ivdef]").val());
        var ivats = parseInt($("input:text[name=ivats]").val());
        var ivdes = parseInt($("input:text[name=ivdes]").val());
        var ivspd = parseInt($("input:text[name=ivspd]").val());
        var optionnel = ivpv + ivatk + ivdef + ivats + ivdes + ivspd;
        pokemon.ivpv = optionnel > 0 ? ivpv : 0;
        pokemon.ivatk = optionnel> 0 ? ivatk : 0;
        pokemon.ivdef = optionnel> 0 ? ivdef : 0;
        pokemon.ivats = optionnel> 0 ? ivats : 0;
        pokemon.ivdes = optionnel> 0 ? ivdes : 0;
        pokemon.ivspd = optionnel> 0 ? ivspd : 0;
        $("#ajouter_2").addClass("invisible");
        $("#ajouter_3").removeClass("invisible");
    }

    if (etape == 3) {
        var evpv = parseInt($("input:text[name=evpv]").val());
        var evatk = parseInt($("input:text[name=evatk]").val());
        var evdef = parseInt($("input:text[name=evdef]").val());
        var evats = parseInt($("input:text[name=evats]").val());
        var evdes = parseInt($("input:text[name=evdes]").val());
        var evspd = parseInt($("input:text[name=evspd]").val());
        var xxx = evpv + evatk + evdef + evats + evdes + evspd;
        pokemon.evpv = xxx > 0 ? evpv : 0;
        pokemon.evatk = xxx > 0 ? evatk : 0;
        pokemon.evdef = xxx > 0 ? evdef : 0;
        pokemon.evats = xxx > 0 ? evats : 0;
        pokemon.evdes = xxx > 0 ? evdes : 0;
        pokemon.evspd = xxx > 0 ? evspd : 0;
        $("#ajouter_3").addClass("invisible");
        $("#ajouter_4").removeClass("invisible");
    }

    if (etape == 4) {
        var nature = $("input:text[name=nature]").val();
        pokemon.nature = nature != "" ? nature : 0;
        switch(pokemon.type1)
        {
            case "normal" :
                pokemon.type1 = 1;
                break;
            case "fire":
                pokemon.type1 = 2;
                break;
            case "fighting":
                pokemon.type1 = 3;
                break;
            case "water":
                pokemon.type1 = 4;
                break;
            case "flying":
                pokemon.type1 = 5;
                break;
            case "grass":
                pokemon.type1 = 6;
                break;
            case "poison":
                pokemon.type1 = 7;
                break;
            case "electric":
                pokemon.type1 = 8;
                break;
            case "ground":
                pokemon.type1 = 9;
                break;
            case "psychic":
                pokemon.type1 = 10;
                break;
            case "rock":
                pokemon.type1 = 11;
                break;
            case "ice":
                pokemon.type1 = 12;
                break;
            case "bug":
                pokemon.type1 = 13;
                break;
            case "dragon":
                pokemon.type1 = 14;
                break;
            case "ghost":
                pokemon.type1 = 15;
                break;
            case "dark":
                pokemon.type1 = 16;
                break;
            case "steel":
                pokemon.type1 = 17;
                break;
            case "fairy":
                pokemon.type1 = 18;
                break;
        }
           switch (pokemon.type2) {
                case "normal":
                    pokemon.type2 = 1;
                    break;
                case "fire":
                    pokemon.type2 = 2;
                    break;
                case "fighting":
                    pokemon.type2 = 3;
                    break;
                case "water":
                    pokemon.type2 = 4;
                    break;
                case "flying":
                    pokemon.type2= 5;
                    break;
                case "grass":
                    pokemon.type2 = 6;
                    break;
                case "poison":
                    pokemon.type2 = 7;
                    break;
                case "electric":
                    pokemon.type2 = 8;
                    break;
                case "ground":
                    pokemon.type2 = 9;
                    break;
                case "psychic":
                    pokemon.type2 = 10;
                    break;
                case "rock":
                    pokemon.type2 = 11;
                    break;
                case "ice":
                    pokemon.type2 = 12;
                    break;
                case "bug":
                    pokemon.type2 = 13;
                    break;
                case "dragon":
                    pokemon.type2 = 14;
                    break;
                case "ghost":
                    pokemon.type2 = 15;
                    break;
                case "dark":
                    pokemon.type2 = 16;
                    break;
                case "steel":
                    pokemon.type2 = 17;
                    break;
                case "fairy":
                    pokemon.type2 = 18;
                    break;
            }
        
           switch (pokemon.nature) {
               case "hardy":
                   pokemon.nature = 1;
                   break;
               case "lonely":
                   pokemon.nature = 2;
                   break;
               case "brave":
                   pokemon.nature = 3;
                   break;
               case "adamant":
                   pokemon.nature = 4;
                   break;
               case "naughty":
                   pokemon.nature = 5;
                   break;
               case "bold":
                   pokemon.nature = 6;
                   break;
               case "docile":
                   pokemon.nature = 7;
                   break;
               case "relaxed":
                   pokemon.nature = 8;
                   break;
               case "impish":
                   pokemon.nature = 9;
                   break;
               case "lax":
                   pokemon.nature = 10;
                   break;
               case "timid":
                   pokemon.nature = 11;
                   break;
               case "hasty":
                   pokemon.nature = 12;
                   break;
               case "serious":
                   pokemon.nature = 13;
                   break;
               case "jolly":
                   pokemon.nature = 14;
                   break;
               case "naive":
                   pokemon.nature = 15;
                   break;
               case "modest":
                   pokemon.nature = 16;
                   break;
               case "mild":
                   pokemon.nature = 17;
                   break;
               case "quiet":
                   pokemon.nature = 18;
                   break;
               case "bashful":
                   pokemon.nature = 19;
                   break;
               case "rash":
                   pokemon.nature = 20;
                   break;
               case "calm":
                   pokemon.nature = 21;
                   break;
               case "gentle":
                   pokemon.nature = 22;
                   break;
               case "sassy":
                   pokemon.nature = 23;
                   break;
               case "careful":
                   pokemon.nature = 24;
                   break;
               case "quirky":
                   pokemon.nature = 25;
                   break;
               default:
                   pokemon.nature = 0;
                   break;
           }

           App.addPokemon(
            pokemon.id+"-"+
            pokemon.level+"-"+
            pokemon.pv+"-"+
            pokemon.atk+"-"+
            pokemon.def+"-"+
            pokemon.ats+"-"+
            pokemon.des+"-"+
            pokemon.spd+"-"+
            pokemon.ivpv+"-"+
            pokemon.ivatk+"-"+
            pokemon.ivdef+"-"+
            pokemon.ivats+"-"+
            pokemon.ivdes+"-"+
            pokemon.ivspd+"-"+
            pokemon.evpv+"-"+
            pokemon.evatk+"-"+
            pokemon.evdef+"-"+
            pokemon.evats+"-"+
            pokemon.evdes+"-"+
            pokemon.evspd+"-"+
            pokemon.type1+"-"+
           pokemon.type2+"-"+
            pokemon.nature
            )
           document.location.href = "index.html"

    }
}
