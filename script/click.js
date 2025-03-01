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

    const activityHistory = document.getElementById('activity-section');
    const div = document.createElement('div');
    const currentTime = new Date().toLocaleTimeString();
    div.classList.add('mt-10');
    div.innerHTML = `
    
       <p class="bg-blue-100 rounded-lg shadow-lg p-3">You have Complete The Task at ${currentTime}</p>
      
    
    `
    activityHistory.appendChild(div);
})