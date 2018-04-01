var userName = "Ankit Chaurasia";
var userAge = 26;
const app = {
    title: "Indecision App",
    subtitle: "Put yourself in the hands of a computer",
    options: ["One", 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault(); // Stop full page refresh on submitting form
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        rerenderForm();
    }
};

const onRemoveAll = () => {
    app.options = [];
    rerenderForm();
};

var appRoot = document.getElementById('app');
const number = [44,55,66];
const rerenderForm = () => {
    var templateTwo = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>Options Length: {app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
             {
                 app.options.map((option)=> <li key={option}>{option}</li>)
             }
            </ol>
            <form onSubmit={onFormSubmit}>
                 <input type="text" name="option" />
                 <button>Add Option</button>
            </form>
        </div>
     );
     ReactDOM.render(templateTwo, appRoot);
};
rerenderForm();