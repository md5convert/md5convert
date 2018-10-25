<template>
	
    <v-layout row wrap>
        
		<v-flex xs12><h1>BASE64</h1></v-flex>

        <v-flex xs12 sm12 md6>    	
			<h3>Encrypt</h3>
		    <v-text-field v-model="input_encode" label="string input" required ></v-text-field>
		    <p v-if="input_encode != ''" class="success--text">{{ result_encode }}</p>
					
        </v-flex>
		
		<v-flex xs12 sm12 md6>
			<h3>Decrypt</h3>
			<v-text-field v-model="input_decode" label="code" required ></v-text-field>
		    <p v-if="input_decode != ''" class="success--text">{{ result_decode }}</p>
		</v-flex>

    </v-layout>

</template>

<script>

	import CryptoJS from 'crypto-js';

	export default {
		data() {
			return {
				input_encode : '',
				input_decode : '',
				result_encode : '',
				result_decode : ''
			}
		},
		watch: {
			input_encode(newVal) {
				const encryptedWord = CryptoJS.enc.Utf8.parse(newVal);
				this.result_encode = CryptoJS.enc.Base64.stringify(encryptedWord);
			},
			input_decode(newVal) {
				const parsedWordArray = CryptoJS.enc.Base64.parse(newVal);
				this.result_decode = parsedWordArray.toString(CryptoJS.enc.Utf8);
			}
		}
	}
</script>