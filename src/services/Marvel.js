import md5 from "md5"

const API_BASE = 'http://gateway.marvel.com/'
const TIME_STAMP = Number(new Date())
const API_KEY_PUBLIC = '3bb64ba8f7f8e2e7744adbcf848f9ff5'
const API_KEY_PRIVATE = 'f9216bbd1494b8720f801b430745c1e64b0ed1eb'
const HASH = md5(TIME_STAMP + API_KEY_PRIVATE + API_KEY_PUBLIC)

const basicFetch = async (characterID) => {
    const req = await fetch(`${API_BASE}/v1/public/characters/${characterID}?ts=${TIME_STAMP}&apikey=${API_KEY_PUBLIC}&hash=${HASH}`)
    const json = await req.json()
    return json
}

const basicFetchComics = async (characterID) => {
    const req = await fetch(`${API_BASE}/v1/public/characters/${characterID}/comics?ts=${TIME_STAMP}&apikey=${API_KEY_PUBLIC}&hash=${HASH}`)
    const json = await req.json()
    return json
}


export default {
    getList : async () => {
        return[
            {
            slug:'herois',
            title: 'Hulk',
            items : await basicFetch('1009351'),
            },
            {
            slug:'herois',
            title: 'Thor',
            items : await basicFetch('1009664')
            },
            {
            slug:'herois',
            title: 'Capitão América',
            items : await basicFetch('1009220')
            },
            {
            slug:'herois',
            title: 'Viúva Negra',
            items : await basicFetch('1009189')
            },
            {
            slug:'herois',
            title: 'Pantera Negra',
            items : await basicFetch('1009187')
            },
            {
            slug:'herois',
            title: 'Homen Formiga',
            items : await basicFetch('1011490')
            },
            {
            slug:'herois',
            title: 'Doutor Estranho',
            items : await basicFetch('1011358')
            },
            {
            slug:'herois',
            title: 'Quarteto Fantástico',
            items : await basicFetch('1009299')
            },
            {
            slug:'herois',
            title: 'Homem de Ferro',
            items : await basicFetch('1009368')
            },
            {
            slug:'herois',
            title: 'Visão',
            items : await basicFetch('1009697')
            },
            {
            slug:'herois',
            title: 'Justiceiro',
            items : await basicFetch('1009515')
            },
            
            {
            slug:'herois',
            title: 'Gavião Arqueiro',
            items : await basicFetch('1011131')
            },
            {
            slug:'herois',
            title: 'Homen-Aranha',
            items : await basicFetch('1011010')
            },               
            {
            slug:'herois',
            title: 'Deadpool',
            items : await basicFetch('1009268')
            },                
            {
            slug:'herois',
            title: 'Motoqueiro Fantasma',
            items : await basicFetch('1010925')
            },                
            {
            slug:'herois',
            title: 'Wolverine',
            items : await basicFetch('1009718')
            },                               
            {
            slug:'herois',
            title: 'Demolidor',
            items : await basicFetch('1009262')
            },                
            {
            slug:'herois',
            title: 'Guardiões da Galáxia',
            items : await basicFetch('1011299')
            },
            {                
            slug:'herois',
            title: 'X-Men',
            items : await basicFetch('1009726')
            },                
            {                
            slug:'herois',
            title: 'Capitã Marvel',
            items : await basicFetch('1010338')
            },                
            
        ]
         
    },

    getCharacter : async (id) => {
        return{
            items : await basicFetch(id)
        }
    },

    getComics : async (id) =>{
        return{
            comics : await basicFetchComics(id)
        }
    }
}

