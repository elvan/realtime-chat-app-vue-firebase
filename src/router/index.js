import Welcome from '@/components/Welcome';
import Chat from '@/components/chat';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        console.log(to.params);
        if (to.params.name) {
          next();
        } else {
          next({ name: 'Welcome' });
        }
      }
    }
  ]
});
