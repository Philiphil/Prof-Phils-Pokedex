#include "nature.h"
#include "type.h"
#include "pokemon.h"
#include "db.h"
#include "json.hpp"
#include <string>
#include <vector>
#include <Awesomium/WebCore.h>
#include <Awesomium/STLHelpers.h>
#include <Awesomium\DataPak.h>
#include <string>
#include "pokemon.h"

using namespace std;

vector<pokemon> compareToOthers(pokemon pkmn)
{
	nlohmann::json retour;
	vector<pokemon> comparables = vector<pokemon>();
	for (int i = 0; i < pokemon::pokedex.size(); i++)
	{
		int foo = pokemon::pokedex.at(i).level - pkmn.level;
		if (foo > -6 && foo < 6)
		{
			comparables.push_back(pokemon::pokedex.at(i));
		}
	}
	if (comparables.size() > 0)
	{
		for (int i = 0; i < comparables.size(); i++)
		{
			for (int j = 0; j < comparables.size(); j++)
			{
				if (comparables.at(i).id == comparables.at(j).id && j != i)
				{
					comparables.at(i).atk += comparables.at(j).atk;
					comparables.at(i).pv += comparables.at(j).pv;
					comparables.at(i).def += comparables.at(j).def;
					comparables.at(i).ats += comparables.at(j).ats;
					comparables.at(i).des += comparables.at(j).des;
					comparables.at(i).spd += comparables.at(j).spd;
					comparables.at(i).atk = comparables.at(i).atk / 2;
					comparables.at(i).pv = comparables.at(i).pv / 2;
					comparables.at(i).def = comparables.at(i).def / 2;
					comparables.at(i).ats = comparables.at(i).ats / 2;
					comparables.at(i).des = comparables.at(i).des / 2;
					comparables.at(i).spd = comparables.at(i).spd / 2;
					comparables.erase(comparables.begin() + j);
				}
			}
		}
	}
	return comparables;
}