import '../../styles/InboxTable.css'

function InboxTable(){
    return(
        <article className="inboxEmailsList__container">
            <table>
                <thead>
                    <tr>
                        <th>From</th><th>Title</th><th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Conseiller</td><td>Your credit card is close to its expiration date</td><td>12 - 05 - 2023</td>
                    </tr>
                    <tr>
                        <td>Conseiller</td><td>Your credit card is close to its expiration date</td><td>12 - 05 - 2023</td>
                    </tr>
                    <tr>
                        <td>Conseiller</td><td>Your credit card is close to its expiration date</td><td>12 - 05 - 2023</td>
                    </tr>
                    <tr>
                        <td>Conseiller</td><td>Your credit card is close to its expiration date</td><td>12 - 05 - 2023</td>
                    </tr>
                </tbody>
            </table>
        </article>
    )
}

export default InboxTable