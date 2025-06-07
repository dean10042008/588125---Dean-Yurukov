import { useEffect, useState } from "react";

const Tickets = () => {
    const [tickets, setTickets] = useState([]);

    async function getTickets() {
        const req = await fetch("http://localhost:4000/tickets");
        const tickets = await req.json();
        setTickets(tickets);
    }


    useEffect(() => {
        getTickets();
    }, []);

    return (
        <section id="tickets">
            <article>
                <hr />
                <h3>Kупи билет</h3>
            </article>

            <article>
                {
                    tickets.map(ticket => (
                        <section>
                            <article>
                                <p>изложба иван милев //
                                    <br /> 1 юли – 12 август 2025  //
                                    <br /> TATE Modern, Лондон</p>

                                <h5>£{ticket.price}</h5>
                            </article>

                            <article>
                                <h6>{ticket.name}</h6>
                                <button>купи билет</button>
                            </article>
                        </section>
                    ))
                }
            </article>

            <article>
                <p>
                    Адрес:
                    <br /> TATE Modern,
                    <br /> Bankside, London SE1 9TG
                </p>
                <p>
                    Работно време:
                    <br /> Пон–Нед: 10:00 – 18:00 ч.
                </p>
                <p>
                    С транспорт:
                    <br /> Метро: St. Paul’s или Southwark
                    <br /> Автобуси: 45, 63, 100
                </p>
                <p>
                    С колело:
                    <br /> Има стойки за велосипеди
                    <br /> Достъпно за хора с увреждания
                </p>
            </article>
        </section>
    );
}

export default Tickets;