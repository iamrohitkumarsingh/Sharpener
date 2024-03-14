localStorage.clear();
let form1=document.querySelector('form');

form1.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e.target.desc);

    let desc =e.target.desc.value;
    let cat =e.target.cat.selectedIndex;
    let amount =e.target.amount.value;
    let id;
    id=localStorage.length+1;
    console.log(id);

    const obj = {
        id,
        desc,
        cat,
        amount
    }

    let li1 = document.createElement('li');
    li1.textContent=`${amount} ${desc} ${e.target.cat.value}`;
    let list = document.getElementById('list');
    let button1 = document.createElement('button');
    button1.textContent='Edit'
    button1.setAttribute('onclick','edit(event)');

    li1.append(button1);

    let button2 = document.createElement('button');
    button2.textContent='Delete'
    button2.setAttribute('onclick','deleteE(event)');

    li1.append(button2);

    let span= document.createElement('span')
    span.innerText=id;
    span.style.display='none';
    li1.append(span);

    list.append(li1);


    localStorage.setItem(id,JSON.stringify(obj));
    console.log(localStorage.getItem('arr'))
    // if(localStorage.getItem('arr')!=null){
    //    let arr = JSON.parse(localStorage.getItem('arr'));
    //    arr.push(obj);
    // localStorage.setItem('arr',JSON.stringify(arr));
    // }else{
    //     let arr=[obj];
    //     localStorage.setItem('arr',JSON.stringify(arr));
    // }

})

function deleteE(e){
    let p=e.target.parentNode;
    let s=p.children[2].innerText;

    console.log(s);
    p.parentNode.removeChild(p);
    localStorage.removeItem(s);
    
    console.log(p);
}

function edit(e){
   
    let p=e.target.parentNode;
    let s=p.children[2].innerText;
    let ob=JSON.parse(localStorage.getItem(s));
    document.getElementById('amount').value=ob.amount;
    document.getElementById('desc').value=ob.desc;
    document.getElementById('cat').selectedIndex=ob.cat;
    deleteE(e);

}



// let button=document.getElementById('button');

// button.addEventListener('click',add);

