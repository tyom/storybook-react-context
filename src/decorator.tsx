import React from 'react';
import { makeDecorator } from '@storybook/preview-api';

type StoryContext = Parameters<Parameters<typeof makeDecorator>[0]['wrapper']>[1];

type ContextOptions<T = unknown> = {
  contextValue: (context: StoryContext) => T;
  context: React.Context<T>;
};

interface DecoratorOptions extends Partial<ContextOptions> {
  contexts?: ContextOptions[];
}

type ContextValuesProps = {
  children: (contextValues: unknown[]) => React.ReactNode;
  contexts: ContextOptions[];
};

export const ContextValues = ({ children, contexts }: ContextValuesProps) => {
  // Retrieve context values using explicit calls to useContext
  const contextValues = contexts.map((item) => React.useContext(item.context));
  return children(contextValues);
};

export const withReactContext = makeDecorator({
  name: 'storybook-react-context',
  parameterName: 'reactContext',
  // options - decorator argument, parameters - story parameter
  wrapper: (storyFn, storyContext, { options, parameters }) => {
    const {
      // `contexts` is for multiple contexts
      contexts = [],
      // `context` and `contextValue` are for single context and is appended to `contexts`
      context,
      contextValue,
    } = { ...options, ...parameters } as DecoratorOptions;

    const allContexts = [...contexts];

    if (context && contextValue) {
      allContexts.push({ context, contextValue });
    }

    if (!allContexts.length) {
      throw new Error(
        `At least one context is required. Please provide it in decorator options or story parameters.
        Either \`contexts\` for multiple contexts or both \`context\` and \`contextValue\` must be set.`,
      );
    }

    return (
      <>
        {allContexts.reduceRight(
          (acc, { context: Context, contextValue }) => {
            const providerValue =
              typeof contextValue === 'function'
                ? contextValue(storyContext)
                : contextValue;

            return <Context.Provider value={providerValue}>{acc}</Context.Provider>;
          },
          <ContextValues contexts={allContexts}>
            {(contextValues) =>
              storyFn({
                ...storyContext,
                reactContext: {
                  values: contextValues,
                  value: contextValues[contextValues.length - 1],
                },
              }) as React.ReactElement
            }
          </ContextValues>,
        )}
      </>
    );
  },
});
