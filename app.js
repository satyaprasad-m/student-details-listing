const form = document.querySelector('form');
const detailsDeck = document.querySelector("#detailsDeck");
const schoolData = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('studentName');
    const studentClass = formData.get('class');
    const studentGender = formData.get('gender');
    schoolData.push({
        name: name,
        class: studentClass,
        gender: studentGender
    });
    console.log(schoolData);
    detailsDeck.innerHTML = '';
    renderData();

});
function renderData() {
    schoolData.forEach(item => {
        const node = document.createElement("div");
        node.className = "card";

        const cardBody = document.createElement("div");
        node.appendChild(cardBody);

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.textContent = item.name;
        cardBody.appendChild(h5);

        const ul = document.createElement("ul");
        ul.className = "list-group";
        cardBody.appendChild(ul);

        const Nameli = document.createElement("li");
        Nameli.className = "list-group-item";
        Nameli.textContent = `Name: ${item.name}`
        ul.appendChild(Nameli);

        const Genderli = document.createElement("li");
        Genderli.className = "list-group-item";
        Genderli.textContent = `Gender: ${item.gender}`
        ul.appendChild(Genderli);

        const classli = document.createElement("li");
        classli.className = "list-group-item";
        classli.textContent = `Class: ${item.class}`
        ul.appendChild(classli);

        document.querySelector("#detailsDeck").appendChild(node);
    });
}
renderData();