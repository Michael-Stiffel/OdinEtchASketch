

function createTheEtch() {
    const Spielfled = document.querySelector('#Spielfläche');
    const Extras = document.querySelector('#Extras');
    colorPicker = document.createElement('input');
    colorPicker.type="color";
    colorPicker.value = "0000ff";
    const LabelColor = document.createElement('label');
    LabelColor.textContent = "Pick your Color:";    
    
    const ChooseSize = document.createElement('input');
    ChooseSize.type = "range";
    ChooseSize.min = "1";
    ChooseSize.max = "64";
    ChooseSize.value = "16";
    const Label_number = document.createElement('label');
    Label_number.textContent = "Wie groß solls sein?"; 
    Extras.appendChild(Label_number);  
    Extras.appendChild(ChooseSize);
    Extras.appendChild(LabelColor);
    Extras.appendChild(colorPicker);
    drawTheEtch(16,Spielfled);
    ChooseSize.addEventListener('click', function(){
     
    const size = ChooseSize.value;
    Spielfled.innerHTML = '';
    drawTheEtch(size,Spielfled);
    })


}

function drawTheEtch(size, Spielfeld) {


    for (i = 0; i < size; i++) {

        const row = document.createElement('div');
        row.classList.add('row');
        for(e = 0; e< size; e++){

        const colum = document.createElement('div');
        colum.classList.add('colum');
        colum.style.height = Math.round(640/size) + "px";
        colum.style.width =   Math.round(640/size) +  "px";
        colum.addEventListener('mouseover', function (){
            colum.addEventListener('mousedown', function(){

            this.style.background = colorPicker.value;
            })
        });

        row.appendChild(colum);
            
        }
        
        row.style.height = Math.round(640/size) +  "px";
        Spielfeld.appendChild(row);
    }

}



