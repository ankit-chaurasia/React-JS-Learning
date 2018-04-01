let appRoot = document.getElementById('app');
let visibility = false;
const toggleVisibility = (e) => {
    visibility = !visibility;
    render();
};
const render = () => {
    let template = (
        <div>
            Visibility Toggle
            <button onClick={toggleVisibility}>{visibility ? 'Show Details' : 'Hide Details'}</button>
            {visibility && (
                <div><p>Hey, these are some details you can now see!!</p></div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();