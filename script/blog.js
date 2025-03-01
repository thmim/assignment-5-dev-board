document.getElementById('discover-div').addEventListener('click',function(event){
    event.preventDefault();
    
    window.location.href="./blog.html"
})

const date = new Date().toDateString();

const recentDate = document.getElementById('date').innerHTML=date;
