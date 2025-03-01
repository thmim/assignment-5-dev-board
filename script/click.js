document.getElementById('completed-btn1').addEventListener('click',function(event){
    
    event.preventDefault();
    alert('Board Updated Successfully');
    const count = getInputValueById('assigned-count');
    // console.log(count);
      const finalCount = count-1;
    setInnerTextByIDandValue('assigned-count',finalCount);

    const originalCount = getInputValueById('count-box');
    const result = originalCount+1;
    setInnerTextByIDandValue('count-box',result);

    const activityHistory = document.getElementById('activity-data');
    const div = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString();
    const addTitle = document.getElementById('fix-title');
    const fixTitle = addTitle.innerText
    div.classList.add('mt-10');
    div.innerHTML = `
    
       <p class="bg-blue-100 rounded-lg shadow-lg p-3">You have Complete The Task ${fixTitle} at ${currentTime}</p>
      `
    activityHistory.appendChild(div);
    const btn1 = document.getElementById('completed-btn1');
    btn1.disabled=true;
    btn1.style.opacity = "1";
})


document.getElementById('completed-btn2').addEventListener('click',function(event){
    
    event.preventDefault();
    alert('Board Updated Successfully');
    const count = getInputValueById('assigned-count');
    // console.log(count);
      const finalCount = count-1;
    setInnerTextByIDandValue('assigned-count',finalCount);

    const originalCount = getInputValueById('count-box');
    const result = originalCount+1;
    setInnerTextByIDandValue('count-box',result);

    const activityHistory = document.getElementById('activity-data');
    const div = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString();
    const addTitle = document.getElementById('dark-title');
    const darkTitle = addTitle.innerText
    div.classList.add('mt-10');
    div.innerHTML = `
    
       <p class="bg-blue-100 rounded-lg shadow-lg p-3">You have Complete The Task ${darkTitle} at ${currentTime}</p>
      `
    activityHistory.appendChild(div);
    const btn2 = document.getElementById('completed-btn2');
    btn2.disabled=true;
    btn2.style.opacity = "1";
})