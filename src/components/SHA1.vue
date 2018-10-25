<template>

    <v-layout row wrap>
        
		<v-flex xs12><h1>SHA-1</h1></v-flex>

        <v-flex xs12 sm12 md6>  
			<h3>Encrypt</h3>
			<v-text-field v-model="input" label="enter here" required ></v-text-field>
		    <p v-if="input != ''" class="success--text">{{ result }}</p>
					
        </v-flex>

    </v-layout>

</template>

<script>

	import CryptoJS from 'crypto-js';

	export default {
		data() {
			return {
				input : '',
				result : ''
			}
		},
		watch: {
			input(newVal) {
				this.result = CryptoJS.SHA1(newVal).toString();
			}
		}
	}
</script>