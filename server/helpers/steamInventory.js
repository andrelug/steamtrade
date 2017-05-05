import got from 'got';

const steamInventory = {};

steamInventory.getInventoryFromGame = (userId, game, language, count) => {
    if (!userId) {
        throw new TypeError('Please provide a userId');
    }

    // defaults game to Counter Strike Global Strike
    game = game || '730/2/';

    //defaults lnaguage to English
    language = language || 'english';

    //defaults count to 5000
    count = count || '5000';

    const URL = `http://steamcommunity.com/inventory/${userId}/${game}/2?l=${language}&count=${count}`;
    console.log('url: ' + URL);

    return got.get(URL)
        .then(response => {
            return response.body;
        })
        .catch(err => {
            console.log('Error on steamInventory call: ' + err);
            return err;
        });
};

export default steamInventory;
