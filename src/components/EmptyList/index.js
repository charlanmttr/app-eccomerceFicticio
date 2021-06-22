import React from 'react'
import { EmptyCartArea } from './styles'

export default function EmptyList({ text }) {
    return (
        <EmptyCartArea>
            <EmptyCartArea.Text>
                {text}
            </EmptyCartArea.Text>
        </EmptyCartArea>
    )
}
