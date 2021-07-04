import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      generations: [],
      activePokemons: [],
      downloadCompleted: false,
      esTypeNames:['Normal','Lucha','Volador','Veneno','Tierra','Roca','Bicho','Fantasma','Acero','Fuego','Agua','Planta','Eléctrico','Psíquico','Hielo','Dragón','Siniestro','Hada','???','Sombra'],
      sprites:{
        'front_default': 'Frente Estandar',
        'back_default': 'Atrás Estandar',
        'front_female':'Frente Hembra Estandar',
        'back_female': 'Atras Hembra Estandar',
        'front_shiny': "Frente Shiny",
        'back_shiny': 'Atrás Shiny',
        'front_female_shiny':'Frente Hembra Shiny',
        'back_female_shiny': 'Atras Hembra Shiny',
      }
    },
    actions: {
      // loadGenerations loads the generations data [{name: ?, url:?},...]
      // of the API so the App can render all generations including new ones
      loadGenerations: () => {
        axios
          .get(`https://pokeapi.co/api/v2/generation`)
          .then((res) => {
            setStore({ generations: res.data.results });
          })
          .catch((error) => {
            console.log("a.loadGenerations error: " + error);
          });
      },

      // changeGen Loads the selected Generetion pokemons to the activePokemons
      // variable, so it can be rendered on Pokedex

      changeGen: (event) => {
        console.log(event.target.value);
        if (event.target.value !== 0) {
            setStore({downloadCompleted:false})
          axios
            .get(event.target.value)
            .then((res) => {
              setStore({ activePokemons: res.data.pokemon_species });
              getActions().completeData();
            })
            .catch((error) => {
              console.log("a.changeGen error: " + error);
            });
        }
      },
      completeData: () => {
        let receiptedFetchs=0;
        getStore().activePokemons.forEach((pokeRef, arrIndex) => {
          let details = {};
          let aux = pokeRef.url.split("/");
          let index = aux[aux.length - 2];

          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then((res) => {
              Object.assign(details, res.data);
              axios
                .get(`https://pokeapi.co/api/v2/pokemon-species/${index}`)
                .then((answ) => {
                  Object.assign(details, answ.data);
                  Object.assign(details,{isFav:false})
                  Object.assign(getStore().activePokemons[arrIndex], details);
                  receiptedFetchs++
                  if(receiptedFetchs===(getStore().activePokemons.length)){
                  getStore().activePokemons.sort((a,b)=>{
                      if(a.id<b.id)
                      return -1
                      if(a.id<b.id)
                      return 1
                      else
                      return 0
                  })
                  setStore({downloadCompleted:true})
                  }
                })
                .catch((err) => {
                  console.log("a.completeData/pokemon error: " + err);
                });
            })
            .catch((error) => {
              console.log("a.completeData/pokemon error: " + error);
            });
        });
      },

      addFav: (pokeInfo) => {
        let aux=getStore().favorites.filter((pokemon)=>{
          console.log(pokeInfo)
            if(pokemon.id!==pokeInfo.id)
            return pokemon
            else
            return 
        })
        setStore({ favorites: [...aux,pokeInfo] });
              
      },

      delFav: (pokeInfo) => {
        setStore({ favorites: getStore().favorites.filter((item) => (item.id !== pokeInfo.id)) });
            
      }
    },
  };
};
export default getState;
