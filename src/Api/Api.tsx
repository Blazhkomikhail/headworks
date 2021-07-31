const getRecepieData = async () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const response = await fetch(baseUrl);
  const recepieData = await response.json();
  return recepieData;
}

export default getRecepieData;