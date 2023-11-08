
//const source = 'https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=a27b283a54cbc5d9d78caa94368980e4';
//const source2 = 'https://gateway.marvel.com:443/v1/public/characters?apikey=a27b283a54cbc5d9d78caa94368980e4';
 
class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a27b283a54cbc5d9d78caa94368980e4';
    
    getResource = async(url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9offset=210&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    }
}

export default MarvelService;