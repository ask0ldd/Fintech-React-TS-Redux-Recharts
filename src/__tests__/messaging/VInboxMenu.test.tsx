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

    test('The Inbox Menu should be displayed', async () => {
        await waitFor(() => expect(screen.getByText('From')).toBeInTheDocument())
        const allInboxPageButtons = screen.getAllByRole("button")
        const inboxMenuButtons = allInboxPageButtons.filter(button => button.parentElement?.classList.contains("vinboxMenu__container"))
        expect(inboxMenuButtons.length).toBe(4)
    })

    test('Clicking on the file attachment button should filter out all the mails with no attachment', async () => {
        expect(screen.getByText("Jessy Trewartha")).toBeInTheDocument()
        expect(screen.getAllByTestId("attachment icon").length).toBe(6)
        const inboxMenuButtons = screen.getAllByRole("button")
        const attachmentFilteringButton = inboxMenuButtons.filter( button => button.id == "attachmentFilterButton")[0]
        expect(attachmentFilteringButton).not.toBeNull()
        console.log('attachement :' , attachmentFilteringButton)
        // click function not defined on a svg
        act(() => attachmentFilteringButton.dispatchEvent(new MouseEvent('click', {bubbles: true})))
        await waitFor(() => expect(screen.queryByAltText("Jessy Trewartha")).not.toBeInTheDocument())
        const attachmentIcons = screen.getAllByTestId("attachment icon")
        const inboxBody = screen.getByTestId("inboxbody")
        expect(attachmentIcons.length === inboxBody.children.length).toBeTruthy()
    })



})