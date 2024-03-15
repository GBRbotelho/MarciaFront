const ROTA = import.meta.env.VITE_ROTA;

export async function usePost(subroute, dataPost, systemDb = "@system") {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${ROTA}/${subroute}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        "sistema-id": systemDb,
      },
      body: JSON.stringify(dataPost),
    });

    const data = await response.json();

    return data;
  } catch (error) {}
}

export async function useGet(subroute, systemDb = "@system") {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${ROTA}/${subroute}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
        "system-db": systemDb,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {}
}
