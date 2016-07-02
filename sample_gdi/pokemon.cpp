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

vector<pokemon> pokemon::pokedex;

bool pokemon::hasIvs()
{
	return  (this->ivatk + this->ivdef + this->ivats + this->ivdes + this->ivpv + this->ivspd) > 0 ? true : false;
}

bool pokemon::hasEvs()
{
	return  (this->evatk + this->evdef + this->evats + this->evdes + this->evpv + this->evspd) > 0 ? true : false;
}

string pokemon::toString()
{
	string fnord;
	fnord = to_string(this->id);
	fnord += "-";
	fnord += to_string(this->level);
	fnord += "-";
	fnord += to_string(this->pv);
	fnord += "-";
	fnord += to_string(this->atk);
	fnord += "-";
	fnord += to_string(this->def);
	fnord += "-";
	fnord += to_string(this->ats);
	fnord += "-";
	fnord += to_string(this->des);
	fnord += "-";
	fnord += to_string(this->spd);
	fnord += "-";
	fnord += to_string(this->ivpv);
	fnord += "-";
	fnord += to_string(this->ivatk);
	fnord += "-";
	fnord += to_string(this->ivdef);
	fnord += "-";
	fnord += to_string(this->ivats);
	fnord += "-";
	fnord += to_string(this->ivdes);
	fnord += "-";
	fnord += to_string(this->ivspd);
	fnord += "-";
	fnord += to_string(this->evpv);
	fnord += "-";
	fnord += to_string(this->evatk);
	fnord += "-";
	fnord += to_string(this->evdef);
	fnord += "-";
	fnord += to_string(this->evats);
	fnord += "-";
	fnord += to_string(this->evdes);
	fnord += "-";
	fnord += to_string(this->evspd);
	fnord += "-";
	fnord += to_string((int)this->type1);
	fnord += "-";
	fnord += to_string((int)this->type2);
	fnord += "-";
	fnord += to_string((int)this->nature1);
	return fnord;
}

void pokemon::fromString(string fnord)
{
	string foo = fnord;
	int found = foo.find("-");
	string x = foo.substr(0, found);
	this->id = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->level = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->pv = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->atk = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->def = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->ats = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->des = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->spd = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->ivpv = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->ivatk = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->ivdef = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->ivats = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->ivdes = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->ivspd = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->evpv = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->evatk = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->evdef = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->evats = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->evdes = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->evspd = stoi(x);
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->type1 = static_cast<type>(stoi(x));
	foo.erase(0, found + 1);
	found = foo.find("-");
	x = foo.substr(0, found);
	this->type2 = static_cast<type>(stoi(x));
	foo.erase(0, found + 1);
	this->nature1 = static_cast<nature>(stoi(foo));
}

int pokemon::getGrodex()
{
	return this->pv + this->atk + this->def + this->ats + this->des + this->spd;
}