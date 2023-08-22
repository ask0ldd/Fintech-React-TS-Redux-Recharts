import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import InboxTable from '../../components/Messaging/InboxTable'
import Messaging from '../../pages/Messaging'
import { Provider } from 'react-redux'
import store from '../../redux/store'

const MockedRouter = () => { 
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Messaging/>
            </BrowserRouter>
        </Provider>
    )
}

describe('Given Im facing the Inbox Table', async () => { 

    beforeEach(() => {
        render(<MockedRouter/>) 
    })

    test('Clicking on the "unread emails only" button should filter out all read emails', async () => {
        const first5ExpectedSenders = ["Jessy Trewartha", "Lyon Grigorkin", "Livvie Knoble", "Vincents Calvert", "Mathilda Gerritsma"]
        first5ExpectedSenders.forEach(emailSender => expect(screen.getByText(emailSender)).toBeInTheDocument())
        const inboxMenuButtons = screen.getAllByRole("button")
        const unreadEmailsFilteringButton = inboxMenuButtons.filter( button => button.id == "notReadFilterButton")[0]
        expect(unreadEmailsFilteringButton).not.toBeNull()
        // [!] click function not defined on a svg proto > use dispatchEvent instead
        act(() => unreadEmailsFilteringButton.dispatchEvent(new MouseEvent('click', {bubbles: true})))
        await waitFor(() => expect(screen.queryByText("Jessy Trewartha")).not.toBeInTheDocument())
        const unreadEmailsExpectedSenders = ["Vincents Calvert", "Mathilda Gerritsma", "Lauryn Willmot", "Bartolomeo Duncklee", "Sky Fader"]
        unreadEmailsExpectedSenders.forEach(emailSender => expect(screen.getByText(emailSender)).toBeInTheDocument())
    })

    // mark as read test
})