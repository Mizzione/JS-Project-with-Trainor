window.onload = function onload() {

    const mainDiv = document.getElementById("main");
    let stringHTML = "";

    function capLetter(str) {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    function storeValue() {
        let checkedValues = document.querySelector(".checkbox").checked
        for (let checkedValue of checkedValues) {
            let paragraph = document.createElement("p")
            paragraph.innerHTML = `${checkedValue.target.id}`
            document.body.appendChild(paragraph)
        }
    }

    let vehicleList = {
            
        'Isuzu': ['MU-X 3.0 LS-E 4X4 AT', 'MU-X 3.0 LS-E 4X2 AT', 'MU-X 3.0 LS-A 4X2 AT', 'MU-X RZ4E LS-A 4X4 MT', 'MU-X 1.9 RZ4E 4X2 AT'],
        'Toyota' : ['FORTUNER 2.4 G 4X2 MT', 'FORTUNER 2.4 G 4X2 AT', 'FORTUNER 2.4 V 4X2 AT', 'FORTUNER 2.8 Q 4X2 AT', "FORTUNER 2.8 LTD 4X2 AT"],
        'Nissan': ['TERRA 2.5 VL 4X4 AT', 'TERRA 2.5 VL 4X2 AT', 'TERRA 2.5 VE 4X2 AT', 'TERRA 2.5 EL 4X2 MT', 'PATROL 5.6 V8 4X4 AT'],
        'Mitsubishi': ['MONTERO SPORT GLS 2WD AT', 'MONTERO SPORT GT 4WD AT', 'MONTERO BLACK SERIES 2WD AT', 'MONTERO SPORT RALLIART 2WD AT', 'MONTERO SPORT GLX 2WD AT']
        }
    
    ;

    for (let key in vehicleList) {
        stringHTML += `
        <article class="needs">
            <div class="nextRow">
                <div class="column">
                    <h1>${capLetter(key)}</h1>
        `;
        for (let value of vehicleList[key]) {
            stringHTML += `
                    <input class="checkbox" type="checkbox" name="${value}" id="${value}" value="${capLetter(value)}"/>
                    <label for="${value}">${capLetter(value)}</label>
                    <br>
            `;
        }
        stringHTML += `
                </div>
            </div>
        </article>
        `;
    }
    mainDiv.innerHTML = stringHTML;
    let Button = document.getElementByTagName("button")
    Button.addEventListener("click", storeValue())
}
