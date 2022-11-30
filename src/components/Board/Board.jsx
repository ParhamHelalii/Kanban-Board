import React, { useContext } from 'react'
import { BoardContext } from '../../context/BoardContext'
import Ticket from '../Ticket/Ticket'
import './Board.scss'

const Board = () => {
    const { currentProject } = useContext(BoardContext)

    return (
        <div className='board'>
            {currentProject.board.map((column) => {
                return (
                    <div className='board-column'>
                        <div className='board-title'>
                            <div
                                className={`board-title-icon ${column.name}`}
                            ></div>
                            <h4 className='heading-s'>{column.name}</h4>
                        </div>
                        {column.tickets.map((ticket) => {
                            return <Ticket data={ticket} />
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board

{
    /* <div className="board-column">
<div className="board-title">
  <div className="board-title-icon Todo"></div>
  <h4 className="heading-s">Todo</h4>
</div>
<Ticket data={testTicket} />
</div>
<div className="board-column">
<div className="board-title">
  <div className="board-title-icon Doing"></div>
  <h4 className="heading-s">Doing</h4>
</div>
<Ticket data={testTicket} />
</div>
<div className="board-column">
<div className="board-title">
  <div className="board-title-icon Done"></div>
  <h4 className="heading-s">Done</h4>
</div>
<Ticket data={testTicket} />
</div> */
}
