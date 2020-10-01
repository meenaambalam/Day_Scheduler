//get existing elements into variable to work with them 
var containerDiv = document.querySelector(".container");

var divRowElem;
var divColElem;
var textAreaElem;
var labelElem;
var buttonElem;

for (let i = 9; i < 19; i++) {
    divRowElem = document.createElement("div");
    divCol_lbl_Elem = document.createElement("div");
    divCol_txt_Elem = document.createElement("div");
    divCol_btn_Elem = document.createElement("div");
    labelElem = document.createElement("label");
    textAreaElem = document.createElement("textarea");
    buttonElem = document.createElement("button");

    divRowElem.className = "row";
    divCol_lbl_Elem.className = "col-lg-1";
    divCol_txt_Elem.className = "col-lg-10";
    divCol_btn_Elem.className = "col-lg-1";
    labelElem.className = "time-block";
    textAreaElem.className = "hour past";
    buttonElem.className = "saveBtn";

    containerDiv.appendChild(divRowElem);

    labelElem.textContent = i;
    divRowElem.appendChild(divCol_lbl_Elem);
    divCol_lbl_Elem.appendChild(labelElem);

    divRowElem.appendChild(divCol_txt_Elem);
    divCol_txt_Elem.appendChild(textAreaElem);

    divRowElem.appendChild(divCol_btn_Elem);
    divCol_btn_Elem.appendChild(buttonElem);
   
}
