import { flaskapi } from "../Flaskapi";

// 유저 많이푼태그 분석
// 유저가 많이 푼 태그 분석
export const getAnalyTag = async (memberId:number) => {
  return await flaskapi.get(`/freq-tag/${memberId}`).then().catch();
};