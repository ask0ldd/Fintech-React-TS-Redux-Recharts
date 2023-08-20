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
        // [!] click function not defined on a svg proto > use dispatchEvent instead
        act(() => attachmentFilteringButton.dispatchEvent(new MouseEvent('click', {bubbles: true})))
        await waitFor(() => expect(screen.queryByAltText("Jessy Trewartha")).not.toBeInTheDocument())
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
        expect(screen.getByText("Bambie Petera")).toBeInTheDocument()
        expect(screen.getByText("Lyon Grigorkin")).toBeInTheDocument()
        expect(screen.getByText("Vincents Calvert")).toBeInTheDocument()
        expect(screen.getByText("Lois Wedlake")).toBeInTheDocument()
        expect(screen.getByText("Sheryl De Bernardi")).toBeInTheDocument()
        expect(screen.getByText("Doreen Tripcony")).toBeInTheDocument()
        expect(screen.getByText("Cicely Croxley")).toBeInTheDocument()
        expect(screen.getByText("Theodor Vittet")).toBeInTheDocument()
        expect(screen.getByText("Ella Lucken")).toBeInTheDocument()
        expect(screen.getByText("Con Hasnney")).toBeInTheDocument()
        expect(screen.getByText("Padgett Jays")).toBeInTheDocument()
        expect(screen.getByText("Ulrikaumeko Comi")).toBeInTheDocument()
        expect(screen.getByText("Pearline Stenning")).toBeInTheDocument()
        expect(screen.getByText("Archie Duncombe")).toBeInTheDocument()
    })

    test('Clicking on the delete mail button without any selected email should have no effect', async () => {
        expect(screen.getByText("Bambie Petera")).toBeInTheDocument()
        const selectBambieCheckbox = screen.getByText("Bambie Petera").parentElement?.firstElementChild
    })

})