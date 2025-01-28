/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { ArrowRightIcon as LucideArrowRightIcon, HouseIcon as LucideHouseIcon, SearchIcon as LucideSearchIcon, UserIcon as LucideUserIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Flex as RadixThemesFlex, Link as RadixThemesLink, ScrollArea as RadixThemesScrollArea, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



export function Text_29baa859d222136567f3da982789b137 () {
  
  const reflex___state____state__drive_on___state____user_data = useContext(StateContexts.reflex___state____state__drive_on___state____user_data)





  
  return (
    <RadixThemesText as={"p"} css={({ ["align-items"] : "center", ["align-self"] : "center", ["font-size"] : "20px", ["color"] : "white" })}>

{("Hey! "+reflex___state____state__drive_on___state____user_data.username)}
</RadixThemesText>
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

export function Errorboundary_f8bd76b831afe3529fb2b044f599d87e () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox css={({ ["background"] : "#151716", ["height"] : "100vh" })}>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesBox css={({ ["padding"] : "1em" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["align-items"] : "center", ["align-self"] : "center" })} direction={"row"} justify={"between"} gap={"3"}>

<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<img css={({ ["height"] : "50px", ["width"] : "50px", ["borderRadius"] : "50%" })} src={"https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Neo2.jpg/274px-Neo2.jpg"}/>
<Text_29baa859d222136567f3da982789b137/>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesBox css={({ ["padding"] : "15px", ["borderRadius"] : "50%", ["border"] : "1px solid #272727", ["width"] : "fit-content", ["height"] : "fit-content", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "transparent" })}>

<RadixThemesLink asChild={true} css={({ ["color"] : "#9c9c9c", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/search"} passHref={true}>

<LucideSearchIcon css={({ ["color"] : "var(--current-color)" })}/>
</NextLink>
</RadixThemesLink>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesContainer css={({ ["padding"] : "16px", ["margin"] : "10px" })} size={"3"}>

<RadixThemesBox>

<RadixThemesText as={"p"} css={({ ["color"] : "#9c9c9c" })}>

{"What do you want to do"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"8"} weight={"bold"}>

{"Ride today?"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["marginTop"] : "20px" })}>

<RadixThemesScrollArea>

<RadixThemesFlex css={({ ["gap"] : "10px" })}>

<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"All"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"BMW"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"Ford"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"Chevrolet"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"Toyota"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"Honda"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"Nissan"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"Audi"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
<Fragment>

<RadixThemesButton css={({ ["background"] : "#e8ea00", ["color"] : "black", ["borderRadius"] : "30px", ["padding"] : "20px", ["textAlign"] : "center" })}>

<RadixThemesText as={"p"}>

{"Mercedes"}
</RadixThemesText>
</RadixThemesButton>
</Fragment>
</RadixThemesFlex>
</RadixThemesScrollArea>
</RadixThemesBox>
</RadixThemesContainer>
<RadixThemesBox css={({ ["width"] : "100%", ["marginTop"] : "30px" })}>

<Fragment>

<RadixThemesBox css={({ ["position"] : "relative", ["width"] : "100%", ["height"] : "322px", ["overflow"] : "hidden" })}>

<img css={({ ["width"] : "100%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"https://images.unsplash.com/photo-1530906358829-e84b2769270f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBsYW1ib3JnaGluaXxlbnwwfHwwfHx8MA%3D%3D"}/>
<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.5)", ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["right"] : "0", ["bottom"] : "0" })}/>
<RadixThemesBox css={({ ["color"] : "white", ["position"] : "absolute", ["top"] : "24%", ["left"] : "25%", ["transform"] : "translate(-50%, -50%)", ["zIndex"] : "2" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["marginBottom"] : "30px" })} size={"3"}>

{"Lamborghini"}
</RadixThemesText>
<RadixThemesText as={"p"} size={"8"} weight={"bold"}>

{"Huracan"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["color"] : "white", ["position"] : "absolute", ["top"] : "70%", ["left"] : "9%", ["zIndex"] : "2" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["color"] : "#9c9c9c" })} size={"4"}>

{"Rent Price"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"6"}>

{"$2000"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox>

<RadixThemesBox css={({ ["padding"] : "15px", ["borderRadius"] : "50%", ["border"] : "1px solid #272727", ["alignItems"] : "center", ["background"] : "#e8ea00", ["position"] : "absolute", ["top"] : "74%", ["left"] : "78%", ["zIndex"] : "2" })}>

<Link_ba14b7dcd4d4bff60c87e3770ac773e3/>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</Fragment>
<Fragment>

<RadixThemesBox css={({ ["position"] : "relative", ["width"] : "100%", ["height"] : "322px", ["overflow"] : "hidden" })}>

<img css={({ ["width"] : "100%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"https://wallpapers.com/images/hd/red-smoke-black-lamborghini-9akg35f0l55h1wh9.jpg"}/>
<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.5)", ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["right"] : "0", ["bottom"] : "0" })}/>
<RadixThemesBox css={({ ["color"] : "white", ["position"] : "absolute", ["top"] : "24%", ["left"] : "25%", ["transform"] : "translate(-50%, -50%)", ["zIndex"] : "2" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["marginBottom"] : "30px" })} size={"3"}>

{"Lamborghini"}
</RadixThemesText>
<RadixThemesText as={"p"} size={"8"} weight={"bold"}>

{"Huracan"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["color"] : "white", ["position"] : "absolute", ["top"] : "70%", ["left"] : "9%", ["zIndex"] : "2" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["color"] : "#9c9c9c" })} size={"4"}>

{"Rent Price"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"6"}>

{"$2500"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox>

<RadixThemesBox css={({ ["padding"] : "15px", ["borderRadius"] : "50%", ["border"] : "1px solid #272727", ["alignItems"] : "center", ["background"] : "#e8ea00", ["position"] : "absolute", ["top"] : "74%", ["left"] : "78%", ["zIndex"] : "2" })}>

<Link_ba14b7dcd4d4bff60c87e3770ac773e3/>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</Fragment>
<Fragment>

<RadixThemesBox css={({ ["position"] : "relative", ["width"] : "100%", ["height"] : "322px", ["overflow"] : "hidden" })}>

<img css={({ ["width"] : "100%", ["height"] : "100%", ["objectFit"] : "cover" })} src={"https://gateauto.ru/upload/resize_cache/iblock/752/678_423_2/ixbfkr745ee0ykz31q9yv3zw6l6lj27g.webp"}/>
<RadixThemesBox css={({ ["background"] : "rgba(0, 0, 0, 0.5)", ["position"] : "absolute", ["top"] : "0", ["left"] : "0", ["right"] : "0", ["bottom"] : "0" })}/>
<RadixThemesBox css={({ ["color"] : "white", ["position"] : "absolute", ["top"] : "24%", ["left"] : "25%", ["transform"] : "translate(-50%, -50%)", ["zIndex"] : "2" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["marginBottom"] : "30px" })} size={"3"}>

{"Ferrari"}
</RadixThemesText>
<RadixThemesText as={"p"} size={"8"} weight={"bold"}>

{"Encho"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox css={({ ["color"] : "white", ["position"] : "absolute", ["top"] : "70%", ["left"] : "9%", ["zIndex"] : "2" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%" })} direction={"row"} gap={"3"}>

<RadixThemesBox>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<RadixThemesText as={"p"} css={({ ["color"] : "#9c9c9c" })} size={"4"}>

{"Rent Price"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"6"}>

{"$3300"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesBox>
<RadixThemesBox>

<RadixThemesBox css={({ ["padding"] : "15px", ["borderRadius"] : "50%", ["border"] : "1px solid #272727", ["alignItems"] : "center", ["background"] : "#e8ea00", ["position"] : "absolute", ["top"] : "74%", ["left"] : "78%", ["zIndex"] : "2" })}>

<Link_ba14b7dcd4d4bff60c87e3770ac773e3/>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesBox>
</Fragment>
</RadixThemesBox>
<RadixThemesBox>

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
</RadixThemesBox>
<NextHead>

<title>

{"Main"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Link_ba14b7dcd4d4bff60c87e3770ac773e3 () {
  





  
  return (
    <RadixThemesLink css={({ ["color"] : "#9c9c9c", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} href={"#"} target={(false ? "_blank" : "")}>

<LucideArrowRightIcon css={({ ["color"] : "black" })}/>
</RadixThemesLink>
  )
}

export default function Component() {
    




  return (
    <Errorboundary_f8bd76b831afe3529fb2b044f599d87e/>
  )
}
