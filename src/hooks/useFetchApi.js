export async function useFetchApi(url) {
  try {
    const result = await fetch(url);
    const jsonRes = await result.json();
    return jsonRes;
  } catch {
    console.error('Fetch Api: ', 'error');
  }
}
