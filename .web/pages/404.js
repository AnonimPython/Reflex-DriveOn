/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import { useClientSideRouting } from "$/utils/client_side_routing"
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

export function Div_602c14884fa2de27f522fe8f94374b02 () {
  
  const [addEvents, connectErrors] = useContext(EventLoopContext);





  
  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>

<Fragment_f2f0916d2fcc08b7cdf76cec697f0750/>
</div>
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


export default function Component() {
    
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const routeNotFound = useClientSideRouting()



  return (
    <Fragment>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<Fragment>

{isTrue(routeNotFound) ? (
  <Fragment>

<RadixThemesFlex align={"center"} className={"rx-Stack"} css={({ ["minHeight"] : "100vh", ["background"] : "radial-gradient(circle at center, #F7FAFC, #EDF2F7)" })} direction={"column"} justify={"center"} gap={"2"}>

<RadixThemesBox css={({ ["padding"] : "2em" })}>

<RadixThemesHeading css={({ ["fontSize"] : "-2em", ["background"] : "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)", ["backgroundClip"] : "text", ["color"] : "transparent", ["fontWeight"] : "bold" })}>

{"404"}
</RadixThemesHeading>
<RadixThemesText as={"p"} css={({ ["fontSize"] : "1.5em", ["color"] : "#4A5568", ["marginTop"] : "1em" })}>

{"Page not found"}
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "#718096", ["marginTop"] : "0.5em" })}>

{"Sorry, we cannot find the page you are looking for."}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesButton color={"blue"} css={({ ["marginTop"] : "2em" })} onClick={((...args) => (addEvents([(Event("_redirect", ({ ["path"] : "/tours", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))} size={"3"} variant={"solid"}>

{"Go back"}
</RadixThemesButton>
</RadixThemesFlex>
</Fragment>
) : (
  <Fragment>


</Fragment>
)}
</Fragment>
<NextHead>

<title>

{"404 - Page not found"}
</title>
<meta content={"The page was not found"} name={"description"}/>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
