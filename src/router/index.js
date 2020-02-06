import Vue from 'vue';
import VueRouter from 'vue-router';
import MyLayout from '../layouts/MyLayout.vue';
import PageChatList from '../pages/PageChatList.vue';
import PageAuth from '../pages/PageAuth.vue';
import PageChat from '../pages/PageChat.vue';
import PsychicOfferList from '../pages/PsychicOfferList.vue';

Vue.use(VueRouter);

function load(component) {
  // '@' is aliased to src/,
  // We will use lady loading when the app needs it
  // for now is not worthy to add code splitting
  return () => import(`../pages/${component}.vue`);
}

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: 'history',
  base: process.env.VUE_ROUTER_BASE,
  routes: [
    {
      path: '/',
      component: MyLayout,
      children: [
        { path: '', title: 'psychicOfferList', component: PsychicOfferList },
        { path: '/auth', title: 'auth', component: PageAuth },
        { path: '/chat/:chatSessionId', title: 'chat', component: PageChat },
        { path: '/active-chats', title: 'pageChatList', component: PageChatList },
        { path: '*', component: load('Error404') }
      ]
    }
  ]
});

export default router;
