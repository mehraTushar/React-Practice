import { ResturantDetailsUrl } from '../config.js';
import { checkJsonData } from '../helper';

export async function useRestaurant(latitude, longitude) {
  try {
    const res = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await res.json();

    const resData = checkJsonData(json);
    return { finalData: resData, loaded: true };
  } catch (ex) {
    console.error('Error in fetching restaurant data:', ex);
    throw ex;
  }
}
