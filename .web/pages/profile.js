/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { HouseIcon as LucideHouseIcon, MessageCircleQuestionIcon as LucideMessageCircleQuestionIcon, SearchIcon as LucideSearchIcon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { AlertDialog as RadixThemesAlertDialog, Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextLink from "next/link"
import NextHead from "next/head"



export function Textfield__root_cd92ccaddc8aae6fb10358057ad12818 () {
  
  const reflex___state____state__drive_on___state____user_data = useContext(StateContexts.reflex___state____state__drive_on___state____user_data)





  
  return (
    <RadixThemesTextField.Root name={"name"} placeholder={"Your name"} value={reflex___state____state__drive_on___state____user_data.username}/>
  )
}

export function Fragment_f2f0916d2fcc08b7cdf76cec697f0750 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <Fragment>

{isTrue((connectErrors.length > 0)) ? (
  <Fragment>

<LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Heading_195b1065b03a0153b4b5de5082bea1fb () {
  
  const reflex___state____state__drive_on___state____user_data = useContext(StateContexts.reflex___state____state__drive_on___state____user_data)





  
  return (
    <RadixThemesHeading>

{reflex___state____state__drive_on___state____user_data.username}
</RadixThemesHeading>
  )
}

export function Text_33eb061b86ed2018127af7fd97813f22 () {
  
  const reflex___state____state__drive_on___state____user_data = useContext(StateContexts.reflex___state____state__drive_on___state____user_data)





  
  return (
    <RadixThemesText as={"p"}>

{reflex___state____state__drive_on___state____user_data.mail}
</RadixThemesText>
  )
}

export function Errorboundary_7e90299c6fb688ac1b7dbba48b738966 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox>

<RadixThemesBox css={({ ["color"] : "white", ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesBox>

<RadixThemesBox css={({ ["background"] : "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://media.architecturaldigest.com/photos/5ced629704c41e1a9b9a8bcf/16:9/w_2560%2Cc_limit/Bugatti-LVN-7%2520%255BBugatti%255D.jpg')", ["backgroundSize"] : "cover", ["backgroundPosition"] : "center", ["height"] : "35vh", ["width"] : "100%" })}/>
<RadixThemesBox>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["flexDirection"] : "column" })}>

<Heading_195b1065b03a0153b4b5de5082bea1fb/>
<Text_33eb061b86ed2018127af7fd97813f22/>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["marginTop"] : "30px" })}>

<RadixThemesText as={"p"} css={({ ["fontSize"] : "15px", ["alignItems"] : "center", ["alignSelf"] : "center", ["textAlign"] : "center" })}>

{"Support Team will help with your problem!"}
</RadixThemesText>
<RadixThemesFlex>

<RadixThemesBox>

<RadixThemesAlertDialog.Root>

<RadixThemesAlertDialog.Trigger>

<RadixThemesButton css={({ ["width"] : "30px", ["height"] : "30px" })}>

<LucideMessageCircleQuestionIcon css={({ ["color"] : "var(--current-color)" })} size={26}/>
<RadixThemesText as={"p"} size={"4"}>

{"Support"}
</RadixThemesText>
</RadixThemesButton>
</RadixThemesAlertDialog.Trigger>
<RadixThemesAlertDialog.Content css={({ ["maxWidth"] : "450px" })}>

<RadixThemesAlertDialog.Title>

{"Write a message"}
</RadixThemesAlertDialog.Title>
<RadixThemesAlertDialog.Description>

{"Need help? Write a message and we will contact you as soon as possible."}
</RadixThemesAlertDialog.Description>
<Root_935821e892a98ccbe7409e8e4870936b/>
</RadixThemesAlertDialog.Content>
</RadixThemesAlertDialog.Root>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox/>
</RadixThemesBox>
<Fragment>

<RadixThemesBox css={({ ["position"] : "fixed", ["bottom"] : "30px", ["left"] : "50%", ["transform"] : "translate(-50%, 0)", ["width"] : "50%", ["height"] : "70px", ["borderRadius"] : "50px", ["alignItems"] : "center", ["justifyContent"] : "center", ["alignSelf"] : "center", ["zIndex"] : "99", ["backgroundColor"] : "#232323" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["align-items"] : "center", ["justify-content"] : "center", ["padding"] : "8px", ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesLink asChild={true} css={({ ["background-color"] : "#e8ea00", ["border-radius"] : "50%", ["padding"] : "16px", ["color"] : "#272727", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/main"} passHref={true}>

<LucideHouseIcon css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["background-color"] : "#e8ea00", ["border-radius"] : "50%", ["padding"] : "16px", ["color"] : "#272727", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/search"} passHref={true}>

<LucideSearchIcon css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["background-color"] : "#e8ea00", ["border-radius"] : "50%", ["padding"] : "16px", ["color"] : "#272727", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/profile"} passHref={true}>

<LucideUserIcon css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesBox>
</Fragment>
</RadixThemesBox>
</RadixThemesBox>
<NextHead>

<title>

{"Profile"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
  )
}

export function Textfield__root_5ec88443a3b6c406cea4697270afbc6e () {
  
  const reflex___state____state__drive_on___state____user_data = useContext(StateContexts.reflex___state____state__drive_on___state____user_data)





  
  return (
    <RadixThemesTextField.Root name={"mail"} placeholder={"Your mail"} value={reflex___state____state__drive_on___state____user_data.mail}/>
  )
}

export function Toaster_6e6ebf8d7ce589d59b7d382fb7576edf () {
  
  const { resolvedColorMode } = useContext(ColorModeContext)

  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))




  
  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Root_935821e892a98ccbe7409e8e4870936b () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  
    const handleSubmit_57ce0a58a4209340687838e5bc1ae717 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({  })};

        (((...args) => (addEvents([(Event("reflex___state____state.drive_on___pages___profile____support_state.handle_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))());

        if (true) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_57ce0a58a4209340687838e5bc1ae717}>

<RadixThemesFlex direction={"column"} gap={"4"}>

<Textfield__root_cd92ccaddc8aae6fb10358057ad12818/>
<Textfield__root_5ec88443a3b6c406cea4697270afbc6e/>
<RadixThemesTextField.Root name={"phone"} placeholder={"Phone Number"}/>
<RadixThemesFlex justify={"end"} gap={"3"}>

<RadixThemesAlertDialog.Cancel>

<RadixThemesButton color={"gray"} variant={"soft"}>

{"Cancel"}
</RadixThemesButton>
</RadixThemesAlertDialog.Cancel>
<RadixThemesAlertDialog.Action>

<RadixThemesButton type={"submit"}>

{"Submit"}
</RadixThemesButton>
</RadixThemesAlertDialog.Action>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_7e90299c6fb688ac1b7dbba48b738966/>
  )
}
