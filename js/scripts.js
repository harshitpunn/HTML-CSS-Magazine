const navToggle = () =>{
    let navigation =  document.getElementById('navigation')
    if(navigation.className == 'hide-nav') {
         navigation.className = 'display-nav'
    }
    else {
         navigation.className = 'hide-nav'
    }
 }
 document.getElementById('hamburger').addEventListener('click', navToggle)