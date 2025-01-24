/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { LockIcon as LucideLockIcon, MailIcon as LucideMailIcon, ShieldCheckIcon as LucideShieldCheckIcon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import NextLink from "next/link"
import NextHead from "next/head"



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

export function Errorboundary_2e59b2fa488d2eb3c56224af9ae90fb4 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesBox css={({ ["background"] : "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://i.pinimg.com/736x/11/02/16/110216d5acf68a8e414d89479609c3b3.jpg')", ["backgroundSize"] : "cover", ["backgroundPosition"] : "center", ["height"] : "30vh", ["width"] : "100%" })}/>
<RadixThemesBox css={({ ["alignItems"] : "center", ["alignSelf"] : "center", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "white", ["fontSize"] : "30px" })}>

{"Register "}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#e8ea00", ["fontSize"] : "30px" })} weight={"bold"}>

{"To Drive Your Dreem"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox>

<Root_05004503d930ad3e9505d275a1d3ffb4/>
</RadixThemesBox>
</RadixThemesBox>
<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["margin-top"] : "10%" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["color"] : "white" })} direction={"row"} gap={"3"}>

<RadixThemesText as={"p"}>

{"Have account?"}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["color"] : "#e8ea00", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/login"} passHref={true}>

{"Login"}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Register"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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

export function Root_05004503d930ad3e9505d275a1d3ffb4 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const ref_username = useRef(null); refs["ref_username"] = ref_username;
  const ref_mail = useRef(null); refs["ref_mail"] = ref_mail;
  const ref_password = useRef(null); refs["ref_password"] = ref_password;
  const ref_confirm_password = useRef(null); refs["ref_confirm_password"] = ref_confirm_password;

  
    const handleSubmit_55bf6cf74c2c3873939687e508981d15 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["password"] : getRefValue(refs["ref_password"]), ["confirm_password"] : getRefValue(refs["ref_confirm_password"]), ["mail"] : getRefValue(refs["ref_mail"]), ["username"] : getRefValue(refs["ref_username"]) })};

        (((...args) => (addEvents([(Event("reflex___state____state.drive_on___state____user_data.drive_on___pages___register____register.handle_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))());

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%", ["margin-top"] : "10%" })} onSubmit={handleSubmit_55bf6cf74c2c3873939687e508981d15}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["gap"] : "20px" })} direction={"column"} gap={"3"}>

<RadixThemesTextField.Root css={({ ["width"] : "300px", ["height"] : "50px", ["--text-field-focus-color"] : "#e8ea00", ["background"] : "#414141", ["color"] : "white", ["& input::placeholder"] : ({ ["color"] : "white" }), ["font-size"] : "20px" })} id={"username"} maxLength={12} name={"username"} placeholder={"Username"} radius={"large"} ref={ref_username}>

<RadixThemesTextField.Slot css={({ ["color"] : "white" })}>

<LucideUserIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
</RadixThemesTextField.Root>
<RadixThemesTextField.Root css={({ ["width"] : "300px", ["height"] : "50px", ["--text-field-focus-color"] : "#e8ea00", ["background"] : "#414141", ["color"] : "white", ["& input::placeholder"] : ({ ["color"] : "white" }), ["font-size"] : "20px" })} id={"mail"} name={"mail"} placeholder={"Mail"} radius={"large"} ref={ref_mail}>

<RadixThemesTextField.Slot css={({ ["color"] : "white" })}>

<LucideMailIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
</RadixThemesTextField.Root>
<RadixThemesTextField.Root css={({ ["width"] : "300px", ["height"] : "50px", ["--text-field-focus-color"] : "#e8ea00", ["background"] : "#414141", ["color"] : "white", ["& input::placeholder"] : ({ ["color"] : "white" }), ["font-size"] : "20px" })} id={"password"} name={"password"} placeholder={"Password"} radius={"large"} ref={ref_password}>

<RadixThemesTextField.Slot css={({ ["color"] : "white" })}>

<LucideLockIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
</RadixThemesTextField.Root>
<RadixThemesTextField.Root css={({ ["width"] : "300px", ["height"] : "50px", ["--text-field-focus-color"] : "#e8ea00", ["background"] : "#414141", ["color"] : "white", ["& input::placeholder"] : ({ ["color"] : "white" }), ["font-size"] : "20px", ["border"] : "red" })} id={"confirm_password"} name={"confirm_password"} placeholder={"Confirm Password"} radius={"large"} ref={ref_confirm_password}>

<RadixThemesTextField.Slot css={({ ["color"] : "white" })}>

<LucideShieldCheckIcon css={({ ["color"] : "var(--current-color)" })}/>
</RadixThemesTextField.Slot>
</RadixThemesTextField.Root>
<RadixThemesButton css={({ ["width"] : "300px", ["height"] : "50px", ["font-size"] : "20px", ["alignSelf"] : "center", ["alignItems"] : "center", ["backgroundColor"] : "#e8ea00", ["color"] : "black" })} type={"submit"}>

<RadixThemesText as={"p"}>

{"Register"}
</RadixThemesText>
</RadixThemesButton>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_2e59b2fa488d2eb3c56224af9ae90fb4/>
  )
}
