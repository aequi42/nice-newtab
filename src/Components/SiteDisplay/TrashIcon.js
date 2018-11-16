import React from "react"
import trash from "./trash.svg"
import { Samy, SvgProxy } from 'react-samy-svg';
import { styled } from "reakit";

const TrashIcon = (props) => <Samy path={trash} className={props.className}>
    <SvgProxy selector=".lid" />
</Samy>

export const TrashIconWithHover = styled(TrashIcon)`
.line { stroke: #666; }
&:hover {
    filter: drop-shadow(white 0px 0px 4px);
    .line { stroke: #fff;}
    .lid { transform:translateY(-11px) translateX(7px) rotateZ(21deg); }
}
`
