<template>
	    
    <v-layout row wrap>
        
		<v-flex xs12><h1>Bcrypt</h1></v-flex>

        <v-flex xs12 sm12 md6>  
			<h3>Encrypt</h3>
			<v-text-field v-model="input" label="enter here" required ></v-text-field>
		    <p v-if="input != ''" class="success--text">{{ result }}</p>
					
        </v-flex>

    </v-layout>

</template>

<script>

	import Bcrypt from 'bcryptjs'

	export default {
		data() {
			return {
				input : '',
				result : ''
			}
		},
		watch: {
			input(newVal) {
				var salt = bcrypt.genSaltSync(10);
				var hash = bcrypt.hashSync("B4c0/\/", salt);
			}
		}
	}
</script>