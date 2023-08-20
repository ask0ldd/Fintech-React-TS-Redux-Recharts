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

describe('Given I am facing the inbox table', async () => { 

    beforeEach(() => {
        render(<MockedRouter/>) 
    })

    test('All the table headers should be in the doc', async () => {
        await waitFor(() => expect(screen.getByText('From')).toBeInTheDocument())
        expect(screen.getByText('Title')).toBeInTheDocument()
        expect(screen.getByText('Date')).toBeInTheDocument()
    })

    test('All the messages from the first page should be, by default, sorted by descending dates', async () => { 
        await waitFor(() => expect(screen.getByText('Jessy Trewartha')).toBeInTheDocument())
        const allDates = screen.getAllByText(/[0-9]{2}-[0-9]{2}-[0-9]{4}/i)
        for(let i=0; i<14; i++)
        {
            expect(dateToTime(allDates[i].innerHTML) - dateToTime(allDates[i+1].innerHTML)).toBeGreaterThanOrEqual(0)
        }
    })

    test('Clicking one time on "Date" should sort the table by ascending date', async () => {
        const dateTH =  screen.getByText("Date")
        act(() => dateTH.click())
        await waitFor(() => expect(screen.getByText('Archie Duncombe')).toBeInTheDocument())
        const allDates = screen.getAllByText(/[0-9]{2}-[0-9]{2}-[0-9]{4}/i)
        for(let i=0; i<14; i++)
        {
            expect(dateToTime(allDates[i].innerHTML) - dateToTime(allDates[i+1].innerHTML)).toBeLessThanOrEqual(0)
        }
    })

    test('Clicking one time on "From" should sort the table by sender : Alphabetic Order / Asc', async () => {
        const orderedSenders = ["Archie Duncombe", "Bambie Petera", "Barbette Long", "Bartolomeo Duncklee", "Beth Malenoir"]
        const fromTH =  screen.getByText("From")
        act(() => fromTH.click())
        const sendersNodes = orderedSenders.map(sender => screen.getByText(sender))
        for(let i=0; i<4; i++)
        {
            expect(sendersNodes[i].compareDocumentPosition(sendersNodes[i+1])).toBe(4)
        }
    })

    test('Clicking one time on "From" should sort the table by sender : Alphabetic Order / Desc', async () => {
        const orderedSenders = ["Vincents Calvert", "Vilhelmina Glaysher", "Ulrikaumeko Comi", "Tomaso Penton", "Theodor Vittet"]
        const fromTH =  screen.getByText("From")
        act(() => fromTH.click())
        await waitFor(() => expect(screen.getByText('Vincents Calvert')).toBeInTheDocument())
        const sendersNodes = orderedSenders.map(sender => screen.getByText(sender))
        for(let i=0; i<4; i++)
        {
            expect(sendersNodes[i].compareDocumentPosition(sendersNodes[i+1])).toBe(4)
        }
    })

    test('Clicking one time on "Title" should sort the table by title : Alphabetic Order / Asc', async () => {
        const orderedSenders = [
            "Cras in purus eu magna vulputate luctus.", 
            "Cras non velit nec nisi vulputate nonummy.", 
            "Donec semper sapien a libero.", 
            "In congue.",
            "In est risus, auctor sed, tristique in, tempus sit amet, sem.", 
        ]
        const fromTH =  screen.getByText("Title")
        act(() => fromTH.click())
        const sendersNodes = orderedSenders.map(sender => screen.getByText(sender))
        for(let i=0; i<4; i++)
        {
            expect(sendersNodes[i].compareDocumentPosition(sendersNodes[i+1])).toBe(4)
        }
    })

    test('Clicking one time on "Title" should sort the table by title : Alphabetic Order / Desc', async () => {
        const orderedSenders = [
            "Suspendisse potenti.", 
            "Sed vel enim sit amet nunc viverra dapibus.", 
            "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.", 
            "Proin at turpis a pede posuere nonummy.",
            "Praesent lectus.", 
        ]
        const fromTH =  screen.getByText("Title")
        act(() => fromTH.click())
        const sendersNodes = orderedSenders.map(sender => screen.getByText(sender))
        for(let i=0; i<4; i++)
        {
            expect(sendersNodes[i].compareDocumentPosition(sendersNodes[i+1])).toBe(4)
        }
    })

    test('The select all button and all the individual select buttons should be unchecked by default', async () => {
        expect(screen.queryByAltText("allSelectedV")).not.toBeInTheDocument()
        expect(screen.queryByAltText("selectedV")).not.toBeInTheDocument()
    })

    test('Clicking the select all button should select all mails', async () => {
        act(() => screen.getByText("Select All Mails").parentElement?.click())
        expect(screen.getAllByAltText("selectedV").length).toBe(15)
    })
    
    test('Clicking again the select all button should deselect all mails', async () => {
        act(() => screen.getByText("Select All Mails").parentElement?.click())
        expect(screen.queryByAltText("selectedV")).not.toBeInTheDocument()
    })

    test('Clicking some email select button should select the related email', async () => {
        const firstSelectBtn = screen.getByTestId('inboxbody').firstElementChild?.firstElementChild
        if(firstSelectBtn instanceof HTMLElement) act(() => firstSelectBtn.click())
        expect(screen.queryAllByAltText("selectedV").length).toBe(1)
    })

    test('Clicking the same button again should deselect the related email', async () => {
        const firstSelectBtn = screen.getByTestId('inboxbody').firstElementChild?.firstElementChild
        if(firstSelectBtn instanceof HTMLElement) act(() => firstSelectBtn.click())
        await waitFor(() => expect(screen.queryByAltText("selectedV")).not.toBeInTheDocument())
    })

    test('Clicking on an email delete button should lead to that email deletion', async () => {
        const dateTH =  screen.getByText("Date")
        act(() => dateTH.click())
        await waitFor(() => expect(screen.getByText('Jessy Trewartha')).toBeInTheDocument())
        expect(screen.getByText("Showing 1 to 15 of 45 emails")).toBeInTheDocument()
        const deleteButton = screen.getByText('Jessy Trewartha')?.parentElement?.lastElementChild as HTMLElement
        act(() => deleteButton.click())
        await waitFor(() => expect(screen.queryByText('Jessy Trewartha')).not.toBeInTheDocument())
        expect(screen.getByText("Showing 1 to 15 of 44 emails")).toBeInTheDocument()
    })

})

function dateToTime(date : string){
    const [month, day, year] = date.split('-')
    return new Date(parseInt(year), parseInt(month), parseInt(day)).getTime()
}
