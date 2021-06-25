import Vue from 'vue'

export const Store = Vue.observable({
    loading: false,
    currentTheme: '',
    setTheme
})

function setTheme() {
    console.log('setting the theme....')
}