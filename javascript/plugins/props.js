const x = `
<div className={this.props.className} label="container"></div>
`;

const y = `
<div className="container" label="container" />
`;

const z = `
<div className={() => ('container')} label="container" />
`;

// TODO: 提前遇到 } 怎么办，这是不合格的
// TODO: 循环匹配，遇到 ' 或者 “ ，进入字符串模式，放弃 } 这个符号的匹配，用栈的的方式处理， 直到 {} 的情况清空
// TODO: 字符串需要扁平到同一行，删除 \n 的干扰
const i = `
<div className={() => ('container}}')} label="container" style={this.props.style} />
`;

const j = `
<div className={() => (<div className={this.props.another} />)} label="container" style={this.props.style} />
`;

const k = `
<div className={() => {return (<div className={() => {return (<div className={this.props.another} />))}} label="container" style={this.props.style} />
`;

// 测试数据
const cache =
  ' className={() => (<div className={"container"}><div>Test Data</div></div>)} label={() => this.props.getUUID()} style={this.props.style} ';

function getComponent(str) {
  let stack = [];

  let regexp = /<\w+/;

  let match = str.match(regexp);

  console.warn(match);

  if (!match) return;

  console.warn(str.match(/(?<!.*'\s)(>)/));
}

function getParser(str) {
  let status = "code";
  let stack = [];

  let props = [];

  let key = 0;
  let token = "";

  let r = true;

  for (let i = 0; i < str.length; i++) {
    const t = str[i];
    switch (t) {
      case " ":
        key = i;
        break;
      case "=": {
        if (!r) continue;

        const s = str.slice(key + 1, i);
        token = s;
        break;
      }
      case "{":
        r = false;
        stack.push({ type: "{", position: i });
        break;
      case "}": {
        if (status !== "code") continue;
        if (!stack.length) throw new Error("this is error in string !");
        const c = stack.shift();
        const { position } = c;
        const s = str.slice(position + 1, i);

        r = true;
        props.push({
          prop: token,
          code: s,
        });
        break;
      }
      case '"':
        if (status !== "code") {
          status = "code";
          continue;
        }

        status = " string";
        break;
      case "":
        break;
    }
  }

  return props;
}

(function () {
  //   const r = getParser(j);
  //   console.warn(r);

  getComponent("<div label={() => <div className={'container'}>}></div>");
})();
