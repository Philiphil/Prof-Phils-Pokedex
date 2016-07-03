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
        if (!level || level < 0 ||level > 100) {
            $("input:text[name=level]").css('background-color', 'red');
            return;
        }
        if (!pv || pv < 0) {
            $("input:text[name=pv]").css('background-color', 'red');
            return;
        }
        if (!atk || atk < 0) {
            $("input:text[name=atk]").css('background-color', 'red');
            return;
        }
        if (!def || def < 0) {
            $("input:text[name=def]").css('background-color', 'red');
            return;
        }
        if (!ats || ats < 0) {
            $("input:text[name=ats]").css('background-color', 'red');
            return;
        }
        if (!des || des < 0) {
            $("input:text[name=des]").css('background-color', 'red');
            return;
        }
        if (!spd || spd < 0) {
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
        pokemon.ivspd = optionnel > 0 ? ivspd : 0;
        if (ivpv < 0 || ivpv > 255)
        {
            $("input:text[name=ivpv]").css('background-color', 'red');
            return;
        }
        if (ivatk < 0 || ivatk > 255) {
            $("input:text[name=ivatk]").css('background-color', 'red');
            return;
        }
        if (ivdef < 0 || ivdef > 255) {
            $("input:text[name=ivdef]").css('background-color', 'red');
            return;
        }
        if (ivats < 0 || ivats > 255) {
            $("input:text[name=ivats]").css('background-color', 'red');
            return;
        }
        if (ivdes < 0 || ivdes > 255) {
            $("input:text[name=ivdes]").css('background-color', 'red');
            return;
        }
        if (ivspd < 0 || ivspd > 255) {
            $("input:text[name=ivspd]").css('background-color', 'red');
            return;
        }
        if (optionnel > 510)
        {
            $("#error_iv").removeClass("invisible");
            return;
        }

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

        if (evpv < 0 || evpv > 31) {
            $("input:text[name=evpv]").css('background-color', 'red');
            return;
        }
        if (evatk < 0 || evatk > 31) {
            $("input:text[name=evatk]").css('background-color', 'red');
            return;
        }
        if (evdef < 0 || evdef > 31) {
            $("input:text[name=evdef]").css('background-color', 'red');
            return;
        }
        if (evats < 0 || evats > 31) {
            $("input:text[name=evats]").css('background-color', 'red');
            return;
        }
        if (evdes < 0 || evdes > 31) {
            $("input:text[name=evdes]").css('background-color', 'red');
            return;
        }
        if (evspd < 0 || evspd > 31) {
            $("input:text[name=evspd]").css('background-color', 'red');
            return;
        }
        if (xxx > 186) {
            $("#error_ev").removeClass("invisible");
            return;
        }

        $("#ajouter_3").addClass("invisible");
        $("#ajouter_4").removeClass("invisible");
    }
    if (etape == 4) {
        var nature = $("input:text[name=nature]").val();
        pokemon.nature = nature != "" ? nature : 0;
        pokemon.type1 = pokemon_typeToInt(pokemon.type1);
        pokemon.type2 = pokemon_typeToInt(pokemon.type2);
        pokemon.nature = pokemon_natureToInt(pokemon.nature);
        App.addPokemon(pokemon_toString(pokemon));
         document.location.href = "index.html"

    }
    if (etape == 5) {
        var nature = $("input:text[name=nature]").val();
        pokemon.nature = nature != "" ? nature : 0;
        pokemon.type1 = pokemon_typeToInt(pokemon.type1);
        pokemon.type2 = pokemon_typeToInt(pokemon.type2);
        pokemon.nature = pokemon_natureToInt(pokemon.nature);
        var result = App.getComparable(pokemon_toString(pokemon));
        $("#ajouter_4").addClass("invisible");
        $("#ajouter_5").removeClass("invisible");
        if (result.length == 0 || (result.lenght == 1 && result[0] ==""))
        {
            $("#ajouter_5").html("");
            $("#ajouter_5").html($("#ajouter_5").html() + "<a href='index.html'><input type='button' value='" + get_texte("return") + "'></a>");
            $("#ajouter_5").html($("#ajouter_5").html() + '<p>'+get_texte("error_stats")+'</p>');          
            return;
        }
        
        
        var _tmp = "";
        var pkmns = [];
        var _ctr = 0;

        result.forEach(function (foo) {
            if (foo != "") {
                pkmns[_ctr] = pokemonFromString(foo);
                _ctr++;
            }
        });
        _ctr = 0;
        var _moy = 0;
        pkmns.forEach(function (foo) {
            _moy += parseInt(pokemon_getGrodex(foo));
        });
        _moy =Math.ceil( _moy / pkmns.length);
        _moy = pokemon_getGrodex(pokemon) - _moy;
        _tmp = _moy > 0 ? "+" : "";
        $("#compare_tomoy").html(_tmp + _moy);
        
        _moy = 0;
        pkmns.forEach(function (foo) {
            _moy += foo.pv
        });
        _moy = Math.ceil(_moy / pkmns.length);
        _moy = pokemon.pv - _moy;
        _tmp = _moy > 0 ? "+" : "";
        $("#comparepv_tomoy").html(_tmp + _moy);

        _moy = 0;
        pkmns.forEach(function (foo) {
            _moy += foo.atk
        });
        _moy = Math.ceil(_moy / pkmns.length);
        _moy = pokemon.atk - _moy;
        _tmp = _moy > 0 ? "+" : "";
        $("#compareatk_tomoy").html(_tmp + _moy);

        _moy = 0;
        pkmns.forEach(function (foo) {
            _moy += foo.def
        });
        _moy = Math.ceil(_moy / pkmns.length);
        _moy = pokemon.def - _moy;
        _tmp = _moy > 0 ? "+" : "";
        $("#comparedef_tomoy").html(_tmp + _moy);

        _moy = 0;
        pkmns.forEach(function (foo) {
            _moy += foo.ats
        });
        _moy = Math.ceil(_moy / pkmns.length);
        _moy = pokemon.ats - _moy;
        _tmp = _moy > 0 ? "+" : "";
        $("#compareats_tomoy").html(_tmp + _moy);

        _moy = 0;
        pkmns.forEach(function (foo) {
            _moy += foo.des
        });
        _moy = Math.ceil(_moy / pkmns.length);
        _moy = pokemon.des - _moy;
        _tmp = _moy > 0 ? "+" : "";
        $("#comparedes_tomoy").html(_tmp + _moy);

        _moy = 0;
        pkmns.forEach(function (foo) {
            _moy += foo.spd
        });
        _moy = Math.ceil(_moy / pkmns.length);
        _moy = pokemon.spd - _moy;
        _tmp = _moy > 0 ? "+" : "";
        $("#comparespd_tomoy").html(_tmp + _moy);
        
        $("#ajouter_5").addClass("little");        
    }
    if (etape == 6) {
        $("#ajouter_5").addClass("invisible");
        $("#ajouter_6").removeClass("invisible");

/*
        var lld = pokemon.evpv + pokemon.evatk + pokemon.evdef + pokemon.evats + pokemon.evdes + pokemon.evspd + pokemon.ivpv + pokemon.ivatk + pokemon.ivdef + pokemon.ivats + pokemon.ivdes + pokemon.ivspd;
        if (lld > 0) {
            var ttl_c = (510 + 186) - lld;
            if (ttl_c > 0) {
                var cent = ceil((ttl_c * 100) / parseInt((pokemon_getGrodex(pokemon)) + lld));
                $("#more_tts").removeClass("invisible");
                $("#more_tt").html(cent + "%");
            }
        }

        */


        var ivs = pokemon.ivpv + pokemon.ivatk + pokemon.ivdef + pokemon.ivats + pokemon.ivdes + pokemon.ivspd;
        if(ivs > 0)
        {
            var ivs_c = 510 - ivs;
            if (ivs_c > 0)
            {
                $("#more_ivs").removeClass("invisible");
                $("#more_iv").html(ivs_c);
            }

        }
        var evs = pokemon.evpv + pokemon.evatk + pokemon.evdef + pokemon.evats + pokemon.evdes + pokemon.evspd;
        if (evs > 0) {
            var evs_c = 186 - evs;
            if (evs_c > 0) {
                $("#more_evs").removeClass("invisible");
                $("#more_ev").html(evs_c);
            }

        }



    }
}

