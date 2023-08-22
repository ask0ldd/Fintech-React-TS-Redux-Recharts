import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import NewMessage from '../../components/Messaging/NewMessage'
import Messaging from '../../pages/Messaging'

/*describe('Given I am on the New Message Page', async () => {
    test('Key components are displayed', async () => {
        render(<NewMessage mailRecipient={{name:'john doe', pic: 'fillpic', title: 'mr'}}/>)
        await waitFor(() => expect(screen.getByText(/Compose your Email/i)).toBeInTheDocument())
        expect(screen.getByLabelText(/To :/i)).toHaveValue('john doe')
    })
})*/

const MockedRouter = () => { 
    return(
        <BrowserRouter>
            <Messaging/>
        </BrowserRouter>
    )
}

describe('Given I am on the Messaging Page', async () => {

    test('The new mail form & the contacts list should be displayed', async () => {
        vi.mock('react-router-dom', async () => {
            const OriginalModule : any  = await vi.importActual('react-router-dom')
            return {
                ...OriginalModule,
                useParams: () => ({id : "newmail"})
            }
        })

        render(<MockedRouter />)

        await waitFor(() => expect(screen.getByText(/Compose your Email/i)).toBeInTheDocument())
        expect(screen.getByText(/Contacts/i)).toBeInTheDocument()
        expect(screen.getByText('Send a New Message').classList.contains("messagingMenu__itemsActive")).toBeTruthy()
    })
})