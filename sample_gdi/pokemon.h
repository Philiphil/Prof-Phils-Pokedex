#pragma once
#include "type.h"
#include "nature.h"
#include <vector>
#include "info.h"
#include <string>

class pokemon {
public:
	int id=0;
	int level=0;
	int pv=0;
	int atk=0;
	int def=0;
	int ats=0;
	int des=0;
	int spd=0;
	int ivpv=0;
	int ivatk=0;
	int ivdef=0;
	int ivats=0;
	int ivdes=0;
	int ivspd=0;
	int evpv=0;
	int evatk=0;
	int evdef=0;
	int evats=0;
	int evdes=0;
	int evspd=0;
	type type1=(type)0;
	type type2 = (type)0;
	nature nature1=(nature)0;
	/**/
	static std::vector<pokemon> pokedex;
	static std::vector<info> dbdex;
	static void dexinit();
	static info getInfo(int);
	pokemon() {};
	/**/
	bool hasIvs();
	bool hasEvs();
	int getGrodex();
	void fromString(std::string);
	std::string toString();
};