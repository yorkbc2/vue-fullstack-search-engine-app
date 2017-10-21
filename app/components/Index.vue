<template>
	<div class='search'>
		<div class="search-box">
			<form v-on:submit.prevent="submitSearchForm($event)">
				<div>
					<input focusable="true" type="text" placeholder="Введите запрос здесь..." required v-model='searchQuery' />
				</div>
			</form>
		</div>

		<div class='search-result'>
			<div class="search-items" v-if='$store.getters.items.length > 0'>
				<div class="search-item" v-for="item in $store.getters.items">
					<h3 class="search-item--title">
						<a :href="'http://ru.wikipedia.org/?curid=' + item.pageid">{{item.title}}</a>
					</h3>
					<p class="search-item--snippet" v-html="item.snippet">
					
					</p>
				</div>
			</div>
			<div v-else>
				<div class="search-no--items">
					Введите запрос, чтобы найти статтьи с Википедии.
				</div>
			</div>
		</div>

	</div>
</template>

<script>
export default {

  name: 'Index',

  data () {
    return {
    	searchQuery: ''
    };
  },

  methods: {

  	submitSearchForm: function (ev) {

  		this.$store.dispatch('GET_ITEMS', {
  			query: this.searchQuery
  		});

  	}

  }

};
</script>

<style lang="scss" scoped>
	.search {
		font-family: 'PT Sans Narrow', sans-serif;
		font-size: 17.5px;


		.search-box {
			margin: 20px auto ;
			width: 640px;
			padding: 60px 15px;
			box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
			position: relative;
			background-color: #fff;

			input {
				border: 1px solid #e7e7e7;
				box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
				font-size: 18px;
				padding: 10px 15px;
				font-family: "PT Sans Narrow", sans-serif;
				width: calc(100% - 30px);

			}
		}

		.search-result {
			margin: 20px auto;
			width: 640px;
			padding: 10px 15px;
			box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
			position: relative;
			background-color: #fff;
			text-align: center;

			.search-items {
				display: flex;
				flex-direction: column;
				.search-item {
					text-align: left;
					border-bottom: 1px solid #e7e7e7;

					a {
						color: royalblue;
						text-decoration: none;
					}
				}
			}

			.search-no--items {
				padding: 30px 20px;
				background-color: #b1fcff66;
				border: 1px solid #0af6ff;
				border-radius: 15px;
			}

		}

	}
</style>