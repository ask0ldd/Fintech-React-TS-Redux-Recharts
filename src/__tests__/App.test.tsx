import { render, screen, renderHook, act, waitFor, cleanup } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import App from "../App"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
// import matchers from '@testing-library/jest-dom/matchers'

const MockedRouter = () => { 
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

describe('Given I am on the Landing page', async () => {

    // to get around JSDom not handling the Dialog Element properly
    beforeAll(() => {
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()
    })

    beforeEach(() => {
        // window.onload = vi.fn((e) => window.onload)
        vi.spyOn(window, 'setTimeout')
        render(<MockedRouter />)
        
    })

    test('All main container components should be displayed', async () => {  
        await waitFor( () => expect(screen.getByText(/Balance/i)).toBeInTheDocument())
        expect(screen.getByText(/Credit Cards/i)).toBeInTheDocument()
        expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument()
        expect(screen.getByText(/Cryptos/i)).toBeInTheDocument()
        expect(screen.getByText(/Recurring Debits/i)).toBeInTheDocument()
        expect(screen.getByText(/Last Transactions/i)).toBeInTheDocument()
        expect(screen.getByText(/Montana/i)).toBeInTheDocument()
    })

    test('The vertical menu should be displayed w/ all its items', async () => {
        await waitFor( () => expect(screen.getByAltText("home menu item")).toBeInTheDocument())
        expect(screen.getByAltText("stats menu item")).toBeInTheDocument()
        expect(screen.getByAltText("chat menu item")).toBeInTheDocument()
        expect(screen.getByAltText("settings menu item")).toBeInTheDocument()
        expect(screen.getByAltText("accounts menu item")).toBeInTheDocument()
        expect(screen.getByAltText("dark mode menu item")).toBeInTheDocument()
    })

    test('4 Contacts should be displayed in Quick Wire Transfer Contacts List', async() => {
        await waitFor(() => expect(screen.getAllByTestId("transferQuickContact").length).toBe(4))
        expect(screen.getAllByTestId("transferBlankContact").length).toBe(1)
    })

    // should move all the following tests to modal contents?
    test('Clicking the button next to the QWT Contacts List should open a modal with 4 selected / 4 unselected contacts', async() => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("xButton"))[0]
        
        act(() => addContactButton.click())
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())

        const modal = screen.queryByTestId("modal")
        expect(modal?.querySelectorAll("button.greenButton").length).toBe(4)
        expect(modal?.querySelectorAll("button.violetButton").length).toBe(4)
        expect(screen.getByText(/4 contacts selected/i)).toBeInTheDocument()
    })

    
    test('Clicking on an unselected contact should add a contact to the quicklist', async () => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("xButton"))[0]
        
        act(() => addContactButton.click())
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())

        const modal = screen.queryByTestId("modal")
        const allButtons = screen.queryAllByRole("button")
        let buttonClicked = false
        allButtons.forEach(button => {
            if(button.classList.contains("violetButton") && button.parentElement?.classList.contains("recipientRow") && buttonClicked === false) {
                button.click()
                buttonClicked = true
            }
        })
        await waitFor(() => expect(modal?.querySelectorAll("button.greenButton").length).toBe(5))
        expect(modal?.querySelectorAll("button.violetButton").length).toBe(3)
        expect(screen.getByText(/5 contacts selected/i)).toBeInTheDocument()
    })

    test('Clicking on a selected contact should remove a contact to the quicklist', async () => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("xButton"))[0]
        
        act(() => addContactButton.click())
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())

        const modal = screen.queryByTestId("modal")

        const allButtons = screen.queryAllByRole("button")
        let buttonClicked : HTMLElement
        allButtons.forEach(button => {
            if(button.classList.contains("greenButton") && button.parentElement?.classList.contains("recipientRow") && buttonClicked == null) {
                buttonClicked = button
                act(() => buttonClicked.click())
            }
        })
        await waitFor(() => expect(modal?.querySelectorAll("button.greenButton").length).toBe(3))
        expect(modal?.querySelectorAll("button.violetButton").length).toBe(5)
        expect(screen.getByText(/3 contacts selected/i)).toBeInTheDocument()
        act(() => buttonClicked.click())
        await waitFor(() => expect(modal?.querySelectorAll("button.greenButton").length).toBe(4))
        expect(modal?.querySelectorAll("button.violetButton").length).toBe(4)
        expect(screen.getByText(/4 contacts selected/i)).toBeInTheDocument()
    })


    test('Clicking the "confirm your selection" button should close the modal', async () => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error since we are testing it's missing
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("xButton"))[0]
        act(() => addContactButton.click())
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())
        act(() => screen.getByText(/Confirm Your Selection/i).click())
        await waitFor(() => expect(screen.queryByTestId("modal")).not.toBeInTheDocument())
    })

    test('Clicking the button next to the QWT Amount should open a modal of transfer confirmation', async() => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("vButton"))[0]
        
        act(() => addContactButton.click())
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())

        expect(screen.getByText(/Transfer Confirmation/i)).toBeInTheDocument()
    })

    test('Clicking the "confirm this transfer" button should close the modal', async () => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error since we are testing it's missing
        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("vButton"))[0]
        act(() => addContactButton.click())
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())
        // screen.logTestingPlaygroundURL()
        act(() => screen.getByText(/Confirm This Transfer/i).click())
        // await waitFor(() => expect(screen.getByText(/Transfer Confirmation/i)).toBeNull)
        await waitFor(() => expect(screen.queryByTestId("modal")).not.toBeInTheDocument())
    })

    test('onload has been called', async() => {
        window.dispatchEvent(new Event('load'))
        await waitFor(() => expect(window.setTimeout).toHaveBeenCalled())
        // !!! onload not covered
    })

})

// https://dev.to/mbarzeev/from-jest-to-vitest-migration-and-benchmark-23pl