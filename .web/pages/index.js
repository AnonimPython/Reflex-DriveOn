/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { ArrowRightIcon as LucideArrowRightIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Container as RadixThemesContainer, Flex as RadixThemesFlex, Link as RadixThemesLink, Strong as RadixThemesStrong, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



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

export function Link_8509dde6e98b3308c33736df58bb9bfa () {
  





  
  return (
    <RadixThemesLink asChild={true} css={({ ["color"] : "#9c9c9c", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })} target={(false ? "_blank" : "")}>

<NextLink href={"/login"} passHref={true}>

<LucideArrowRightIcon css={({ ["color"] : "black" })}/>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {
    




  return (
    <Fragment>

<Fragment>

<Div_602c14884fa2de27f522fe8f94374b02/>
<Toaster_6e6ebf8d7ce589d59b7d382fb7576edf/>
</Fragment>
<RadixThemesBox>

<RadixThemesBox css={({ ["@media screen and (min-width: 0)"] : ({ ["display"] : "block" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 48em)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 62em)"] : ({ ["display"] : "none" }) })}>

<RadixThemesBox css={({ ["background"] : "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://wallpapers.com/images/hd/dodge-challenger-4k-441zr63yqu5ad0kh.jpg')", ["backgroundSize"] : "cover", ["backgroundPosition"] : "center", ["height"] : "70vh", ["width"] : "100%" })}/>
<RadixThemesContainer css={({ ["padding"] : "16px" })} size={"3"}>

<RadixThemesBox>

<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"8"}>

{"Find Your "}
<RadixThemesStrong css={({ ["color"] : "#e8ea00" })}>

{"Perfect"}
</RadixThemesStrong>
</RadixThemesText>
<RadixThemesText as={"p"} css={({ ["color"] : "white" })} size={"8"}>

{"Car Today!"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesFlex css={({ ["alignSelf"] : "center" })} justify={"between"}>

<RadixThemesBox css={({ ["marginTop"] : "30px", ["width"] : "50%" })}>

<RadixThemesText as={"p"} css={({ ["color"] : "#9c9c9c" })} size={"3"}>

{"Start your journey with the cor you've always wanted-explore top deals"}
</RadixThemesText>
</RadixThemesBox>
<RadixThemesBox css={({ ["marginTop"] : "40px" })}>

<RadixThemesBox css={({ ["padding"] : "15px", ["borderRadius"] : "50%", ["border"] : "1px solid #272727", ["alignItems"] : "center", ["background"] : "#e8ea00" })}>

<Link_8509dde6e98b3308c33736df58bb9bfa/>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesContainer>
</RadixThemesBox>
</RadixThemesBox>
<NextHead>

<title>

{"Index"}
</title>
<meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
