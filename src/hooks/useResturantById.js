import { ResturantMenuUrl } from '../config.js';

export async function useResturantById(id) {
  try {
    const res = await fetch(ResturantMenuUrl + id);
    const data = await res.json();
    return data;
  } catch (ex) {}
}
