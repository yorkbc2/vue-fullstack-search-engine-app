import Vue from "vue";
import Vuex from "vuex";
import jsonp from 'jsonp';


// Using of VueX module
Vue.use(Vuex);




let actions   = {

	GET_ITEMS({commit}, sObject) {
		let sQuery = sObject.query;
		const url = "https://ru.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=",
			http = Vue.http;

		const urlQuery = url + sQuery;

		jsonp(urlQuery, (err, response) => {
			if(err) {
				throw err;
			}

			const results = response.query.search;

			commit('set', results);

		})
		
	}

};

let state     = {

	searchItems: []

};

let mutations = {
	
	set: (state, results) => {
		
		state.searchItems = results;

	}

};

let getters   = {
	items: state => {
		return state.searchItems;
	}
};




const store = new Vuex.Store({

	state,
	mutations,
	actions,
	getters

});



export default store;