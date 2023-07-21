import React from "react"

export default function DigitArr(): React.JSX.Element[] {
    const digits: React.JSX.Element[] = []

    for(let i = 0; i < 10; i++) {
        digits.push(<button key={i}>{i}</button>)
    }
    digits.push(<button key={0}>{0}</button>)

    return digits
}