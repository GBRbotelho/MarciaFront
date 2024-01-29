const ROTA = import.meta.env.VITE_ROTA;

export async function usePost(subroute, dataPost) {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${ROTA}/${subroute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(dataPost),
    });

    const data = await response.json();

    return data;
  } catch (error) {}
}

export async function useGet(subroute) {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${ROTA}/${subroute}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {}
}
