import Vue from 'vue'

export const Store = Vue.observable({
    pageLoading: false,
    loading: false,
    currentTheme: '',
    toast: {
        isToastVisible: false,
        toastMessage: '',
        toastType: ''
    },
    setTheme,
    getTheme,
    setToast
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

    if (theme === 'light') {
        localStorage.setItem('theme', 'dark')
        Store.currentTheme = 'dark'
    } else {
        localStorage.setItem('theme', 'light')
        Store.currentTheme = 'light'
    }
}

function setToast(message, type) {
    Store.toast.toastMessage = message;
    Store.toast.toastType = type;
    Store.toast.isToastVisible = true;
    setTimeout(() => {
        Store.toast.isToastVisible = false;
        Store.toast.toastMessage = ''
        Store.toast.toastType = ''
    }, 5000)
}