const getRecepieData = async () => {
  const baseUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
}

export default getRecepieData;