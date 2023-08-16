import { render, screen, renderHook, act, waitFor, fireEvent } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import BalanceBarsChart from '../../components/Stats/BalanceBarsChart'
import { ResponsiveContainer } from 'recharts'
import userEvent from '@testing-library/user-event'

import { datas } from '../../pages/Stats'

describe('Given : the BalanceBarsChart is rendered with 12 months of datas', async () => {
    
    beforeAll(()=>{
        // taking the whole recharts module and mocking only the responsive container to fix its dimensions
        // if dimensions are not fixed, recharts will render nothing into it
        vi.mock('recharts', async () => {
            const OriginalModule : any  = await vi.importActual('recharts')
            return {
                ...OriginalModule,
                ResponsiveContainer: ({ children } : {children : any}) => (
                    <OriginalModule.ResponsiveContainer width={800} height={800}>
                        {children}
                    </OriginalModule.ResponsiveContainer>
                ),
            }
        })

        window.ResizeObserver = vi.fn().mockImplementation(() => ({
            observe: vi.fn(),
            unobserve: vi.fn(),
            disconnect: vi.fn(),
        }))
    })

    test('The Title & the Legend should be displayed', async () => {
        render(<BalanceBarsChart datas={datas} />)
        await waitFor(() => expect(screen.getByRole('region')).toBeInTheDocument())
        expect(screen.getByText(/In & Out/i)).toBeInTheDocument()
        expect(screen.getByText(/Income/i)).toBeInTheDocument()
        expect(screen.getByText(/Expenses/i)).toBeInTheDocument()
    })

    test('24 chart Bars should be displayed', async()=> {
        render(<BalanceBarsChart datas={datas} />)
        await waitFor(() => expect(screen.getByRole('region')).toBeInTheDocument())
        const regionContainer = screen.getByRole('region')
        expect(regionContainer.querySelectorAll('g.recharts-bar-rectangle').length).toBe(24)
    })

    // !!! hover issue to fix
    test('The tooltip dialog should exist but should not be displayed', async()=> {
        render(<BalanceBarsChart datas={datas} />)
        await waitFor(() => expect(screen.getByRole('region')).toBeInTheDocument())
        const regionContainer = screen.getByRole('region')
        expect(regionContainer.querySelector('div.recharts-tooltip-wrapper')).toBeInTheDocument()
        expect(regionContainer.querySelector('div.recharts-tooltip-wrapper')).not.toBeVisible()
        // fireEvent.mouseOver(regionContainer.querySelectorAll('g.recharts-bar-rectangle')[0])
        // userEvent.hover(regionContainer.querySelectorAll('g.recharts-bar-rectangle')[0])
        /*const Tooltip : HTMLElement | null = regionContainer.querySelector('div.recharts-tooltip-wrapper')
        
        if(Tooltip != null) {
            Tooltip.style.pointerEvents = "auto"
            const user = userEvent.setup()
            user.hover(Tooltip)
            await waitFor(() =>  expect(regionContainer.querySelector('div.recharts-tooltip-wrapper')).toBeVisible())
            // userEvent.hover(regionContainer)
            // await waitFor(() => expect(screen.getByText(/3952/i)).toBeInTheDocument())
        }*/
        // screen.logTestingPlaygroundURL()
    })
})