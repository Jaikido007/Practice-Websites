// SIDE-BAR

const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES

const messagesNotification = document.querySelector("#messages-notifications");
const thanksHighlight = document.querySelector("#thanks");

const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

const thanks = document.querySelector(".friend-requests");
const thank = thanks.querySelectorAll(".request");

//  THEME

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customise-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-colour span');

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');


// ----------SIDE-BAR----------

// Remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active')
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display= 'block';
            document.querySelector('#notifications .notification-count').style.display = "none";
        }
    })
})

// ----------MESSAGES----------

// Searches chat 

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display = "flex"
        } else {
            user.style.display = "none"
        }
    })
}

//  Search chat

messageSearch.addEventListener('keyup', searchMessage);

//  Highlight message card when menu item is clicked

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = "0 0 1.6rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none"
    }, 2000)
});

//  Highlight thanks card when Thanks item is clicked

thanksHighlight.addEventListener('click', () => {
    thanks.style.boxShadow = "0 0 1.6rem var(--color-primary)";
    setTimeout(() => {
        thanks.style.boxShadow = "none"
    }, 2000)
});

// ----------THEME CUSTOMISATION ----------

// opens modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
}
// closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customise-theme')) {
        themeModal.style.display = "none";
    }
}

themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);


// FONTS

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize
        size.classList.toggle('active');
    if(size.classList.contains('font-size-1')) {
        fontSize = '8px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
        fontSize = '12px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }  else if (size.classList.contains('font-size-4')) {
        fontSize = '14px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    }  else if (size.classList.contains('font-size-5')) {
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-12rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    } 
    document.querySelector('html').style.fontSize = fontSize;
    })
})


// COLOUR PALETTE 

// remove active class from color palette
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();


        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// BACKGROUND THEME

// background values

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// background color

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {
    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();

})

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})