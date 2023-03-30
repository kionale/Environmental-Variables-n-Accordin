import { useState } from "react";

export default function Accordin({
    term,
    code,
    title,
    credits,
    description
}) {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            Term:{term}
            <div onClick={() => setIsActive(!isActive)}>
                {code}
                {title}
                {credits}
                <div>{isActive ? "^" : "↓"}</div>
                {isActive && <iv>{description}</iv>}
            </div>
        </>
    )
}