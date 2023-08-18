import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import MessagingHorizontalMenu from '../../components/MessagingHorizontalMenu'

const MockedRouter = ({activeMessagingSection} : {activeMessagingSection : string}) => { 
    return(
        <BrowserRouter>
            <MessagingHorizontalMenu activeMessagingSection={activeMessagingSection}/>
        </BrowserRouter>
    )
}

describe('Given I am on the Messaging page', async () => {

    // to get around JSDom not handling the Dialog Element properly
    beforeAll(() => {
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()
    })

    test('The "new mail" button should be active if newmail is the active page', async () => {  
        render(<MockedRouter activeMessagingSection="newmail"/>)  
        await waitFor(() => expect(screen.getByText(/Send a New Message/i).classList.contains("messagingMenu__itemsActive")).toBeTruthy())
        expect(screen.getByText(/Your Messages/i).classList.contains("messagingMenu__itemsActive")).toBeFalsy()
        expect(screen.getByText(/Sent Messages/i).classList.contains("messagingMenu__itemsActive")).toBeFalsy()
    })

    test('The "inbox" button should be active if inbox is the active page', async () => {  
        render(<MockedRouter activeMessagingSection="inbox"/>)  
        await waitFor(() => expect(screen.getByText(/Your Messages/i).classList.contains("messagingMenu__itemsActive")).toBeTruthy())
        expect(screen.getByText(/Send a New Message/i).classList.contains("messagingMenu__itemsActive")).toBeFalsy()
        expect(screen.getByText(/Sent Messages/i).classList.contains("messagingMenu__itemsActive")).toBeFalsy()
    })

    test('The "inbox" button should be active if inbox is the active page', async () => {  
        render(<MockedRouter activeMessagingSection="sent"/>)  
        await waitFor(() => expect(screen.getByText(/Sent Messages/i).classList.contains("messagingMenu__itemsActive")).toBeTruthy())
        expect(screen.getByText(/Send a New Message/i).classList.contains("messagingMenu__itemsActive")).toBeFalsy()
        expect(screen.getByText(/Your Messages/i).classList.contains("messagingMenu__itemsActive")).toBeFalsy()
    })
})