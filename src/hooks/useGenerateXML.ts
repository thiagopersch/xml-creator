import { DataMonsterBasics } from "@/model/Types";

const useGenerateXML = (data: DataMonsterBasics) => {
  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<monster name="${data.name}" description="a ${data.description}" race="${
    data.race
  }" experience="${data.experience}" speed="${data.speed}">
	<health now="${data.heathMin}" max="${data.heathMax}"/>
	<look type="${data.looktypeType}" head="${data.looktypeHead}" body="${
    data.looktypeBody
  }" legs="${data.looktypeLegs}" feet="${data.looktypeFeet}" addons="${
    data.looktypeAddons
  }" typeex="${data.looktypeTypeex}" corpse="${data.looktypeCorpse}"/>
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
    data.attack?.length > 0
      ? `<attacks>
          ${data.attack
            .map(
              (attack) =>
                `<attack name="${attack.name}" interval="${attack.interval}" min="-${attack.minValueAttack}" max="-${attack.maxValueAttack}"/>`
            )
            .join("\n          ")}
    </attacks>`
      : ""
  }
	<immunities>
		<immunity physical="${data.immunities?.physical}"/>
		<immunity energy="${data.immunities?.energy}"/>
		<immunity fire="${data.immunities?.fire}"/>
		<immunity poison="${data.immunities?.poison}"/>
		<immunity earth="${data.immunities?.earth}"/>
		<immunity ice="${data.immunities?.ice}"/>
		<immunity holy="${data.immunities?.holy}"/>
		<immunity death="${data.immunities?.death}"/>
		<immunity drown="${data.immunities?.drown}"/>
		<immunity lifedrain="${data.immunities?.lifedrain}"/>
		<immunity manadrain="${data.immunities?.manadrain}"/>
		<immunity outfit="${data.immunities?.outfit}"/>
		<immunity drunk="${data.immunities?.drunk}"/>
		<immunity invisible="${data.immunities?.invisible}"/>
		<immunity paralyze="${data.immunities?.paralyze}"/>
	</immunities>
  ${
    data.isDefenses
      ? `
      <defenses armor="35"defense="35">
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
		<element firePercent="${data.elements?.firePercent}"/>
		<element energyPercent="${data.elements?.energyPercent}"/>
		<element icePercent="${data.elements?.icePercent}"/>
		<element poisonPercent="${data.elements?.poisonPercent}"/>
		<element holyPercent="${data.elements?.holyPercent}"/>
		<element deathPercent="${data.elements?.deathPercent}"/>
		<element drownPercent="${data.elements?.drownPercent}"/>
		<element earthPercent="${data.elements?.earthPercent}"/>
		<element physicalPercent="${data.elements?.physicalPercent}"/>
		<element lifeDrainPercent="${data.elements?.lifedrainPercent}"/>
		<element manaDrainPercent="${data.elements?.manadrainPercent}"/>
		<element healingPercent="${data.elements?.healingPercent}"/>
		<element undefinedPercent="${data.elements?.undefinedPercent}"/>
	</elements>
  ${
    data.summons?.length > 0
      ? `<summons>
		    ${data.summons
          .map(
            (summon: any) =>
              `<summon name="${summon.name}" interval="${summon.interval}" chance="${summon.chance}" max="${summon.qtdMax}"/>`
          )
          .join("")}
	    </summons>`
      : ""
  }
	${
    data.voices
      ? `<voices interval="5000" chance="10">
		      <voice sentence="${data.voices.message}" yell="1"/>
	      </voices>`
      : ""
  }
  ${
    data.loot?.length > 0
      ? `  <loot>
          ${data.loot
            .map((loot) =>
              loot.isCountMax
                ? `<item name="${loot.name}" countmax="${loot.countmax}" chance="${loot.chance}"/>`
                : `<item name="${loot.name}" chance="${loot.chance}"/>`
            )
            .join("\n          ")}
    </loot>`
      : ""
  }
</monster>`;
  return xmlString;
};

export default useGenerateXML;
