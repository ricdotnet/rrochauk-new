import Vue from 'vue'

export const Store = Vue.observable({
    loading: false,
    currentTheme: '',
    setTheme,
    getTheme
})

function getTheme() {
    let theme = localStorage.getItem('theme')

    //this will set theme to light on the first visit or if no theme is ever set
    if(!theme) {
        localStorage.setItem('theme', 'light')
        Store.currentTheme = 'light'
        return
    }

    Store.currentTheme = theme;
}

function setTheme() {
    let theme = localStorage.getItem('theme')

    if(theme === 'light') {
        localStorage.setItem('theme', 'dark')
        Store.currentTheme = 'dark'
    } else {
        localStorage.setItem('theme', 'light')
        Store.currentTheme = 'light'
    }
}