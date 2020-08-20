document.querySelector('#toggleTheme').addEventListener('click', () => {
    const body =  document.querySelector('body')
    
    if (body.id === 'light') {
        body.id = 'dark'
    } else {
        body.id = 'light'
    }
    
   
})

