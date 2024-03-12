const useGenerateXML = (data: any) => {
  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<monster name="${data.name}" description="a ${data.description}" race="${
    data.race
  }" experience="${data.experience}" speed="${data.speed}">
	<health now="${data.heath.min}" max="${data.heath.max}"/>
	<look type="${data.looktype.type}" head="${data.looktype.head}" body="${
    data.looktype.body
  }" legs="${data.looktype.legs}" feet="${data.looktype.feet}" addons="${
    data.looktype.addons
  }" typeex="${data.looktype.typeex}" corpse="${data.looktype.corpse}"/>
	<targetchange interval="4000" chance="10"/>
	<flags>
		<flag summonable="0"/>
		<flag attackable="1"/>
		<flag hostile="1"/>
		<flag illusionable="1"/>
		<flag convinceable="0"/>
		<flag pushable="0"/>
		<flag canpushitems="1"/>
		<flag canpushcreatures="0"/>
		<flag hidename="0"/>
		<flag hidehealth="0"/>
		<flag lightlevel="0"/>
		<flag lightcolor="0"/>
		<flag lootmessage="0"/>
		<flag targetdistance="1"/>
		<flag staticattack="90"/>
		<flag runonhealth="20"/>
		<flag lureable="0"/>
		<flag walkable="0"/>
		<flag skull="0"/>
		<flag shield="0"/>
		<flag emblem="0"/>
		<flag canwalkonenergy="0"/>
		<flag canwalkonfire="0"/>
		<flag canwalkonpoison="0"/>
	</flags>
	${
    data.isAttack
      ? `<attacks>
      	<attack name="${data.attack.name}" interval="${data.attack.interval}" min="${data.attack.minValueAttack}" max="${data.attack.maxValueAttack}"/>
		< /attacks>
		`
      : ""
  }
	<immunities>
		<immunity physical="${data.immunities.physical}"/>
		<immunity energy="${data.immunities.energy}"/>
		<immunity fire="${data.immunities.fire}"/>
		<immunity poison="${data.immunities.poison}"/>
		<immunity earth="${data.immunities.earth}"/>
		<immunity ice="${data.immunities.ice}"/>
		<immunity holy="${data.immunities.holy}"/>
		<immunity death="${data.immunities.death}"/>
		<immunity drown="${data.immunities.drown}"/>
		<immunity lifedrain="${data.immunities.lifedrain}"/>
		<immunity manadrain="${data.immunities.manadrain}"/>
		<immunity outfit="${data.immunities.outfit}"/>
		<immunity drunk="${data.immunities.drunk}"/>
		<immunity invisible="${data.immunities.invisible}"/>
		<immunity paralyze="${data.immunities.paralyze}"/>
	</immunities>
  ${
    data.isDefenses
      ? `
      <defenses armor="35" defense="35">
        <defense
          name="speed"
          interval="2000"
          chance="15"
          speedchange="450"
          duration="5000"
        >
          <attribute key="areaEffect" value="redshimmer" />
        </defense>
        <defense name="healing" interval="2000" chance="10" min="0" max="110">
          <attribute key="areaEffect" value="blueshimmer" />
        </defense>
      </defenses>
      `
      : ""
  }
	<elements>
		<element firePercent="${data.elements.firePercent}"/>
		<element energyPercent="${data.elements.energyPercent}"/>
		<element icePercent="${data.elements.icePercent}"/>
		<element poisonPercent="${data.elements.poisonPercent}"/>
		<element holyPercent="${data.elements.holyPercent}"/>
		<element deathPercent="${data.elements.deathPercent}"/>
		<element drownPercent="${data.elements.drownPercent}"/>
		<element earthPercent="${data.elements.earthPercent}"/>
		<element physicalPercent="${data.elements.physicalPercent}"/>
		<element lifeDrainPercent="${data.elements.lifedrainPercent}"/>
		<element manaDrainPercent="${data.elements.manadrainPercent}"/>
		<element healingPercent="${data.elements.healingPercent}"/>
		<element undefinedPercent="${data.elements.undefinedPercent}"/>
	</elements>
  ${
    data.isSummons
      ? `
      <summons>
		    <summon name="${data.summons.name}" interval="${data.summons.interval}" chance="${data.summons.chance}" max="${data.summons.qtdMax}"/>
	    </summons>`
      : ""
  }
	${
    data.isVoices
      ? `
        <voices interval="5000" chance="10">
		      <voice sentence="${data.voices.message}" yell="1"/>
	      </voices>
      `
      : ""
  }
  ${
    data.isLoot
      ? `
        <loot>
          <item name="${data.loot.name}" ${
          data.loot.isCountMax ? `countmax="${data.loot.countmax}"` : ""
        } chance="${data.loot.chance}"/>
        </loot>
      `
      : ""
  }
	
</monster>
  `;
  return [xmlString];
};

export default useGenerateXML;
