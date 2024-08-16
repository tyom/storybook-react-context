import{R as u,r as t}from"./index-RYns6xqu.js";const{makeDecorator:P}=__STORYBOOK_MODULE_PREVIEW_API__,F=({children:e,contexts:n})=>{const a=n.map(o=>u.useContext(o.context));return e(a)},U=P({name:"storybook-react-context",parameterName:"reactContext",wrapper:(e,n,{options:a,parameters:o})=>{const{contexts:r=[],context:i,contextValue:A}={...a,...o},l=[...r];if(i&&A&&l.push({context:i,contextValue:A}),!l.length)throw new Error("At least one context is required. Please provide it in decorator options or story parameters.\n        Either `contexts` for multiple contexts or both `context` and `contextValue` must be set.");return u.createElement(u.Fragment,null,l.reduceRight((c,{context:L,contextValue:C})=>{const B=typeof C=="function"?C(n):C;return u.createElement(L.Provider,{value:B},c)},u.createElement(F,{contexts:l},c=>e({...n,reactContext:{values:c,value:c[c.length-1]}}))))}}),p=t.createContext(void 0),f=t.createContext(void 0);function q(e,n){switch(n.type){case"authenticate":return{...e,authenticated:!0};case"deauthenticate":return{...e,authenticated:!1};default:return e}}const D=()=>{const e=t.useContext(p);if(e===void 0)throw new Error("useAuth must be used within a ExampleAuthContext Provider");return e},K=()=>{const e=t.useContext(f);if(e===void 0)throw new Error("useCount must be used within a CountContext Provider");return e},M=({children:e,authenticated:n})=>t.createElement(t.Fragment,null,t.createElement("div",{className:"font-sans max-w-sm rounded shadow-lg bg-white p-4 space-y-2"},e,t.createElement("h1",{id:"auth-status",className:`text-xl text-center p-4 m-0 ${n===!0?"text-green-400":"text-red-400"}`},n===!0?"Authenticated":"Unauthenticated"))),E=()=>{const{count:e}=K();return t.createElement("div",{className:"p-4 text-lg text-center",id:"count-status"},"Count: ",e)},s=({children:e})=>{const[n]=D();return t.createElement(M,{authenticated:n.authenticated},e)},g=e=>t.createElement("button",{type:"button",className:"border-none bg-gray-500 active:bg-gray-700 text-white rounded px-4 py-2",...e});E.__docgenInfo={description:"",methods:[],displayName:"CountContainer"};s.__docgenInfo={description:"",methods:[],displayName:"AuthContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"Button"};const y={authenticated:!1},Y={title:"storybook-react-context",decorators:[U],parameters:{layout:"centered",reactContext:{context:p}}},d={render:(e,{reactContext:n})=>{const[a,o]=t.useState(!1),[,r]=n.value;return t.useEffect(()=>{const i=setTimeout(()=>{r({type:"authenticate"}),o(!0)},2e3);return()=>clearTimeout(i)},[]),t.createElement(s,null,t.createElement("p",null,"Changing the context from story’s useEffect."),t.createElement("p",{className:"text-center text-gray-400",id:"loading-status"},a?"✅ Loaded":"⏳ Loading…"))},parameters:{reactContext:{contextValue:()=>t.useReducer(q,y)}}},m={render:(e,{reactContext:n})=>{const[[a,o],{increment:r}]=n.values;return t.createElement(t.Fragment,null,t.createElement(s,null,t.createElement(E,null),t.createElement("p",{className:"mb-5"},"Changing multiple contexts on interaction.")),t.createElement("div",{className:"p-4 space-x-2 text-center"},t.createElement(g,{id:"auth-toggle-button",onClick:()=>o({authenticated:!a.authenticated})},"Toggle auth"),t.createElement(g,{id:"count-button",onClick:r},"Increment count")))},parameters:{reactContext:{contexts:[{context:p,contextValue:()=>t.useState(y)},{context:f,contextValue:()=>{const[e,n]=t.useState(0);return{count:e,increment:()=>n(e+1)}}}]}}},h={render:()=>t.createElement(s,null,t.createElement("p",null,"Set static context from the story.")),parameters:{reactContext:{contextValue:[{authenticated:!0}]}}},x={render:()=>t.createElement(s,null,t.createElement(E,null),t.createElement("p",null,"Change context from Storybook Controls.")),argTypes:{authenticated:{name:"Authenticated",control:{type:"boolean"}},count:{name:"Count",control:{type:"number"}}},args:{...y,count:2},parameters:{reactContext:{contexts:[{context:p,contextValue:({args:e})=>[{authenticated:e.authenticated}]},{context:f,contextValue:({args:e})=>({count:e.count})}]}}};var S,b,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  // destructure the contextValue on story context to get the dispatch function
  render: (_, {
    reactContext
  }) => {
    const [loaded, setLoaded] = React.useState(false);
    const [, dispatch] = reactContext.value;
    React.useEffect(() => {
      // delay for 2 seconds before changing the state
      const id = setTimeout(() => {
        dispatch({
          type: 'authenticate'
        });
        setLoaded(true);
      }, 2000);
      return () => clearTimeout(id);
    }, []);
    return <AuthContainer>
        <p>Changing the context from story&rsquo;s useEffect.</p>
        <p className="text-center text-gray-400" id="loading-status">
          {loaded ? '✅ Loaded' : '⏳ Loading…'}
        </p>
      </AuthContainer>;
  },
  parameters: {
    reactContext: {
      // set context value to the result of useReducer to manage the state outside of the component
      contextValue: () => React.useReducer(authReducer, initialAuthState)
    }
  }
}`,...(v=(b=d.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var R,_,w;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  // destructure the context value to get the state and dispatch function
  render: (_, {
    reactContext
  }) => {
    const [[authState, setAuthState], {
      increment
    }] = reactContext.values;
    return <>
        <AuthContainer>
          <CountContainer />
          <p className="mb-5">Changing multiple contexts on interaction.</p>
        </AuthContainer>
        <div className="p-4 space-x-2 text-center">
          <Button id="auth-toggle-button" onClick={() => setAuthState({
          authenticated: !authState.authenticated
        })}>
            Toggle auth
          </Button>
          <Button id="count-button" onClick={increment}>
            Increment count
          </Button>
        </div>
      </>;
  },
  parameters: {
    reactContext: {
      // set context value to the result of setState to manage the state outside of the component
      contexts: [{
        context: AuthContext,
        contextValue: () => React.useState(initialAuthState)
      }, {
        context: CountContext,
        contextValue: () => {
          const [count, setCount] = React.useState(0);
          return {
            count,
            increment: () => setCount(count + 1)
          };
        }
      }]
    }
  }
}`,...(w=(_=m.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var N,V,I;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <AuthContainer>
      <p>Set static context from the story.</p>
    </AuthContainer>,
  parameters: {
    reactContext: {
      contextValue: [{
        authenticated: true
      }]
    }
  }
}`,...(I=(V=h.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var T,k,O;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <AuthContainer>
      <CountContainer />
      <p>Change context from Storybook Controls.</p>
    </AuthContainer>,
  argTypes: {
    authenticated: {
      name: 'Authenticated',
      control: {
        type: 'boolean'
      }
    },
    count: {
      name: 'Count',
      control: {
        type: 'number'
      }
    }
  },
  args: {
    ...initialAuthState,
    count: 2
  },
  parameters: {
    reactContext: {
      contexts: [
      // grab the args from the story context provided to the contextValue functions
      {
        context: AuthContext,
        contextValue: ({
          args
        }: {
          args: typeof initialAuthState;
        }) => [{
          authenticated: args.authenticated
        }]
      }, {
        context: CountContext,
        contextValue: ({
          args
        }: {
          args: {
            count: number;
          };
        }) => ({
          count: args.count
        })
      }]
    }
  }
}`,...(O=(k=x.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const $=["ChangeOnEffect","ChangeOnInteraction","StaticInitialContext","UpdateContextFromArgs"];export{d as ChangeOnEffect,m as ChangeOnInteraction,h as StaticInitialContext,x as UpdateContextFromArgs,$ as __namedExportsOrder,Y as default};
