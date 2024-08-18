import{R as s,r as t}from"./index-RYns6xqu.js";const{makeDecorator:W,useArgs:D}=__STORYBOOK_MODULE_PREVIEW_API__,K=({children:e,contexts:n})=>{const a=n.map(o=>s.useContext(o.context));return e(a)},M=W({name:"storybook-react-context",parameterName:"reactContext",wrapper:(e,n,{options:a,parameters:o})=>{const{contexts:c=[],context:i,contextValue:E}={...a,...o},l=[...c];if(i&&E&&l.push({context:i,contextValue:E}),!l.length)throw new Error("At least one context is required. Please provide it in decorator options or story parameters.\n        Either `contexts` for multiple contexts or both `context` and `contextValue` must be set.");return s.createElement(s.Fragment,null,l.reduceRight((u,{context:U,contextValue:S})=>{const q=typeof S=="function"?S({...n,useArgs:D}):S;return s.createElement(U.Provider,{value:q},u)},s.createElement(K,{contexts:l},u=>e({...n,reactContext:{values:u,value:u[u.length-1]}}))))}}),C=t.createContext(void 0),y=t.createContext(void 0);function Y(e,n){switch(n.type){case"authenticate":return{...e,authenticated:!0};case"deauthenticate":return{...e,authenticated:!1};default:return e}}const $=()=>{const e=t.useContext(C);if(e===void 0)throw new Error("useAuth must be used within a ExampleAuthContext Provider");return e},j=()=>{const e=t.useContext(y);if(e===void 0)throw new Error("useCount must be used within a CountContext Provider");return e},z=({children:e,authenticated:n})=>t.createElement(t.Fragment,null,t.createElement("div",{className:"font-sans max-w-sm rounded shadow-lg bg-white p-4 space-y-2"},e,t.createElement("h1",{id:"auth-status",className:`text-xl text-center p-4 m-0 ${n===!0?"text-green-400":"text-red-400"}`},n===!0?"Authenticated":"Unauthenticated"))),r=({children:e})=>{const[n]=$();return t.createElement(z,{authenticated:n.authenticated},e)};r.__docgenInfo={description:"",methods:[],displayName:"AuthStatus",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g=e=>t.createElement("button",{type:"button",className:"border-none bg-gray-500 active:bg-gray-700 text-white rounded px-4 py-2",...e});g.__docgenInfo={description:"",methods:[],displayName:"Button"};const f=()=>{const{count:e}=j();return t.createElement("div",{className:"p-4 text-lg text-center",id:"count-status"},"Count: ",e)};f.__docgenInfo={description:"",methods:[],displayName:"Counter"};const A={authenticated:!1},H={title:"storybook-react-context",decorators:[M],parameters:{layout:"centered",reactContext:{context:C}}},d={render:(e,{reactContext:n})=>{const[a,o]=t.useState(!1),[,c]=n.value;return t.useEffect(()=>{const i=setTimeout(()=>{c({type:"authenticate"}),o(!0)},2e3);return()=>clearTimeout(i)},[]),t.createElement(r,null,t.createElement("p",null,"Changing the context from story’s useEffect."),t.createElement("p",{className:"text-center text-gray-400",id:"loading-status"},a?"✅ Loaded":"⏳ Loading…"))},parameters:{reactContext:{contextValue:()=>t.useReducer(Y,A)}}},h={render:(e,{reactContext:n})=>{const[[a,o],{increment:c}]=n.values;return t.createElement(t.Fragment,null,t.createElement(r,null,t.createElement(f,null),t.createElement("p",{className:"mb-5"},"Changing multiple contexts on interaction.")),t.createElement("div",{className:"p-4 space-x-2 text-center"},t.createElement(g,{id:"auth-toggle-button",onClick:()=>o({authenticated:!a.authenticated})},"Toggle auth"),t.createElement(g,{id:"count-button",onClick:c},"Increment count")))},parameters:{reactContext:{contexts:[{context:C,contextValue:()=>t.useState(A)},{context:y,contextValue:()=>{const[e,n]=t.useState(0);return{count:e,increment:()=>n(e+1)}}}]}}},m={render:()=>t.createElement(r,null,t.createElement("p",null,"Set static context from the story.")),parameters:{reactContext:{contextValue:[{authenticated:!0}]}}},x={render:()=>t.createElement(r,null,t.createElement(f,null),t.createElement("p",null,"Change context from Storybook Controls.")),argTypes:{authenticated:{name:"Authenticated",control:{type:"boolean"}},count:{name:"Count",control:{type:"number"}}},args:{...A,count:2},parameters:{reactContext:{contexts:[{context:C,contextValue:({args:e})=>[{authenticated:e.authenticated}]},{context:y,contextValue:({args:e})=>({count:e.count})}]}}},p={render:(e,{reactContext:n})=>{const[a,o]=n.value;return t.createElement(t.Fragment,null,t.createElement(r,null,t.createElement("p",null,"Sync Storybook Controls with the context value using useArgs hook.")),t.createElement("div",{className:"p-4 space-x-2 text-center"},t.createElement(g,{id:"auth-toggle-button",onClick:()=>o({authenticated:!a.authenticated})},"Toggle auth")))},argTypes:{authenticated:{name:"Authenticated",control:{type:"boolean"}}},args:{authenticated:!0},parameters:{reactContext:{contextValue:({useArgs:e})=>e()}}};var b,v,_;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    return <AuthStatus>
        <p>Changing the context from story&rsquo;s useEffect.</p>
        <p className="text-center text-gray-400" id="loading-status">
          {loaded ? '✅ Loaded' : '⏳ Loading…'}
        </p>
      </AuthStatus>;
  },
  parameters: {
    reactContext: {
      // set context value to the result of useReducer to manage the state outside the component
      contextValue: () => React.useReducer(authReducer, initialAuthState)
    }
  }
}`,...(_=(v=d.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var R,w,k;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  // destructure the context value to get the state and dispatch function
  render: (_, {
    reactContext
  }) => {
    const [[authState, setAuthState], {
      increment
    }] = reactContext.values;
    return <>
        <AuthStatus>
          <Counter />
          <p className="mb-5">Changing multiple contexts on interaction.</p>
        </AuthStatus>
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
      // set context value to the result of setState to manage the state outside the component
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
}`,...(k=(w=h.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var N,V,T;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <AuthStatus>
      <p>Set static context from the story.</p>
    </AuthStatus>,
  parameters: {
    reactContext: {
      contextValue: [{
        authenticated: true
      }]
    }
  }
}`,...(T=(V=m.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var I,B,O;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <AuthStatus>
      <Counter />
      <p>Change context from Storybook Controls.</p>
    </AuthStatus>,
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
}`,...(O=(B=x.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var L,F,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (_, {
    reactContext
  }) => {
    const [authState, setAuthState] = reactContext.value;
    return <>
        <AuthStatus>
          <p>Sync Storybook Controls with the context value using useArgs hook.</p>
        </AuthStatus>
        <div className="p-4 space-x-2 text-center">
          <Button id="auth-toggle-button" onClick={() => setAuthState({
          authenticated: !authState.authenticated
        })}>
            Toggle auth
          </Button>
        </div>
      </>;
  },
  argTypes: {
    authenticated: {
      name: 'Authenticated',
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    authenticated: true
  },
  parameters: {
    reactContext: {
      // Set the context value to the result of Storybook's useArgs hook
      // which allows to access and update the args in the story
      contextValue: ({
        useArgs
      }) => useArgs()
    }
  }
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const J=["ChangeOnEffect","ChangeOnInteraction","StaticInitialContext","UpdateContextFromArgs","SyncStoryControlsWithContext"];export{d as ChangeOnEffect,h as ChangeOnInteraction,m as StaticInitialContext,p as SyncStoryControlsWithContext,x as UpdateContextFromArgs,J as __namedExportsOrder,H as default};
