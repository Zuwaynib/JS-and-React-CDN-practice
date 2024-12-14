//Using Vanilla JavaScript
function mk(type, props, children = []) {
    const element = document.createElement(type);

    if(props) {
        Object.assign(element, props);
    }

    if(children.length > 0) {
        element.prepend(...children)
    }

    return element;
}

const appTitle = mk('h1', {id: 'app-title'}, 'ToDo App');

const form = mk('form', {id: 'myForm', classList: 'form-class'}, [
    mk('input', {id: 'input', type: 'text', placeholder: 'Enter your ToDo here', required: true}),
    mk('button', {type: 'submit', id: 'button'}, 'Add ToDo')
]);

document.body.append(appTitle, form)

//Using React CDN

const App = () => {
    return React.createElement('div', null, [
        React.createElement('h1', {style: {color: '#800080'}}, 'React ToDo App'), 
        React.createElement('form', {id: 'my-form'}, [
            React.createElement('input', {id: 'input', type: 'text', placeholder: 'Enter your ToDo Here', required: true}),
            React.createElement('button', {type: 'submit'}, 'Add ToDo')
            ]), 
        React.createElement('ul', null)
    ])
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));