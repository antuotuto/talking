# what

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




this.$store.commit("updateCartCount",'an')

import { mapState } from 'vuex';

computed:{
  ...mapState(['nickName','cartCount'])
  // nickName(){
  //   return this.$store.state.nickName;
  // },
},
