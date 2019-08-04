import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


// 包装对象
const Store =new Vuex.Store({
    state:{
        storeList:[]
    },
    mutations:{
        initList(state,list){
            
            // state.storeList = list;
            // console.log(list,'storeeeeeee')
            // state.storeList = list;


            localStorage.setItem('list',JSON.stringify(list));
            state.storeList =JSON.parse( localStorage.getItem('list'));
           
        }
    }
});

export default Store;