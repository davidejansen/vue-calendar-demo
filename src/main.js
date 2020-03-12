import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
	apiKey: 'AIzaSyCRUS8oByoqYv66_VAxllYvhAeXrkxsySU',
	authDomain: 'vue-calendar-83724.firebaseapp.com',
	databaseURL: 'https://vue-calendar-83724.firebaseio.com',
	projectId: 'vue-calendar-83724',
	storageBucket: 'vue-calendar-83724.appspot.com',
	messagingSenderId: '474195675127',
	appId: '1:474195675127:web:1e5dbeb65d17872aff90f2'
});

export const db = firebase.firestore();

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
