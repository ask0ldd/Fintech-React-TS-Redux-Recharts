import { render, screen, renderHook, act, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import { expect, vi, describe, test, beforeAll, beforeEach } from 'vitest'
import InboxTable from '../../components/messaging/InboxTable'
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

describe('Given I am facing the inbox table', async () => { 

    beforeEach(() => {
        render(<MockedRouter/>) 
    })

    test('The Pagination bar should display the following buttons by default : [1] [2] [Next] and [1] should be selected', async()=>{
        await waitFor(() => expect(screen.getByText("Jessy Trewartha")).toBeInTheDocument())
        const nextButton = screen.getByText("Next")
        const allPaginationButtons = nextButton.parentElement?.children
        expect(allPaginationButtons?.item(0)?.innerHTML).toBe("1")
        expect(allPaginationButtons?.item(1)?.innerHTML).toBe("2")
        expect(allPaginationButtons?.item(2)?.innerHTML).toBe("Next")
    })

    test('After clicking [Next], the Pagination bar should display the following buttons : [Prev] [1] [2] [3] [Next] & [2] should be selected', async()=>{

        await waitFor(() => expect(screen.getByText("Jessy Trewartha")).toBeInTheDocument())
        const nextButton = screen.getByText("Next")
        const allPaginationButtons = nextButton.parentElement?.children
        expect(allPaginationButtons?.item(0)?.innerHTML).toBe("1")
        expect(allPaginationButtons?.item(1)?.innerHTML).toBe("2")
        expect(allPaginationButtons?.item(2)?.innerHTML).toBe("Next")

    })/*

    test('After clicking [Prev], the Pagination bar should display the following buttons by default : [1] [2] [Next] and [1] should be selected', async()=>{

    })

    test('Button : Delete Selected Email', async()=>{

    })

    test('Button : Set selected Email as Read', async()=>{

    })
*/
})

function dateToTime(date : string){
    const [month, day, year] = date.split('-')
    return new Date(parseInt(year), parseInt(month), parseInt(day)).getTime()
}
