import { MyReq, request } from "../utils/request";

export interface Hero {
  enName: string;
  role: string;
  game: string;
  cnName: string;
  image: string;
  localImage: string;
}

export interface Res {
  data: Array<Hero>
}

export function list() {
  return (request as MyReq<Res>).get(
    'list'
  )
}