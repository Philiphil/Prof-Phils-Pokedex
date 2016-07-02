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
            break;
        case "fire":
            return 2;
            break;
        case "fighting":
            return 3;
            break;
        case "water":
            return 4;
            break;
        case "flying":
            return 5;
            break;
        case "grass":
            return 6;
            break;
        case "poison":
            return 7;
            break;
        case "electric":
            return 8;
            break;
        case "ground":
            return 9;
            break;
        case "psychic":
            return 10;
            break;
        case "rock":
            return 11;
            break;
        case "ice":
            return 12;
            break;
        case "bug":
            return 13;
            break;
        case "dragon":
            return 14;
            break;
        case "ghost":
            return 15;
            break;
        case "dark":
            return  16;
            break;
        case "steel":
            return 17;
            break;
        case "fairy":
            return  18;
            break;
        default:
            return 0;
            break;
    }
    
}

function pokemon_natureToInt(nature)
{
    switch (nature) {
        case "hardy":
            return 1;
            break;
        case "lonely":
            return 2;
            break;
        case "brave":
            return 3;
            break;
        case "adamant":
           return  4;
            break;
        case "naughty":
            return 5;
            break;
        case "bold":
            return 6;
            break;
        case "docile":
            return 7;
            break;
        case "relaxed":
            return 8;
            break;
        case "impish":
            return 9;
            break;
        case "lax":
            return 10;
            break;
        case "timid":
            return 11;
            break;
        case "hasty":
            return 12;
            break;
        case "serious":
            return 13;
            break;
        case "jolly":
            return 14;
            break;
        case "naive":
            return 15;
            break;
        case "modest":
            return 16;
            break;
        case "mild":
            return 17;
            break;
        case "quiet":
            return 18;
            break;
        case "bashful":
            return 19;
            break;
        case "rash":
            return 20;
            break;
        case "calm":
            return 21;
            break;
        case "gentle":
            return 22;
            break;
        case "sassy":
            return 23;
            break;
        case "careful":
            return 24;
            break;
        case "quirky":
            return 25;
            break;
        default:
            return 0;
            break;
    }
}

function pokemon_toString(pkmn)
{
    return pokemon.id + "-" +
            pokemon.level + "-" +
            pokemon.pv + "-" +
            pokemon.atk + "-" +
            pokemon.def + "-" +
            pokemon.ats + "-" +
            pokemon.des + "-" +
            pokemon.spd + "-" +
            pokemon.ivpv + "-" +
            pokemon.ivatk + "-" +
            pokemon.ivdef + "-" +
            pokemon.ivats + "-" +
            pokemon.ivdes + "-" +
            pokemon.ivspd + "-" +
            pokemon.evpv + "-" +
            pokemon.evatk + "-" +
            pokemon.evdef + "-" +
            pokemon.evats + "-" +
            pokemon.evdes + "-" +
            pokemon.evspd + "-" +
            pokemon.type1 + "-" +
            pokemon.type2 + "-" +
            pokemon.nature;
}