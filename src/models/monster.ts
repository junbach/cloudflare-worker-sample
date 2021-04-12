import dataList from "../assets/monster.json";

export interface Monster {
  id: string;
  name: string;
  skill: Skill[];
  location: string[];
}

export interface Skill {
  name: string;
  desc: string;
  mana: number;
}

const data: Monster[] = dataList;

export const findAll = (): Monster[] => data;
export const findById = (id: string): Monster | undefined => data.find(it => id && it.id === id);
