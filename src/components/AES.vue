<template>
	
    <v-layout row wrap>
        
		<v-flex xs12><h1>AES</h1></v-flex>

        <v-flex xs12 sm12 md6>    	
			<h3>Encrypt</h3>
					
			<v-layout row wrap>
				<v-flex md8>
					<v-text-field v-model="input_encode" label="string input"></v-text-field>
				</v-flex>
					
				<v-flex md4>
					<v-text-field v-model="secret_key_encrypt" label="secret key"></v-text-field>
				</v-flex>
			</v-layout>

			<p v-if="input_encode != ''" class="success--text">{{ result_encode }}</p>
			<v-btn color="success" @click="encrypt()">Encrypt</v-btn>

        </v-flex>
		
		<v-flex xs12 sm12 md6>
			<h3>Decrypt</h3>
			
			<v-layout row wrap>
				<v-flex md8>
					<v-text-field v-model="input_decode" label="code"></v-text-field>
				</v-flex>
					
				<v-flex md4>
					<v-text-field v-model="secret_key_decrypt" label="secret key"></v-text-field>
				</v-flex>
			</v-layout>

		    <p v-if="input_decode != ''" class="success--text">{{ result_decode }}</p>
			<v-btn class="text-center" color="info" @click="decrypt()">Decrypt</v-btn>

		</v-flex>

    </v-layout>

</template>

<script>

	import CryptoJS from 'crypto-js';

	export default {
		data() {
			return {
				input_encode : '',
				result_encode : '',
				secret_key_encrypt : '',
				
				input_decode : '',
				result_decode : '',
				secret_key_decrypt : '',
				
			}
		},
		methods: {
			encrypt() {
				if(this.input_encode != '' && this.secret_key_encrypt != ''){
					this.result_encode = CryptoJS.AES.encrypt(this.input_encode, this.secret_key_encrypt).toString();
				} else {
					alert('Không được để trống')
				}
			},
			decrypt() {
				if(this.input_decode != '' && this.secret_key_decrypt != ''){
					var bytes  = CryptoJS.AES.decrypt(this.input_decode.toString(), this.secret_key_decrypt);
					this.result_decode = bytes.toString(CryptoJS.enc.Utf8);
				} else {
					alert('Không được để trống')
				}
			}
		}
	}
</script>