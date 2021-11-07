import axios from "axios"

export async function getSurah() {
    const response = await axios.get("https://api.quran.sutanlab.id/surah");

    return response.data.data;
}

export async function getAyat(id) {
    const response = await axios.get(`https://api.quran.sutanlab.id/surah/${id}`);

    return response.data.data;
}
