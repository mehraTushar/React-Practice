import { ResturantDetailsUrl } from '../config.js';
import { checkJsonData } from '../helper';

export async function useRestaurant() {
  try {
    const res = await fetch(ResturantDetailsUrl);
    const json = await res.json();

    const resData = checkJsonData(json);
    return resData;
  } catch (ex) {
    console.error('Error in fetching restaurant data:', ex);
    throw ex;
  }
}
