import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      generations:[],
      activePokemons: [],
    },
    actions: {
      
      loadGenerations:()=>{
        axios.get(`https://pokeapi.co/api/v2/generation`)
            .then((res) => {
              setStore({ generations: res.data.results });
            })
            .catch((error) => {
              console.log("FullPokedex error: " + error);
            }); 
      },
      changeGen:(event)=>{
          console.log(event.target.value)
        if(event.target.value!==0){
          
        axios.get(event.target.value)
        .then((res) => {
          setStore({ activePokemons: res.data.pokemon_species });
          console.log('Active Pokemons: '+res.data.pokemon_species[0].name)
        })
        .catch((error) => {
          console.log("FullPokedex error: " + error);
        }); 
    } 
    },
    //   loadPokedex: () => {
    //     axios({
    //       method: "GET",
    //       url: `https://pokeapi.co/api/v2/pokemon`,
    //       params: { limit:1117, offset:0}
    //     })
    //       .then((res) => {
    //         let aux = [...getStore().pokes, ...res.data.results];
    //         setStore({ pokes: res.data.results });
    //         setStore({ loadedIndex: index });
    //         getActions().completeData(index)
    //       })
    //       .catch((error) => {
    //         console.log("/pokemon error: " + error);
    //       });
    //   },
      completeData:(id)=>{
          for(let i=id;i<(id+6);i++){
            axios({
                method: "GET",
                url: `https://pokeapi.co/api/v2/pokemon/${i+1}`
              })
              .then((res) => {
                  getActions().modifyState(id, i)
                  let aux=Object.assign(getStore().pokes[i],res.data)
                  console.log(getStore().pokes)
              })

          }
      },
      
      addFav: (typ, ind) => {
        let aux = getStore().favorites.concat({ type: typ, index: ind });
        setStore({ favorites: aux });
        // localStorage.setItem("favorites", aux);
      },

      delFav: (typ, ind) => {
        let aux = getStore().favorites.filter(
          (item) => !(item.type === typ && item.index === ind)
        );
        setStore({ favorites: aux });
        
      }
    }
}

};
export default getState;
