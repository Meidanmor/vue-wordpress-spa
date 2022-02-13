<template>
<div>
<h2> Contact Form </h2>
<ul class="errors" v-if="errors.length">
<li v-for="(response, index) in errors" :key="index">
{{response}}
</li>
</ul>
<form>
<div class="fields">
<div class="field">
<input 
class="input" 
type="text" 
placeholder="Name" 
v-model="form.full_name">
</div>
      <div v-if="form.full_name.error">
     {{ error }}
    </div>
<div class="field">
<input class="input" type="email" placeholder="Email" v-model="form.email">
</div>
<div class="field">
<textarea class="textarea" rows="3" placeholder="What Do You Need?" v-model="form.body"></textarea>
</div>

<div class="field">
<button class="button" @click.prevent="submitForm">SEND</button>
</div>
</div>
</form>
</div>
</template>

<script>
import axios from "axios";
export default {
	mounted() {
	console.log('mounted');
	},
	data() {
	return {
	url: 'https://therapy.korkinetim.com/wp-json/send-contact-form/v1/contact',
	form: {
	full_name: '',
	email: '',
	body: ''
	},
	errors: [],
	}
	},
	methods: {
	submitForm() {
    axios
    .post(this.url, this.form)
    .then( (response) => {
	console.log(response);
    this.errors = response.data.message;
	})

    .catch( (error) => {
	this.errors = error.response.data.message;
	});
    }

	}
	}

</script>
<style>
li{
	list-style-type: none;
	margin: 0;
}
ul.errors {
    padding: 0;
}
</style>