const ROTA = import.meta.env.VITE_ROTA;

export async function usePost(subroute, dataPost) {
  try {
    const response = await fetch(`${ROTA}/${subroute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    });

    const data = await response.json();

    return data;
  } catch (error) {}
}
