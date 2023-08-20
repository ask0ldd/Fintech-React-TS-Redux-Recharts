import { render, screen, renderHook, act, waitFor, fireEvent } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import App from "../App"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'

const MockedRouter = () => { 
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}

describe('Given I am in the App Page', async () => {

    // to get around JSDom not handling the Dialog Element properly
    beforeAll(() => {
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()
    })

    beforeEach(() => {
        render(<MockedRouter />)
    })

    test('there should be no modal visible by default', async () => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() 
    })

    test('Clicking the button next to the QWT Contacts List should open a modal'), async() => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error

        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("xButton"))[0]
        act(() => addContactButton.click())

        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())   
    }

    test('Clicking the ESC key should close the modal'), async() => {
        await waitFor(() => expect(screen.getByText(/Quick Wire Transfer/i)).toBeInTheDocument())
        expect(screen.queryByTestId("modal")).not.toBeInTheDocument() // !!! querybytestid or it will throw an error

        const addContactButton = screen.getAllByRole("button").filter(button => button.classList.contains("xButton"))[0]
        act(() => addContactButton.click())
        
        await waitFor(() => expect(screen.getByTestId("modal")).toBeInTheDocument())
        
        act(() => fireEvent.click(window, {key : 'Escape',  code: 'Escape'}))
        await waitFor(() => expect(screen.queryByTestId("modal")).not.toBeInTheDocument())
    }
})