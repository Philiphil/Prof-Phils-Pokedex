function get_texte(string) {
    var prefixe = "en";
    var array = [];
    array['fr'] = [];
    array['en'] = [];
    array['en']['ppp'] = "Prof Philou's Pokedex";
    array['en']['main_compare'] = "Compare Pokemon";
    array['en']['main_add'] = "Add Pokemon";
    array['en']['main_exit'] = "Exit";
    array['en']['wrong_id'] = "Wrong Id";
    array['en']['return'] = "Return";
    array['en']['add_skip'] = "You can skip this";
    array['en']['comparer_mypkemon'] = "Compare my pokemon";
    //comparepv_tomoy
    array['en']['compare_tomoy'] = "Pokemon stats compared to average :";
    array['en']['comparepv_tomoy'] = "PV compared to average :";
    array['en']['compareatk_tomoy'] = "ATK compared to average :";
    array['en']['comparedef_tomoy'] = "DEF compared to average :";
    array['en']['compareats_tomoy'] = "ATK SPE compared to average :";
    array['en']['comparedes_tomoy'] = "DEF SPE compared to average :";
    array['en']['comparespd_tomoy'] = "SPD compared to average :";

    array['en']['comparer_pokemon'] = "Get Pokemon Stats";
    array['en']['getnormalstats'] = "Get moy Stats";
    array['en']["hardy"] = "hardy";
    array['en']["lonely"] = "lonely";
    array['en']["brave"] = "brave";
    array['en']["adamant"] = "adamant";
    array['en']["naughty"] = "naughty";
    array['en']["bold"] = "bold";
    array['en']["docile"] = "docile";
    array['en']["relaxed"] = "";
    array['en']["impish"] = "impish";
    array['en']["lax"] = "lax";
    array['en']["timid"] = "timid";
    array['en']["hasty"] = "hasty";
    array['en']["serious"] = "serious";
    array['en']["jolly"] = "jolly";
    array['en']["naive"] = "naive";
    array['en']["modest"] = "modest";
    array['en']["mild"] = "mild";
    array['en']["quiet"] = "quiet";
    array['en']["bashful"] = "bashful";
    array['en']["rash"] = "rash";
    array['en']["calm"] = "calm";
    array['en']["gentle"] = "gentle";
    array['en']["sassy"] = "sassy";
    array['en']["careful"] = "careful";
    array['en']["quirky"] = "quirky";

    array['en']["error_iv"] = "MAX IV PER STAT : 255; MAX IVS 510";
    array['en']["error_ev"] = "MAX EV PER STAT : 31; MAX EVS 186";
    array['en']["error_stats"] = "NOT ENOUGHT DATA TO COMPARE";




    return array[prefixe][string];
}