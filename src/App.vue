<template>
    <v-app id="inspire">
        <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="drawer" fixed app>
            <v-list dense>
                <template v-for="item in items">
                    <v-layout v-if="item.heading" :key="item.heading" row align-center>
                        <v-flex xs6>
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-flex>
                        <v-flex xs6 class="text-xs-center">
                            <a href="#!" class="body-2 black--text">EDIT</a>
                        </v-flex>
                    </v-layout>

                    <v-list-tile ripple v-else :key="item.text" @click="" :to="item.link">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.text }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>

                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
            <v-toolbar-title style="width: 300px" class="ml-0">

                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <router-link :to="{ name : 'home' }" class="brand"><span>MD5 Convert</span></router-link>

            </v-toolbar-title>
            
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>notifications</v-icon>
            </v-btn>
            <v-btn icon large>
                <v-avatar size="32px" tile>
                    <img src="../src/assets/avatar.png" alt="md5convert">
                </v-avatar>
            </v-btn>
        </v-toolbar>
        <v-content>
            <v-container fluid grid-list-md>
                
                <router-view/>
                
            </v-container>
        </v-content>
        <v-btn fab bottom right color="pink" dark fixed @click="dialog = !dialog">
            <v-icon>add</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="800px">
            <v-card>
                <v-card-title class="grey lighten-4 py-4 title">
                    Create contact
                </v-card-title>
                <v-container grid-list-sm class="pa-4">
                    <v-layout row wrap>
                        <v-flex xs12 align-center justify-space-between>
                            <v-layout align-center>
                                <v-avatar size="40px" class="mr-3">
                                    <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt="">
                                </v-avatar>
                                <v-text-field placeholder="Name"></v-text-field>
                            </v-layout>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field prepend-icon="business" placeholder="Company"></v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field placeholder="Job title"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field prepend-icon="mail" placeholder="Email"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field type="tel" prepend-icon="phone" placeholder="(000) 000 - 0000" mask="phone"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field prepend-icon="notes" placeholder="Notes"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-btn flat color="primary">More</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
                    <v-btn flat @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>
                
                &copy; {{ new Date().getFullYear() }}

            </div>

        </v-footer>

    </v-app>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            drawer: null,
            items: [
                {
                    icon: 'contacts',
                    text: 'MD5',
                    link: '/md5'
                },
                {
                    icon: 'contacts',
                    text: 'SHA-1',
                    link: '/sha-1'
                },
                {
                    icon: 'content_copy',
                    text: 'SHA-256',
                    link: '/sha-256'
                },
                {
                    icon: 'settings',
                    text: 'BASE64',
                    link: '/base64'
                },
                {
                    icon: 'chat_bubble',
                    text: 'AES',
                    link: '/aes'
                },
                {
                    icon: 'content_copy',
                    text: 'BCRYPT',
                    link: '/bcrypt'
                },
                
            ]
        }),
        props: {
            source: String
        }
    }
</script>

<style>
    a {
        text-decoration: none;
    }

    .brand {
        color: white !important;
    }
</style>