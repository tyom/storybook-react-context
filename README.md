# storybook-react-context

Manipulate React context inside Storybook. Read state and dispatch updates from outside of React component.

[![React examples](https://img.shields.io/badge/react-blueviolet?style=for-the-badge&logo=storybook&label=examples)](https://tyom.github.io/storybook-react-context/?path=/story/storybook-react-context)

## Install

```
npm install -D storybook-react-context
```

## Usage

Add `withReactContext` decorator where needed, per component or globally.

```js
import { withReactContext } from 'storybook-react-context';

export default {
  title: 'some story',
  decorators: [withReactContext],
};
```

The decorator can also be preconfigured for all stories in the module:

```js
export default {
  title: 'some story',
  decorators: [
    withReactContext({
      context: ExampleContext,
      contextValue: { authenticated: false },
    }),
  ],
};
```

or via parameters:

```js
export default {
  title: 'some story',
  decorators: [withReactContext],
  parameters: {
    reactContext: {
      context: ExampleContext,
      contextValue: { authenticated: false },
    },
  },
};
```

### Options

`withReactContext` takes an argument which is an object with the following optional properties:

- `context` - The context returned by `React.createContext` to provide for story's components
- `contextValue` - the value to use for the provider value. If a function is provided, it will be called with the story context as the first argument.
                   The function can return React hooks such as `useState` of `useReducer` to manage the state in the story definition.
- `contexts` - an array of context options (an object with `context` and `contextValue` properties) to provide multiple contexts for story's components

The decorator options can also be set in story parameters using `reactContext` key:

```js
export default {
  title: 'My Component',
  component: MyComponent,
  decorators: [withReactContext],
};

// single provider is used for `MyComponent`
const SomeStory = {
  parameters: {
    reactContext: {
      context: FirstContext,
      contextValue: { someContextValue: true },
    },
  },
}

// multiple provider are used wrapping the `MyComponent` component
const AnotherStory = {
  parameters: {
    reactContext: {
      contexts: [
        {
          context: FirstContext,
          contextValue: { someContextValue: true },
        },
        {
          context: SecondContext,
          contextValue: [1, 2, 3],
        }
      ]
    },
  },
}
```

The component or the result of the render function will be wrapped with providers setting the value to the result of `contextValue`.
The context values are passed back to the story render function in the story context (second argument) in `reactContext` property.
The property contains two properties: `values` and `value`. The `values` property is an array of all values provided for each context.
The `value` property returns the last value and is useful for single contexts.

```js
import * as React from 'react';
import { withReactContext } from 'storybook-react-context';

const reducer = (state, action) => ({ ...state, ...action });

// the values are arrays as we expect a setter/dispatch function as second argument in some of the stories
const FirstContext = React.createContext([{ text: 'Initial text' }]);
const SecondContext = React.createContext(['black']);

const MyComponent = () => {
  const [textState] = React.useContext(FirstContext);
  const [colorState] = React.useContext(SecondContext);

  return <div style={{ color: colorState }}>{textState?.text}</div>;
};

export default {
  title: 'My Component',
  component: MyComponent,
  decorators: [withReactContext],
};

// access the reducer dispatch function set in the contextValue parameter from the story
export const FirstStory = {
  render: (_, { reactContext }) => {
    const [, dispatch] = reactContext.value;
    return (
      <>
        <MyComponent />
        <button onClick={() => dispatch({ text: 'Changed text' })}>Change text</button>
      </>
    );
  },
  parameters: {
    reactContext: {
      context: FirstContext,
      contextValue: () => React.useReducer(reducer, { text: 'Initial text' }),
    },
  },
};

// apply multiple contexts and use `reactContext.values` to access the setters from the story
export const SecondStory = {
  render: (_, { reactContext }) => {
    const [, [color, setFirstContextValue]] = reactContext.values;
    const colors = ['red', 'orange', 'blue', 'green', 'purple'];
    return (
      <>
        <MyComponent />
        <p>Selected color: {color}</p>
        <button
          onClick={() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            return setFirstContextValue(randomColor);
          }}
        >
          Toggle Value
        </button>
      </>
    );
  },
  parameters: {
    reactContext: {
      contexts: [
        {
          context: FirstContext,
          contextValue: [{ text: 'New text' }],
        },
        {
          context: SecondContext,
          contextValue: () => React.useState(),
        },
      ],
    },
  },
};

// use story controls (args) to set the context value
export const ThirdStory = {
  args: { text: 'Initial text' },
  parameters: {
    reactContext: {
      context: FirstContext,
      contextValue: ({ args }) => [
        {
          text: args.text,
        },
      ],
    },
  },
};
```

See the [example stories](https://github.com/tyom/storybook-react-context/tree/main/example/storybook-react-context.stories.tsx) for more.
