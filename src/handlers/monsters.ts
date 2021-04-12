import { findAll, findById, Monster } from "../models/monster";
import { ResponseHeader } from "../util";

export const listAllMonsters = () => {
  const body = JSON.stringify(findAll());
  return new Response(body, { headers: ResponseHeader });
};

export const findMonsterById = (request: { params: Record<string, string> }) => {
  const id = request.params.id;
  const body = JSON.stringify(findById(id))
  return new Response(body, { headers: ResponseHeader })
}