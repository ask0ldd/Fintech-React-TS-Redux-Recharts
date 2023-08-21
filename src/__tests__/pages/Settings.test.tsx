import { render, screen, renderHook, act, waitFor, cleanup } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import Settings from '../../pages/Settings'
// import matchers from '@testing-library/jest-dom/matchers'

const MockedRouter = () => { 
    return(
        <BrowserRouter>
            <Settings/>
        </BrowserRouter>
    )
}

describe('Given I am on the Settings page', async () => {

    // to get around JSDom not handling the Dialog Element properly
    beforeAll(() => {
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()
    })

    beforeEach(() => {
        render(<MockedRouter />)
        
    })

    test('The right components are displayed', async () => {  
        await waitFor( () => expect(screen.getByText(/About You/i)).toBeInTheDocument())
        expect(screen.getByText(/Your Bank/i)).toBeInTheDocument()
        expect(screen.getByText(/Contactless Payment/i)).toBeInTheDocument()
        expect(screen.getAllByText(/Quick Freeze/i)[0]).toBeInTheDocument()
    })

    test('The quick deactivation button works', async() => {
        const quickfreezeHeadings = screen.getAllByText(/Quick Freeze/i)
        quickfreezeHeadings.forEach(
            async heading => {
                const onOffLabel = heading.parentElement?.parentElement?.querySelector('span.onOff__label') as HTMLElement
                const switchContainer = heading.parentElement?.parentElement?.querySelector('div.switchContainer') as HTMLElement
                expect(onOffLabel.innerHTML).toBe("Off")
                expect(switchContainer?.children[0].classList.contains("deactivatedSwitch"))
                act(() => switchContainer.click())
                await waitFor(() => expect(onOffLabel.innerHTML).toBe("On"))
                expect(switchContainer?.children[0].classList.contains("switch"))
            }
        )
    })

})