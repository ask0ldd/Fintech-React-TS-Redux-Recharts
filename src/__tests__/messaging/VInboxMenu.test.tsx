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

    test('Clicking on the "file attachment" button should filter out all mails with no attachment', async () => {
        expect(screen.getByText("Jessy Trewartha")).toBeInTheDocument()
        expect(screen.getAllByTestId("attachment icon").length).toBe(6)
        const inboxMenuButtons = screen.getAllByRole("button")
        const attachmentFilteringButton = inboxMenuButtons.filter( button => button.id == "attachmentFilterButton")[0]
        expect(attachmentFilteringButton).not.toBeNull()
        // [!] click function not defined on a svg proto > use dispatchEvent instead
        act(() => attachmentFilteringButton.dispatchEvent(new MouseEvent('click', {bubbles: true})))
        await waitFor(() => expect(screen.queryByText("Jessy Trewartha")).not.toBeInTheDocument())
        const attachmentIcons = screen.getAllByTestId("attachment icon")
        const inboxBody = screen.getByTestId("inboxbody")
        expect(attachmentIcons.length === inboxBody.children.length).toBeTruthy()
    })

    test('Clicking on the delete mail button without any selected email should has no effect', async () => {
        const inboxMenuButtons = screen.getAllByRole("button")
        const deleteMailButton = inboxMenuButtons.filter( button => button.id == "deleteSelectedMailsButton")[0]
        expect(deleteMailButton).not.toBeNull()
        deleteMailButton.onclick = vi.fn((e) => deleteMailButton.onclick)
        act(() => deleteMailButton.dispatchEvent(new MouseEvent('click', {bubbles: true})))
        await waitFor(() => expect(deleteMailButton.onclick).toHaveBeenCalledOnce())
        const senders = ["Bambie Petera", "Lyon Grigorkin", "Vincents Calvert", "Lois Wedlake", "Sheryl De Bernardi", 
        "Doreen Tripcony", "Cicely Croxley", "Theodor Vittet", "Ella Lucken", "Con Hasnney", "Padgett Jays", "Ulrikaumeko Comi",
        "Pearline Stenning", "Archie Duncombe"]
        senders.forEach(sender => expect(screen.getByText(sender)).toBeInTheDocument())
    })

    test('Clicking on the delete mail button with an email selected should have lead to one less email being displayed', async () => {
        expect(screen.getByText("Bambie Petera")).toBeInTheDocument()
        expect(screen.getByText("Showing 1 to 14 of 14 emails")).toBeInTheDocument()
        const selectBambieCheckboxTD = screen.getByText("Bambie Petera").parentElement?.childNodes[0] as HTMLElement
        act(() => selectBambieCheckboxTD.click())
        const inboxMenuButtons = screen.getAllByRole("button")
        const deleteMailButton = inboxMenuButtons.filter( button => button.id == "deleteSelectedMailsButton")[0]
        deleteMailButton.onclick = vi.fn((e) => deleteMailButton.onclick)
        act(() => deleteMailButton.dispatchEvent(new MouseEvent('click', {bubbles: true})))
        await waitFor(() => expect(screen.getByText("Showing 1 to 13 of 13 emails")).toBeInTheDocument())
        expect(deleteMailButton.onclick).toHaveBeenCalledOnce()
    })

    // mark as read text
})