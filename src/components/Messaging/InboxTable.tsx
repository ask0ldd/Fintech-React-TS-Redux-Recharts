import '../../styles/InboxTable.css'

function InboxTable(){
    return(
        <article className="inboxEmailsList__container">
            <table>
                <thead>
                    <tr>
                        <th></th><th>From</th><th>Title</th><th>Date</th><th className='delete'></th>
                    </tr>
                </thead>
                <tbody>
                    {emails.slice(0, 14).map((email, index) => 
                    <tr key={"tremail"+index}>
                        <td className='checkboxCell'><input type="checkbox"/></td><td className='from'>{email.sender}</td><td>{email.title}</td><td>{email.date}</td><td style={{display:'flex', height:'37px', justifyContent:'center', alignItems:'center'}}className='delete'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg></td>
                    </tr>)}
                </tbody>
            </table>
        </article>
    )
}

export default InboxTable

const emails = [{"id":1,"sender":"Brion Probets","title":"Nullam molestie nibh in lectus.","date":"2023-03-23"},
{"id":2,"sender":"Angel Tooting","title":"Proin risus.","date":"2022-12-06"},
{"id":3,"sender":"Dredi Struys","title":"Proin interdum mauris non ligula pellentesque ultrices.","date":"2023-05-04"},
{"id":4,"sender":"Tammie Dewane","title":"Etiam faucibus cursus urna.","date":"2023-05-19"},
{"id":5,"sender":"Conrado Janicki","title":"Aliquam sit amet diam in magna bibendum imperdiet.","date":"2022-09-28"},
{"id":6,"sender":"Gabrielle Barrett","title":"Aenean sit amet justo.","date":"2022-09-15"},
{"id":7,"sender":"Errol Sinnat","title":"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","date":"2022-08-28"},
{"id":8,"sender":"Reena Ouslem","title":"Donec ut dolor.","date":"2023-02-09"},
{"id":9,"sender":"Ethelbert Sidden","title":"Nullam porttitor lacus at turpis.","date":"2022-08-03"},
{"id":10,"sender":"Maurise Houndesome","title":"Suspendisse potenti.","date":"2022-11-23"},
{"id":11,"sender":"Perren Snap","title":"Morbi ut odio.","date":"2022-09-15"},
{"id":12,"sender":"Jenifer Hargey","title":"Suspendisse potenti.","date":"2023-05-03"},
{"id":13,"sender":"Dee Thurborn","title":"Mauris lacinia sapien quis libero.","date":"2022-08-27"},
{"id":14,"sender":"Edmon Kleinsmuntz","title":"Cras non velit nec nisi vulputate nonummy.","date":"2022-09-15"},
{"id":15,"sender":"Raquel Gimson","title":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.","date":"2023-05-21"},
{"id":16,"sender":"Valeda Fryd","title":"Fusce consequat.","date":"2022-09-19"},
{"id":17,"sender":"Carlita Smitham","title":"Etiam vel augue.","date":"2023-01-06"},
{"id":18,"sender":"Rebeka Ludlem","title":"Donec ut mauris eget massa tempor convallis.","date":"2022-08-30"},
{"id":19,"sender":"Drusie Buckell","title":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","date":"2023-07-06"},
{"id":20,"sender":"Charlotte Aickin","title":"Integer ac neque.","date":"2023-06-25"},
{"id":21,"sender":"Alanna Crix","title":"Etiam faucibus cursus urna.","date":"2023-05-07"},
{"id":22,"sender":"Briant Gauvain","title":"Quisque ut erat.","date":"2022-09-29"},
{"id":23,"sender":"Cam Glanert","title":"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","date":"2023-03-06"},
{"id":24,"sender":"Harlin Lowsely","title":"Duis mattis egestas metus.","date":"2023-07-01"},
{"id":25,"sender":"Tammy Caddens","title":"Praesent blandit lacinia erat.","date":"2022-08-29"},
{"id":26,"sender":"Giselle Zaniolini","title":"Praesent id massa id nisl venenatis lacinia.","date":"2022-10-28"},
{"id":27,"sender":"Elias Ivachyov","title":"Duis bibendum.","date":"2022-10-11"},
{"id":28,"sender":"Tyson Meredyth","title":"In eleifend quam a odio.","date":"2023-06-20"},
{"id":29,"sender":"Wood Clemot","title":"In hac habitasse platea dictumst.","date":"2023-06-25"},
{"id":30,"sender":"Roberto Imorts","title":"Donec ut mauris eget massa tempor convallis.","date":"2023-05-13"},
{"id":31,"sender":"Abbott Port","title":"Duis aliquam convallis nunc.","date":"2022-08-10"},
{"id":32,"sender":"Hans Hugonnet","title":"Phasellus sit amet erat.","date":"2022-11-13"},
{"id":33,"sender":"Pru Cockrill","title":"Phasellus id sapien in sapien iaculis congue.","date":"2023-01-31"},
{"id":34,"sender":"Sheela Baselio","title":"Cras pellentesque volutpat dui.","date":"2023-05-01"},
{"id":35,"sender":"Katerina Newcombe","title":"Duis mattis egestas metus.","date":"2023-04-04"},
{"id":36,"sender":"Amalea Derisly","title":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","date":"2023-03-01"},
{"id":37,"sender":"Susanna Glanister","title":"Vestibulum ac est lacinia nisi venenatis tristique.","date":"2022-11-16"},
{"id":38,"sender":"Uta Ferry","title":"Etiam pretium iaculis justo.","date":"2022-11-01"},
{"id":39,"sender":"Maynard Titchener","title":"Nulla tempus.","date":"2023-04-13"},]