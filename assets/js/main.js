// SHOW MENU

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}

showMenu('nav_toggle', 'nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//work
{/* <div class="project">
                <button class="button1" style="background-color: #007bff;" onmouseover="this.style.background='#0056b3'" 
                onmouseout="this.style.background='#007bff'">Live demo</button>
                <button class="button1">Repository</button>
            </div> */}
function project() {
    const work = document.getElementById("projects");
    for (i = 1; i < 7; i++) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        h3.innerText='hello world'
        div.className = 'work_img';
        img.src = `./assets/img/work${i}.jpg`;
        const btnDiv=getBtn()
        div.append(img,btnDiv,h3);
        work.appendChild(div);
    }
}
project();

function getBtn() {
    const div = document.createElement('div');
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    div.className = 'project_button'
    btn1.className = 'button1'
    btn2.className = 'button1'
    btn1.innerText = "Live demo"
    btn2.innerText = "Repository"
    btn2.style.background = '#007bff'
    btn2.onmouseover = function () { this.style.background = '#0056b3'; }
    btn2.onmouseout = function () { this.style.background = '#007bff'; }
    div.append(btn1, btn2)
    return div
}


