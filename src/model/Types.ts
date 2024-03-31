export type AttackType = {
  name?: string;
  interval?: number;
  minValueAttack?: number;
  maxValueAttack?: number;
};

export type SummonsType = {
  name?: string;
  interval?: number;
  chance?: number;
  qtdMax?: number;
};

export type DataMonsterBasics = {
  name?: string;
  description?: string;
  race?: string;
  experience?: number;
  speed?: number;
  heath: {
    min?: number;
    max?: number;
  };
  looktype: {
    type?: number;
    head?: number;
    body?: number;
    legs?: number;
    feet?: number;
    addons?: number;
    typeex?: number;
    corpse?: number;
  };
  isAttack?: boolean;
  attack: {
    name?: string;
    interval?: number;
    minValueAttack?: number;
    maxValueAttack?: number;
  }[];
  isImmunities?: boolean;
  immunities?: {
    physical?: number;
    energy?: number;
    fire?: number;
    poison?: number;
    earth?: number;
    ice?: number;
    holy?: number;
    death?: number;
    drown?: number;
    lifedrain?: number;
    manadrain?: number;
    outfit?: number;
    drunk?: number;
    invisible?: number;
    paralyze?: number;
  };
  isDefenses?: boolean;
  isElements?: boolean;
  elements?: {
    firePercent?: number;
    energyPercent?: number;
    icePercent?: number;
    poisonPercent?: number;
    holyPercent?: number;
    deathPercent?: number;
    drownPercent?: number;
    earthPercent?: number;
    physicalPercent?: number;
    lifedrainPercent?: number;
    manadrainPercent?: number;
    healingPercent?: number;
    undefinedPercent?: number;
  };
  isSummons?: boolean;
  summons: {
    name?: string;
    interval?: number;
    chance?: number;
    qtdMax?: number;
  }[];
  isVoices?: boolean;
  voices?: {
    message?: string;
  };
  isLoot?: boolean;
  loot: {
    name?: string;
    isCountMax?: boolean;
    countmax?: number;
    chance?: number;
  }[];
};
