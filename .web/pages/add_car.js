/** @jsxImportSource @emotion/react */


import { ErrorBoundary } from "react-error-boundary"
import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "$/utils/state"
import { jsx, keyframes } from "@emotion/react"
import { CircleUserRoundIcon as LucideCircleUserRoundIcon, CloudIcon as LucideCloudIcon, FileUserIcon as LucideFileUserIcon, Layers2Icon as LucideLayers2Icon, PlusIcon as LucidePlusIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
  )
}

export function Root_d57a3efa39c0dbf8ab49daa0faeed5cd () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const ref_company = useRef(null); refs["ref_company"] = ref_company;
  const ref_car_model = useRef(null); refs["ref_car_model"] = ref_car_model;
  const ref_price = useRef(null); refs["ref_price"] = ref_price;
  const ref_image = useRef(null); refs["ref_image"] = ref_image;
  const ref_horse_power = useRef(null); refs["ref_horse_power"] = ref_horse_power;
  const ref_car_length = useRef(null); refs["ref_car_length"] = ref_car_length;
  const ref_car_width = useRef(null); refs["ref_car_width"] = ref_car_width;
  const ref_car_height = useRef(null); refs["ref_car_height"] = ref_car_height;
  const ref_seats = useRef(null); refs["ref_seats"] = ref_seats;
  const ref_doors = useRef(null); refs["ref_doors"] = ref_doors;
  const ref_acceleration_to_100 = useRef(null); refs["ref_acceleration_to_100"] = ref_acceleration_to_100;

  
    const handleSubmit_f9499084488772f72342bc88ef989c1b = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...({ ["price"] : getRefValue(refs["ref_price"]), ["car_model"] : getRefValue(refs["ref_car_model"]), ["image"] : getRefValue(refs["ref_image"]), ["car_length"] : getRefValue(refs["ref_car_length"]), ["car_height"] : getRefValue(refs["ref_car_height"]), ["car_width"] : getRefValue(refs["ref_car_width"]), ["seats"] : getRefValue(refs["ref_seats"]), ["company"] : getRefValue(refs["ref_company"]), ["horse_power"] : getRefValue(refs["ref_horse_power"]), ["doors"] : getRefValue(refs["ref_doors"]), ["acceleration_to_100"] : getRefValue(refs["ref_acceleration_to_100"]) })};

        (((...args) => (addEvents([(Event("reflex___state____state.drive_on___backend___add_car____add_car_state.handle_submit", ({ ["form_data"] : form_data }), ({  })))], args, ({  }))))());

        if (false) {
            $form.reset()
        }
    })
    




  
  return (
    <RadixFormRoot className={"Root "} css={({ ["width"] : "100%" })} onSubmit={handleSubmit_f9499084488772f72342bc88ef989c1b}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"4"}>

<RadixThemesTextField.Root id={"company"} name={"company"} placeholder={"company"} ref={ref_company}/>
<RadixThemesTextField.Root id={"car_model"} name={"car_model"} placeholder={"car_model"} ref={ref_car_model}/>
<RadixThemesTextField.Root id={"price"} name={"price"} placeholder={"price"} ref={ref_price}/>
<RadixThemesTextField.Root id={"image"} name={"image"} placeholder={"image"} ref={ref_image}/>
<RadixThemesTextField.Root id={"horse_power"} name={"horse_power"} placeholder={"horse_power"} ref={ref_horse_power}/>
<RadixThemesTextField.Root id={"car_length"} name={"car_length"} placeholder={"car_length"} ref={ref_car_length}/>
<RadixThemesTextField.Root id={"car_width"} name={"car_width"} placeholder={"car_width"} ref={ref_car_width}/>
<RadixThemesTextField.Root id={"car_height"} name={"car_height"} placeholder={"car_height"} ref={ref_car_height}/>
<RadixThemesTextField.Root id={"seats"} name={"seats"} placeholder={"seats"} ref={ref_seats}/>
<RadixThemesTextField.Root id={"doors"} name={"doors"} placeholder={"doors"} ref={ref_doors}/>
<RadixThemesTextField.Root id={"acceleration_to_100"} name={"acceleration_to_100"} placeholder={"acceleration_to_100"} ref={ref_acceleration_to_100}/>
<RadixThemesButton type={"submit"}>

