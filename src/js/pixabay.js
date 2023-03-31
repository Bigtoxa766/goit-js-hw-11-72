
export class Pixabay {
  #MAIN_URL = 'https://pixabay.com/api';
  #KEY = '34923818-41fb85465916de5dce0352c63';
  #BASE_SERCH_PARAMS = {
    per_page: 40,
    key: this.#KEY,
    orientation: this.orientation,
    safesearch: true,
}

  q = null;
  image_type = 'photo';
  orientation = "horizontal";
  safesearch = true;
  per_page = 40;

  fetchPhotos() {
    const searhParams = new URLSearchParams({
      ...this.#BASE_SERCH_PARAMS,
      q: this.q,
      image_type: this.image_type,
      page: 1,
    })

    return fetch(
      `${this.#MAIN_URL}?${searhParams}`)
      .then(res => {
        if (!res.ok) {
        throw new Error(res.status)
        }
        return res.json();
    })
  }
}