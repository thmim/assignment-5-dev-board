document.getElementById('theme-btn').addEventListener('click',function(event){
    const body = document.getElementById('whole-page');
    const colors = ['violet','red','pink','yellow','Orange','DodgerBlue','MediumSeaGreen','LightGray','Gray','SlateBlue'];
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
})