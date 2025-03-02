document.getElementById('completed-btn1').addEventListener('click',function(event){
// const buttons = document.querySelectorAll('.completed');
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function(){

//     alert('Board Updated Successfully');
//     const count = getInputValueById('assigned-count');
//     // console.log(count);
//       const finalCount = count-1;
//     setInnerTextByIDandValue('assigned-count',finalCount);

//     const originalCount = getInputValueById('count-box');
//     const result = originalCount+1;
//     setInnerTextByIDandValue('count-box',result);

//     const activityHistory = document.getElementById('activity-data');
//     const div = document.createElement('div');
//     const currentTime = new Date().toLocaleTimeString();
//     // const addTitle = document.getElementById('fix-title');
//     // const fixTitle = addTitle.innerText

//      const titles = document.querySelectorAll('.title');
//      for (const title of titles){
//          const fixTitle = title.innerText;
//          return fixTitle;
//      }
    
//       const addTitle = fixTitle;
//       console.log(addTitle);

//     div.classList.add('mt-10');
//     div.innerHTML = `
    
//        <p class="bg-blue-100 rounded-lg shadow-lg p-3">You have Complete The Task ${addTitle} at ${currentTime}</p>
//       `
//     activityHistory.appendChild(div);

//     // const btn = document.querySelectorAll('.completed');
//     this.disabled = true;
//     this.style.opacity = "0.5"
      
    
      
//   });
// }


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

document.getElementById('completed-btn3').addEventListener('click',function(event){
    
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
  const addTitle = document.getElementById('homepage-title');
  const darkTitle = addTitle.innerText
  div.classList.add('mt-10');
  div.innerHTML = `
  
     <p class="bg-blue-100 rounded-lg shadow-lg p-3">You have Complete The Task ${darkTitle} at ${currentTime}</p>
    `
  activityHistory.appendChild(div);
  const btn3 = document.getElementById('completed-btn3');
  btn3.disabled=true;
  btn3.style.opacity = "1";
})


document.getElementById('completed-btn4').addEventListener('click',function(event){
    
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
  const addTitle = document.getElementById('emoji-title');
  const darkTitle = addTitle.innerText
  div.classList.add('mt-10');
  div.innerHTML = `
  
     <p class="bg-blue-100 rounded-lg shadow-lg p-3">You have Complete The Task ${darkTitle} at ${currentTime}</p>
    `
  activityHistory.appendChild(div);
  const btn4 = document.getElementById('completed-btn4');
  btn4.disabled=true;
  btn4.style.opacity = "1";
})

document.getElementById('completed-btn5').addEventListener('click',function(event){
    
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
  const addTitle = document.getElementById('ai-title');
  const darkTitle = addTitle.innerText
  div.classList.add('mt-10');
  div.innerHTML = `
  
     <p class="bg-blue-100 rounded-lg shadow-lg p-3">You have Complete The Task ${darkTitle} at ${currentTime}</p>
    `
  activityHistory.appendChild(div);
  const btn5 = document.getElementById('completed-btn5');
  btn5.disabled=true;
  btn5.style.opacity = "1";
})

document.getElementById('completed-btn6').addEventListener('click',function(event){
    
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
  const addTitle = document.getElementById('improve-title');
  const darkTitle = addTitle.innerText
  div.classList.add('mt-10');
  div.innerHTML = `
  
     <p class="bg-blue-100 rounded-lg shadow-lg p-3">You have Complete The Task ${darkTitle} at ${currentTime}</p>
    `
  activityHistory.appendChild(div);
  const btn6 = document.getElementById('completed-btn6');
  btn6.disabled=true;
  btn6.style.opacity = "1";
})