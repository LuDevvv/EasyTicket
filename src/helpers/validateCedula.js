export default async function validateCedula({ id }) {
  const url = `https://api.digital.gob.do/citizens/${id}/validate`;
  const headers = { Accept: "application/json" };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error("Error al llamar a la API");
    }

    const data = await response.json();
    if (data.valid) {
      return { isValid: true, message: "La cédula es válida." };
    } else {
      return { isValid: false, message: "La cédula no es válida." };
    }
  } catch (error) {
    return { isValid: false, message: `Error: ${error.message}` };
  }
}
