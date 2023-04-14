const btn=document.querySelector('.btn');

btn.addEventListener('mouseover', function(e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    const btnFill = document.querySelector('.btn-fill');
    btnFill.style.top = y + 'px';
    btnFill.style.left = x +'px';
})

const btn_2=document.querySelector('.btn_2');

btn_2.addEventListener('mouseover', function(e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    const btnFill = document.querySelector('.btn-fill_2');
    btnFill.style.top = y + 'px';
    btnFill.style.left = x +'px';
})