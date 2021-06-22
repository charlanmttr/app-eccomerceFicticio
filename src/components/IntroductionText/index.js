import React from 'react'
import { IntroductionText } from './styles'

export default function Introduction({ text }) {
    return (
        <IntroductionText.Area>
            <IntroductionText>{text}</IntroductionText>
        </IntroductionText.Area>
    )
}
