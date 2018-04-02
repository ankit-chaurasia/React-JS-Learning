// let appRoot = document.getElementById('app');
// let visibility = false;
// const toggleVisibility = (e) => {
//     visibility = !visibility;
//     render();
// };
// const render = () => {
//     let template = (
//         <div>
//             Visibility Toggle
//             <button onClick={toggleVisibility}>{visibility ? 'Show Details' : 'Hide Details'}</button>
//             {visibility && (
//                 <div><p>Hey, these are some details you can now see!!</p></div>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
// render();
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div><p>Hey, these are some details you can now see!!</p></div>
                )}                
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));