import view from '../views/home.html';

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    // const btnClick = divElement.querySelector("#btnCta");
    // btnClick.addEventListener("click", () =>{
    //     alert("Click!!!")
    // })

    return divElement;
}