function pokemonFromString(string) {
    var pkmn = {};
    var foo = string.split("-");
    pkmn.id = parseInt(foo[0]);
    pkmn.level = parseInt(foo[1]);
    pkmn.pv = parseInt(foo[2]);
    pkmn.atk = parseInt(foo[3]);
    pkmn.def = parseInt(foo[4]);
    pkmn.ats = parseInt(foo[5]);
    pkmn.des = parseInt(foo[6]);
    pkmn.spd = parseInt(foo[7]);
    pkmn.ivpv = parseInt(foo[8]);
    pkmn.ivatk = parseInt(foo[9]);
    pkmn.ivdef = parseInt(foo[10]);
    pkmn.ivats = parseInt(foo[11]);
    pkmn.ivdes = parseInt(foo[12]);
    pkmn.ivspd = parseInt(foo[13]);
    pkmn.evpv = parseInt(foo[14]);
    pkmn.evatk = parseInt(foo[15]);
    pkmn.evdef = parseInt(foo[16]);
    pkmn.evats = parseInt(foo[17]);
    pkmn.evdes = parseInt(foo[18]);
    pkmn.evspd = parseInt(foo[19]);
    pkmn.type1 = parseInt(foo[20]);
    pkmn.type2 = parseInt(foo[21]);
    pkmn.nature = parseInt(foo[22]);
    return pkmn;
}

function pokemon_getGrodex(pkmn) {
    return pkmn.pv + pkmn.atk + pkmn.def + pkmn.ats + pkmn.des + pkmn.spd;
}

function pokemon_typeToInt(nature) {
    switch (nature) {
        case "normal":
            return 1;
        case "fire":
            return 2;
        case "fighting":
            return 3;
        case "water":
            return 4;
        case "flying":
            return 5;
        case "grass":
            return 6;
        case "poison":
            return 7;
        case "electric":
            return 8;
        case "ground":
            return 9;
        case "psychic":
            return 10;
        case "rock":
            return 11;
        case "ice":
            return 12;
        case "bug":
            return 13;
        case "dragon":
            return 14;
        case "ghost":
            return 15;
        case "dark":
            return  16;
        case "steel":
            return 17;
        case "fairy":
            return  18;
        default:
            return 0;
    }
    
}

function pokemon_natureToInt(nature)
{
    switch (nature) {
        case "hardy":
            return 1;
        case "lonely":
            return 2;
        case "brave":
            return 3;
        case "adamant":
           return  4;
        case "naughty":
            return 5;
        case "bold":
            return 6;
        case "docile":
            return 7;
        case "relaxed":
            return 8;
        case "impish":
            return 9;
        case "lax":
            return 10;
        case "timid":
            return 11;
        case "hasty":
            return 12;
        case "serious":
            return 13;
        case "jolly":
            return 14;
        case "naive":
            return 15;
        case "modest":
            return 16;
        case "mild":
            return 17;
        case "quiet":
            return 18;
        case "bashful":
            return 19;
        case "rash":
            return 20;
        case "calm":
            return 21;
        case "gentle":
            return 22;
        case "sassy":
            return 23;
        case "careful":
            return 24;
        case "quirky":
            return 25;
        default:
            return 0;
    }
}

function pokemon_toString(pkmn)
{
    return pkmn.id + "-" +
            pkmn.level + "-" +
            pkmn.pv + "-" +
            pkmn.atk + "-" +
            pkmn.def + "-" +
            pkmn.ats + "-" +
            pkmn.des + "-" +
            pkmn.spd + "-" +
            pkmn.ivpv + "-" +
            pkmn.ivatk + "-" +
            pkmn.ivdef + "-" +
            pkmn.ivats + "-" +
            pkmn.ivdes + "-" +
            pkmn.ivspd + "-" +
            pkmn.evpv + "-" +
            pkmn.evatk + "-" +
            pkmn.evdef + "-" +
            pkmn.evats + "-" +
            pkmn.evdes + "-" +
            pkmn.evspd + "-" +
            pkmn.type1 + "-" +
            pkmn.type2 + "-" +
            pkmn.nature;
}

function pokemon_hasIvs(pkmn)
{
    return (pkmn.ivatk + pkmn.ivdef + pkmn.ivpv + pkmn.ivats + pkmn.ivdes + pkmn.ivspd) > 0;
}

function pokemon_hasEvs(pkmn) {
    return (pkmn.evatk + pkmn.evdef + pkmn.evpv + pkmn.evats + pkmn.evdes + pkmn.evspd) > 0;
}