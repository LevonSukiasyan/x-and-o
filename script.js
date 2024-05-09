const game = document.querySelector('.game');
const num = 3;
const arr = [];

const win = document.createElement('h1');
win.textContent = 'Победа';

const draw = document.createElement('h1');
draw.textContent = 'Ничья';

const refresh = document.createElement('button');
refresh.textContent = 'refresh';

const table = document.createElement('table');

const gameFunc = (gameTable) => {

    for (let i = 0; i < num; i++) {
        const tr = document.createElement('tr');
        tr.classList.add('tr' + (i + 1))
    
        for (let j = 0; j < num; j++) {
            const td = document.createElement('td');
        
                td.addEventListener('click', function clickFunc() {
                
                    arr.push(j)
                    if ((arr.length - 1) % 2 === 0) {
                        td.textContent = 'X';
                        this.removeEventListener('click', clickFunc);
                    } else {
                        td.textContent = '0';
                        this.removeEventListener('click', clickFunc)
                    }
                
                    const tds = document.querySelectorAll('td');
                
                
                    for (let k = 0; k < tds.length; k++) {
                        let clickNum = 0;
                    
                        if (tds[0].textContent === tds[1].textContent && tds[1].textContent === tds[2].textContent) {
                            if (tds[0].textContent !== '') {
                                document.body.appendChild(win);
                                return true;
                            }
                        }
                    
                        if (tds[3].textContent === tds[4].textContent && tds[4].textContent === tds[5].textContent) {
                            if (tds[3].textContent !== '') {
                                document.body.appendChild(win);
                                return true;
                            }
                        }
                    
                        if (tds[6].textContent === tds[7].textContent && tds[7].textContent === tds[8].textContent) {
                            if (tds[6].textContent !== '') {
                                document.body.appendChild(win);
                                return true;
                            }
                        }
                    
                        if (tds[0].textContent === tds[3].textContent && tds[3].textContent === tds[6].textContent) {
                            if (tds[0].textContent !== '') {
                                document.body.appendChild(win);
                                return true;
                            }
                        }
                    
                        if (tds[1].textContent === tds[4].textContent && tds[4].textContent === tds[7].textContent) {
                            if (tds[1].textContent !== '') {
                                document.body.appendChild(win);
                                return true;
                            }
                        }
                    
                        if (tds[3].textContent === tds[5].textContent && tds[5].textContent === tds[8].textContent) {
                            if (tds[3].textContent !== '') {
                                document.body.appendChild(win);
                                return true;
                            }
                        }
                    
                        if (tds[0].textContent === tds[4].textContent && tds[4].textContent === tds[8].textContent) {
                            if (tds[0].textContent !== '') {
                                document.body.appendChild(win);
                                return true;
                            }
                        }
                    
                        if (tds[2].textContent === tds[4].textContent && tds[4].textContent === tds[6].textContent) {
                            if (tds[2].textContent !== '') {
                                document.body.appendChild(win);
                                return true;
                            }
                        }
                    
                        for (let g = 0; g < tds.length; g++) {
                            if (tds[g].textContent !== '') {
                            
                                clickNum += 1;
                            
                                if (clickNum === 9) {
                                    document.body.appendChild(draw)
                                }
                            }
                        }
                    }
                })
            tr.appendChild(td)
        }
    
        gameTable.appendChild(tr)
    }

    game.appendChild(refresh)
    game.appendChild(table);
}

gameFunc(table)

refresh.addEventListener('click', function () {
    location.reload()
})