{"Add Car"}
</RadixThemesButton>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Errorboundary_97bf3b2d051c1dc57886149dcf24b8ea () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  const on_error_0f5dbf674521530422d73a7946faf6d4 = useCallback(((_error, _info) => (addEvents([(Event("reflex___state____state.reflex___state____frontend_event_exception_state.handle_frontend_exception", ({ ["stack"] : _error["stack"], ["component_stack"] : _info["componentStack"] }), ({  })))], [_error, _info], ({  })))), [addEvents, Event])



  
  return (
    <ErrorBoundary fallbackRender={((event_args) => (jsx("div", ({ ["css"] : ({ ["height"] : "100%", ["width"] : "100%", ["position"] : "absolute", ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem" }) }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["flexDirection"] : "column", ["gap"] : "1rem", ["maxWidth"] : "50ch", ["border"] : "1px solid #888888", ["borderRadius"] : "0.25rem", ["padding"] : "1rem" }) }), (jsx("h2", ({ ["css"] : ({ ["fontSize"] : "1.25rem", ["fontWeight"] : "bold" }) }), (jsx(Fragment, ({  }), "An error occurred while rendering this page.")))), (jsx("p", ({ ["css"] : ({ ["opacity"] : "0.75" }) }), (jsx(Fragment, ({  }), "This is an error with the application itself.")))), (jsx("details", ({  }), (jsx("summary", ({ ["css"] : ({ ["padding"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Error message")))), (jsx("div", ({ ["css"] : ({ ["width"] : "100%", ["maxHeight"] : "50vh", ["overflow"] : "auto", ["background"] : "#000", ["color"] : "#fff", ["borderRadius"] : "0.25rem" }) }), (jsx("div", ({ ["css"] : ({ ["padding"] : "0.5rem", ["width"] : "fit-content" }) }), (jsx("pre", ({  }), (jsx(Fragment, ({  }), event_args.error.stack)))))))), (jsx("button", ({ ["css"] : ({ ["padding"] : "0.35rem 0.75rem", ["margin"] : "0.5rem", ["background"] : "#fff", ["color"] : "#000", ["border"] : "1px solid #000", ["borderRadius"] : "0.25rem", ["fontWeight"] : "bold" }), ["onClick"] : ((...args) => (addEvents([(Event("_call_function", ({ ["function"] : (() => (navigator["clipboard"]["writeText"](event_args.error.stack))), ["callback"] : null }), ({  })))], args, ({  })))) }), (jsx(Fragment, ({  }), "Copy")))))))), (jsx("hr", ({ ["css"] : ({ ["borderColor"] : "currentColor", ["opacity"] : "0.25" }) }))), (jsx("a", ({ ["href"] : "https://reflex.dev" }), (jsx("div", ({ ["css"] : ({ ["display"] : "flex", ["alignItems"] : "baseline", ["justifyContent"] : "center", ["fontFamily"] : "monospace", ["--default-font-family"] : "monospace", ["gap"] : "0.5rem" }) }), (jsx(Fragment, ({  }), "Built with ")), (jsx("svg", ({ ["css"] : ({ ["viewBox"] : "0 0 56 12", ["fill"] : "currentColor" }), ["height"] : "12", ["width"] : "56", ["xmlns"] : "http://www.w3.org/2000/svg" }), (jsx("path", ({ ["d"] : "M0 11.5999V0.399902H8.96V4.8799H6.72V2.6399H2.24V4.8799H6.72V7.1199H2.24V11.5999H0ZM6.72 11.5999V7.1199H8.96V11.5999H6.72Z" }))), (jsx("path", ({ ["d"] : "M11.2 11.5999V0.399902H17.92V2.6399H13.44V4.8799H17.92V7.1199H13.44V9.3599H17.92V11.5999H11.2Z" }))), (jsx("path", ({ ["d"] : "M20.16 11.5999V0.399902H26.88V2.6399H22.4V4.8799H26.88V7.1199H22.4V11.5999H20.16Z" }))), (jsx("path", ({ ["d"] : "M29.12 11.5999V0.399902H31.36V9.3599H35.84V11.5999H29.12Z" }))), (jsx("path", ({ ["d"] : "M38.08 11.5999V0.399902H44.8V2.6399H40.32V4.8799H44.8V7.1199H40.32V9.3599H44.8V11.5999H38.08Z" }))), (jsx("path", ({ ["d"] : "M47.04 4.8799V0.399902H49.28V4.8799H47.04ZM53.76 4.8799V0.399902H56V4.8799H53.76ZM49.28 7.1199V4.8799H53.76V7.1199H49.28ZM47.04 11.5999V7.1199H49.28V11.5999H47.04ZM53.76 11.5999V7.1199H56V11.5999H53.76Z" }))))))))))))))} onError={on_error_0f5dbf674521530422d73a7946faf6d4}>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox css={({ ["backgroundColor"] : "#151419", ["height"] : "100vh", ["color"] : "white" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>

<Fragment>

<RadixThemesBox css={({ ["margin"] : "10px", ["backgroundColor"] : "#1f1e25", ["width"] : "300px", ["height"] : "90vh", ["borderRadius"] : "10px", ["border"] : "1px solid #403f44" })}>

<RadixThemesFlex css={({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "center" })} direction={"column"} gap={"4"}>

<RadixThemesText as={"p"} css={({ ["color"] : "white", ["marginBottom"] : "20px", ["marginTop"] : "10px" })} size={"8"} weight={"bold"}>

{"DriveOn"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#e8ea00", ["marginBottom"] : "20px" })} size={"8"} weight={"bold"}>

{"Admin Panel"}
</RadixThemesText>
<RadixThemesLink asChild={true} css={({ ["width"] : "250px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/admin"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["backgroundColor"] : "#151419", ["border"] : "1px solid #403f44", ["padding"] : "10px 20px 10px 20px", ["alignItems"] : "center", ["justifyContent"] : "flex-start", ["borderRadius"] : "5px" })} direction={"row"} gap={"3"}>

<LucideLayers2Icon css={({ ["color"] : "white" })} size={20}/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"6"} weight={"bold"}>

{"Main"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "250px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/add_car"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["backgroundColor"] : "#151419", ["border"] : "1px solid #403f44", ["padding"] : "10px 20px 10px 20px", ["alignItems"] : "center", ["justifyContent"] : "flex-start", ["borderRadius"] : "5px" })} direction={"row"} gap={"3"}>

<LucidePlusIcon css={({ ["color"] : "white" })} size={20}/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"6"} weight={"bold"}>

{"Add Car"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "250px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/carapplication"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["backgroundColor"] : "#151419", ["border"] : "1px solid #403f44", ["padding"] : "10px 20px 10px 20px", ["alignItems"] : "center", ["justifyContent"] : "flex-start", ["borderRadius"] : "5px" })} direction={"row"} gap={"3"}>

<LucideFileUserIcon css={({ ["color"] : "white" })} size={20}/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"6"} weight={"bold"}>

{"Applications"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
<RadixThemesLink asChild={true} css={({ ["width"] : "250px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })}>

<NextLink href={"/admin_support"} passHref={true}>

<RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["width"] : "100%", ["backgroundColor"] : "#151419", ["border"] : "1px solid #403f44", ["padding"] : "10px 20px 10px 20px", ["alignItems"] : "center", ["justifyContent"] : "flex-start", ["borderRadius"] : "5px" })} direction={"row"} gap={"3"}>

<LucideCircleUserRoundIcon css={({ ["color"] : "white" })} size={20}/>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"6"} weight={"bold"}>

{"Support"}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
</Fragment>
<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["color"] : "white", ["textAlign"] : "center", ["alignItems"] : "center", ["marginLeft"] : "50%" })} direction={"row"} gap={"3"}>

<LucideCloudIcon css={({ ["color"] : "var(--current-color)" })}/>
<RadixThemesText as={"p"}>

{"Moscow"}
</RadixThemesText>
<RadixThemesText as={"p"}>

{"-1 \u00b0C"}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
<RadixThemesHeading>

{"Add Car"}
</RadixThemesHeading>
<Root_d57a3efa39c0dbf8ab49daa0faeed5cd/>
</RadixThemesFlex>
</RadixThemesBox>
<NextHead>

<title>

{"Add Car"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</ErrorBoundary>
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

export default function Component() {
    




  return (
    <Errorboundary_97bf3b2d051c1dc57886149dcf24b8ea/>
  )
}
