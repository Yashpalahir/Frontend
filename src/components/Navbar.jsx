import React, {useState, useEffect, useRef} from 'react'
import './styles/Navbar.css'

const settingsIcon = '/icons/settings.svg'
const chevronIcon = '/icons/chevron-down.svg'

function Navbar({grouping, ordering, setGrouping, setOrdering}) {
    const [isOpen, setIsOpen] = useState(false);
    const button = useRef(null);
    const drop = useRef(null);
    useEffect(() => window.addEventListener('click', ev => {
        if(drop.current && drop.current.contains(ev.target)) {setIsOpen(true)}
        else if(button.current && button.current.contains(ev.target)) {setIsOpen(!isOpen)}
        else {setIsOpen(false)}
    }));

  return (
    <div className='navbar'>
        <div className='display-container' ref={button}> 
            <div className='display'>
                <img src={settingsIcon} />
                <span>Display</span>
                <img src={chevronIcon} />
            </div>
            {isOpen ? <div className='display-settings' ref={drop}>
                <div className='display-setting'>
                    <div>Grouping</div>
                    <select value={grouping} onChange={e => {setGrouping(e.target.value.toLowerCase())}}>
                        <option val='status'>status</option>
                        <option val='user'>user</option>
                        <option val='priority'>priority</option>
                    </select>
                </div>
                <div className='display-setting'>
                    <div>Sorting</div>
                    <select value={ordering} onChange={e => {setOrdering(e.target.value.toLowerCase())}}>
                        <option val='title'>title</option>
                        {grouping !== 'priority' ? <option val='priority'>priority</option> : null}
                    </select>
                </div>
            </div> : null}
        </div>
    </div>
  )
}

export default Navbar