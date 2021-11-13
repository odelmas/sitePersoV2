
export function fillWidth(text, id) {
  const widthEcran = document.getElementById(id).clientWidth;
  const divMultiplier = document.getElementsByClassName("multiplier");
  while (divMultiplier[0].offsetWidth < widthEcran) {
    divMultiplier[0].innerHTML += `&nbsp;<span>${text}</span>`;
    divMultiplier[1].innerHTML += `&nbsp;<span>${text}</span>`;
  }
  return { divMultiplier, widthEcran };
}

export function fillHeight(id) {
  const heightEcran = document.getElementById(id).clientHeight;

  const divWrapper = document.querySelector(".wrapperMultiplier");
  const targetClone = document.querySelector(".wrapperHeight");
  while ( targetClone.clientHeight < heightEcran) {
    let cloneDiv = divWrapper.cloneNode(true);
    targetClone.appendChild(cloneDiv);
  } 
  
}