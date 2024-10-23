export const fetchPersonajes = async() => {
  const BASE_URL = 'https://hp-api.onrender.com/api/characters';
  
  try{
      const response = await fetch(BASE_URL);
      const data = await response.json();
      return data;
  } catch(error){
      console.error("Error fetch data", error);
      throw error;
  }
}


export const fetchPersonajesById = async(id) => {
  
  try{
      const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
      const data = await response.json();
      return data[0];
  } catch(error){
      console.error("Error fetch data", error);
      throw error;
  }
}
