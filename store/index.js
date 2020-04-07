// export const actions = {
//   async nuxtServerInit({commit}, {req, app}) {
//   	const {status, data: {province, city}} = await app.$axios.get('/geo/getPosition');
//   	commit('geo/setPosition', status === 200 ? 
//   														{city, province} :
//   														{city: '', province: ''});

//   	const {status: status2, data: {menu}} = await app.$axios.get('/geo/menu');
//   	commit('home/setMenu', status2 === 200 ? menu : []);

//   	const {status: status3, data: {result}} = await app.$axios.get('/search/hotSearch', {
//   		params: {
//   			city: app.store.state.geo.position.city.replace('市', '')
//   		}
//   	});
//   	commit('home/setHotSearch', status3 === 200 ? result : []);
//   }
// }

export const actions = {
  async nuxtServerInit({commit},{req,app}){
    const {status,data:{province,city}} = await app.$axios.get('/geo/getPosition');
    commit('geo/setPosition',status === 200 ? {city,province} : {city: '', province: ""});



    // const {status: status2, data: {menu}} = await app.$axios.get('/geo/menu');
  	// commit('home/setMenu', status2 === 200 ? menu : []);

  }
}