export const searchVocabWord = async (query) => {
    return await fetch(`https://wordsapiv1.p.mashape.com/words/${query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "649786d330msh02191553897bc22p13932ejsnbec91e58c30a"
	}
})
.then(res => {
    if(!res.ok) {
      throw Error('Failed to retrieve vocab word.')
    }
    return res.json()})
}