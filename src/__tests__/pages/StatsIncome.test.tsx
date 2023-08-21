import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import Stats from '../../pages/Stats'

const MockedRouter = () => { 
    return(
        <BrowserRouter>
            <Stats/>
        </BrowserRouter>
    )
}

describe('Given I am on the Stats page / 3', async () => {

    beforeAll(() => {
        vi.mock('recharts', async () => {
            const OriginalModule = await vi.importActual<typeof import('recharts')>('recharts')
            return {
                ...OriginalModule,
                ResponsiveContainer: ({ children } : {children : any}) => (
                    <OriginalModule.ResponsiveContainer width={800} height={800}>
                        {children}
                    </OriginalModule.ResponsiveContainer>
                ),
            }
        })

        // to get around JSDom not handling the Dialog Element properly
        HTMLDialogElement.prototype.show = vi.fn()
        HTMLDialogElement.prototype.showModal = vi.fn()
        HTMLDialogElement.prototype.close = vi.fn()

        window.ResizeObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn(),
        }))

    })

    test('Clicking on the income button should display the related graph', async () => {

        // domock = mock but not hoisted      
        vi.mock('react-router-dom', async () => {
            const OriginalModule : any  = await vi.importActual('react-router-dom')
            return {
                ...OriginalModule,
                useParams: () => ({id : "income"})
            }
        })

        render(<MockedRouter />)

        await waitFor(() => expect(screen.getByText(/Monthly Income/i)).toBeInTheDocument())
        
    })
})