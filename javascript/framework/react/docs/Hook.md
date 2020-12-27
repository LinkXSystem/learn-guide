# React Hook

## useState / useReducer 的使用

> [useState 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)

useState 的作用和 class 语法的 state 作用是一样的，用来存储可变状态，基本用法如下：

```js
const [state, setState] = useState(initialState);
```

返回的值中包含了 state 的引用和更新 setState 的函数。示例如下：

```jsx
function Counter({ initialCount }) {
  const [state, setCount] = useState(0);

  return (
    <>
      Count: {state}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(state + 1)}>-</button>
      <button onClick={() => setCount(state - 1)}>+</button>
    </>
  );
}
```

> [useReducer 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)

而 useReducer 的作用则是 useState 的替代方案。而它的基本用法如下：

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

它的返回值是当前派发的状态和更新其状态的 dispatch 方法。在使用该 API 的时候，需要传入出来状态的 reducer
和 初始状态的 initialArg ，以及惰性初始化的函数 init 。

相较于 useState ，useReducer 更新适合 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等场景。如下面的示例：

```jsx
function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  // 惰性初始化
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
```

上面的示例中，可以看到熟悉的 redux 的 reducer 的风格。同时相较于最初的 useState 版本的实现而言，可以更好的解离 useState 中计算部分便于之后的迁移。

## useContext 的使用

> [useContext 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)

## useEffect 的使用

> [useEffect 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)

## useLayoutEffect 的使用

> [useLayoutEffect 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect)

## useMemo / useCallBack 的应用

> [useMemo 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)

> [useCallback 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)

## useRef / useImperativeHandle 的应用

> [useRef 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#useref)

useRef 的作用是用于代替 React.createRef 方法，它的用法如下：

```js
const refContainer = useRef(initialValue);
```

initialValue 的值可以为空，该 Hook 返回的是以一个存储 current 属性的 ref 对象。需要注意的是返回的 ref 对象
在组件的整个生命周期内是保持不变的。它的用法如下：

```js
useImperativeHandle(ref, createHandle, [deps]);
```

> [useImperativeHandle 的文档地址](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle)

useImperativeHandle 的作用则是将子组件的 ref 传递给父组件的实例。通常情况下，它需要
和 forwardRef 一起使用。

## 如何自定义 Hook
