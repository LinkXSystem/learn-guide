const babel = require("@babel/core");

const t = `
class Plugin extends React.Component {
    render() {
        return (
            <div onClick={() => {}}>
                <span>Dynamic Module !</span>
            </div>
        );
    }
}
`;

const { code } = babel.transform(t, {
  presets: ["@babel/preset-react"],
});

console.warn("=====================");
console.warn(code);
console.warn("=====================");
