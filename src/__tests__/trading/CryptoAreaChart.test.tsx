import { render, screen, renderHook, act, waitFor, fireEvent } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import { ResponsiveContainer } from 'recharts'
import userEvent from '@testing-library/user-event'
import CryptoAreaChart, { CustomTooltip } from '../../components/Trading/CryptoAreaChart'

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
        render(<CryptoAreaChart/>)
        await waitFor(() => expect(screen.getByRole('region')).toBeInTheDocument())
        expect(screen.getByText(/BTC Value/i)).toBeInTheDocument()
        
    })

    test('Tooltip component displays the payload values', async()=> {
        render(<CustomTooltip payload={[{value:"000"}]} />)
        await waitFor(() => expect(screen.getByText(/Income : 000/i)).toBeInTheDocument())
    })
})