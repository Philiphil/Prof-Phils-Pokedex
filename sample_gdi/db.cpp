#pragma once
#include <string>
#include <fstream>
#include <iostream>
#include "pokemon.h"
#include <sstream>
#include <vector>
#include "pokemon.h"
#include <stdlib.h>
#include <windows.h>
#include "type.h"

using namespace std;

string dbbfr;

void pokemon_write(pokemon pkmn)
{
	ofstream db("pokedex.db", ios::app);
	db << pkmn.toString() << endl;
	db.close();
	pokemon::pokedex.push_back(pkmn);
}


void dbinit()
{
	ifstream file("pokedex.db", ios::in);
	string foo;
	int cpu = 0;
	while (getline(file, foo))
	{
		cpu++;
	}
	file.close();
	file = ifstream("pokedex.db", ios::in);
	int x = 0;
	string* lignesdufichier = new string[cpu];
	while (getline(file, foo)) {
		lignesdufichier[x] = foo;
		x++;
	}
	pokemon* pokemons = new pokemon[cpu];
	pokemon::pokedex = vector<pokemon>();
	for (int i = 0; i < cpu; i++)
	{
		pokemons[i] = pokemon();
		pokemons[i].fromString(lignesdufichier[i]);
		pokemon::pokedex.push_back(pokemons[i]);
	}
	file.close();
}
