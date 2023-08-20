import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import NewMessage from '../../components/Messaging/NewMessage'

describe('Given I am on the New Message Page', async () => {
    test('Key components are displayed', async () => {
        render(<NewMessage mailRecipient={{name:'john doe', pic: 'fillpic', title: 'mr'}}/>)
        await waitFor(() => expect(screen.getByText(/Compose your Email/i)).toBeInTheDocument())
        expect(screen.getByLabelText(/To :/i)).toHaveValue('john doe')
    })
})