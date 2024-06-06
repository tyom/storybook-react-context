import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withReactContext } from 'storybook-react-context';
import { AuthContainer, Button, CountContainer } from './components';
import { authReducer, AuthContext, CountContext } from './context';

const initialAuthState = { authenticated: false };

const meta: Meta = {
  title: 'storybook-react-context',
  decorators: [withReactContext],
  parameters: {
    layout: 'centered',
    reactContext: { context: AuthContext },
  },
};

export default meta;

export const ChangeOnEffect: StoryObj = {
  // destructure the contextValue on story context to get the dispatch function
  render: (_, { reactContext }) => {
    const [loaded, setLoaded] = React.useState(false);
    const [, dispatch] = reactContext.value;

    React.useEffect(() => {
      // delay for 2 seconds before changing the state
      const id = setTimeout(() => {
        dispatch({ type: 'authenticate' });
        setLoaded(true);
      }, 2000);

      return () => clearTimeout(id);
    }, []);

    return (
      <AuthContainer>
        <p>Changing the context from story&rsquo;s useEffect.</p>
        <p className="text-center text-gray-400" id="loading-status">
          {loaded ? '✅ Loaded' : '⏳ Loading…'}
        </p>
      </AuthContainer>
    );
  },
  parameters: {
    reactContext: {
      // set context value to the result of useReducer to manage the state outside of the component
      contextValue: () => React.useReducer(authReducer, initialAuthState),
    },
  },
};

export const ChangeOnInteraction: StoryObj = {
  // destructure the context value to get the state and dispatch function
  render: (_, { reactContext }) => {
    const [[authState, setAuthState], { increment }] = reactContext.values;
    return (
      <>
        <AuthContainer>
          <CountContainer />
          <p className="mb-5">Changing multiple contexts on interaction.</p>
        </AuthContainer>
        <div className="p-4 space-x-2 text-center">
          <Button
            id="auth-toggle-button"
            onClick={() => setAuthState({ authenticated: !authState.authenticated })}
          >
            Toggle auth
          </Button>
          <Button id="count-button" onClick={increment}>
            Increment count
          </Button>
        </div>
      </>
    );
  },
  parameters: {
    reactContext: {
      // set context value to the result of setState to manage the state outside of the component
      contexts: [
        {
          context: AuthContext,
          contextValue: () => React.useState(initialAuthState),
        },
        {
          context: CountContext,
          contextValue: () => {
            const [count, setCount] = React.useState(0);
            return { count, increment: () => setCount(count + 1) };
          },
        },
      ],
    },
  },
};

export const StaticInitialContext: StoryObj = {
  render: () => (
    <AuthContainer>
      <p>Set static context from the story.</p>
    </AuthContainer>
  ),
  parameters: {
    reactContext: {
      contextValue: [{ authenticated: true }],
    },
  },
};

export const UpdateContextFromArgs: StoryObj = {
  render: () => (
    <AuthContainer>
      <CountContainer />
      <p>Change context from Storybook Controls.</p>
    </AuthContainer>
  ),
  argTypes: {
    authenticated: {
      name: 'Authenticated',
      control: { type: 'boolean' },
    },
    count: {
      name: 'Count',
      control: { type: 'number' },
    },
  },
  args: {
    ...initialAuthState,
    count: 2,
  },
  parameters: {
    reactContext: {
      contexts: [
        // grab the args from the story context provided to the contextValue functions
        {
          context: AuthContext,
          contextValue: ({ args }: { args: typeof initialAuthState }) => [
            { authenticated: args.authenticated },
          ],
        },
        {
          context: CountContext,
          contextValue: ({ args }: { args: { count: number } }) => ({
            count: args.count,
          }),
        },
      ],
    },
  },
};
